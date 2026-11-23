import React from 'react';
import { CheckCircle2, XCircle, MinusCircle, Printer, RotateCcw, ArrowRight } from 'lucide-react';
import { StudentAnswer, TkaQuestion } from '../types/assessment';
import { evaluateQuestion } from '../utils/scoring';

interface AssessmentResultProps {
  studentName: string;
  studentClass: string;
  questions: TkaQuestion[];
  answers: Record<number, StudentAnswer | undefined>;
  onJumpToQuestion: (questionNumber: number) => void;
  onResetAll: () => void;
}

export const AssessmentResult: React.FC<AssessmentResultProps> = ({
  studentName,
  studentClass,
  questions,
  answers,
  onJumpToQuestion,
  onResetAll,
}) => {
  const results = questions.map((q) => ({
    question: q,
    status: evaluateQuestion(q, answers[q.number]),
  }));

  const correctCount = results.filter((r) => r.status === 'correct').length;
  const incorrectCount = results.filter((r) => r.status === 'incorrect').length;
  const unansweredCount = results.filter(
    (r) => r.status === 'unanswered' || r.status === 'partial'
  ).length;
  const score = Math.round((correctCount / questions.length) * 100);

  const byType = (['PG', 'PGK_KATEGORI', 'PGK_MCMA'] as const).map((typeKey) => {
    const group = results.filter((r) => r.question.type === typeKey);
    const groupCorrect = group.filter((r) => r.status === 'correct').length;
    const label =
      typeKey === 'PG'
        ? 'Pilihan Ganda (PG)'
        : typeKey === 'PGK_KATEGORI'
        ? 'PGK Kategori (Benar/Salah)'
        : 'PGK MCMA (Pilihan Jamak)';
    return { typeKey, label, total: group.length, correct: groupCorrect };
  });

  const getFeedbackMessage = (val: number) => {
    if (val >= 85) {
      return 'Luar biasa! Pemahaman materi TKA Matematika kamu sudah sangat mantap.';
    }
    if (val >= 70) {
      return 'Bagus! Terus pelajari kembali pembahasan pada soal yang masih keliru.';
    }
    return 'Tetap semangat belajar! Klik nomor soal di bawah untuk membaca langkah pengerjaannya bersama Bu Guru Titik.';
  };

  return (
    <section className="space-y-6">
      {/* Summary Header Card */}
      <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-200 pb-5">
          <div className="space-y-1">
            <p className="text-xs font-medium text-slate-500">
              SD Negeri 1 Petuguran · Disusun oleh Bu Guru Titik
            </p>
            <h1 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
              Rekap Hasil Asesmen TKA
            </h1>
            <p className="text-sm text-slate-600">
              Siswa: <span className="font-semibold text-slate-900">{studentName || 'Siswa SD Negeri 1 Petuguran'}</span>
              {studentClass ? ` · Kelas ${studentClass}` : ''}
            </p>
          </div>

          <div className="flex items-center gap-2.5 no-print">
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              Cetak Hasil
            </button>
            <button
              type="button"
              onClick={onResetAll}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-sky-700 text-white text-sm font-semibold hover:bg-sky-800 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              Ulangi Asesmen
            </button>
          </div>
        </div>

        {/* 4-column metric strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="rounded-lg border border-slate-200 bg-slate-50/70 p-4">
            <p className="text-xs font-medium text-slate-500">Nilai Akhir</p>
            <p className="mt-1 font-display text-3xl font-bold text-sky-700 tabular-nums">
              {score}
              <span className="text-base font-medium text-slate-400"> / 100</span>
            </p>
          </div>
          <div className="rounded-lg border border-emerald-200 bg-emerald-50/50 p-4">
            <p className="text-xs font-medium text-emerald-700">Jawaban Benar</p>
            <p className="mt-1 font-display text-3xl font-bold text-emerald-700 tabular-nums">
              {correctCount}
              <span className="text-base font-medium text-emerald-600/70"> / {questions.length}</span>
            </p>
          </div>
          <div className="rounded-lg border border-rose-200 bg-rose-50/50 p-4">
            <p className="text-xs font-medium text-rose-700">Kurang Tepat</p>
            <p className="mt-1 font-display text-3xl font-bold text-rose-700 tabular-nums">
              {incorrectCount}
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-slate-50/70 p-4">
            <p className="text-xs font-medium text-slate-500">Belum Selesai</p>
            <p className="mt-1 font-display text-3xl font-bold text-slate-700 tabular-nums">
              {unansweredCount}
            </p>
          </div>
        </div>

        <p className="text-sm text-slate-700 bg-sky-50/70 border border-sky-200 rounded-lg px-4 py-3">
          {getFeedbackMessage(score)}
        </p>

        {/* Breakdown by Bentuk Soal */}
        <div className="space-y-3">
          <h2 className="font-display text-base font-bold text-slate-900">
            Capaian Berdasarkan Bentuk Soal
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {byType.map((item) => (
              <div
                key={item.typeKey}
                className="rounded-lg border border-slate-200 p-4 flex items-center justify-between gap-3"
              >
                <div>
                  <p className="text-sm font-semibold text-slate-800">{item.label}</p>
                  <p className="text-xs text-slate-500 tabular-nums">
                    {item.correct} dari {item.total} soal benar
                  </p>
                </div>
                <span className="font-mono text-sm font-semibold text-slate-900 tabular-nums">
                  {Math.round((item.correct / item.total) * 100)}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Question-by-Question Review Table */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between gap-4">
          <h2 className="font-display text-base font-bold text-slate-900">
            Rincian Jawaban & Pembahasan Per Soal
          </h2>
          <span className="text-xs text-slate-500">Klik baris soal untuk melihat pembahasan</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-left text-slate-600">
                <th className="px-4 py-3 font-semibold w-20">No</th>
                <th className="px-4 py-3 font-semibold">Kompetensi</th>
                <th className="px-4 py-3 font-semibold w-44">Bentuk Soal</th>
                <th className="px-4 py-3 font-semibold w-40">Status</th>
                <th className="px-4 py-3 font-semibold w-32 text-right no-print">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {results.map(({ question, status }) => (
                <tr
                  key={question.number}
                  className="border-b border-slate-100 hover:bg-slate-50/70 transition-colors"
                >
                  <td className="px-4 py-3 font-bold text-slate-900 tabular-nums">
                    {question.number}
                  </td>
                  <td className="px-4 py-3 text-slate-700">{question.competencyShort}</td>
                  <td className="px-4 py-3 text-slate-600">{question.typeLabel}</td>
                  <td className="px-4 py-3">
                    {status === 'correct' && (
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 whitespace-nowrap">
                        <CheckCircle2 className="w-4 h-4" />
                        Benar
                      </span>
                    )}
                    {status === 'incorrect' && (
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-700 whitespace-nowrap">
                        <XCircle className="w-4 h-4" />
                        Kurang Tepat
                      </span>
                    )}
                    {(status === 'unanswered' || status === 'partial') && (
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 whitespace-nowrap">
                        <MinusCircle className="w-4 h-4" />
                        {status === 'partial' ? 'Sebagian' : 'Belum Dijawab'}
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-right no-print">
                    <button
                      type="button"
                      onClick={() => onJumpToQuestion(question.number)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-sky-700 hover:text-sky-900 whitespace-nowrap cursor-pointer"
                    >
                      Lihat Soal
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
