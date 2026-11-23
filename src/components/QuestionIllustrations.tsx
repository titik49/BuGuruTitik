import React from 'react';
import { IllustrationId } from '../types/assessment';

interface QuestionIllustrationProps {
  id: IllustrationId;
}

export const QuestionIllustration: React.FC<QuestionIllustrationProps> = ({ id }) => {
  switch (id) {
    case 'dice':
      return <DiceIllustration />;
    case 'library-chart':
      return <LibraryChartIllustration />;
    case 'book-pictogram':
      return <BookPictogramIllustration />;
    case 'zoo-signpost':
      return <ZooSignpostIllustration />;
    case 'birthday-cake':
      return <BirthdayCakeIllustration />;
    case 'pak-boni-land':
      return <PakBoniLandIllustration />;
    case 'city-park-map':
      return <CityParkMapIllustration />;
    case 'reading-hobby':
      return <ReadingHobbyIllustration />;
    case 'nutrition-chart-kids':
      return <NutritionChartKidsIllustration />;
    case 'nutrition-chart-pregnant':
      return (
        <div className="space-y-5">
          <NutritionChartKidsIllustration />
          <PregnantMotherChartIllustration />
        </div>
      );
    default:
      return null;
  }
};

/* No. 4: Isometric 3D Die (Top: 4, Front-Left: 1, Front-Right: 2) */
const DiceIllustration: React.FC = () => (
  <div className="flex justify-center py-2">
    <svg
      viewBox="0 0 220 220"
      className="w-44 h-44 sm:w-48 sm:h-48"
      role="img"
      aria-label="Dadu dengan 4 titik di sisi atas, 1 titik di sisi kiri depan, dan 2 titik di sisi kanan depan"
    >
      {/* Cube faces */}
      {/* Top face */}
      <polygon
        points="110,24 188,68 110,112 32,68"
        fill="#FFFFFF"
        stroke="#0F172A"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      {/* Left face */}
      <polygon
        points="32,68 110,112 110,198 32,154"
        fill="#F8FAFC"
        stroke="#0F172A"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      {/* Right face */}
      <polygon
        points="110,112 188,68 188,154 110,198"
        fill="#F1F5F9"
        stroke="#0F172A"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />

      {/* Top face: 4 dots */}
      <ellipse cx="110" cy="48" rx="8.5" ry="5.5" fill="#0F172A" />
      <ellipse cx="72" cy="68" rx="8.5" ry="5.5" fill="#0F172A" />
      <ellipse cx="148" cy="68" rx="8.5" ry="5.5" fill="#0F172A" />
      <ellipse cx="110" cy="88" rx="8.5" ry="5.5" fill="#0F172A" />

      {/* Front-left face: 1 dot */}
      <ellipse cx="71" cy="133" rx="7.5" ry="9" transform="rotate(-25 71 133)" fill="#0F172A" />

      {/* Front-right face: 2 dots */}
      <ellipse cx="132" cy="148" rx="7.5" ry="9" transform="rotate(25 132 148)" fill="#0F172A" />
      <ellipse cx="166" cy="117" rx="7.5" ry="9" transform="rotate(25 166 117)" fill="#0F172A" />
    </svg>
  </div>
);

/* No. 6: Bar Chart Pengunjung Perpustakaan SD Harapan */
const LibraryChartIllustration: React.FC = () => {
  const data = [
    { day: 'Senin', value: 15 },
    { day: 'Selasa', value: 18 },
    { day: 'Rabu', value: 20 },
    { day: 'Kamis', value: 24 },
    { day: 'Jumat', value: 20 },
  ];

  const chartLeft = 72;
  const chartTop = 50;
  const chartWidth = 440;
  const chartHeight = 210;
  const maxVal = 30;

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[560px] rounded-lg border border-slate-200 bg-white p-3 sm:p-4">
        <svg
          viewBox="0 0 540 310"
          className="w-full h-auto"
          role="img"
          aria-label="Diagram batang Data Pengunjung Perpustakaan SD Harapan: Senin 15, Selasa 18, Rabu 20, Kamis 24, Jumat 20"
        >
          <text
            x="275"
            y="24"
            textAnchor="middle"
            className="fill-slate-800 text-[15px] font-bold"
            style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}
          >
            Data Pengunjung Perpustakaan SD Harapan
          </text>

          {/* Y-axis label */}
          <text
            x="20"
            y={chartTop + chartHeight / 2}
            textAnchor="middle"
            transform={`rotate(-90 20 ${chartTop + chartHeight / 2})`}
            className="fill-slate-700 text-[12px] font-medium"
          >
            Banyak Pengunjung (orang)
          </text>

          {/* Horizontal gridlines (every 1 minor, every 5 major) */}
          {Array.from({ length: maxVal + 1 }).map((_, val) => {
            const y = chartTop + chartHeight - (val / maxVal) * chartHeight;
            const isMajor = val % 5 === 0;
            return (
              <g key={val}>
                <line
                  x1={chartLeft}
                  y1={y}
                  x2={chartLeft + chartWidth}
                  y2={y}
                  stroke={isMajor ? '#CBD5E1' : '#F1F5F9'}
                  strokeWidth={isMajor ? '1.2' : '0.8'}
                />
                {isMajor && (
                  <text
                    x={chartLeft - 10}
                    y={y + 4}
                    textAnchor="end"
                    className="fill-slate-600 text-[11px]"
                    style={{ fontVariantNumeric: 'tabular-nums' }}
                  >
                    {val}
                  </text>
                )}
              </g>
            );
          })}

          {/* Axes */}
          <line
            x1={chartLeft}
            y1={chartTop}
            x2={chartLeft}
            y2={chartTop + chartHeight}
            stroke="#94A3B8"
            strokeWidth="1.2"
          />
          <line
            x1={chartLeft}
            y1={chartTop + chartHeight}
            x2={chartLeft + chartWidth}
            y2={chartTop + chartHeight}
            stroke="#94A3B8"
            strokeWidth="1.2"
          />

          {/* Bars */}
          {data.map((item, idx) => {
            const slotW = chartWidth / data.length;
            const barW = 46;
            const x = chartLeft + idx * slotW + (slotW - barW) / 2;
            const barH = (item.value / maxVal) * chartHeight;
            const y = chartTop + chartHeight - barH;
            return (
              <g key={item.day}>
                <rect x={x} y={y} width={barW} height={barH} fill="#2E5AAC" rx="1" />
                <text
                  x={x + barW / 2}
                  y={chartTop + chartHeight + 18}
                  textAnchor="middle"
                  className="fill-slate-700 text-[12px] font-medium"
                >
                  {item.day}
                </text>
              </g>
            );
          })}

          <text
            x={chartLeft + chartWidth / 2}
            y="300"
            textAnchor="middle"
            className="fill-slate-700 text-[12px] font-medium"
          >
            Hari
          </text>
        </svg>
      </div>
    </div>
  );
};

