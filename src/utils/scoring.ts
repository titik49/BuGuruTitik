import { StudentAnswer, TkaQuestion } from '../types/assessment';

export type QuestionEvaluation = 'unanswered' | 'partial' | 'correct' | 'incorrect';

export function evaluateQuestion(
  question: TkaQuestion,
  answer: StudentAnswer | undefined
): QuestionEvaluation {
  if (!answer) return 'unanswered';

  if (question.type === 'PG' && answer.type === 'PG') {
    return answer.selected === question.correctOption ? 'correct' : 'incorrect';
  }

  if (question.type === 'PGK_KATEGORI' && answer.type === 'PGK_KATEGORI') {
    const answeredCount = question.statements.filter(
      (s) => answer.selections[s.id] !== undefined
    ).length;

    if (answeredCount === 0) return 'unanswered';
    if (answeredCount < question.statements.length) return 'partial';

    const allCorrect = question.statements.every(
      (s) => answer.selections[s.id] === s.correctAnswer
    );
    return allCorrect ? 'correct' : 'incorrect';
  }

  if (question.type === 'PGK_MCMA' && answer.type === 'PGK_MCMA') {
    if (!answer.submitted) return 'unanswered';

    const correctIds = question.options.filter((o) => o.isCorrect).map((o) => o.id).sort();
    const selectedSorted = [...answer.selectedIds].sort();

    if (correctIds.length !== selectedSorted.length) return 'incorrect';
    return correctIds.every((id, idx) => id === selectedSorted[idx]) ? 'correct' : 'incorrect';
  }

  return 'unanswered';
}

export function isQuestionCompleted(
  question: TkaQuestion,
  answer: StudentAnswer | undefined
): boolean {
  const status = evaluateQuestion(question, answer);
  return status === 'correct' || status === 'incorrect';
}
