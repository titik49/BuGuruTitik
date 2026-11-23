import React, { useEffect, useMemo, useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Check,
  X,
  LayoutGrid,
  GraduationCap,
  RotateCcw,
} from 'lucide-react';
import { TKA_QUESTIONS } from './data/questions';
import { StudentAnswer } from './types/assessment';
import { evaluateQuestion } from './utils/scoring';
import { QuestionCard } from './components/QuestionCard';
import { AssessmentResult } from './components/AssessmentResult';

type AppView = 'home' | 'quiz' | 'result';
type NavFilter = 'all' | 'unanswered' | 'incorrect';

const STORAGE_KEY = 'tka_sdn1_petuguran_v1';

interface SavedState {
  studentName: string;
  studentClass: string;
  currentNumber: number;
  answers: Record<number, StudentAnswer | undefined>;
}

export default function App() {
  const [view, setView] = useState<AppView>('home');
  const [studentName, setStudentName] = useState('');
  const [studentClass, setStudentClass] = useState('Kelas 6');
  const [currentNumber, setCurrentNumber] = useState(1);
  const [answers, setAnswers] = useState<Record<number, StudentAnswer | undefined>>({});
  const [navFilter, setNavFilter] = useState<NavFilter>('all');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  // Restore saved progress on initial mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as SavedState;
        if (parsed.studentName) setStudentName(parsed.studentName);
        if (parsed.studentClass) setStudentClass(parsed.studentClass);
        if (parsed.currentNumber >= 1 && parsed.currentNumber <= TKA_QUESTIONS.length) {
          setCurrentNumber(parsed.currentNumber);
        }
        if (parsed.answers) setAnswers(parsed.answers);
      }
    } catch {
      // Ignore malformed storage
    }
  }, []);

  // Persist progress
  useEffect(() => {
    try {
      const payload: SavedState = {
        studentName,
        studentClass,
        currentNumber,
        answers,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch {
      // Ignore storage quota errors
    }
  }, [studentName, studentClass, currentNumber, answers]);

  const currentQuestion = useMemo(
    () => TKA_QUESTIONS.find((q) => q.number === currentNumber) ?? TKA_QUESTIONS[0],
    [currentNumber]
  );

  const stats = useMemo(() => {
    let correct = 0;
    let incorrect = 0;
    let completed = 0;

    for (const q of TKA_QUESTIONS) {
      const status = evaluateQuestion(q, answers[q.number]);
      if (status === 'correct') {
        correct++;
        completed++;
      } else if (status === 'incorrect') {
        incorrect++;
        completed++;
      }
    }

    return { correct, incorrect, completed, total: TKA_QUESTIONS.length };
  }, [answers]);

  const filteredNumbers = useMemo(() => {
    return TKA_QUESTIONS.filter((q) => {
      const status = evaluateQuestion(q, answers[q.number]);
      if (navFilter === 'unanswered') {
        return status === 'unanswered' || status === 'partial';
      }
      if (navFilter === 'incorrect') {
        return status === 'incorrect';
      }
      return true;
    }).map((q) => q.number);
  }, [answers, navFilter]);

  const handleAnswerChange = (questionNumber: number, answer: StudentAnswer | undefined) => {
    setAnswers((prev) => {
      const next = { ...prev };
      if (answer === undefined) {
        delete next[questionNumber];
      } else {
        next[questionNumber] = answer;
      }
      return next;
    });
  };

  const handleJumpToQuestion = (num: number) => {
    setCurrentNumber(num);
    setView('quiz');
    setMobileNavOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResetAll = () => {
    setAnswers({});
    setCurrentNumber(1);
    setNavFilter('all');
    setView('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setView('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* 3-Zone Top Navigation Bar */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-xs border-b border-slate-200 no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
          {/* Zone 1: Single-line brand wordmark */}
          <button
            type="button"
            onClick={() => setView('home')}
            className="font-display text-base sm:text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 hover:text-sky-700 transition-colors cursor-pointer"
          >
            TKA SD Negeri 1 Petuguran
          </button>

          {/* Zone 2: Clean single-line nav links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <button
              type="button"
              onClick={() => setView('home')}
              className={`whitespace-nowrap shrink-0 py-1 border-b-2 transition-colors cursor-pointer ${
                view === 'home'
                  ? 'border-sky-700 text-slate-900 font-semibold'
                  : 'border-transparent hover:text-slate-900'
              }`}
            >
              Beranda
            </button>
            <button
              type="button"
              onClick={() => setView('quiz')}
              className={`whitespace-nowrap shrink-0 py-1 border-b-2 transition-colors cursor-pointer ${
                view === 'quiz'
                  ? 'border-sky-700 text-slate-900 font-semibold'
                  : 'border-transparent hover:text-slate-900'
              }`}
            >
              Kerjakan Soal
            </button>
            <button
              type="button"
              onClick={() => setView('result')}
              className={`whitespace-nowrap shrink-0 py-1 border-b-2 transition-colors cursor-pointer ${
                view === 'result'
                  ? 'border-sky-700 text-slate-900 font-semibold'
                  : 'border-transparent hover:text-slate-900'
              }`}
            >
              Rekap Nilai
            </button>
          </nav>

          {/* Zone 3: 1 primary CTA */}
          <div className="flex items-center gap-3 shrink-0">
            {view === 'quiz' ? (
              <button
                type="button"
                onClick={() => {
                  setView('result');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-4 py-2 rounded-lg bg-sky-700 text-white text-xs sm:text-sm font-semibold hover:bg-sky-800 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                Lihat Rekap Nilai
              </button>
            ) : (
              <button
                type="button"
                onClick={() => {
                  setView('quiz');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-4 py-2 rounded-lg bg-sky-700 text-white text-xs sm:text-sm font-semibold hover:bg-sky-800 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                {stats.completed > 0 ? 'Lanjutkan Soal' : 'Mulai Asesmen'}
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {view === 'home' && (
          <div className="max-w-5xl mx-auto space-y-8 py-2 sm:py-6">
            {/* Hero Split Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <p className="text-xs sm:text-sm font-medium text-slate-500">
                    SD Negeri 1 Petuguran · Disusun oleh Bu Guru Titik · Mata Pelajaran Wajib Matematika
                  </p>
                  <h1 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight [text-wrap:balance]">
                    Asesmen Tes Kemampuan Akademik Jenjang SD/MI
                  </h1>
                  <p className="text-base text-slate-600 leading-relaxed">
                    Latihan soal TKA Matematika lengkap sebanyak 30 butir soal sesuai kerangka
                    asesmen Pusmendik Kemendikdasmen, lengkap dengan ilustrasi, tabel Benar/Salah,
                    serta pembahasan detail langkah demi langkah setiap kali kamu memilih jawaban.
                  </p>
                </div>

                {/* Student Identity & Start Form */}
                <form onSubmit={handleStartSubmit} className="space-y-4 pt-2 border-t border-slate-100">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label
                        htmlFor="student-name"
                        className="block text-xs font-semibold text-slate-700 mb-1.5"
                      >
                        Nama Lengkap Siswa
                      </label>
                      <input
                        id="student-name"
                        type="text"
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                        placeholder="Contoh: Siti Rahmawati"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-sky-600"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="student-class"
                        className="block text-xs font-semibold text-slate-700 mb-1.5"
                      >
                        Kelas
                      </label>
                      <input
                        id="student-class"
                        type="text"
                        value={studentClass}
                        onChange={(e) => setStudentClass(e.target.value)}
                        placeholder="Contoh: Kelas 6"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-sky-600"
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-1">
                    <button
                      type="submit"
                      className="px-6 py-3 rounded-lg bg-sky-700 text-white text-sm font-semibold hover:bg-sky-800 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      {stats.completed > 0
                        ? `Lanjutkan Latihan (${stats.completed}/30)`
                        : 'Mulai Kerjakan Soal 1'}
                    </button>
                    {stats.completed > 0 && (
                      <button
                        type="button"
                        onClick={handleResetAll}
                        className="inline-flex items-center gap-1.5 px-4 py-3 rounded-lg border border-slate-300 bg-white text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                      >
                        <RotateCcw className="w-4 h-4" />
                        Mulai Ulang dari Awal
                      </button>
                    )}
                  </div>
                </form>
              </div>

              {/* Right Column: Overview of Assessment Format */}
              <div className="lg:col-span-5 bg-white border border-slate-200 rounded-xl p-6 sm:p-8 flex flex-col justify-between space-y-5">
                <div className="space-y-4">
                  <div className="flex items-center gap-2.5 text-sky-800">
                    <GraduationCap className="w-5 h-5 shrink-0" />
                    <h2 className="font-display text-lg font-bold text-slate-900">
                      Panduan Mengerjakan
                    </h2>
                  </div>

                  <ol className="space-y-3 text-sm text-slate-700 leading-relaxed">
                    <li className="flex gap-3">
                      <span className="font-mono font-semibold text-sky-700 tabular-nums">01.</span>
                      <span>
                        Tersedia <strong>30 soal</strong> asli TKA Matematika SD dengan tiga bentuk
                        soal: Pilihan Ganda (PG), PGK Kategori (Benar/Salah), dan PGK MCMA (lebih
                        dari satu jawaban benar).
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-mono font-semibold text-sky-700 tabular-nums">02.</span>
                      <span>
                        Klik pilihan jawabanmu untuk langsung melihat{' '}
                        <strong>status benar atau salah</strong> beserta{' '}
                        <strong>cara mengerjakan langkah demi langkah</strong>.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-mono font-semibold text-sky-700 tabular-nums">03.</span>
                      <span>
                        Pada soal <strong>PGK MCMA</strong>, centang semua pernyataan yang benar lalu
                        klik tombol <strong>Periksa Jawaban</strong>.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-mono font-semibold text-sky-700 tabular-nums">04.</span>
                      <span>
                        Setelah selesai, buka <strong>Rekap Nilai</strong> untuk melihat skor akhir
                        dan mengulas kembali soal yang masih keliru.
                      </span>
                    </li>
                  </ol>
                </div>

                <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 flex items-center justify-between gap-2">
                  <span>Guru Penyusun: Bu Guru Titik</span>
                  <span>SD Negeri 1 Petuguran</span>
                </div>
              </div>
            </div>

            {/* 4-Column Summary Strip below Hero */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white border border-slate-200 rounded-xl p-4">
                <p className="text-xs text-slate-500">Total Butir Soal</p>
                <p className="mt-1 font-display text-2xl font-bold text-slate-900 tabular-nums">
                  30 Soal
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-4">
                <p className="text-xs text-slate-500">Pilihan Ganda (PG)</p>
                <p className="mt-1 font-display text-2xl font-bold text-slate-900 tabular-nums">
                  17 Soal
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-4">
                <p className="text-xs text-slate-500">PGK Kategori</p>
                <p className="mt-1 font-display text-2xl font-bold text-slate-900 tabular-nums">
                  10 Soal
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-4">
                <p className="text-xs text-slate-500">PGK MCMA</p>
                <p className="mt-1 font-display text-2xl font-bold text-slate-900 tabular-nums">
                  3 Soal
                </p>
              </div>
            </div>
          </div>
        )}

        {view === 'quiz' && (
          <div className="space-y-4">
            {/* Sub-bar: Unboxed Student Metadata + Mobile Navigator Toggle */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-slate-600">
                <span className="font-semibold text-slate-900">
                  {studentName || 'Siswa SD Negeri 1 Petuguran'}
                </span>
                <span aria-hidden="true">·</span>
                <span>{studentClass || 'Kelas 6'}</span>
                <span aria-hidden="true">·</span>
                <span className="tabular-nums">
                  Soal {currentNumber} dari {TKA_QUESTIONS.length}
                </span>
                <span aria-hidden="true">·</span>
                <span className="tabular-nums">
                  Selesai {stats.completed}/{stats.total}
                </span>
              </div>

              <button
                type="button"
                onClick={() => setMobileNavOpen((prev) => !prev)}
                className="lg:hidden inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-slate-300 bg-white text-xs font-semibold text-slate-700 hover:bg-slate-50 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <LayoutGrid className="w-4 h-4" />
                {mobileNavOpen ? 'Tutup Daftar Soal' : 'Daftar Soal (1–30)'}
              </button>
            </div>

            {/* Mobile Collapsible Question Navigator */}
            {mobileNavOpen && (
              <div className="lg:hidden bg-white border border-slate-200 rounded-xl p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <h2 className="font-display text-sm font-bold text-slate-900">
                    Navigasi Nomor Soal
                  </h2>
                  <span className="text-xs text-slate-500 tabular-nums">
                    Benar: {stats.correct} · Salah: {stats.incorrect}
                  </span>
                </div>
                <div className="grid grid-cols-6 sm:grid-cols-10 gap-2">
                  {TKA_QUESTIONS.map((q) => {
                    const status = evaluateQuestion(q, answers[q.number]);
                    const isCurrent = q.number === currentNumber;

                    let btnClass = 'border-slate-200 bg-white text-slate-700';
                    if (status === 'correct') {
                      btnClass = 'border-emerald-400 bg-emerald-50 text-emerald-800';
                    } else if (status === 'incorrect') {
                      btnClass = 'border-rose-400 bg-rose-50 text-rose-800';
                    } else if (status === 'partial') {
                      btnClass = 'border-amber-400 bg-amber-50 text-amber-800';
                    }

                    if (isCurrent) {
                      btnClass += ' ring-2 ring-sky-600 ring-offset-1 font-bold';
                    }

                    return (
                      <button
                        key={q.number}
                        type="button"
                        onClick={() => handleJumpToQuestion(q.number)}
                        className={`h-10 rounded-lg border text-xs font-semibold tabular-nums transition-colors cursor-pointer ${btnClass}`}
                      >
                        {q.number}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 2-Zone Desktop Workspace */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left/Center Zone: Active Question Card & Prev/Next Controls */}
              <div className="lg:col-span-8 xl:col-span-9 space-y-4">
                <QuestionCard
                  question={currentQuestion}
                  answer={answers[currentQuestion.number]}
                  onAnswerChange={handleAnswerChange}
                />

                {/* Bottom Navigation Bar */}
                <div className="bg-white border border-slate-200 rounded-xl px-4 py-3.5 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    disabled={currentNumber === 1}
                    onClick={() => handleJumpToQuestion(currentNumber - 1)}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-slate-300 bg-white text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Sebelumnya
                  </button>

                  <span className="text-xs sm:text-sm font-medium text-slate-500 tabular-nums">
                    {currentNumber} / {TKA_QUESTIONS.length}
                  </span>

                  {currentNumber < TKA_QUESTIONS.length ? (
                    <button
                      type="button"
                      onClick={() => handleJumpToQuestion(currentNumber + 1)}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-sky-700 text-white text-sm font-semibold hover:bg-sky-800 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      Berikutnya
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => {
                        setView('result');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-emerald-700 text-white text-sm font-semibold hover:bg-emerald-800 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      Selesai & Lihat Nilai
                    </button>
                  )}
                </div>
              </div>

              {/* Right Zone: Desktop Sticky Question Navigator */}
              <aside className="hidden lg:block lg:col-span-4 xl:col-span-3 sticky top-22 space-y-4">
                <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-4">
                  <div className="space-y-1">
                    <h2 className="font-display text-base font-bold text-slate-900">
                      Daftar Nomor Soal
                    </h2>
                    <p className="text-xs text-slate-500 tabular-nums">
                      Benar {stats.correct} · Salah {stats.incorrect} · Sisa{' '}
                      {stats.total - stats.completed}
                    </p>
                  </div>

                  {/* Interactive Filter Segmented Control */}
                  <div className="grid grid-cols-3 gap-1 p-1 bg-slate-100 rounded-lg">
                    {(
                      [
                        { id: 'all', label: 'Semua' },
                        { id: 'unanswered', label: 'Belum' },
                        { id: 'incorrect', label: 'Salah' },
                      ] as const
                    ).map((tab) => (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setNavFilter(tab.id)}
                        className={`px-2 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                          navFilter === tab.id
                            ? 'bg-white text-slate-900 shadow-xs'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  {/* 5-Column Question Grid */}
                  {filteredNumbers.length > 0 ? (
                    <div className="grid grid-cols-5 gap-2">
                      {filteredNumbers.map((num) => {
                        const q = TKA_QUESTIONS[num - 1];
                        const status = evaluateQuestion(q, answers[num]);
                        const isCurrent = num === currentNumber;

                        let btnClass =
                          'border-slate-200 bg-white text-slate-700 hover:border-sky-400';
                        if (status === 'correct') {
                          btnClass =
                            'border-emerald-400 bg-emerald-50 text-emerald-800 hover:bg-emerald-100';
                        } else if (status === 'incorrect') {
                          btnClass =
                            'border-rose-400 bg-rose-50 text-rose-800 hover:bg-rose-100';
                        } else if (status === 'partial') {
                          btnClass =
                            'border-amber-400 bg-amber-50 text-amber-800 hover:bg-amber-100';
                        }

                        if (isCurrent) {
                          btnClass += ' ring-2 ring-sky-600 ring-offset-1 font-bold';
                        }

                        return (
                          <button
                            key={num}
                            type="button"
                            onClick={() => handleJumpToQuestion(num)}
                            aria-label={`Buka soal nomor ${num}`}
                            className={`h-10 rounded-lg border text-xs font-semibold tabular-nums flex items-center justify-center gap-0.5 transition-colors cursor-pointer ${btnClass}`}
                          >
                            <span>{num}</span>
                            {status === 'correct' && <Check className="w-3 h-3 shrink-0" />}
                            {status === 'incorrect' && <X className="w-3 h-3 shrink-0" />}
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    <p className="text-xs text-slate-500 py-4 text-center">
                      Tidak ada soal pada kategori ini.
                    </p>
                  )}

                  {/* Legend with text + icons (no hue-only signaling) */}
                  <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs text-slate-600">
                    <div className="flex items-center gap-1.5">
                      <span className="w-4 h-4 rounded border border-emerald-400 bg-emerald-50 flex items-center justify-center text-emerald-700">
                        <Check className="w-2.5 h-2.5" />
                      </span>
                      <span>Benar</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-4 h-4 rounded border border-rose-400 bg-rose-50 flex items-center justify-center text-rose-700">
                        <X className="w-2.5 h-2.5" />
                      </span>
                      <span>Salah</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-4 h-4 rounded border border-slate-300 bg-white" />
                      <span>Belum</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-4 h-4 rounded border border-sky-600 ring-1 ring-sky-600 bg-white" />
                      <span>Aktif</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setView('result');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full py-2.5 px-4 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors cursor-pointer"
                  >
                    Selesai & Lihat Rekap Nilai
                  </button>
                </div>
              </aside>
            </div>
          </div>
        )}

        {view === 'result' && (
          <AssessmentResult
            studentName={studentName}
            studentClass={studentClass}
            questions={TKA_QUESTIONS}
            answers={answers}
            onJumpToQuestion={handleJumpToQuestion}
            onResetAll={handleResetAll}
          />
        )}
      </main>

      {/* Quiet Footer */}
      <footer className="border-t border-slate-200 bg-white mt-auto no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <span>Asesmen TKA Matematika SD · SD Negeri 1 Petuguran</span>
          <span>Disusun oleh Bu Guru Titik · Mengacu Kerangka TKA Pusmendik</span>
        </div>
      </footer>
    </div>
  );
}