/* Mini 3D Book Icon for Pictogram */
const PictogramBookIcon: React.FC = () => (
  <svg viewBox="0 0 36 42" className="w-7 h-8 sm:w-8 sm:h-9 shrink-0" aria-hidden="true">
    {/* Back cover */}
    <polygon points="8,4 32,8 32,36 8,32" fill="#475569" stroke="#1E293B" strokeWidth="1.5" />
    {/* Pages */}
    <polygon points="4,8 28,12 28,39 4,35" fill="#F8FAFC" stroke="#1E293B" strokeWidth="1.3" />
    {/* Front cover */}
    <polygon points="4,8 8,4 32,8 28,12" fill="#94A3B8" stroke="#1E293B" strokeWidth="1.2" />
    <polygon points="4,10 26,14 26,38 4,34" fill="#64748B" stroke="#1E293B" strokeWidth="1.4" />
    {/* Spine highlight */}
    <line x1="4" y1="8" x2="4" y2="35" stroke="#1E293B" strokeWidth="1.8" />
  </svg>
);

/* No. 7: Piktogram Data Jumlah Buku yang Dibaca */
const BookPictogramIllustration: React.FC = () => {
  const rows = [
    { name: 'Rina', count: 5 },
    { name: 'Dika', count: 4 },
    { name: 'Siti', count: 3 },
  ];

  return (
    <div className="flex flex-col items-center py-2">
      <p className="text-sm font-bold text-slate-800 mb-3 text-center">
        Piktogram Data Jumlah Buku yang Dibaca
      </p>
      <div className="border-2 border-slate-700 bg-white overflow-hidden w-full max-w-[360px]">
        {rows.map((row, idx) => (
          <div
            key={row.name}
            className={`grid grid-cols-[88px_1fr] items-center ${
              idx !== rows.length - 1 ? 'border-b-2 border-slate-700' : ''
            }`}
          >
            <div className="px-4 py-3.5 text-center font-semibold text-slate-800 border-r-2 border-slate-700">
              {row.name}
            </div>
            <div className="px-4 py-2.5 flex items-center gap-2 flex-wrap">
              {Array.from({ length: row.count }).map((_, i) => (
                <PictogramBookIcon key={i} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-slate-800">
        <PictogramBookIcon />
        <span>= 2 buku</span>
      </div>
    </div>
  );
};

/* No. 15: Papan Petunjuk Jalan Kebun Binatang */
const ZooSignpostIllustration: React.FC = () => (
  <div className="flex justify-center py-2">
    <svg
      viewBox="0 0 260 245"
      className="w-56 h-auto rounded-lg border border-amber-200/70 bg-[#FAF6F0]"
      role="img"
      aria-label="Papan petunjuk kebun binatang: Jerapah 75 m ke kiri, Capybara 50 m ke kanan, Zebra 60 m ke kiri, Kanguru 35 m ke kanan"
    >
      {/* Wooden vertical pole */}
      <rect x="122" y="16" width="16" height="222" rx="3" fill="#B48456" stroke="#78512A" strokeWidth="1.5" />

      {/* Sign 1: Jerapah 75 m (pointing left) */}
      <g>
        <polygon
          points="24,42 52,22 145,22 145,62 52,62"
          fill="#E5BF8D"
          stroke="#78512A"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <text x="94" y="40" textAnchor="middle" className="fill-slate-900 text-[13px] font-bold">
          Jerapah
        </text>
        <text x="94" y="55" textAnchor="middle" className="fill-slate-800 text-[11px] font-semibold">
          75 m
        </text>
      </g>

      {/* Sign 2: Capybara 50 m (pointing right) */}
      <g>
        <polygon
          points="115,72 208,72 236,92 208,112 115,112"
          fill="#DCB07A"
          stroke="#78512A"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <text x="166" y="90" textAnchor="middle" className="fill-slate-900 text-[13px] font-bold">
          Capybara
        </text>
        <text x="166" y="105" textAnchor="middle" className="fill-slate-800 text-[11px] font-semibold">
          50 m
        </text>
      </g>

      {/* Sign 3: Zebra 60 m (pointing left) */}
      <g>
        <polygon
          points="24,140 52,120 145,120 145,160 52,160"
          fill="#E5BF8D"
          stroke="#78512A"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <text x="94" y="138" textAnchor="middle" className="fill-slate-900 text-[13px] font-bold">
          Zebra
        </text>
        <text x="94" y="153" textAnchor="middle" className="fill-slate-800 text-[11px] font-semibold">
          60 m
        </text>
      </g>

      {/* Sign 4: Kanguru 35 m (pointing right) */}
      <g>
        <polygon
          points="115,168 208,168 236,188 208,208 115,208"
          fill="#DCB07A"
          stroke="#78512A"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <text x="166" y="186" textAnchor="middle" className="fill-slate-900 text-[13px] font-bold">
          Kanguru
        </text>
        <text x="166" y="201" textAnchor="middle" className="fill-slate-800 text-[11px] font-semibold">
          35 m
        </text>
      </g>
    </svg>
  </div>
);

/* No. 19: Kue Ulang Tahun Desti (8 potongan: 2 cokelat, 6 kuning) */
const BirthdayCakeIllustration: React.FC = () => {
  const cx = 120;
  const cy = 108;
  const rx = 74;
  const ry = 56;
  const thickness = 24;

  // 8 equal slices starting from -112.5 deg so top slice is centered at -90 deg (12 o'clock)
  // Let's place chocolate at top-left (-157.5 to -112.5) and top-right (-67.5 to -22.5)
  const slices = Array.from({ length: 8 }).map((_, i) => {
    const startDeg = -112.5 + i * 45;
    const endDeg = startDeg + 45;
    const isChocolate = i === 1 || i === 7; // top-right (1) and top-left (7) around top yellow (0)
    return { i, startDeg, endDeg, isChocolate };
  });

  const toRad = (deg: number) => (deg * Math.PI) / 180;

  return (
    <div className="flex justify-center py-2">
      <svg
        viewBox="0 0 240 215"
        className="w-52 h-auto rounded-lg bg-[#F5EFE6] border border-amber-200/60"
        role="img"
        aria-label="Satu loyang kue bundar dipotong menjadi 8 bagian sama besar, terdiri dari 2 potong kue berwarna cokelat dan 6 potong kue berwarna kuning"
      >
        {/* Plate shadow & ceramic plate */}
        <ellipse cx={cx} cy={cy + 26} rx={104} ry={78} fill="#E5DDD0" />
        <ellipse cx={cx} cy={cy + 22} rx={100} ry={75} fill="#FFFFFF" stroke="#D97706" strokeWidth="1.8" />
        <ellipse cx={cx} cy={cy + 22} rx={90} ry={66} fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />

        {/* Cake bottom cylinder side for 3D depth */}
        <path
          d={`M ${cx - rx} ${cy} L ${cx - rx} ${cy + thickness} A ${rx} ${ry} 0 0 0 ${cx + rx} ${cy + thickness} L ${cx + rx} ${cy} Z`}
          fill="#EAB308"
          stroke="#B45309"
          strokeWidth="1"
        />

        {/* Subtle vertical cut lines on front side of cake */}
        {[22.5, 67.5, 112.5, 157.5].map((deg) => {
          const x = cx + rx * Math.cos(toRad(deg));
          const y = cy + ry * Math.sin(toRad(deg));
          return (
            <line
              key={deg}
              x1={x}
              y1={y}
              x2={x}
              y2={y + thickness}
              stroke="#92400E"
              strokeWidth="1.2"
              opacity="0.7"
            />
          );
        })}

        {/* Top 8 slices */}
        {slices.map(({ i, startDeg, endDeg, isChocolate }) => {
          const x1 = cx + rx * Math.cos(toRad(startDeg));
          const y1 = cy + ry * Math.sin(toRad(startDeg));
          const x2 = cx + rx * Math.cos(toRad(endDeg));
          const y2 = cy + ry * Math.sin(toRad(endDeg));

          return (
            <path
              key={i}
              d={`M ${cx} ${cy} L ${x1} ${y1} A ${rx} ${ry} 0 0 1 ${x2} ${y2} Z`}
              fill={isChocolate ? '#3B2314' : '#FDE047'}
              stroke={isChocolate ? '#1F1108' : '#CA8A04'}
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
          );
        })}

        {/* Plate rim highlight */}
        <circle cx={cx} cy={cy} r="2.2" fill="#78350F" opacity="0.5" />
      </svg>
    </div>
  );
};

/* No. 20: Bidang Tanah Pak Boni (6m, 8m, 14m) */
const PakBoniLandIllustration: React.FC = () => (
  <div className="flex justify-center py-2">
    <svg
      viewBox="0 0 380 205"
      className="w-full max-w-[360px] h-auto"
      role="img"
      aria-label="Bangun datar gabungan bidang tanah Pak Boni dengan sisi tegak kiri 8 m, sisi atas kecil 6 m, dan bagian bawah kanan 14 m"
    >
      {/* Main polygon outline:
          Bottom-left: (50, 175)
          Bottom-right: (320, 175) -> width = 22m scaled (1m = 12px? Let's use 12px/m: 8m = 96px, 6m = 72px, 14m = 168px; total width = 96+168 = 264px -> x from 58 to 322)
          Let's scale 1m = 11px:
          left x = 62
          step x = 62 + 88 = 150 (8m)
          top-right of 6m = 150 + 66 = 216 (6m)
          right x = 150 + 154 = 304 (14m from step x!)
          bottom y = 180
          dashed y = 180 - 88 = 92 (8m height)
          top y = 92 - 66 = 26 (6m height)
      */}
      <polygon
        points="62,180 62,92 150,92 150,26 216,26 304,92 304,180"
        fill="#FFFFFF"
        stroke="#0F172A"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />

      {/* Dashed horizontal line across internal seam */}
      <line x1="62" y1="92" x2="304" y2="92" stroke="#0F172A" strokeWidth="2.5" strokeDasharray="7 5" />

      {/* Tick marks | (6 m) on top edge and vertical step */}
      {/* Top 6m tick mark */}
      <line x1="183" y1="19" x2="183" y2="33" stroke="#0F172A" strokeWidth="2.5" />
      {/* Vertical step tick mark */}
      <line x1="143" y1="59" x2="157" y2="59" stroke="#0F172A" strokeWidth="2.5" />

      {/* Double tick marks || (8 m) on left vertical edge & left dashed edge */}
      <line x1="55" y1="133" x2="69" y2="133" stroke="#0F172A" strokeWidth="2.3" />
      <line x1="55" y1="139" x2="69" y2="139" stroke="#0F172A" strokeWidth="2.3" />

      <line x1="103" y1="85" x2="103" y2="99" stroke="#0F172A" strokeWidth="2.3" />
      <line x1="109" y1="85" x2="109" y2="99" stroke="#0F172A" strokeWidth="2.3" />

      {/* Curly brace under the 14 m segment (from x=150 to x=304) */}
      <path
        d="M 150 98 Q 150 109 162 109 L 215 109 Q 227 109 227 119 Q 227 109 239 109 L 292 109 Q 304 109 304 98"
        fill="none"
        stroke="#0F172A"
        strokeWidth="2.2"
      />

      {/* Dimension labels */}
      <text x="183" y="14" textAnchor="middle" className="fill-slate-900 text-[15px] font-semibold">
        6 m
      </text>
      <text x="34" y="142" textAnchor="middle" className="fill-slate-900 text-[15px] font-semibold">
        8 m
      </text>
      <text x="227" y="140" textAnchor="middle" className="fill-slate-900 text-[15px] font-semibold">
        14 m
      </text>
    </svg>
  </div>
);

/* Top-down Car SVG helper */
const TopDownCar: React.FC<{ x: number; y: number }> = ({ x, y }) => (
  <g transform={`translate(${x}, ${y})`}>
    <rect x="0" y="0" width="24" height="12" rx="3" fill="#475569" stroke="#1E293B" strokeWidth="1" />
    <rect x="5" y="1.5" width="12" height="9" rx="1.5" fill="#CBD5E1" />
    <rect x="7" y="2.5" width="7" height="7" rx="1" fill="#64748B" />
  </g>
);

/* Top-down Motorcycle SVG helper */
const TopDownMotorcycle: React.FC<{ x: number; y: number }> = ({ x, y }) => (
  <g transform={`translate(${x}, ${y})`}>
    <rect x="2.5" y="0" width="3" height="15" rx="1.2" fill="#334155" />
    <rect x="1.5" y="4" width="5" height="6" rx="1.5" fill="#DC2626" />
    <line x1="0" y1="3" x2="8" y2="3" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" />
  </g>
);

/* Tree SVG helper */
const ParkTree: React.FC<{ x: number; y: number }> = ({ x, y }) => (
  <g transform={`translate(${x}, ${y})`}>
    <rect x="10" y="24" width="5" height="10" fill="#78350F" />
    <circle cx="12.5" cy="14" r="10" fill="#15803D" />
    <circle cx="7" cy="18" r="7.5" fill="#16A34A" />
    <circle cx="18" cy="18" r="7.5" fill="#16A34A" />
    <circle cx="12.5" cy="10" r="7" fill="#22C55E" />
  </g>
);

/* No. 25 & 26: Denah Taman Kota */
const CityParkMapIllustration: React.FC = () => (
  <div className="flex justify-center py-1">
    <svg
      viewBox="0 0 460 365"
      className="w-full max-w-[460px] h-auto rounded-lg border border-slate-200"
      role="img"
      aria-label="Denah Taman Kota dengan area parkir mobil lebar 4 m dan panjang 24 m lebih besar daripada lebarnya berisi 5 mobil, air mancur di tengah, dan parkir motor berukuran 10 m kali 2 baris masing-masing 2 m"
    >
      {/* Green grass background */}
      <rect x="0" y="0" width="460" height="365" fill="#92D050" />

      {/* Parkir mobil (left grey strip) */}
      <rect x="18" y="28" width="44" height="288" fill="#A6A6A6" />
      <text x="40" y="22" textAnchor="middle" className="fill-slate-900 text-[12px] font-bold">
        4 m
      </text>
      <text
        x="12"
        y="172"
        textAnchor="middle"
        transform="rotate(-90 12 172)"
        className="fill-slate-900 text-[11px] font-bold"
      >
        24 m lebih besar daripada lebarnya
      </text>

      {/* 5 Cars inside Parkir Mobil */}
      <TopDownCar x={28} y={36} />
      <TopDownCar x={28} y={102} />
      <TopDownCar x={28} y={168} />
      <TopDownCar x={28} y={232} />
      <TopDownCar x={28} y={276} />

      {/* Parkir mobil label + arrow */}
      <text x="92" y="136" className="fill-slate-900 text-[12px] font-bold" transform="rotate(90 92 136)">
        Parkir mobil
      </text>
      <path d="M 88 158 L 68 158" stroke="#0F172A" strokeWidth="1.5" />
      <polygon points="68,158 74,154 74,162" fill="#0F172A" />

      {/* Viewing area triangle: Taman untuk melihat air mancur */}
      <polygon points="248,55 182,190 314,190" fill="#B6B6B6" />
      <text x="275" y="75" className="fill-slate-900 text-[11px] font-semibold">
        Taman untuk
      </text>
      <text x="275" y="89" className="fill-slate-900 text-[11px] font-semibold">
        melihat air
      </text>
      <text x="275" y="103" className="fill-slate-900 text-[11px] font-semibold">
        mancur
      </text>
      <path d="M 272 80 L 254 92" stroke="#0F172A" strokeWidth="1.4" />
      <polygon points="251,94 259,93 255,87" fill="#0F172A" />

      {/* Olive ring & Fountain (Air mancur) */}
      <circle cx="248" cy="196" r="64" fill="#6F8C30" />
      <circle cx="248" cy="196" r="46" fill="#D9E2EC" stroke="#475569" strokeWidth="1.5" />
      <circle cx="248" cy="196" r="39" fill="#60A5FA" />
      {/* Fountain water arcs */}
      <path d="M 248 205 L 248 175" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
      <path d="M 248 180 Q 235 168 228 192" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M 248 180 Q 261 168 268 192" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
      <rect x="220" y="212" width="56" height="16" rx="2" fill="#6F8C30" opacity="0.9" />
      <text x="248" y="224" textAnchor="middle" className="fill-slate-950 text-[11px] font-bold">
        Air mancur
      </text>

      {/* Parkir motor (bottom grey strip: 10m x (2m + 2m)) */}
      <rect x="172" y="286" width="152" height="22" fill="#A6A6A6" />
      <rect x="172" y="314" width="152" height="22" fill="#A6A6A6" />
      <text x="248" y="281" textAnchor="middle" className="fill-slate-900 text-[11px] font-bold">
        10 m
      </text>
      <text x="330" y="301" className="fill-slate-900 text-[11px] font-bold">
        2 m
      </text>
      <text x="330" y="329" className="fill-slate-900 text-[11px] font-bold">
        2 m
      </text>

      {/* Motorcycles top row: 4 */}
      {[196, 222, 250, 278].map((mx) => (
        <TopDownMotorcycle key={`top-${mx}`} x={mx} y={289} />
      ))}

      {/* Motorcycles bottom row: 4 left + 3 right = 7 */}
      {[178, 192, 206, 220, 286, 300, 314].map((mx) => (
        <TopDownMotorcycle key={`bot-${mx}`} x={mx} y={317} />
      ))}

      {/* Parkir motor label */}
      <text x="190" y="355" textAnchor="middle" className="fill-slate-900 text-[12px] font-bold">
        Parkir motor
      </text>
      <path d="M 228 351 L 245 351 L 245 339" fill="none" stroke="#0F172A" strokeWidth="1.5" />
      <polygon points="245,336 241,342 249,342" fill="#0F172A" />

      {/* Perimeter Trees */}
      <ParkTree x={115} y={4} />
      <ParkTree x={210} y={4} />
      <ParkTree x={320} y={4} />
      <ParkTree x={425} y={4} />
      <ParkTree x={425} y={96} />
      <ParkTree x={425} y={196} />
      <ParkTree x={425} y={295} />
      <ParkTree x={360} y={322} />
      <ParkTree x={125} y={322} />
      <ParkTree x={58} y={322} />
    </svg>
  </div>
);

/* No. 27 & 28: Hobi Membaca Buku (3 Books + 3 Students) */
const ReadingHobbyIllustration: React.FC = () => {
  const books = [
    { label: 'Biru', pages: '329 halaman', cover: '#0284C7', dark: '#0369A1', spine: '#075985' },
    { label: 'Hijau', pages: '340 halaman', cover: '#65A30D', dark: '#4D7C0F', spine: '#3F6212' },
    { label: 'Merah', pages: '382 halaman', cover: '#DC2626', dark: '#B91C1C', spine: '#991B1B' },
  ];

  return (
    <div className="space-y-5 py-2">
      {/* Row 1: 3 Books */}
      <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-[520px] mx-auto">
        {books.map((b) => (
          <div key={b.label} className="flex flex-col items-center">
            <svg viewBox="0 0 130 96" className="w-28 sm:w-32 h-auto" aria-label={`Buku ${b.label} ${b.pages}`}>
              {/* Drop shadow */}
              <polygon points="15,66 64,84 118,52 68,36" fill="#E2E8F0" />
              {/* Pages block */}
              <polygon points="16,50 64,74 116,42 116,52 64,82 16,58" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="1" />
              {/* Spine */}
              <polygon points="16,42 16,58 64,82 64,70" fill={b.spine} />
              {/* Top cover */}
              <polygon points="16,42 68,12 116,36 64,70" fill={b.cover} stroke={b.dark} strokeWidth="1.5" />
              {/* White bookmark ribbon */}
              <polygon points="38,68 38,84 43,79 48,84 48,73" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="0.8" />
              {/* Book title on cover */}
              <text
                x="66"
                y="45"
                textAnchor="middle"
                transform="rotate(-28 66 45)"
                className="fill-white text-[13px] font-bold"
              >
                {b.label}
              </text>
            </svg>
            <span className="mt-1 text-xs sm:text-sm font-bold text-slate-800">{b.pages}</span>
          </div>
        ))}
      </div>

      {/* Row 2: 3 Kids + Fractions */}
      <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-[460px] mx-auto pt-1">
        {/* Danu */}
        <div className="flex flex-col items-center">
          <span className="text-sm font-bold text-slate-900 mb-1">Danu</span>
          <svg viewBox="0 0 80 120" className="w-16 sm:w-20 h-auto" aria-label="Danu membaca 2 per 3 bagian">
            {/* Hair & head */}
            <circle cx="40" cy="24" r="14" fill="#FDBA74" />
            <path d="M 26 22 Q 40 6 54 22 Q 48 12 40 14 Q 32 12 26 22 Z" fill="#1E293B" />
            <circle cx="35" cy="24" r="1.5" fill="#1E293B" />
            <circle cx="45" cy="24" r="1.5" fill="#1E293B" />
            <path d="M 36 30 Q 40 33 44 30" fill="none" stroke="#9A3412" strokeWidth="1.5" strokeLinecap="round" />
            {/* Backpack */}
            <rect x="20" y="42" width="40" height="30" rx="8" fill="#B45309" />
            {/* Shirt */}
            <rect x="27" y="40" width="26" height="36" rx="5" fill="#FED7AA" />
            {/* Pants */}
            <rect x="29" y="74" width="10" height="30" rx="3" fill="#65A30D" />
            <rect x="41" y="74" width="10" height="30" rx="3" fill="#65A30D" />
            {/* Shoes */}
            <rect x="27" y="102" width="12" height="6" rx="3" fill="#EA580C" />
            <rect x="41" y="102" width="12" height="6" rx="3" fill="#EA580C" />
          </svg>
          <div className="mt-1 inline-flex flex-col items-center leading-none text-slate-900 font-semibold text-base sm:text-lg">
            <span className="px-1.5 pb-0.5 border-b border-slate-900">2</span>
            <span className="px-1.5 pt-0.5">3</span>
          </div>
        </div>

        {/* Antok */}
        <div className="flex flex-col items-center">
          <span className="text-sm font-bold text-slate-900 mb-1">Antok</span>
          <svg viewBox="0 0 80 120" className="w-16 sm:w-20 h-auto" aria-label="Antok membaca 50 persen">
            <circle cx="40" cy="24" r="14" fill="#FDBA74" />
            <path d="M 26 20 Q 40 6 54 20 L 50 16 L 30 16 Z" fill="#451A03" />
            <circle cx="35" cy="24" r="1.5" fill="#1E293B" />
            <circle cx="45" cy="24" r="1.5" fill="#1E293B" />
            <path d="M 36 30 Q 40 33 44 30" fill="none" stroke="#9A3412" strokeWidth="1.5" strokeLinecap="round" />
            {/* Shirt */}
            <rect x="27" y="40" width="26" height="36" rx="5" fill="#EF4444" />
            {/* Crossbody yellow strap & bag */}
            <line x1="29" y1="42" x2="50" y2="74" stroke="#FACC15" strokeWidth="4" />
            <rect x="44" y="62" width="14" height="16" rx="3" fill="#FACC15" stroke="#CA8A04" strokeWidth="1" />
            {/* Pants */}
            <rect x="29" y="74" width="10" height="30" rx="3" fill="#2563EB" />
            <rect x="41" y="74" width="10" height="30" rx="3" fill="#2563EB" />
            {/* Shoes */}
            <rect x="27" y="102" width="12" height="6" rx="3" fill="#DC2626" />
            <rect x="41" y="102" width="12" height="6" rx="3" fill="#DC2626" />
          </svg>
          <div className="mt-2 text-slate-900 font-semibold text-base sm:text-lg">50%</div>
        </div>

        {/* Caca */}
        <div className="flex flex-col items-center">
          <span className="text-sm font-bold text-slate-900 mb-1">Caca</span>
          <svg viewBox="0 0 80 120" className="w-16 sm:w-20 h-auto" aria-label="Caca membaca 3 per 4 bagian">
            {/* Hair buns */}
            <circle cx="22" cy="18" r="8" fill="#451A03" />
            <circle cx="58" cy="18" r="8" fill="#451A03" />
            <circle cx="40" cy="24" r="14" fill="#C2815E" />
            <path d="M 26 20 Q 40 8 54 20 Q 40 14 26 20 Z" fill="#451A03" />
            <circle cx="35" cy="24" r="1.5" fill="#1E293B" />
            <circle cx="45" cy="24" r="1.5" fill="#1E293B" />
            <path d="M 36 30 Q 40 33 44 30" fill="none" stroke="#7C2D12" strokeWidth="1.5" strokeLinecap="round" />
            {/* Top & Skirt */}
            <rect x="27" y="40" width="26" height="26" rx="5" fill="#FCA5A5" />
            <polygon points="27,65 53,65 57,86 23,86" fill="#EA580C" />
            {/* Book held */}
            <rect x="29" y="50" width="18" height="20" rx="2" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
            {/* Legs */}
            <rect x="31" y="86" width="6" height="18" fill="#C2815E" />
            <rect x="43" y="86" width="6" height="18" fill="#C2815E" />
            <rect x="29" y="102" width="10" height="6" rx="3" fill="#EF4444" />
            <rect x="41" y="102" width="10" height="6" rx="3" fill="#EF4444" />
          </svg>
          <div className="mt-1 inline-flex flex-col items-center leading-none text-slate-900 font-semibold text-base sm:text-lg">
            <span className="px-1.5 pb-0.5 border-b border-slate-900">3</span>
            <span className="px-1.5 pt-0.5">4</span>
          </div>
        </div>
      </div>
    </div>
  );
};

/* No. 29 & 30: Kandungan Lemak dan Protein dalam 100 Gram Makanan */
const NutritionChartKidsIllustration: React.FC = () => {
  const foods = [
    { name: 'Alpukat', fat: 15, protein: 2 },
    { name: 'Daging Sapi', fat: 15, protein: 26 },
    { name: 'Keju', fat: 33, protein: 25 },
    { name: 'Telur Ayam', fat: 10, protein: 13 },
    { name: 'Ikan', fat: 12, protein: 22 },
  ];

  const chartLeft = 118;
  const chartTop = 58;
  const chartWidth = 430;
  const chartHeight = 195;
  const maxVal = 35;

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[660px] rounded-lg border border-slate-200 bg-white p-2 sm:p-3">
        <svg
          viewBox="0 0 650 325"
          className="w-full h-auto"
          role="img"
          aria-label="Diagram batang Kandungan Lemak dan Protein dalam 100 gram makanan: Alpukat (Lemak 15, Protein 2), Daging Sapi (Lemak 15, Protein 26), Keju (Lemak 33, Protein 25), Telur Ayam (Lemak 10, Protein 13), Ikan (Lemak 12, Protein 22)"
        >
          {/* Decorative corner illustrations matching PDF */}
          {/* Top-left kid eating steak */}
          <g transform="translate(8, 8)">
            <rect x="0" y="0" width="76" height="64" rx="8" fill="#FEF3C7" opacity="0.5" />
            <circle cx="38" cy="24" r="11" fill="#FDBA74" />
            <path d="M 27 21 Q 38 10 49 21 Z" fill="#1E293B" />
            <path d="M 22 54 Q 38 35 54 54 Z" fill="#DC2626" />
            <ellipse cx="38" cy="54" rx="18" ry="6" fill="#475569" />
            <ellipse cx="38" cy="53" rx="11" ry="4" fill="#991B1B" />
          </g>

          {/* Top-right cheese mascot */}
          <g transform="translate(570, 10)">
            <polygon points="10,20 35,6 60,20 55,48 15,48" fill="#FACC15" stroke="#CA8A04" strokeWidth="1.5" />
            <circle cx="28" cy="24" r="3" fill="#B45309" />
            <circle cx="44" cy="24" r="3" fill="#B45309" />
            <circle cx="22" cy="38" r="3.5" fill="#EAB308" />
            <circle cx="48" cy="36" r="2.5" fill="#EAB308" />
            <path d="M 30 33 Q 36 38 42 33" fill="none" stroke="#92400E" strokeWidth="1.8" strokeLinecap="round" />
          </g>

          {/* Bottom-left fish school */}
          <g transform="translate(12, 245)" opacity="0.85">
            <ellipse cx="22" cy="18" rx="12" ry="6" fill="#38BDF8" />
            <polygon points="8,18 2,12 2,24" fill="#38BDF8" />
            <ellipse cx="48" cy="30" rx="11" ry="5.5" fill="#0EA5E9" />
            <polygon points="35,30 29,25 29,35" fill="#0EA5E9" />
            <ellipse cx="28" cy="40" rx="10" ry="5" fill="#7DD3FC" />
            <polygon points="16,40 10,35 10,45" fill="#7DD3FC" />
          </g>

          {/* Bottom-right avocado mascot */}
          <g transform="translate(568, 240)">
            <ellipse cx="36" cy="36" rx="22" ry="28" fill="#65A30D" />
            <ellipse cx="36" cy="37" rx="17" ry="22" fill="#ECFCCB" />
            <circle cx="36" cy="43" r="9" fill="#78350F" />
            <circle cx="31" cy="26" r="2" fill="#1E293B" />
            <circle cx="41" cy="26" r="2" fill="#1E293B" />
            <path d="M 33 31 Q 36 34 39 31" fill="none" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" />
          </g>

          {/* Chart Title */}
          <text
            x="332"
            y="24"
            textAnchor="middle"
            className="fill-[#991B1B] text-[13.5px] font-extrabold tracking-tight"
          >
            KANDUNGAN LEMAK DAN PROTEIN
          </text>
          <text
            x="332"
            y="41"
            textAnchor="middle"
            className="fill-[#991B1B] text-[13.5px] font-extrabold tracking-tight"
          >
            DALAM 100 GRAM MAKANAN
          </text>

          {/* Y-axis label */}
          <text
            x="84"
            y={chartTop + chartHeight / 2}
            textAnchor="middle"
            transform={`rotate(-90 84 ${chartTop + chartHeight / 2})`}
            className="fill-slate-800 text-[11px] font-semibold"
          >
            Banyak Kandungan (gram)
          </text>

          {/* Gridlines every 1 unit (major every 5) */}
          {Array.from({ length: maxVal + 1 }).map((_, val) => {
            const y = chartTop + chartHeight - (val / maxVal) * chartHeight;
            const isMajor = val % 5 === 0;
            return (
              <g key={val}>
                <line
                  x1={chartLeft}
                  y1={y}
                  x2={chartLeft + chartWidth}
                  y2={y}
                  stroke={isMajor ? '#CBD5E1' : '#F1F5F9'}
                  strokeWidth={isMajor ? '1.1' : '0.7'}
                />
                {isMajor && (
                  <text
                    x={chartLeft - 8}
                    y={y + 3.5}
                    textAnchor="end"
                    className="fill-slate-700 text-[10px] font-semibold"
                    style={{ fontVariantNumeric: 'tabular-nums' }}
                  >
                    {val}
                  </text>
                )}
              </g>
            );
          })}

          {/* Axes */}
          <line
            x1={chartLeft}
            y1={chartTop + chartHeight}
            x2={chartLeft + chartWidth}
            y2={chartTop + chartHeight}
            stroke="#64748B"
            strokeWidth="1.2"
          />

          {/* Food Bars */}
          {foods.map((food, idx) => {
            const slotW = chartWidth / foods.length;
            const centerX = chartLeft + idx * slotW + slotW / 2;
            const barW = 24;
            const fatH = (food.fat / maxVal) * chartHeight;
            const protH = (food.protein / maxVal) * chartHeight;

            return (
              <g key={food.name}>
                <rect
                  x={centerX - barW - 2}
                  y={chartTop + chartHeight - fatH}
                  width={barW}
                  height={fatH}
                  fill="#00B836"
                />
                <rect
                  x={centerX + 2}
                  y={chartTop + chartHeight - protH}
                  width={barW}
                  height={protH}
                  fill="#0099AD"
                />
                <text
                  x={centerX}
                  y={chartTop + chartHeight + 16}
                  textAnchor="middle"
                  className="fill-slate-800 text-[10.5px] font-semibold"
                >
                  {food.name}
                </text>
              </g>
            );
          })}

          <text
            x={chartLeft + chartWidth / 2}
            y="286"
            textAnchor="middle"
            className="fill-slate-800 text-[11px] font-bold"
          >
            Nama Makanan
          </text>

          {/* Legend */}
          <rect x="264" y="298" width="12" height="10" fill="#00B836" />
          <text x="282" y="307" className="fill-slate-800 text-[11px] font-semibold">
            Lemak
          </text>
          <rect x="342" y="298" width="12" height="10" fill="#0099AD" />
          <text x="360" y="307" className="fill-slate-800 text-[11px] font-semibold">
            Protein
          </text>

          {/* Source citation */}
          <text x="14" y="316" className="fill-rose-700 text-[9.5px] italic">
            Sumber data: fdc.nal.usda.gov
          </text>
        </svg>
      </div>
    </div>
  );
};

/* No. 30 Second Chart: Data Lemak dan Protein yang Dikonsumsi oleh Seorang Ibu Hamil */
const PregnantMotherChartIllustration: React.FC = () => {
  const chartLeft = 104;
  const chartTop = 76;
  const chartWidth = 390;
  const chartHeight = 200;
  const maxVal = 65;

  const items = [
    { label: 'Lemak', value: 46 },
    { label: 'Protein', value: 58 },
  ];

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[600px] rounded-lg border border-amber-200/80 bg-[#FAF6F1] p-3 sm:p-4">
        <svg
          viewBox="0 0 560 355"
          className="w-full h-auto"
          role="img"
          aria-label="Diagram batang Data Lemak dan Protein yang Dikonsumsi oleh Seorang Ibu Hamil: Lemak 46 gram, Protein 58 gram"
        >
          {/* Title */}
          <text x="280" y="26" textAnchor="middle" className="fill-slate-900 text-[16px] font-bold">
            Data Lemak dan Protein yang
          </text>
          <text x="280" y="48" textAnchor="middle" className="fill-slate-900 text-[16px] font-bold">
            Dikonsumsi oleh Seorang Ibu Hamil
          </text>

          {/* White chart panel */}
          <rect x="44" y="64" width="472" height="248" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />

          {/* Y-axis title */}
          <text
            x="64"
            y={chartTop + chartHeight / 2}
            textAnchor="middle"
            transform={`rotate(-90 64 ${chartTop + chartHeight / 2})`}
            className="fill-slate-800 text-[12px] font-semibold"
          >
            Banyak Kandungan (gram)
          </text>

          {/* Gridlines every 1 unit, major every 5 */}
          {Array.from({ length: maxVal + 1 }).map((_, val) => {
            const y = chartTop + chartHeight - (val / maxVal) * chartHeight;
            const isMajor = val % 5 === 0;
            return (
              <g key={val}>
                <line
                  x1={chartLeft}
                  y1={y}
                  x2={chartLeft + chartWidth}
                  y2={y}
                  stroke={isMajor ? '#CBD5E1' : '#F1F5F9'}
                  strokeWidth={isMajor ? '1' : '0.6'}
                />
                {isMajor && (
                  <text
                    x={chartLeft - 8}
                    y={y + 3}
                    textAnchor="end"
                    className="fill-slate-700 text-[9.5px] font-medium"
                    style={{ fontVariantNumeric: 'tabular-nums' }}
                  >
                    {val}
                  </text>
                )}
              </g>
            );
          })}

          {/* Axes */}
          <line
            x1={chartLeft}
            y1={chartTop + chartHeight}
            x2={chartLeft + chartWidth}
            y2={chartTop + chartHeight}
            stroke="#94A3B8"
            strokeWidth="1.2"
          />

          {/* Bars: Lemak=46, Protein=58 */}
          {items.map((item, idx) => {
            const slotW = chartWidth / 2;
            const barW = 84;
            const x = chartLeft + idx * slotW + (slotW - barW) / 2;
            const barH = (item.value / maxVal) * chartHeight;
            const y = chartTop + chartHeight - barH;
            return (
              <g key={item.label}>
                <rect x={x} y={y} width={barW} height={barH} fill="#F5C443" />
                <text
                  x={x + barW / 2}
                  y={chartTop + chartHeight + 16}
                  textAnchor="middle"
                  className="fill-slate-800 text-[11px] font-semibold"
                >
                  {item.label}
                </text>
              </g>
            );
          })}

          <text
            x={chartLeft + chartWidth / 2}
            y="304"
            textAnchor="middle"
            className="fill-slate-800 text-[12px] font-semibold italic"
          >
            Jenis Nutrisi
          </text>

          {/* Bottom-left heart decoration */}
          <g transform="translate(52, 300)">
            <path
              d="M 20 12 C 20 4, 8 4, 8 14 C 8 24, 24 34, 24 34 C 24 34, 40 24, 40 14 C 40 4, 28 4, 28 12 Z"
              fill="#818CF8"
              opacity="0.7"
            />
          </g>

          {/* Bottom-right pregnant mother silhouette */}
          <g transform="translate(445, 250)">
            <circle cx="62" cy="24" r="14" fill="#818CF8" />
            <path
              d="M 48 40 C 30 48, 22 72, 36 92 C 42 100, 68 102, 78 96 L 78 46 C 72 40, 58 38, 48 40 Z"
              fill="#6366F1"
              opacity="0.85"
            />
            {/* White heart on belly */}
            <path
              d="M 48 70 C 48 66, 42 66, 42 71 C 42 76, 50 81, 50 81 C 50 81, 58 76, 58 71 C 58 66, 52 66, 52 70 Z"
              fill="#FFFFFF"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};
