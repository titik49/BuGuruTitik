import React from 'react';

interface FractionProps {
  numerator: string;
  denominator: string;
  whole?: string;
}

export const StackedFraction: React.FC<FractionProps> = ({ numerator, denominator, whole }) => {
  return (
    <span className="inline-flex items-center align-middle mx-0.5 font-sans">
      {whole && <span className="mr-0.5 font-medium">{whole}</span>}
      <span className="inline-flex flex-col items-center justify-center leading-none text-[0.86em]">
        <span className="px-1 pb-[2px] border-b border-current text-center">{numerator}</span>
        <span className="px-1 pt-[2px] text-center">{denominator}</span>
      </span>
    </span>
  );
};

interface MathTextProps {
  text: string;
  className?: string;
}

/**
 * Parses lightweight inline math & formatting tokens:
 * - [[frac:num:den]] -> vertical fraction
 * - [[mixed:whole:num:den]] -> mixed number with vertical fraction
 * - [[sup:base:exp]] -> superscript (e.g., m^3, m^2)
 * - **bold** -> <strong>
 * - \n -> line breaks / bullet rendering handled by caller or split paragraphs
 */
export const MathText: React.FC<MathTextProps> = ({ text, className = '' }) => {
  const tokenRegex = /(\[\[frac:[^:\]]+:[^\]]+\]\]|\[\[mixed:[^:\]]+:[^:\]]+:[^\]]+\]\]|\[\[sup:[^:\]]+:[^\]]+\]\]|\*\*[^*]+\*\*)/g;

  const lines = text.split('\n');

  return (
    <span className={className}>
      {lines.map((line, lineIdx) => {
        const parts = line.split(tokenRegex);
        return (
          <React.Fragment key={lineIdx}>
            {lineIdx > 0 && <br />}
            {parts.map((part, idx) => {
              if (part.startsWith('[[frac:') && part.endsWith(']]')) {
                const [, num, den] = part.slice(2, -2).split(':');
                return <StackedFraction key={idx} numerator={num} denominator={den} />;
              }
              if (part.startsWith('[[mixed:') && part.endsWith(']]')) {
                const [, whole, num, den] = part.slice(2, -2).split(':');
                return <StackedFraction key={idx} whole={whole} numerator={num} denominator={den} />;
              }
              if (part.startsWith('[[sup:') && part.endsWith(']]')) {
                const [, base, exp] = part.slice(2, -2).split(':');
                return (
                  <span key={idx}>
                    {base}
                    <sup className="text-[0.72em] leading-none ml-[1px]">{exp}</sup>
                  </span>
                );
              }
              if (part.startsWith('**') && part.endsWith('**')) {
                return (
                  <strong key={idx} className="font-semibold text-slate-900">
                    {part.slice(2, -2)}
                  </strong>
                );
              }
              return <React.Fragment key={idx}>{part}</React.Fragment>;
            })}
          </React.Fragment>
        );
      })}
    </span>
  );
};
