import { TkaQuestion } from '../types/assessment';

export const TKA_QUESTIONS: TkaQuestion[] = [
  {
    number: 1,
    competency:
      'Memahami, mengaplikasikan, dan bernalar yang lebih tinggi untuk menyelesaikan permasalahan terkait operasi penjumlahan dan pengurangan bilangan pecahan, serta operasi perkalian dan pembagian bilangan.',
    competencyShort: 'Operasi Bilangan Pecahan',
    type: 'PG',
    typeLabel: 'Pilihan Ganda (PG)',
    stem: '120% - 3 + 2 × 0,75 + [[frac:2:3]] = ....',
    options: [
      { id: 'A', text: '[[frac:11:30]]' },
      { id: 'B', text: '[[frac:49:60]]' },
      { id: 'C', text: '[[frac:31:30]]' },
      { id: 'D', text: '[[frac:98:60]]' },
    ],
    correctOption: 'A',
    keySummary: 'Kunci Jawaban: A ([[frac:11:30]])',
    steps: [
      {
        title: 'Langkah 1: Dahulukan operasi perkalian',
        content:
          'Dalam aturan hitung campuran, perkalian dikerjakan lebih dulu sebelum penjumlahan dan pengurangan.\n2 × 0,75 = 1,5 = [[frac:3:2]]',
      },
      {
        title: 'Langkah 2: Ubah persen dan desimal menjadi pecahan biasa',
        content:
          '120% = [[frac:120:100]] = [[frac:6:5]]\n3 = [[frac:3:1]]\n1,5 = [[frac:3:2]]',
      },
      {
        title: 'Langkah 3: Samakan penyebutnya (KPK dari 5, 1, 2, dan 3 adalah 30)',
        content:
          '[[frac:6:5]] - 3 + [[frac:3:2]] + [[frac:2:3]] = [[frac:36:30]] - [[frac:90:30]] + [[frac:45:30]] + [[frac:20:30]]\n= [[frac:36 - 90 + 45 + 20:30]] = [[frac:11:30]]',
      },
    ],
    tip: 'Ingat urutan KABATAKU (Kali, Bagi, Tambah, Kurang): kerjakan 2 × 0,75 terlebih dahulu sebelum menjumlahkan atau mengurangkan.',
  },
  {
    number: 2,
    competency:
      'Memahami, mengaplikasikan, dan bernalar yang lebih tinggi untuk menyelesaikan permasalahan terkait operasi penjumlahan dan pengurangan bilangan pecahan, serta operasi perkalian dan pembagian bilangan.',
    competencyShort: 'Operasi Pecahan & Persentase',
    type: 'PG',
    typeLabel: 'Pilihan Ganda (PG)',
    stem: 'Menjelang tahun ajaran baru, Toko Buku Ceria memberikan diskon 10% untuk semua jenis buku. Diketahui harga buku gambar adalah [[frac:1:2]] dari harga buku komik. Harga buku tulis adalah 0,75 kali harga buku komik. Diketahui harga buku komik adalah Rp24.000,00.\n\nHarga buku gambar dan buku tulis setelah dikenakan diskon adalah ....',
    options: [
      { id: 'A', text: 'Rp18.000,00' },
      { id: 'B', text: 'Rp24.000,00' },
      { id: 'C', text: 'Rp27.000,00' },
      { id: 'D', text: 'Rp30.000,00' },
    ],
    correctOption: 'C',
    keySummary: 'Kunci Jawaban: C (Rp27.000,00)',
    steps: [
      {
        title: 'Langkah 1: Hitung harga buku gambar sebelum diskon',
        content:
          'Harga buku gambar = [[frac:1:2]] × Rp24.000,00 = Rp12.000,00',
      },
      {
        title: 'Langkah 2: Hitung harga buku tulis sebelum diskon',
        content:
          '0,75 sama dengan [[frac:3:4]].\nHarga buku tulis = 0,75 × Rp24.000,00 = [[frac:3:4]] × Rp24.000,00 = Rp18.000,00',
      },
      {
        title: 'Langkah 3: Jumlahkan harga keduanya lalu kurangi diskon 10%',
        content:
          'Total harga sebelum diskon = Rp12.000,00 + Rp18.000,00 = Rp30.000,00\nBesar diskon 10% = [[frac:10:100]] × Rp30.000,00 = Rp3.000,00\nHarga setelah diskon = Rp30.000,00 - Rp3.000,00 = **Rp27.000,00**',
      },
    ],
    tip: 'Diskon 10% berarti kita cukup membayar 90% dari harga awal (90% × Rp30.000,00 = Rp27.000,00).',
  },
  {
    number: 3,
    competency:
      'Memahami, mengaplikasikan, dan bernalar yang lebih tinggi untuk menyelesaikan permasalahan terkait operasi penjumlahan dan pengurangan bilangan pecahan, serta operasi perkalian dan pembagian bilangan pecahan dengan bilangan asli.',
    competencyShort: 'Perkalian & Pembagian Pecahan',
    type: 'PGK_KATEGORI',
    typeLabel: 'PGK Kategori',
    stem: 'Pak Bondan seorang penjual susu kedelai. Suatu hari, Pak Bondan memproduksi susu kedelai sebanyak 7 wadah yang masing-masing berisi [[mixed:6:1:4]] liter susu kedelai. Seluruh hasil produksi tersebut akan dituangkan ke dalam 50 botol besar dengan isi yang sama banyak dan ke dalam 15 botol kecil dengan isi setiap botolnya adalah setengah botol besar.\n\nTentukan **Benar** atau **Salah** untuk setiap pernyataan berikut tentang hasil produksi susu kedelai Pak Bondan!',
    statements: [
      {
        id: 'A',
        text: 'Pada hari itu Pak Bondan memproduksi [[mixed:43:3:4]] liter susu kedelai.',
        correctAnswer: 'Benar',
        explanation:
          'Total produksi = 7 × [[mixed:6:1:4]] = 7 × [[frac:25:4]] = [[frac:175:4]] = **[[mixed:43:3:4]] liter** (Benar).',
      },
      {
        id: 'B',
        text: 'Setiap botol besar diisi susu kedelai sebanyak [[frac:35:46]] liter.',
        correctAnswer: 'Benar',
        explanation:
          '15 botol kecil isinya sama dengan 15 × [[frac:1:2]] = [[frac:15:2]] = 7,5 botol besar.\nTotal setara botol besar = 50 + [[frac:15:2]] = [[frac:115:2]] botol besar.\nIsi 1 botol besar = [[frac:175:4]] ÷ [[frac:115:2]] = [[frac:175:4]] × [[frac:2:115]] = [[frac:35:46]] liter (Benar).',
      },
      {
        id: 'C',
        text: 'Total susu kedelai yang dikemas dalam botol kecil adalah [[frac:525:46]] liter.',
        correctAnswer: 'Salah',
        explanation:
          'Isi 1 botol kecil = [[frac:1:2]] × [[frac:35:46]] = [[frac:35:92]] liter.\nTotal 15 botol kecil = 15 × [[frac:35:92]] = **[[frac:525:92]] liter**, bukan [[frac:525:46]] liter (Salah).',
      },
    ],
    keySummary: 'Kunci Jawaban: A. Benar · B. Benar · C. Salah',
    steps: [
      {
        title: '1. Menghitung total produksi susu kedelai',
        content:
          '7 × [[mixed:6:1:4]] = 7 × [[frac:25:4]] = [[frac:175:4]] = [[mixed:43:3:4]] liter.',
      },
      {
        title: '2. Menyetarakan botol kecil ke botol besar',
        content:
          'Karena 1 botol kecil = [[frac:1:2]] botol besar, maka 15 botol kecil setara 7,5 botol besar.\nTotal wadah setara = 50 + 7,5 = 57,5 = [[frac:115:2]] botol besar.',
      },
      {
        title: '3. Menghitung isi per botol besar dan total botol kecil',
        content:
          'Isi 1 botol besar = [[frac:175:4]] ÷ [[frac:115:2]] = [[frac:175:4]] × [[frac:2:115]] = [[frac:35:46]] liter.\nIsi 1 botol kecil = [[frac:1:2]] × [[frac:35:46]] = [[frac:35:92]] liter.\nTotal 15 botol kecil = 15 × [[frac:35:92]] = [[frac:525:92]] liter.',
      },
    ],
  },
  {
    number: 4,
    competency:
      'Memahami, mengaplikasikan, dan bernalar yang lebih tinggi untuk menyelesaikan permasalahan terkait konstruksi bangun ruang dan visualisasi spasial (bagian depan, atas, dan samping).',
    competencyShort: 'Konstruksi Bangun Ruang (Dadu)',
    type: 'PG',
    typeLabel: 'Pilihan Ganda (PG)',
    stem: 'Mae bermain ular tangga menggunakan sebuah dadu. Diketahui bahwa jumlah titik pada setiap dua sisi berlawanan pada dadu adalah sama. Pada saat giliran Mae bermain, Mae melempar dadunya. Berikut adalah dadu hasil lemparan Mae.',
    illustration: 'dice',
    stemAfterIllustration: 'Pada dadu tersebut, banyak titik yang ada di sisi bawah adalah ....',
    options: [
      { id: 'A', text: '2' },
      { id: 'B', text: '3' },
      { id: 'C', text: '4' },
      { id: 'D', text: '5' },
    ],
    correctOption: 'B',
    keySummary: 'Kunci Jawaban: B (3)',
    steps: [
      {
        title: 'Langkah 1: Pahami aturan sisi berlawanan pada dadu standar',
        content:
          'Dadu memiliki 6 sisi bernomor titik 1 sampai 6. Karena jumlah titik pada setiap dua sisi yang berlawanan sama besar, jumlahnya adalah 1 + 6 = 7, 2 + 5 = 7, dan 3 + 4 = 7.',
      },
      {
        title: 'Langkah 2: Amati sisi atas pada gambar',
        content:
          'Pada gambar hasil lemparan Mae, sisi atas menunjukkan **4 titik** (sisi depan kiri 1 titik, sisi depan kanan 2 titik).',
      },
      {
        title: 'Langkah 3: Hitung sisi bawah yang berlawanan dengan sisi atas',
        content:
          'Sisi bawah berlawanan dengan sisi atas:\nJumlah berlawanan - titik sisi atas = 7 - 4 = **3**.',
      },
    ],
    tip: 'Pada dadu standar, dua sisi yang saling berhadapan selalu berjumlah 7.',
  },
  {
    number: 5,
    competency:
      'Memahami, mengaplikasikan, dan bernalar yang lebih tinggi untuk menyelesaikan permasalahan terkait hubungan antar-satuan baku berat (mg, dg, cg, g, dag, hg, kg).',
    competencyShort: 'Satuan Baku Berat',
    type: 'PGK_MCMA',
    typeLabel: 'PGK MCMA',
    stem: 'Setiap bulan Ramadan, SD Harapan mengadakan bakti sosial. Mereka membagi sembako yang berisi 3 kg beras, dua bungkus gula pasir dengan berat masing-masing kemasan 5 hg, dan lima bungkus mi instan dengan berat per bungkus 85 g.\n\nPilihlah pernyataan yang benar sesuai dengan informasi tersebut! Jawaban benar lebih dari satu.',
    options: [
      {
        id: '1',
        text: 'Total berat semua isi paket adalah 4.425 gram.',
        isCorrect: true,
        explanation:
          'Beras = 3 kg = 3.000 g. Gula = 2 × 5 hg = 10 hg = 1.000 g. Mi instan = 5 × 85 g = 425 g.\nTotal = 3.000 + 1.000 + 425 = **4.425 gram** (Benar).',
      },
      {
        id: '2',
        text: 'Berat mi instan dalam paket tersebut lebih dari 0,5 kilogram.',
        isCorrect: false,
        explanation:
          'Berat 5 mi instan = 425 g = 0,425 kg. Nilai 0,425 kg **kurang dari** 0,5 kg (500 g) (Salah).',
      },
      {
        id: '3',
        text: 'Satu kemasan gula pasir lebih berat dibandingkan seluruh mi instan.',
        isCorrect: true,
        explanation:
          '1 kemasan gula pasir = 5 hg = 500 g. Seluruh mi instan = 425 g. Karena 500 g > 425 g, pernyataan ini **Benar**.',
      },
    ],
    keySummary: 'Kunci Jawaban: Pernyataan 1 dan Pernyataan 3',
    steps: [
      {
        title: 'Langkah 1: Samakan semua satuan berat ke gram (g)',
        content:
          '• Beras: 3 kg = 3 × 1.000 g = 3.000 g\n• Gula pasir (2 bungkus): 2 × 5 hg = 10 hg = 10 × 100 g = 1.000 g (1 bungkus = 500 g)\n• Mi instan (5 bungkus): 5 × 85 g = 425 g',
      },
      {
        title: 'Langkah 2: Periksa setiap pernyataan',
        content:
          '• Pernyataan 1: 3.000 + 1.000 + 425 = 4.425 g (Benar)\n• Pernyataan 2: 425 g = 0,425 kg, tidak lebih dari 0,5 kg (Salah)\n• Pernyataan 3: 500 g > 425 g (Benar)',
      },
    ],
    tip: 'Ingat tangga satuan berat: 1 kg = 1.000 g, dan 1 hg (ons) = 100 g.',
  },
  {
    number: 6,
    competency:
      'Memahami, mengaplikasikan, dan bernalar yang lebih tinggi untuk menyelesaikan permasalahan terkait pengambilan informasi dan penggunaan data.',
    competencyShort: 'Membaca Diagram Batang',
    type: 'PGK_KATEGORI',
    typeLabel: 'PGK Kategori',
    stem: 'SD Harapan baru saja meresmikan ruang perpustakaan untuk siswa. Bu Anita sedang mendata banyak siswa yang berkunjung ke perpustakaan tersebut pada lima hari pertama sejak diresmikan. Diagram berikut menggambarkan data yang diperoleh Bu Anita.',
    illustration: 'library-chart',
    stemAfterIllustration:
      'Deskripsi apakah yang tepat tentang data pada diagram tersebut?\nTentukan **Benar** atau **Salah** untuk setiap pernyataan berikut!',
    statements: [
      {
        id: 'A',
        text: 'Banyak siswa yang mengunjungi perpustakaan pada hari Senin hanya [[frac:3:4]] dari pengunjung pada hari Rabu.',
        correctAnswer: 'Benar',
        explanation:
          'Pengunjung Senin = 15 orang, pengunjung Rabu = 20 orang.\nPerbandingan Senin terhadap Rabu = [[frac:15:20]] = **[[frac:3:4]]** (Benar).',
      },
      {
        id: 'B',
        text: 'Total siswa pengunjung perpustakaan mulai dari hari Senin hingga hari Jumat adalah 100.',
        correctAnswer: 'Salah',
        explanation:
          'Total pengunjung = 15 (Senin) + 18 (Selasa) + 20 (Rabu) + 24 (Kamis) + 20 (Jumat) = **97 orang**, bukan 100 orang (Salah).',
      },
      {
        id: 'C',
        text: 'Perbedaan banyak pengunjung harian dengan hari sebelumnya tidak lebih dari 5 orang.',
        correctAnswer: 'Benar',
        explanation:
          'Selisih tiap hari berturut-turut:\n• Senin ke Selasa: |18 - 15| = 3 orang\n• Selasa ke Rabu: |20 - 18| = 2 orang\n• Rabu ke Kamis: |24 - 20| = 4 orang\n• Kamis ke Jumat: |20 - 24| = 4 orang\nSemuanya kurang dari atau sama dengan 5 orang (Benar).',
      },
    ],
    keySummary: 'Kunci Jawaban: A. Benar · B. Salah · C. Benar',
    steps: [
      {
        title: 'Langkah 1: Baca nilai setiap batang menggunakan garis bantu',
        content:
          'Setiap garis tipis horizontal bernilai 1 orang:\n• Senin = 15 orang\n• Selasa = 18 orang (2 garis di bawah 20)\n• Rabu = 20 orang\n• Kamis = 24 orang (1 garis di bawah 25)\n• Jumat = 20 orang',
      },
      {
        title: 'Langkah 2: Uji setiap pernyataan berdasarkan data',
        content:
          '• A: [[frac:15:20]] disederhanakan dibagi 5 menjadi [[frac:3:4]] → Benar.\n• B: 15 + 18 + 20 + 24 + 20 = 97 orang → Salah.\n• C: Selisih maksimum antarhari berurutan adalah 4 orang (≤ 5 orang) → Benar.',
      },
    ],
  },
  {
    number: 7,
    competency:
      'Memahami, mengaplikasikan, dan bernalar yang lebih tinggi untuk menyelesaikan permasalahan terkait penyajian data (gambar, piktogram, diagram batang, dan tabel frekuensi).',
    competencyShort: 'Membaca Piktogram',
    type: 'PGK_KATEGORI',
    typeLabel: 'PGK Kategori',
    stem: 'SD Mutiara mengadakan program pekan literasi. Selama pekan literasi, para siswa ditugaskan untuk mencatat jumlah buku yang mereka baca di rumah. Rina, Dika, dan Siti mencatat buku yang mereka baca dalam bentuk piktogram seperti pada gambar berikut.',
    illustration: 'book-pictogram',
    stemAfterIllustration:
      'Berdasarkan informasi dari piktogram tersebut, tentukan **Benar** atau **Salah** untuk setiap pernyataan berikut terkait jumlah buku yang dibaca oleh Rina, Dika, dan Siti!',
    statements: [
      {
        id: 'A',
        text: 'Rina membaca sepuluh buku.',
        correctAnswer: 'Benar',
        explanation:
          'Rina memiliki 5 gambar buku. Karena 1 gambar mewakili 2 buku, maka 5 × 2 = **10 buku** (Benar).',
      },
      {
        id: 'B',
        text: 'Dika membaca buku lebih sedikit daripada Rina.',
        correctAnswer: 'Benar',
        explanation:
          'Dika membaca 4 × 2 = 8 buku, sedangkan Rina membaca 10 buku. 8 buku lebih sedikit dari 10 buku (Benar).',
      },
      {
        id: 'C',
        text: 'Siti membaca tiga buku.',
        correctAnswer: 'Salah',
        explanation:
          'Siti memiliki 3 gambar buku. Karena 1 gambar = 2 buku, maka Siti membaca 3 × 2 = **6 buku**, bukan 3 buku (Salah).',
      },
    ],
    keySummary: 'Kunci Jawaban: A. Benar · B. Benar · C. Salah',
    steps: [
      {
        title: 'Langkah 1: Perhatikan keterangan piktogram',
        content: '1 gambar buku mewakili **2 buku** sesungguhnya.',
      },
      {
        title: 'Langkah 2: Hitung banyak buku yang dibaca masing-masing anak',
        content:
          '• Rina: 5 gambar × 2 = 10 buku\n• Dika: 4 gambar × 2 = 8 buku\n• Siti: 3 gambar × 2 = 6 buku',
      },
    ],
  },
  {
    number: 8,
    competency:
      'Memahami, mengaplikasikan, dan bernalar yang lebih tinggi untuk menyelesaikan permasalahan terkait penaksiran ukuran.',
    competencyShort: 'Penaksiran Pecahan Luas Lahan',
    type: 'PG',
    typeLabel: 'Pilihan Ganda (PG)',
    stem: 'Pak Bakri mempunyai lahan seluas 3,5 hektar. Pada lahan tersebut, [[frac:1:5]] bagiannya akan ditanami cabai merah, [[frac:1:3]] bagiannya akan ditanami tomat, dan sisanya akan ditanami daun bawang.\n\nBerapakah luas lahan yang akan ditanami tomat dan daun bawang?',
    options: [
      { id: 'A', text: '1,63 hektar.' },
      { id: 'B', text: '1,87 hektar.' },
      { id: 'C', text: '2,33 hektar.' },
      { id: 'D', text: '2,80 hektar.' },
    ],
    correctOption: 'D',
    keySummary: 'Kunci Jawaban: D (2,80 hektar)',
    steps: [
      {
        title: 'Langkah 1: Cari bagian lahan selain cabai merah',
        content:
          'Seluruh lahan terdiri atas cabai merah, tomat, dan daun bawang. Artinya:\nBagian tomat + daun bawang = seluruh lahan - bagian cabai merah\n= 1 - [[frac:1:5]] = [[frac:4:5]] bagian.',
      },
      {
        title: 'Langkah 2: Kalikan bagian tersebut dengan luas lahan total',
        content:
          'Luas tomat dan daun bawang = [[frac:4:5]] × 3,5 hektar = 0,8 × 3,5 = **2,80 hektar**.',
      },
    ],
    tip: 'Kamu tidak perlu menghitung luas tomat dan daun bawang satu per satu! Cukup kurangkan bagian cabai merah dari 1 bagian penuh.',
  },
  {
    number: 9,
    competency:
      'Memahami, mengaplikasikan, dan bernalar yang lebih tinggi untuk menyelesaikan permasalahan terkait volume bangun ruang (kubus, balok, dan gabungannya).',
    competencyShort: 'Volume Bangun Ruang',
    type: 'PG',
    typeLabel: 'Pilihan Ganda (PG)',
    stem: 'Sebuah bak berbentuk kubus memiliki volume sebesar 9 [[sup:m:3]]. Bak tersebut akan diubah menjadi sebuah balok dengan panjangnya 2 kali dari ukuran bak sebelumnya, lebarnya [[frac:1:2]] dari ukuran bak sebelumnya, dan tingginya sama dengan ukuran bak sebelumnya.\n\nVolume dari bak yang baru adalah ....',
    options: [
      { id: 'A', text: '4,5 [[sup:m:3]]' },
      { id: 'B', text: '9 [[sup:m:3]]' },
      { id: 'C', text: '18 [[sup:m:3]]' },
      { id: 'D', text: '22,5 [[sup:m:3]]' },
    ],
    correctOption: 'B',
    keySummary: 'Kunci Jawaban: B (9 [[sup:m:3]])',
    steps: [
      {
        title: 'Langkah 1: Tuliskan rumus volume awal',
        content:
          'Misalkan ukuran rusuk kubus awal adalah s, sehingga volume awal = s × s × s = 9 [[sup:m:3]].',
      },
      {
        title: 'Langkah 2: Substitusi ukuran baru ke rumus volume balok',
        content:
          '• Panjang baru = 2 × s\n• Lebar baru = [[frac:1:2]] × s\n• Tinggi baru = s\n\nVolume baru = (2 × s) × ([[frac:1:2]] × s) × s = (2 × [[frac:1:2]]) × (s × s × s) = 1 × 9 = **9 [[sup:m:3]]**.',
      },
    ],
    tip: 'Panjang dikali 2 dan lebar dikali setengah saling meniadakan (2 × [[frac:1:2]] = 1), sehingga volumenya tetap sama!',
  },
  {
    number: 10,
    competency:
      'Memahami, mengaplikasikan, dan bernalar yang lebih tinggi untuk menyelesaikan permasalahan terkait laju perubahan (kecepatan).',
    competencyShort: 'Kecepatan, Jarak & Waktu',
    type: 'PG',
    typeLabel: 'Pilihan Ganda (PG)',
    stem: 'Pak Bayu dan keluarganya tinggal di Kota Yogyakarta dan berencana untuk liburan ke Semarang. Diketahui jarak Yogyakarta–Semarang 140 km dan kecepatan rata-rata mobil Pak Bayu 80 km/jam. Pak Bayu dan keluarga berangkat dari rumah pukul 06.00.\n\nApabila di tengah perjalanan mereka berhenti selama 15 menit untuk membeli oleh-oleh, pukul berapakah Pak Bayu dan keluarga tiba di Semarang?',
    options: [
      { id: 'A', text: '07.45' },
      { id: 'B', text: '08.00' },
      { id: 'C', text: '08.45' },
      { id: 'D', text: '09.00' },
    ],
    correctOption: 'B',
    keySummary: 'Kunci Jawaban: B (08.00)',
    steps: [
      {
        title: 'Langkah 1: Hitung waktu berkendara',
        content:
          'Waktu = Jarak ÷ Kecepatan = [[frac:140:80]] jam = [[frac:7:4]] jam = [[mixed:1:3:4]] jam.\n[[frac:3:4]] jam = [[frac:3:4]] × 60 menit = 45 menit.\nJadi waktu berkendara = 1 jam 45 menit.',
      },
      {
        title: 'Langkah 2: Tambahkan waktu berhenti (istirahat)',
        content:
          'Total lama perjalanan = 1 jam 45 menit + 15 menit = 1 jam 60 menit = 2 jam.',
      },
      {
        title: 'Langkah 3: Hitung waktu tiba',
        content: 'Waktu tiba = 06.00 + 2 jam = **08.00**.',
      },
    ],
    tip: 'Ingat rumus segitiga JKW: Waktu = Jarak ÷ Kecepatan. Jangan lupa tambahkan waktu istirahat 15 menit.',
  },
  {
    number: 11,
    competency:
      'Memahami, mengaplikasikan, dan bernalar yang lebih tinggi untuk menyelesaikan permasalahan terkait waktu.',
    competencyShort: 'Perhitungan Waktu & Kalender',
    type: 'PGK_KATEGORI',
    typeLabel: 'PGK Kategori',
    stem: 'Lala berulang tahun setiap tanggal 14 Juni. Dia akan berusia 13 tahun pada bulan Juni tahun ini. Sekarang tanggal 30 April.\n\nBerdasarkan informasi tersebut, tentukan **Benar** atau **Salah** untuk setiap pernyataan berikut terkait ulang tahun Lala!',
    statements: [
      {
        id: 'A',
        text: 'Lala harus menunggu 45 hari lagi untuk merayakan ulang tahunnya.',
        correctAnswer: 'Benar',
        explanation:
          'Bulan April memiliki 30 hari, sehingga dari 30 April ke akhir April = 0 hari. Bulan Mei memiliki 31 hari, dan sampai 14 Juni ada 14 hari.\nTotal hari = 31 + 14 = **45 hari** (Benar).',
      },
      {
        id: 'B',
        text: 'Lala harus menunggu enam minggu dan tiga hari lagi untuk merayakan ulang tahunnya.',
        correctAnswer: 'Benar',
        explanation:
          '1 minggu = 7 hari. 45 hari ÷ 7 = 6 minggu sisa 3 hari (karena 6 × 7 + 3 = 42 + 3 = 45 hari) (Benar).',
      },
      {
        id: 'C',
        text: 'Lala harus menunggu dua bulan untuk merayakan ulang tahunnya.',
        correctAnswer: 'Salah',
        explanation:
          'Dari 30 April ke 30 Mei adalah 1 bulan, lalu ke 14 Juni hanya 15 hari lagi (kurang lebih 1,5 bulan), jadi bukan 2 bulan penuh (Salah).',
      },
    ],
    keySummary: 'Kunci Jawaban: A. Benar · B. Benar · C. Salah',
    steps: [
      {
        title: 'Langkah 1: Hitung jumlah hari dari 30 April ke 14 Juni',
        content:
          '• Sisa hari di bulan April (30 hari): 30 - 30 = 0 hari\n• Jumlah hari di bulan Mei: 31 hari\n• Tanggal di bulan Juni: 14 hari\nTotal waktu tunggu = 31 + 14 = 45 hari.',
      },
      {
        title: 'Langkah 2: Ubah 45 hari ke minggu dan bulan',
        content:
          '• Dalam minggu: 45 = (6 × 7) + 3 → 6 minggu 3 hari.\n• Dalam bulan: 45 hari ≈ 1,5 bulan (tidak sampai 2 bulan).',
      },
    ],
  },
  {
    number: 12,
    competency:
      'Memahami, mengaplikasikan, dan bernalar yang lebih tinggi untuk menyelesaikan permasalahan terkait berat benda menggunakan satuan baku.',
    competencyShort: 'Operasi Satuan Berat',
    type: 'PG',
    typeLabel: 'Pilihan Ganda (PG)',
    stem: 'Ibu pergi ke pasar membeli 3 kg buah. Di dalam keranjang belanja ibu, terdapat dua buah alpukat mentega dengan berat 1,25 kg dan sisanya adalah tujuh buah mangga kweni.\n\nBerat satu buah mangga kweni adalah ....',
    options: [
      { id: 'A', text: '0,2 kg' },
      { id: 'B', text: '0,25 kg' },
      { id: 'C', text: '0,3 kg' },
      { id: 'D', text: '0,35 kg' },
    ],
    correctOption: 'B',
    keySummary: 'Kunci Jawaban: B (0,25 kg)',
    steps: [
      {
        title: 'Langkah 1: Hitung berat seluruh mangga kweni',
        content:
          'Total berat semua buah = 3 kg\nBerat 2 alpukat = 1,25 kg\nBerat 7 mangga kweni = 3 kg - 1,25 kg = 1,75 kg',
      },
      {
        title: 'Langkah 2: Bagi dengan jumlah buah mangga (7 buah)',
        content:
          'Berat 1 buah mangga kweni = 1,75 kg ÷ 7 = **0,25 kg**.',
      },
    ],
    tip: 'Agar lebih mudah membagi desimal, ubah 1,75 kg menjadi 1.750 gram: 1.750 ÷ 7 = 250 gram = 0,25 kg.',
  },
  {
    number: 13,
    competency:
      'Memahami, mengaplikasikan, dan bernalar yang lebih tinggi untuk menyelesaikan permasalahan terkait hubungan antar-satuan baku volume (ml, dl, cl, l, dal, hl, kl).',
    competencyShort: 'Satuan Baku Volume',
    type: 'PGK_KATEGORI',
    typeLabel: 'PGK Kategori',
    stem: 'Seorang petani memiliki tangki berisi air sebanyak 0,8 hektoliter. Air tersebut akan ditampung ke dalam bak penampungan yang nantinya akan digunakan untuk menyiram tanaman cabai. Bak penampungan dapat menampung 20 liter air.\n\nBerdasarkan informasi tersebut, tentukan **Benar** atau **Salah** untuk setiap pernyataan berikut!',
    statements: [
      {
        id: 'A',
        text: 'Air di dalam tangki tersebut adalah 80 liter.',
        correctAnswer: 'Benar',
        explanation:
          'Dari hl ke liter turun 2 tangga (× 100), jadi 0,8 hl = 0,8 × 100 = **80 liter** (Benar).',
      },
      {
        id: 'B',
        text: 'Petani dapat mengisi bak penampungan sebanyak lima kali hingga tangki kosong.',
        correctAnswer: 'Salah',
        explanation:
          'Banyak pengisian = 80 liter ÷ 20 liter = **4 kali**, bukan 5 kali (Salah).',
      },
      {
        id: 'C',
        text: 'Jika satu baris tanaman cabai membutuhkan 40 dl air, sepuluh baris tanaman cabai dapat membuat volume air dalam tangki berkurang setengahnya.',
        correctAnswer: 'Benar',
        explanation:
          '1 liter = 10 dl, jadi 40 dl = 4 liter per baris.\n10 baris = 10 × 4 liter = 40 liter.\n40 liter adalah tepat setengah dari 80 liter (Benar).',
      },
    ],
    keySummary: 'Kunci Jawaban: A. Benar · B. Salah · C. Benar',
    steps: [
      {
        title: 'Langkah 1: Konversi satuan volume ke liter',
        content:
          'Urutan tangga satuan volume: kl → hl → dal → liter → dl → cl → ml.\n• 0,8 hl = 0,8 × 100 = 80 liter.\n• 40 dl = 40 ÷ 10 = 4 liter.',
      },
      {
        title: 'Langkah 2: Uji setiap pernyataan',
        content:
          '• A: Isi tangki = 80 liter (Benar).\n• B: 80 ÷ 20 = 4 kali pengisian (Salah).\n• C: 10 × 4 liter = 40 liter = [[frac:1:2]] × 80 liter (Benar).',
      },
    ],
  },
  {
    number: 14,
    competency:
      'Memahami, mengaplikasikan, dan bernalar yang lebih tinggi untuk menyelesaikan permasalahan terkait volume benda menggunakan satuan baku.',
    competencyShort: 'Volume Kubus & Balok',
    type: 'PGK_MCMA',
    typeLabel: 'PGK MCMA',
    stem: 'Bu Guru menugaskan Doni untuk membawa sebuah kotak yang dapat menampung 64 kubus satuan. Kubus satuan adalah kubus yang mempunyai rusuk 1 cm. Di rumah, Doni memiliki beberapa macam kotak dengan berbagai ukuran.\n\nDi antara pilihan berikut, kotak mana sajakah yang harus dibawa oleh Doni? Pilihlah jawaban yang benar! Jawaban benar lebih dari satu.',
    options: [
      {
        id: '1',
        text: 'Kotak berukuran 8 cm × 2 cm × 4 cm',
        isCorrect: true,
        explanation:
          'Volume = 8 × 2 × 4 = **64 [[sup:cm:3]]**. Dapat menampung tepat 64 kubus satuan (Benar).',
      },
      {
        id: '2',
        text: 'Kotak berukuran 4 cm × 4 cm × 4 cm',
        isCorrect: true,
        explanation:
          'Volume = 4 × 4 × 4 = **64 [[sup:cm:3]]**. Dapat menampung tepat 64 kubus satuan (Benar).',
      },
      {
        id: '3',
        text: 'Kotak berukuran 4 cm × 3 cm × 5 cm',
        isCorrect: false,
        explanation:
          'Volume = 4 × 3 × 5 = **60 [[sup:cm:3]]**. Hanya cukup untuk 60 kubus satuan, kurang 4 kubus (Salah).',
      },
    ],
    keySummary: 'Kunci Jawaban: Pernyataan 1 dan Pernyataan 2',
    steps: [
      {
        title: 'Langkah 1: Hitung volume yang dibutuhkan',
        content:
          '1 kubus satuan berusuk 1 cm memiliki volume 1 × 1 × 1 = 1 [[sup:cm:3]].\n64 kubus satuan membutuhkan volume minimal 64 [[sup:cm:3]].',
      },
      {
        title: 'Langkah 2: Hitung volume masing-masing kotak (p × l × t)',
        content:
          '• Kotak 1: 8 × 2 × 4 = 64 [[sup:cm:3]] ✓\n• Kotak 2: 4 × 4 × 4 = 64 [[sup:cm:3]] ✓\n• Kotak 3: 4 × 3 × 5 = 60 [[sup:cm:3]] ✗',
      },
    ],
  },
  {
    number: 15,
    competency:
      'Memahami, mengaplikasikan, dan bernalar yang lebih tinggi untuk menyelesaikan permasalahan terkait hubungan antar-satuan baku panjang (mm, dm, cm, m, dam, hm, km).',
    competencyShort: 'Satuan Baku Panjang & Arah',
    type: 'PGK_KATEGORI',
    typeLabel: 'PGK Kategori',
    stem: 'Nisa sedang mengunjungi kebun binatang. Dia ingin melihat Capybara yang letaknya di bagian timur kebun binatang. Setelah Nisa melewati gerbang kebun binatang, dia melihat papan petunjuk jalan sebagai berikut.',
    illustration: 'zoo-signpost',
    stemAfterIllustration:
      'Berdasarkan informasi tersebut, tentukan **Benar** atau **Salah** untuk setiap pernyataan berikut!',
    statements: [
      {
        id: 'A',
        text: 'Jarak kandang Zebra adalah 6.000 mm.',
        correctAnswer: 'Salah',
        explanation:
          'Pada papan petunjuk, jarak Zebra = 60 m. Karena 1 m = 1.000 mm, maka 60 m = **60.000 mm**, bukan 6.000 mm (Salah).',
      },
      {
        id: 'B',
        text: 'Jarak kandang Capybara dan Kanguru adalah 1.500 cm.',
        correctAnswer: 'Benar',
        explanation:
          'Capybara dan Kanguru berada di **arah yang sama** (keduanya panah ke kanan): Capybara 50 m dan Kanguru 35 m.\nJarak di antara keduanya = 50 m - 35 m = 15 m = 15 × 100 cm = **1.500 cm** (Benar).',
      },
      {
        id: 'C',
        text: 'Jika Nisa melihat Jerapah, kemudian dia ingin melihat Kanguru, maka Nisa harus berjalan sejauh 0,11 km.',
        correctAnswer: 'Benar',
        explanation:
          'Jerapah berjarak 75 m ke kiri, sedangkan Kanguru berjarak 35 m ke kanan (berlawanan arah).\nJarak dari Jerapah ke Kanguru = 75 m + 35 m = 110 m.\n110 m ÷ 1.000 = **0,11 km** (Benar).',
      },
    ],
    keySummary: 'Kunci Jawaban: A. Salah · B. Benar · C. Benar',
    steps: [
      {
        title: 'Langkah 1: Pahami arah dan jarak dari papan petunjuk',
        content:
          '• Arah kiri: Zebra (60 m) dan Jerapah (75 m)\n• Arah kanan: Kanguru (35 m) dan Capybara (50 m)',
      },
      {
        title: 'Langkah 2: Hitung jarak dan konversi satuan',
        content:
          '• A: 60 m = 60 × 1.000 = 60.000 mm (Salah).\n• B: Searah kanan → 50 m - 35 m = 15 m = 1.500 cm (Benar).\n• C: Berlawanan arah → 75 m + 35 m = 110 m = 0,11 km (Benar).',
      },
    ],
    tip: 'Perhatikan arah panah pada papan petunjuk! Jika searah jaraknya dikurangi, jika berlawanan arah jaraknya dijumlahkan.',
  },
  {
    number: 16,
    competency:
      'Memahami, mengaplikasikan, dan bernalar yang lebih tinggi untuk menyelesaikan permasalahan terkait panjang benda menggunakan satuan baku.',
    competencyShort: 'Pembagian Panjang Benda',
    type: 'PG',
    typeLabel: 'Pilihan Ganda (PG)',
    stem: 'Dio sedang membantu ayah memotong batang rotan untuk dijadikan stik pewangi ruangan. Ayah mempunyai batang rotan dengan panjang 320 cm. Ayah ingin membuat stik pewangi ruangan sebanyak mungkin dengan panjang stik masing-masing 15 cm.\n\nSisa batang rotan yang tidak terpakai untuk membuat stik pewangi ruangan adalah sepanjang ....',
    options: [
      { id: 'A', text: '4 cm' },
      { id: 'B', text: '5 cm' },
      { id: 'C', text: '6 cm' },
      { id: 'D', text: '7 cm' },
    ],
    correctOption: 'B',
    keySummary: 'Kunci Jawaban: B (5 cm)',
    steps: [
      {
        title: 'Langkah 1: Cari banyak potongan stik maksimal',
        content:
          '320 cm ÷ 15 cm = 21 potong (karena 21 × 15 = 315 cm, sedangkan 22 × 15 = 330 cm melebihi 320 cm).',
      },
      {
        title: 'Langkah 2: Hitung sisa batang rotan',
        content: 'Sisa rotan = 320 cm - 315 cm = **5 cm**.',
      },
    ],
  },
  {
    number: 17,
    competency:
      'Memahami, mengaplikasikan, dan bernalar yang lebih tinggi untuk menyelesaikan permasalahan terkait kelipatan, faktor, KPK, dan FPB bilangan asli.',
    competencyShort: 'KPK Bilangan Asli',
    type: 'PG',
    typeLabel: 'Pilihan Ganda (PG)',
    stem: 'Murid-murid SD Cerdas, SD Pelita, dan SD Mentari melakukan kegiatan olahraga di lapangan bola yang sama. Jadwal mereka melakukan kegiatan olahraga tidak sama. Murid-murid SD Cerdas melakukan kegiatan olahraga setiap 2 minggu sekali. Murid-murid SD Pelita melakukan kegiatan olahraga setiap 3 minggu sekali. Murid-murid SD Mentari melakukan kegiatan olahraga setiap 4 minggu sekali. Hari ini ketiga SD tersebut melakukan kegiatan olahraga secara bersamaan.\n\nSetiap periode waktu berapakah murid ketiga SD tersebut akan bertemu dalam kegiatan olahraga di lapangan?',
    options: [
      { id: 'A', text: '4 minggu' },
      { id: 'B', text: '6 minggu' },
      { id: 'C', text: '12 minggu' },
      { id: 'D', text: '18 minggu' },
    ],
    correctOption: 'C',
    keySummary: 'Kunci Jawaban: C (12 minggu)',
    steps: [
      {
        title: 'Langkah 1: Gunakan konsep KPK (Kelipatan Persekutuan Terkecil)',
        content:
          'Pertemuan bersamaan berikutnya dicari dengan KPK dari 2, 3, dan 4:\n• Kelipatan 2: 2, 4, 6, 8, 10, **12**, 14, ...\n• Kelipatan 3: 3, 6, 9, **12**, 15, ...\n• Kelipatan 4: 4, 8, **12**, 16, ...',
      },
      {
        title: 'Langkah 2: Tentukan hasil KPK',
        content: 'KPK(2, 3, 4) = 2² × 3 = 4 × 3 = **12 minggu**.',
      },
    ],
    tip: 'Soal jadwal bertemu bersamaan selalu diselesaikan menggunakan KPK.',
  },
  {
    number: 18,
    competency:
      'Memahami, mengaplikasikan, dan bernalar yang lebih tinggi untuk menyelesaikan permasalahan terkait operasi penjumlahan dan pengurangan bilangan pecahan, serta operasi perkalian dan pembagian bilangan pecahan dengan bilangan asli.',
    competencyShort: 'Operasi Aljabar Pecahan',
    type: 'PG',
    typeLabel: 'Pilihan Ganda (PG)',
    stem: 'Misal a = 5 - [[frac:7:2]] dan b = [[frac:3:4]] - [[frac:1:2]].\n\nMaka a - 2b = ....',
    options: [
      { id: 'A', text: '1' },
      { id: 'B', text: '[[mixed:1:1:4]]' },
      { id: 'C', text: '2' },
      { id: 'D', text: '[[mixed:2:1:4]]' },
    ],
    correctOption: 'A',
    keySummary: 'Kunci Jawaban: A (1)',
    steps: [
      {
        title: 'Langkah 1: Hitung nilai a',
        content:
          'a = 5 - [[frac:7:2]] = [[frac:10:2]] - [[frac:7:2]] = [[frac:3:2]]',
      },
      {
        title: 'Langkah 2: Hitung nilai b',
        content:
          'b = [[frac:3:4]] - [[frac:1:2]] = [[frac:3:4]] - [[frac:2:4]] = [[frac:1:4]]',
      },
      {
        title: 'Langkah 3: Hitung nilai a - 2b',
        content:
          '2b = 2 × [[frac:1:4]] = [[frac:2:4]] = [[frac:1:2]]\na - 2b = [[frac:3:2]] - [[frac:1:2]] = [[frac:2:2]] = **1**',
      },
    ],
  },
  {
    number: 19,
    competency:
      'Memahami, mengaplikasikan, dan bernalar yang lebih tinggi untuk menyelesaikan permasalahan terkait perbandingan dan pengurutan bilangan pecahan.',
    competencyShort: 'Pecahan dari Gambar',
    type: 'PG',
    typeLabel: 'Pilihan Ganda (PG)',
    stem: 'Desti mendapatkan hadiah satu loyang kue pada hari ulang tahunnya. Desti memotong kuenya menjadi beberapa bagian seperti yang terlihat pada gambar. Beberapa potong kue berwarna cokelat dan beberapa potong lainnya berwarna kuning.',
    illustration: 'birthday-cake',
    stemAfterIllustration: 'Berapa bagiankah kue yang berwarna cokelat dari keseluruhan kue?',
    options: [
      { id: 'A', text: '[[frac:1:8]]' },
      { id: 'B', text: '[[frac:1:4]]' },
      { id: 'C', text: '[[frac:1:2]]' },
      { id: 'D', text: '[[frac:3:4]]' },
    ],
    correctOption: 'B',
    keySummary: 'Kunci Jawaban: B ([[frac:1:4]])',
    steps: [
      {
        title: 'Langkah 1: Hitung jumlah seluruh potongan kue yang sama besar',
        content: 'Seluruh kue dipotong menjadi **8 bagian** yang sama besar.',
      },
      {
        title: 'Langkah 2: Hitung bagian kue yang berwarna cokelat',
        content:
          'Terdapat **2 potong** kue berwarna cokelat (dan 6 potong berwarna kuning).\nBagian kue cokelat = [[frac:2:8]]',
      },
      {
        title: 'Langkah 3: Sederhanakan pecahan',
        content: '[[frac:2:8]] dibagi 2 pada pembilang dan penyebut = **[[frac:1:4]]**.',
      },
    ],
  },
  {
    number: 20,
    competency:
      'Memahami, mengaplikasikan, dan bernalar yang lebih tinggi untuk menyelesaikan permasalahan terkait keliling dan luas bangun datar (segitiga, segiempat, dan segi banyak).',
    competencyShort: 'Keliling Bangun Datar Gabungan',
    type: 'PG',
    typeLabel: 'Pilihan Ganda (PG)',
    stem: 'Pak Boni memiliki sebidang tanah berbentuk bangun sebagai berikut.',
    illustration: 'pak-boni-land',
    stemAfterIllustration: 'Berapakah keliling bidang tanah Pak Boni?',
    options: [
      { id: 'A', text: '58 m' },
      { id: 'B', text: '68 m' },
      { id: 'C', text: '72 m' },
      { id: 'D', text: '96 m' },
    ],
    correctOption: 'B',
    keySummary: 'Kunci Jawaban: B (68 m)',
    steps: [
      {
        title: 'Langkah 1: Kenali ukuran sisi dari tanda sama panjang (| dan ||)',
        content:
          '• Tanda garis dua (||): panjangnya **8 m** (sisi tegak kiri dan garis putus-putus mendatar sebelah kiri).\n• Tanda garis satu (|): panjangnya **6 m** (sisi atas bagian menonjol dan sisi tegak di bawahnya).\n• Bagian bawah kanan (kurung kurawal) = 14 m, sehingga panjang sisi bawah total = 8 m + 14 m = **22 m**.\n• Sisi tegak kanan = **8 m** (sejajar sisi tegak kiri).',
      },
      {
        title: 'Langkah 2: Hitung panjang sisi miring segitiga siku-siku di kanan atas',
        content:
          'Alas segitiga = 14 m - 6 m = 8 m.\nTinggi segitiga = 6 m.\nDengan rumus Pythagoras: sisi miring = √(6² + 8²) = √(36 + 64) = √100 = **10 m**.',
      },
      {
        title: 'Langkah 3: Jumlahkan semua sisi terluar (keliling)',
        content:
          'Keliling = 8 + 8 + 6 + 6 + 10 + 8 + 22 = **68 m**.',
      },
    ],
    tip: 'Keliling hanya menjumlahkan sisi-sisi bagian luar! Garis putus-putus di dalam bangun tidak ikut dijumlahkan sebagai bagian dalam, kecuali bagian tepi luar kiri (8 m).',
  },
  {
    number: 21,
    competency:
      'Memahami, mengaplikasikan, dan bernalar yang lebih tinggi untuk menyelesaikan permasalahan terkait operasi penjumlahan, pengurangan, perkalian, dan pembagian bilangan cacah.',
    competencyShort: 'Operasi Bilangan Cacah',
    type: 'PG',
    typeLabel: 'Pilihan Ganda (PG)',
    stem: 'Untuk meningkatkan minat membaca siswa, perpustakaan di SD Cahaya mengadakan kegiatan “Ayo Membaca Buku” untuk murid kelas 6. Jumlah peserta dari Kelas A sebanyak 28 siswa, dari Kelas B sebanyak 36 siswa, dan dari Kelas C sebanyak 32 siswa. Setiap siswa akan mendapatkan 3 buah buku bacaan.\n\nJika 1 dus berisi 24 buku, berapa dus buku yang dibutuhkan untuk kegiatan tersebut?',
    options: [
      { id: 'A', text: '8 dus' },
      { id: 'B', text: '10 dus' },
      { id: 'C', text: '12 dus' },
      { id: 'D', text: '24 dus' },
    ],
    correctOption: 'C',
    keySummary: 'Kunci Jawaban: C (12 dus)',
    steps: [
      {
        title: 'Langkah 1: Hitung jumlah seluruh peserta kelas 6',
        content: 'Total siswa = 28 + 36 + 32 = 96 siswa.',
      },
      {
        title: 'Langkah 2: Hitung total buku yang dibutuhkan',
        content: 'Total buku = 96 × 3 = 288 buku.',
      },
      {
        title: 'Langkah 3: Bagi dengan isi per dus',
        content: 'Jumlah dus = 288 ÷ 24 = **12 dus**.',
      },
    ],
  },
  {
    number: 22,
    competency:
      'Memahami, mengaplikasikan, dan bernalar yang lebih tinggi untuk menyelesaikan permasalahan terkait pecahan senilai menggunakan gambar dan simbol matematika.',
    competencyShort: 'Pecahan Senilai',
    type: 'PG',
    typeLabel: 'Pilihan Ganda (PG)',
    stem: 'Pada hari Sabtu, Andi, Beni, Citra, dan Dika mengikuti kegiatan “Lari Sehat” di lapangan desa. Mereka semua menargetkan untuk menyelesaikan jarak lari yang sama, yaitu 10 km. Hingga pukul 08.00, diperoleh data sebagai berikut.\n• Andi telah menempuh 0,4 bagian dari total jarak.\n• Beni telah menempuh 60% dari total jarak.\n• Citra telah menempuh [[frac:1:3]] bagian dari total jarak.\n• Dika telah menempuh 5,5 km dari total jarak.\n\nSiapakah yang telah menempuh jarak lari sebesar [[frac:3:5]] dari total jarak?',
    options: [
      { id: 'A', text: 'Andi' },
      { id: 'B', text: 'Beni' },
      { id: 'C', text: 'Citra' },
      { id: 'D', text: 'Dika' },
    ],
    correctOption: 'B',
    keySummary: 'Kunci Jawaban: B (Beni)',
    steps: [
      {
        title: 'Langkah 1: Ubah [[frac:3:5]] ke bentuk persen, desimal, dan jarak km',
        content:
          '• Persen: [[frac:3:5]] × 100% = **60%**\n• Desimal: [[frac:3:5]] = 0,6 bagian\n• Jarak tempuh: [[frac:3:5]] × 10 km = 6 km',
      },
      {
        title: 'Langkah 2: Cocokkan dengan data peserta',
        content:
          '• Andi: 0,4 bagian (40%)\n• **Beni: 60% = [[frac:3:5]] bagian (Cocok!)**\n• Citra: [[frac:1:3]] bagian (≈ 33,3%)\n• Dika: 5,5 km dari 10 km = 55%',
      },
    ],
  },
  {
    number: 23,
    competency:
      'Memahami, mengaplikasikan, dan bernalar yang lebih tinggi untuk menyelesaikan permasalahan terkait bentuk bangun datar.',
    competencyShort: 'Sifat Bangun Datar',
    type: 'PG',
    typeLabel: 'Pilihan Ganda (PG)',
    stem: 'Sebuah bangun datar memiliki sifat-sifat sebagai berikut:\n1. Keempat sisinya sama panjang.\n2. Memiliki dua pasang sisi sejajar.\n3. Diagonal-diagonalnya saling berpotongan tegak lurus.\n4. Sudut-sudut yang berhadapan sama besar.\n\nBerdasarkan sifat-sifat di atas, apakah nama bangun datar tersebut?',
    options: [
      { id: 'A', text: 'Persegi' },
      { id: 'B', text: 'Persegi panjang' },
      { id: 'C', text: 'Belah ketupat' },
      { id: 'D', text: 'Layang-layang' },
    ],
    correctOption: 'C',
    keySummary: 'Kunci Jawaban: C (Belah ketupat)',
    steps: [
      {
        title: 'Langkah 1: Analisis sifat sudut pada nomor 4',
        content:
          'Sifat 1–3 dimiliki baik oleh persegi maupun belah ketupat. Namun pada sifat 4 tertulis "Sudut-sudut yang berhadapan sama besar" (tidak harus semuanya 90° siku-siku seperti pada persegi).',
      },
      {
        title: 'Langkah 2: Bandingkan dengan bangun lain',
        content:
          '• Persegi: keempat sudutnya sama besar (90°).\n• Persegi panjang: sisi tidak keempatnya sama panjang, diagonal tidak tegak lurus.\n• Layang-layang: hanya 2 pasang sisi berdekatan yang sama panjang, tidak punya sisi sejajar.\n• **Belah ketupat**: tepat memenuhi keempat sifat di atas!',
      },
    ],
  },
  {
    number: 24,
    competency:
      'Memahami, mengaplikasikan, dan bernalar yang lebih tinggi untuk menyelesaikan permasalahan terkait waktu.',
    competencyShort: 'Penjumlahan Waktu',
    type: 'PG',
    typeLabel: 'Pilihan Ganda (PG)',
    stem: 'Pada hari Minggu, Rani mengikuti kegiatan belajar menari di sanggar seni.\n• Rani berangkat dari rumah pukul 07.25.\n• Perjalanan menuju sanggar memerlukan waktu 45 menit.\n• Kegiatan belajar menari berlangsung selama 1 jam 35 menit.\n• Setelah kegiatan selesai, Rani beristirahat di sanggar selama 20 menit sebelum pulang.\n\nPukul berapakah Rani meninggalkan sanggar untuk pulang?',
    options: [
      { id: 'A', text: '09.45' },
      { id: 'B', text: '10.00' },
      { id: 'C', text: '10.05' },
      { id: 'D', text: '10.25' },
    ],
    correctOption: 'C',
    keySummary: 'Kunci Jawaban: C (10.05)',
    steps: [
      {
        title: 'Langkah 1: Jumlahkan seluruh durasi waktu',
        content:
          'Total waktu = 45 menit + 1 jam 35 menit + 20 menit\n= 1 jam + (45 + 35 + 20) menit\n= 1 jam + 100 menit = 2 jam 40 menit.',
      },
      {
        title: 'Langkah 2: Tambahkan ke waktu berangkat (07.25)',
        content:
          '07.25 + 2 jam 40 menit = 09.65.\nKarena 65 menit = 1 jam 5 menit, maka 09.65 = **10.05**.',
      },
    ],
  },
  {
    number: 25,
    competency:
      'Menentukan panjang dan berat benda menggunakan satuan baku (termasuk menentukan satuan yang tepat).',
    competencyShort: 'Pengukuran Panjang (Denah)',
    type: 'PG',
    typeLabel: 'Pilihan Ganda (PG)',
    passageTitle: 'TAMAN KOTA',
    passageIntro:
      'Taman kota merupakan salah satu fasilitas hiburan yang sangat bermanfaat bagi warga sekitar. Di taman terdapat banyak pohon sehingga terasa sejuk dan segar. Berikut merupakan salah satu desain denah taman kota.',
    stem: '',
    illustration: 'city-park-map',
    stemAfterIllustration:
      'Perhatikan tempat parkir mobil di taman kota. Lebar jalan yang disediakan untuk parkir satu mobil adalah 2 meter. Satu mobil baru saja keluar dari parkiran. Berapa mobil lagi yang dapat diparkir di area tersebut sekarang?',
    options: [
      { id: 'A', text: '9' },
      { id: 'B', text: '10' },
      { id: 'C', text: '12' },
      { id: 'D', text: '14' },
    ],
    correctOption: 'B',
    keySummary: 'Kunci Jawaban: B (10)',
    steps: [
      {
        title: 'Langkah 1: Hitung panjang tempat parkir mobil',
        content:
          'Lebar area parkir mobil = 4 m.\nPada gambar tertulis panjangnya "24 m lebih besar daripada lebarnya", sehingga:\nPanjang = 4 m + 24 m = 28 m.',
      },
      {
        title: 'Langkah 2: Hitung kapasitas maksimal area parkir mobil',
        content:
          'Lebar jalan untuk 1 mobil = 2 m.\nKapasitas total = 28 m ÷ 2 m = 14 mobil.',
      },
      {
        title: 'Langkah 3: Hitung sisa tempat parkir setelah 1 mobil keluar',
        content:
          'Pada denah terlihat ada **5 mobil** yang sedang terparkir.\nKarena 1 mobil baru saja keluar, mobil yang masih ada = 5 - 1 = 4 mobil.\nBanyak mobil lagi yang dapat masuk = 14 - 4 = **10 mobil**.',
      },
    ],
  },
  {
    number: 26,
    competency:
      'Menghitung keliling dan luas persegi panjang bila diketahui panjang dan lebarnya, dan menghitung panjang atau lebar bila diketahui luas/keliling dan salah satu sisinya.',
    competencyShort: 'Luas Persegi Panjang (Denah)',
    type: 'PGK_KATEGORI',
    typeLabel: 'PGK Kategori',
    passageTitle: 'TAMAN KOTA',
    passageIntro:
      'Taman kota merupakan salah satu fasilitas hiburan yang sangat bermanfaat bagi warga sekitar. Di taman terdapat banyak pohon sehingga terasa sejuk dan segar. Berikut merupakan salah satu desain denah taman kota.',
    stem: '',
    illustration: 'city-park-map',
    stemAfterIllustration:
      'Lahan parkir motor ada di sekitar taman. Parkiran yang tersedia cukup luas.\nSatu motor membutuhkan lahan parkir seluas 2 [[sup:m:2]].\nPada pukul 13.00, terdapat 12 motor yang memasuki area parkir dan dapat terparkir dengan rapi di lahan parkir.\nTernyata lahan parkir dapat menampung 1 motor lagi.\n\nTentukan **Benar** atau **Salah** pernyataan berikut terkait tempat parkir motor pada siang itu!',
    statements: [
      {
        id: 'A',
        text: 'Terdapat 4 motor yang sudah keluar dari lahan parkir sebelum pukul 13.00.',
        correctAnswer: 'Benar',
        explanation:
          'Kapasitas total = (10 × 4) ÷ 2 = 20 motor. Pukul 13.00 masuk 12 motor dan tersisa 1 tempat kosong, berarti terisi 19 motor.\nSebelum pukul 13.00 ada 19 - 12 = 7 motor. Di gambar awal ada 11 motor (4 di atas + 7 di bawah). Jadi yang keluar sebelum pukul 13.00 = 11 - 7 = **4 motor** (Benar).',
      },
      {
        id: 'B',
        text: 'Sebelum 12 motor memasuki lahan parkir, lahan parkir sudah terisi oleh 8 motor.',
        correctAnswer: 'Salah',
        explanation:
          'Pada pukul 13.00 total terisi 19 motor (20 - 1). Sebelum 12 motor masuk, lahan parkir hanya terisi 19 - 12 = **7 motor**, bukan 8 motor (Salah).',
      },
      {
        id: 'C',
        text: 'Pada pukul 13.00 lahan parkir terisi oleh 20 motor.',
        correctAnswer: 'Salah',
        explanation:
          'Karena masih dapat menampung 1 motor lagi dari kapasitas maksimal 20 motor, maka saat pukul 13.00 hanya terisi 20 - 1 = **19 motor** (Salah).',
      },
    ],
    keySummary: 'Kunci Jawaban: A. Benar · B. Salah · C. Salah',
    steps: [
      {
        title: 'Langkah 1: Hitung luas dan daya tampung total parkir motor',
        content:
          'Ada 2 baris parkir motor masing-masing berukuran 10 m × 2 m = 20 [[sup:m:2]].\nTotal luas = 20 + 20 = 40 [[sup:m:2]].\nDaya tampung maksimal = 40 [[sup:m:2]] ÷ 2 [[sup:m:2]] = **20 motor**.',
      },
      {
        title: 'Langkah 2: Hitung keadaan pukul 13.00 dan sebelumnya',
        content:
          '• Tersisa 1 tempat kosong saat pukul 13.00 → terisi = 20 - 1 = **19 motor** (Pernyataan C Salah).\n• Sebelum 12 motor masuk → sudah ada = 19 - 12 = **7 motor** (Pernyataan B Salah).\n• Pada denah awal tampak 4 + 7 = 11 motor → yang keluar sebelum pukul 13.00 = 11 - 7 = **4 motor** (Pernyataan A Benar).',
      },
    ],
  },
  {
    number: 27,
    competency:
      'Menyatakan bilangan pecahan dalam bentuk desimal atau persentase atau sebaliknya.',
    competencyShort: 'Konversi Pecahan ke Persen',
    type: 'PG',
    typeLabel: 'Pilihan Ganda (PG)',
    passageTitle: 'HOBI MEMBACA BUKU',
    passageIntro:
      'Danu, Antok, dan Caca hobi membaca buku. Setiap minggu mereka akan membaca satu dari tiga buku berikut. Buku yang dibaca setiap anak berbeda-beda setiap minggunya.',
    stem: 'Pada minggu pertama, Danu membaca buku biru, Antok membaca buku hijau, dan Caca membaca buku merah. Setiap hari Kamis, mereka membandingkan banyak halaman yang sudah dibaca. Berikut ini gambar yang menginformasikan banyak bagian buku yang sudah dibaca oleh Danu, Antok, dan Caca sampai hari Kamis minggu pertama.',
    illustration: 'reading-hobby',
    stemAfterIllustration:
      'Berapa persen dari seluruh halaman buku yang sudah selesai dibaca oleh Caca?',
    options: [
      { id: 'A', text: '34%' },
      { id: 'B', text: '50%' },
      { id: 'C', text: '66%' },
      { id: 'D', text: '75%' },
    ],
    correctOption: 'D',
    keySummary: 'Kunci Jawaban: D (75%)',
    steps: [
      {
        title: 'Langkah 1: Lihat bagian buku yang sudah dibaca Caca',
        content: 'Pada gambar, Caca telah membaca **[[frac:3:4]]** bagian bukunya.',
      },
      {
        title: 'Langkah 2: Ubah pecahan [[frac:3:4]] ke bentuk persen',
        content:
          '[[frac:3:4]] × 100% = [[frac:300:4]]% = **75%**.',
      },
    ],
  },
  {
    number: 28,
    competency:
      'Menggunakan penjumlahan/pengurangan/perkalian/pembagian bilangan cacah, pecahan, atau bilangan desimal (termasuk mengestimasi hasil operasi).',
    competencyShort: 'Estimasi & Operasi Pecahan',
    type: 'PGK_KATEGORI',
    typeLabel: 'PGK Kategori',
    passageTitle: 'HOBI MEMBACA BUKU',
    passageIntro:
      'Danu, Antok, dan Caca hobi membaca buku. Setiap minggu mereka akan membaca satu dari tiga buku berikut. Buku yang dibaca setiap anak berbeda-beda setiap minggunya.',
    stem: 'Pada minggu pertama, Danu membaca buku biru, Antok membaca buku hijau, dan Caca membaca buku merah. Setiap hari Kamis, mereka membandingkan banyak halaman yang sudah dibaca. Berikut ini gambar yang menginformasikan banyak bagian buku yang sudah dibaca oleh Danu, Antok, dan Caca sampai hari Kamis minggu pertama.',
    illustration: 'reading-hobby',
    stemAfterIllustration:
      'Berdasarkan informasi mengenai jumlah halaman buku dan banyak bagian buku yang sudah dibaca oleh Danu, Antok, dan Caca di minggu pertama, tentukan **Benar** atau **Salah** untuk setiap pernyataan berikut!',
    statements: [
      {
        id: 'A',
        text: 'Danu sudah membaca 219 halaman.',
        correctAnswer: 'Benar',
        explanation:
          'Danu membaca buku biru (329 halaman) sebanyak [[frac:2:3]] bagian.\n[[frac:2:3]] × 329 = [[frac:658:3]] = 219,33... ≈ **219 halaman** yang sudah selesai dibaca (Benar).',
      },
      {
        id: 'B',
        text: 'Antok sudah membaca 170 halaman.',
        correctAnswer: 'Benar',
        explanation:
          'Antok membaca buku hijau (340 halaman) sebanyak 50%.\n50% × 340 = [[frac:1:2]] × 340 = **170 halaman** (Benar).',
      },
      {
        id: 'C',
        text: 'Caca sudah membaca 287 halaman.',
        correctAnswer: 'Salah',
        explanation:
          'Caca membaca buku merah (382 halaman) sebanyak [[frac:3:4]] bagian.\n[[frac:3:4]] × 382 = [[frac:1.146:4]] = **286,5 halaman**.\nArtinya Caca baru menyelesaikan **286 halaman** penuh (belum mencapai 287 halaman) (Salah).',
      },
    ],
    keySummary: 'Kunci Jawaban: A. Benar · B. Benar · C. Salah',
    steps: [
      {
        title: 'Langkah 1: Cocokkan anak dengan buku dan bagian bacanya',
        content:
          '• Danu → Buku Biru (329 halaman) → [[frac:2:3]] bagian\n• Antok → Buku Hijau (340 halaman) → 50%\n• Caca → Buku Merah (382 halaman) → [[frac:3:4]] bagian',
      },
      {
        title: 'Langkah 2: Hitung banyak halaman yang selesai dibaca',
        content:
          '• Danu: [[frac:2:3]] × 329 = 219[[frac:1:3]] → 219 halaman penuh (Benar).\n• Antok: 50% × 340 = 170 halaman (Benar).\n• Caca: [[frac:3:4]] × 382 = 286,5 → hanya 286 halaman selesai dibaca, belum 287 halaman (Salah).',
      },
    ],
  },
  {
    number: 29,
    competency:
      'Menyajikan, menganalisis, dan menginterpretasi data dalam bentuk diagram batang atau tabel.',
    competencyShort: 'Interpretasi Diagram Batang Ganda',
    type: 'PGK_MCMA',
    typeLabel: 'PGK MCMA',
    passageTitle: 'LEMAK SEHAT UNTUK ANAK',
    passageIntro:
      'Tahukah kamu bahwa lemak dan protein merupakan nutrisi penting untuk tubuh? Kebutuhan lemak dan protein harus terpenuhi agar kesehatan tubuh terjaga. Lemak dan protein sangat mudah ditemukan bahkan dalam satu jenis makanan, lho. Berikut ini informasi tentang makanan yang mengandung lemak dan protein.',
    stem: '',
    illustration: 'nutrition-chart-kids',
    stemAfterIllustration:
      'Anak berusia 10 - 12 tahun membutuhkan protein paling sedikit 55 gram dalam sehari. Jika disediakan makanan berikut dengan berat masing-masing 250 gram, tentukanlah makanan yang dapat memenuhi kebutuhan protein harian mereka! Pilihlah jawaban yang benar! Jawaban benar lebih dari satu.',
    options: [
      {
        id: '1',
        text: 'Daging sapi',
        isCorrect: true,
        explanation:
          'Dalam 100 g daging sapi terdapat 26 g protein. Untuk 250 g (2,5 kali lipat):\n2,5 × 26 g = **65 gram protein** (≥ 55 gram → Memenuhi).',
      },
      {
        id: '2',
        text: 'Telur ayam',
        isCorrect: false,
        explanation:
          'Dalam 100 g telur ayam terdapat 13 g protein. Untuk 250 g:\n2,5 × 13 g = **32,5 gram protein** (< 55 gram → Tidak memenuhi).',
      },
      {
        id: '3',
        text: 'Ikan',
        isCorrect: true,
        explanation:
          'Dalam 100 g ikan terdapat 22 g protein. Untuk 250 g:\n2,5 × 22 g = **55 gram protein** (≥ 55 gram → Memenuhi).',
      },
    ],
    keySummary: 'Kunci Jawaban: Pernyataan 1 (Daging sapi) dan Pernyataan 3 (Ikan)',
    steps: [
      {
        title: 'Langkah 1: Baca nilai protein (batang biru) dalam 100 gram makanan',
        content:
          '• Daging sapi = 26 gram\n• Telur ayam = 13 gram\n• Ikan = 22 gram',
      },
      {
        title: 'Langkah 2: Hitung kandungan protein untuk 250 gram makanan',
        content:
          '250 gram = [[frac:250:100]] = **2,5 kali** porsi 100 gram.\n• Daging sapi: 2,5 × 26 = **65 g** (≥ 55 g ✓)\n• Telur ayam: 2,5 × 13 = **32,5 g** (< 55 g ✗)\n• Ikan: 2,5 × 22 = **55 g** (≥ 55 g ✓)',
      },
    ],
  },
  {
    number: 30,
    competency:
      'Menyajikan, menganalisis, dan menginterpretasi data dalam bentuk diagram batang atau tabel.',
    competencyShort: 'Analisis Dua Diagram Batang',
    type: 'PGK_KATEGORI',
    typeLabel: 'PGK Kategori',
    passageTitle: 'LEMAK SEHAT UNTUK ANAK',
    passageIntro:
      'Tahukah kamu bahwa lemak dan protein merupakan nutrisi penting untuk tubuh? Kebutuhan lemak dan protein harus terpenuhi agar kesehatan tubuh terjaga. Lemak dan protein sangat mudah ditemukan bahkan dalam satu jenis makanan, lho. Berikut ini informasi tentang makanan yang mengandung lemak dan protein.',
    stem: 'Menurut Kementerian Kesehatan RI, ibu hamil harus mengonsumsi lebih banyak makanan yang mengandung protein dan lemak. Hal ini disarankan agar memastikan jaringan dan organ bayi dapat tumbuh dengan baik. Ibu hamil perlu mengonsumsi 70 hingga 100 gram protein setiap hari, sedangkan lemak dapat dikonsumsi sebanyak 62 hingga 67 gram dalam sehari.\n\nSuatu hari, seorang ibu hamil mencatat banyak lemak dan protein yang dikonsumsi sebagai berikut.',
    illustration: 'nutrition-chart-pregnant',
    stemAfterIllustration:
      'Berdasarkan informasi tersebut, tentukanlah **Benar** atau **Salah** pernyataan berikut mengenai kebutuhan lemak dan protein seorang ibu hamil jika menambah konsumsi makanan!',
    statements: [
      {
        id: 'A',
        text: 'Ibu hamil dapat menambah konsumsi 50 gram ikan untuk memenuhi kebutuhan protein.',
        correctAnswer: 'Salah',
        explanation:
          'Protein sudah dikonsumsi = 58 g. 50 g ikan mengandung [[frac:50:100]] × 22 = 11 g protein.\nTotal protein = 58 + 11 = **69 gram**. Kebutuhan minimal protein adalah 70 gram (70–100 g), jadi masih kurang 1 gram (Salah).',
      },
      {
        id: 'B',
        text: 'Ibu hamil dapat menambah konsumsi 50 gram keju untuk memenuhi kebutuhan lemak.',
        correctAnswer: 'Benar',
        explanation:
          'Lemak sudah dikonsumsi = 46 g. 50 g keju mengandung [[frac:50:100]] × 33 = 16,5 g lemak.\nTotal lemak = 46 + 16,5 = **62,5 gram**. Nilai ini masuk dalam rentang kebutuhan lemak 62–67 gram (Benar).',
      },
      {
        id: 'C',
        text: 'Ibu hamil dapat menambah konsumsi 50 gram daging sapi untuk memenuhi kebutuhan protein.',
        correctAnswer: 'Benar',
        explanation:
          'Protein sudah dikonsumsi = 58 g. 50 g daging sapi mengandung [[frac:50:100]] × 26 = 13 g protein.\nTotal protein = 58 + 13 = **71 gram**. Nilai ini masuk dalam rentang kebutuhan protein 70–100 gram (Benar).',
      },
    ],
    keySummary: 'Kunci Jawaban: A. Salah · B. Benar · C. Benar',
    steps: [
      {
        title: 'Langkah 1: Baca konsumsi ibu hamil dari grafik kuning',
        content:
          '• Lemak yang sudah dikonsumsi = **46 gram** (target: 62–67 gram)\n• Protein yang sudah dikonsumsi = **58 gram** (target: 70–100 gram)',
      },
      {
        title: 'Langkah 2: Hitung tambahan gizi dari 50 gram makanan (setengah dari 100 g)',
        content:
          '• 50 g ikan → protein [[frac:1:2]] × 22 = 11 g → total 58 + 11 = 69 g (< 70 g, Salah)\n• 50 g keju → lemak [[frac:1:2]] × 33 = 16,5 g → total 46 + 16,5 = 62,5 g (di antara 62–67 g, Benar)\n• 50 g daging sapi → protein [[frac:1:2]] × 26 = 13 g → total 58 + 13 = 71 g (di antara 70–100 g, Benar)',
      },
    ],
  },
];
