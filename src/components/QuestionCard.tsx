import React from 'react';
import { CheckCircle2, XCircle, BookOpen, Lightbulb, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { StudentAnswer, TkaQuestion } from '../types/assessment';
import { evaluateQuestion } from '../utils/scoring';
import { MathText } from './MathText';
import { QuestionIllustration } from './QuestionIllustrations';

interface QuestionCardProps {
  question: TkaQuestion;
  answer: StudentAnswer | undefined;
  onAnswerChange: (questionNumber: number, answer: StudentAnswer | undefined) => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  answer,
  onAnswerChange,
}) => {
  const evaluation = evaluateQuestion(question, answer);

  const showFullExplanation =
    (question.type === 'PG' && answer?.type === 'PG') ||
    (question.type === 'PGK_KATEGORI' &&
      answer?.type === 'PGK_KATEGORI' &&
      question.statements.every((s) => answer.selections[s.id] !== undefined)) ||
    (question.type === 'PGK_MCMA' && answer?.type === 'PGK_MCMA' && answer.submitted);

  const renderStemParagraphs = (text: string) => {
    const blocks = text.split('\n\n');
    return blocks.map((block, bIdx) => {
      const lines = block.split('\n');
      const isBulletBlock = lines.every((l) => l.trim().startsWith('•'));
      if (isBulletBlock) {
        return (
          <ul key={bIdx} className="list-disc pl-6 space-y-1.5 text-slate-800 leading-relaxed">
            {lines.map((line, lIdx) => (
              <li key={lIdx}>
                <MathText text={line.replace(/^•\s*/, '')} />
              </li>
            ))}
          </ul>
        );
      }
      return (
        <p key={bIdx} className="text-slate-800 leading-relaxed">
          <MathText text={block} />
        </p>
      );
    });
  };

  const handlePgSelect = (optionId: 'A' | 'B' | 'C' | 'D') => {
    onAnswerChange(question.number, { type: 'PG', selected: optionId });
  };

  const handleKategoriSelect = (statementId: 'A' | 'B' | 'C', value: 'Benar' | 'Salah') => {
    const current =
      answer?.type === 'PGK_KATEGORI' ? answer.selections : {};
    onAnswerChange(question.number, {
      type: 'PGK_KATEGORI',
      selections: { ...current, [statementId]: value },
    });
  };

  const handleMcmaToggle = (optionId: string) => {
    if (answer?.type === 'PGK_MCMA' && answer.submitted) return;
    const currentIds = answer?.type === 'PGK_MCMA' ? answer.selectedIds : [];
    const nextIds = currentIds.includes(optionId)
      ? currentIds.filter((id) => id !== optionId)
      : [...currentIds, optionId];
    onAnswerChange(question.number, {
      type: 'PGK_MCMA',
      selectedIds: nextIds,
      submitted: false,
    });
  };

  const handleMcmaSubmit = () => {
    if (answer?.type !== 'PGK_MCMA' || answer.selectedIds.length === 0) return;
    onAnswerChange(question.number, {
      type: 'PGK_MCMA',
      selectedIds: answer.selectedIds,
      submitted: true,
    });
  };

  const handleResetQuestion = () => {
    onAnswerChange(question.number, undefined);
  };

  return (
    <article className="bg-white border border-slate-200 rounded-xl shadow-xs overflow-hidden">
      {/* Authentic Pusmendik TKA Metadata Table */}
      <div className="border-b border-slate-200 bg-slate-50/70">
        <table className="w-full text-sm border-collapse">
          <tbody>
            <tr className="border-b border-slate-200">
              <th className="w-32 sm:w-40 px-4 py-2.5 text-left font-semibold text-slate-700 bg-slate-100/80 border-r border-slate-200 align-top">
                No Soal
              </th>
              <td className="px-4 py-2.5 font-bold text-slate-900 tabular-nums">
                {question.number}
              </td>
            </tr>
            <tr className="border-b border-slate-200">
              <th className="px-4 py-2.5 text-left font-semibold text-slate-700 bg-slate-100/80 border-r border-slate-200 align-top">
                Kompetensi
              </th>
              <td className="px-4 py-2.5 text-slate-700 leading-snug">
                {question.competency}
              </td>
            </tr>
            <tr>
              <th className="px-4 py-2.5 text-left font-semibold text-slate-700 bg-slate-100/80 border-r border-slate-200 align-top">
                Bentuk Soal
              </th>
              <td className="px-4 py-2.5 text-slate-800 font-medium">
                {question.typeLabel}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Main Question Body */}
      <div className="p-5 sm:p-7 space-y-5">
        {question.passageTitle && (
          <div className="space-y-2 pb-2 border-b border-slate-100">
            <h2 className="text-center font-display text-base sm:text-lg font-bold tracking-wide text-slate-900">
              {question.passageTitle}
            </h2>
            {question.passageIntro && (
              <p className="text-slate-800 leading-relaxed">{question.passageIntro}</p>
            )}
          </div>
        )}

        {question.stem && <div className="space-y-3 text-[15px] sm:text-base">{renderStemParagraphs(question.stem)}</div>}

        {question.illustration && (
          <div className="py-1">
            <QuestionIllustration id={question.illustration} />
          </div>
        )}

        {question.stemAfterIllustration && (
          <div className="space-y-3 text-[15px] sm:text-base">
            {renderStemParagraphs(question.stemAfterIllustration)}
          </div>
        )}

        {/* Interactive Answer Area */}
        <div className="pt-2">
          {/* 1. Pilihan Ganda (PG) */}
          {question.type === 'PG' && (
            <div className="space-y-2.5" role="radiogroup" aria-label={`Pilihan jawaban soal ${question.number}`}>
              {question.options.map((opt) => {
                const isSelected = answer?.type === 'PG' && answer.selected === opt.id;
                const isAnswered = answer?.type === 'PG';
                const isCorrect = opt.id === question.correctOption;

                let containerStyle =
                  'border-slate-200 bg-white hover:border-sky-300 hover:bg-sky-50/40 text-slate-800';
                let circleStyle = 'border-slate-400 text-slate-700 bg-white';

                if (isAnswered) {
                  if (isCorrect) {
                    containerStyle = 'border-emerald-500 bg-emerald-50/70 text-slate-900';
                    circleStyle = 'border-emerald-600 bg-emerald-600 text-white';
                  } else if (isSelected && !isCorrect) {
                    containerStyle = 'border-rose-400 bg-rose-50/70 text-slate-900';
                    circleStyle = 'border-rose-600 bg-rose-600 text-white';
                  } else {
                    containerStyle = 'border-slate-200 bg-slate-50/50 text-slate-500';
                    circleStyle = 'border-slate-300 text-slate-400 bg-white';
                  }
                }

                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => handlePgSelect(opt.id)}
                    className={`w-full min-h-[48px] flex items-center justify-between gap-4 px-4 py-3 rounded-lg border text-left transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 cursor-pointer ${containerStyle}`}
                  >
                    <div className="flex items-center gap-3.5">
                      <span
                        className={`w-7 h-7 rounded-full border flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${circleStyle}`}
                      >
                        {opt.id}
                      </span>
                      <span className="text-[15px] sm:text-base font-medium">
                        <MathText text={opt.text} />
                      </span>
                    </div>

                    {isAnswered && isCorrect && (
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 whitespace-nowrap shrink-0">
                        <CheckCircle2 className="w-4 h-4" />
                        Jawaban Benar
                      </span>
                    )}
                    {isAnswered && isSelected && !isCorrect && (
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-700 whitespace-nowrap shrink-0">
                        <XCircle className="w-4 h-4" />
                        Pilihan Kamu
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          )}

          {/* 2. PGK Kategori (Benar / Salah Table) */}
          {question.type === 'PGK_KATEGORI' && (
            <div className="space-y-3">
              <div className="overflow-x-auto border border-slate-300 rounded-lg">
                <table className="w-full text-sm sm:text-[15px] border-collapse">
                  <thead>
                    <tr className="bg-slate-100 border-b border-slate-300 text-slate-800">
                      <th className="w-11 px-3 py-3 text-center font-semibold border-r border-slate-300">
                        #
                      </th>
                      <th className="px-4 py-3 text-left font-semibold border-r border-slate-300">
                        Pernyataan
                      </th>
                      <th className="w-24 px-3 py-3 text-center font-semibold border-r border-slate-300">
                        Benar
                      </th>
                      <th className="w-24 px-3 py-3 text-center font-semibold">
                        Salah
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {question.statements.map((stmt, idx) => {
                      const selectedVal =
                        answer?.type === 'PGK_KATEGORI' ? answer.selections[stmt.id] : undefined;
                      const isRowAnswered = selectedVal !== undefined;
                      const isRowCorrect = selectedVal === stmt.correctAnswer;

                      return (
                        <React.Fragment key={stmt.id}>
                          <tr
                            className={`border-b border-slate-200 ${
                              isRowAnswered
                                ? isRowCorrect
                                  ? 'bg-emerald-50/40'
                                  : 'bg-rose-50/40'
                                : idx % 2 === 1
                                ? 'bg-slate-50/40'
                                : 'bg-white'
                            }`}
                          >
                            <td className="px-3 py-3.5 text-center font-semibold text-slate-800 border-r border-slate-200 align-middle">
                              {stmt.id}.
                            </td>
                            <td className="px-4 py-3.5 text-slate-800 border-r border-slate-200 leading-relaxed">
                              <MathText text={stmt.text} />
                            </td>
                            {(['Benar', 'Salah'] as const).map((choice, cIdx) => {
                              const active = selectedVal === choice;
                              const isActualCorrect = stmt.correctAnswer === choice;

                              let ringClass = 'border-slate-400 bg-white hover:border-sky-600';
                              if (active) {
                                ringClass = isRowCorrect
                                  ? 'border-emerald-600 bg-emerald-600'
                                  : 'border-rose-600 bg-rose-600';
                              } else if (isRowAnswered && isActualCorrect) {
                                ringClass = 'border-emerald-500 bg-emerald-100';
                              }

                              return (
                                <td
                                  key={choice}
                                  className={`px-3 py-3 text-center align-middle ${
                                    cIdx === 0 ? 'border-r border-slate-200' : ''
                                  }`}
                                >
                                  <button
                                    type="button"
                                    onClick={() => handleKategoriSelect(stmt.id, choice)}
                                    aria-label={`Pernyataan ${stmt.id}: ${choice}`}
                                    aria-pressed={active}
                                    className="w-11 h-11 mx-auto flex items-center justify-center rounded-lg hover:bg-sky-50/70 transition-colors focus-visible:outline-2 focus-visible:outline-sky-600 cursor-pointer"
                                  >
                                    <span
                                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${ringClass}`}
                                    >
                                      {active && <span className="w-2 h-2 rounded-full bg-white" />}
                                    </span>
                                  </button>
                                </td>
                              );
                            })}
                          </tr>

                          {/* Instant Per-Row Mini Explanation right when student clicks Benar/Salah */}
                          {isRowAnswered && (
                            <tr className="border-b border-slate-200 bg-sky-50/50">
                              <td colSpan={4} className="px-4 py-3 text-sm">
                                <div className="flex items-start gap-2.5">
                                  {isRowCorrect ? (
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                  ) : (
                                    <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                                  )}
                                  <div className="space-y-1 text-slate-700">
                                    <p className="font-semibold text-slate-900">
                                      Pernyataan {stmt.id}:{' '}
                                      <span className={isRowCorrect ? 'text-emerald-700' : 'text-rose-700'}>
                                        {isRowCorrect
                                          ? `Tepat (${stmt.correctAnswer})`
                                          : `Kurang Tepat — Seharusnya ${stmt.correctAnswer}`}
                                      </span>
                                    </p>
                                    <p className="leading-relaxed">
                                      <MathText text={stmt.explanation} />
                                    </p>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-500">
                Klik bulatan pada kolom Benar atau Salah di setiap baris untuk langsung melihat pembahasannya.
              </p>
            </div>
          )}

          {/* 3. PGK MCMA (Checkboxes — Multiple Correct Answers) */}
          {question.type === 'PGK_MCMA' && (
            <div className="space-y-3">
              <div className="space-y-2.5">
                {question.options.map((opt) => {
                  const selectedIds =
                    answer?.type === 'PGK_MCMA' ? answer.selectedIds : [];
                  const isSubmitted =
                    answer?.type === 'PGK_MCMA' && answer.submitted;
                  const isChecked = selectedIds.includes(opt.id);

                  let boxStyle =
                    'border-slate-200 bg-white hover:border-sky-300 hover:bg-sky-50/40';
                  let checkStyle = isChecked
                    ? 'border-sky-600 bg-sky-600 text-white'
                    : 'border-slate-400 bg-white';

                  if (isSubmitted) {
                    if (opt.isCorrect) {
                      boxStyle = 'border-emerald-400 bg-emerald-50/60';
                      checkStyle = isChecked
                        ? 'border-emerald-600 bg-emerald-600 text-white'
                        : 'border-emerald-500 bg-emerald-100 text-emerald-700';
                    } else if (isChecked && !opt.isCorrect) {
                      boxStyle = 'border-rose-400 bg-rose-50/60';
                      checkStyle = 'border-rose-600 bg-rose-600 text-white';
                    } else {
                      boxStyle = 'border-slate-200 bg-slate-50/50';
                    }
                  }

                  return (
                    <div
                      key={opt.id}
                      className={`rounded-lg border transition-colors ${boxStyle}`}
                    >
                      <button
                        type="button"
                        onClick={() => handleMcmaToggle(opt.id)}
                        disabled={isSubmitted}
                        className="w-full min-h-[48px] flex items-center justify-between gap-4 px-4 py-3 text-left focus-visible:outline-2 focus-visible:outline-sky-600 cursor-pointer disabled:cursor-default"
                      >
                        <div className="flex items-center gap-3.5">
                          <span
                            className={`w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 transition-colors ${checkStyle}`}
                          >
                            {isChecked && (
                              <svg viewBox="0 0 12 10" className="w-3 h-3 fill-none stroke-current stroke-2">
                                <polyline points="1.5 5.5 4.5 8.5 10.5 1.5" />
                              </svg>
                            )}
                          </span>
                          <span className="text-[15px] sm:text-base font-medium text-slate-800">
                            <MathText text={opt.text} />
                          </span>
                        </div>

                        {isSubmitted && opt.isCorrect && (
                          <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 whitespace-nowrap shrink-0">
                            <CheckCircle2 className="w-4 h-4" />
                            Pernyataan Benar
                          </span>
                        )}
                        {isSubmitted && isChecked && !opt.isCorrect && (
                          <span className="inline-flex items-center gap-1 text-xs font-semibold text-rose-700 whitespace-nowrap shrink-0">
                            <XCircle className="w-4 h-4" />
                            Kurang Tepat
                          </span>
                        )}
                      </button>

                      {isSubmitted && (
                        <div className="px-4 pb-3 pt-1 border-t border-slate-200/70 text-sm text-slate-700 leading-relaxed">
                          <MathText text={opt.explanation} />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {!(answer?.type === 'PGK_MCMA' && answer.submitted) && (
                <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                  <span className="text-xs text-slate-500">
                    Centang semua jawaban yang benar, lalu klik tombol periksa untuk melihat pembahasannya.
                  </span>
                  <button
                    type="button"
                    onClick={handleMcmaSubmit}
                    disabled={
                      !(answer?.type === 'PGK_MCMA' && answer.selectedIds.length > 0)
                    }
                    className="px-5 py-2.5 rounded-lg bg-sky-700 text-white text-sm font-semibold hover:bg-sky-800 disabled:bg-slate-200 disabled:text-slate-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer disabled:cursor-not-allowed"
                  >
                    Periksa Jawaban
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Detailed Step-by-Step Explanation Panel */}
        <AnimatePresence initial={false}>
          {showFullExplanation && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 rounded-xl border border-sky-200 bg-sky-50/60 p-5 sm:p-6 space-y-4"
            >
              {/* Result Status Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-sky-200/80">
                <div className="flex items-center gap-2.5">
                  {evaluation === 'correct' ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      <span className="font-display font-bold text-base text-emerald-800">
                        Hebat! Jawaban Kamu Benar
                      </span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                      <span className="font-display font-bold text-base text-rose-800">
                        Belum Tepat — Yuk Pelajari Caranya!
                      </span>
                    </>
                  )}
                </div>

                <button
                  type="button"
                  onClick={handleResetQuestion}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 px-2.5 py-1.5 rounded-md hover:bg-white/80 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Ulangi Soal Ini
                </button>
              </div>

              {/* Official Answer Key */}
              <div className="flex items-center gap-2 text-sm font-semibold text-sky-950">
                <BookOpen className="w-4 h-4 text-sky-700 shrink-0" />
                <span>
                  <MathText text={question.keySummary} />
                </span>
              </div>

              {/* Step-by-Step Solution */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-slate-900">
                  Pembahasan Detail & Cara Mengerjakan
                </h3>
                <div className="space-y-2.5">
                  {question.steps.map((step, sIdx) => (
                    <div
                      key={sIdx}
                      className="rounded-lg bg-white border border-sky-100 p-3.5 sm:p-4 space-y-1.5"
                    >
                      <p className="text-sm font-semibold text-sky-900">{step.title}</p>
                      <div className="text-sm text-slate-700 leading-relaxed">
                        <MathText text={step.content} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {question.tip && (
                <div className="flex items-start gap-2.5 rounded-lg bg-amber-50 border border-amber-200/80 p-3.5 text-sm text-amber-950">
                  <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Tips Bu Guru Titik: </span>
                    <MathText text={question.tip} />
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </article>
  );
};
