# 🫂 Ruang Jeda - Aplikasi Kesehatan Mental Mahasiswa

## 📱 Tentang Aplikasi

**Ruang Jeda** adalah aplikasi web mobile interaktif yang dirancang khusus untuk mendukung kesehatan mental mahasiswa. Aplikasi ini menggunakan pendekatan **Human-Centered Design** dengan palet warna **"Twilight Horizon"** yang empatik dan menenangkan.

---

## 🎨 Design System

### Palet Warna
- **Deep Indigo/Navy** (`#1A1B41`) - Background utama yang menenangkan
- **Muted Peach** (`#FFD5BA`) - Tombol utama yang hangat
- **Soft Lilac** (`#B983FF`) - Elemen interaktif yang empat

### Filosofi Desain
- ✨ **Minimalis & Modern** - Tanpa distraksi berlebihan
- 🫂 **Empatik** - Memberikan kesan "pelukan hangat"
- 🔒 **Privat & Aman** - Menjamin kerahasiaan pengguna
- 📱 **Mobile-First** - Dioptimalkan untuk penggunaan mobile

### Tipografi
- **Font**: Plus Jakarta Sans
- **Karakteristik**: Bersih, mudah dibaca, sangat cocok untuk keterbacaan tinggi bagi mahasiswa yang lelah

---

## 🗺️ Alur Aplikasi

### 1️⃣ Layar 1: Beranda Jurnal (The Safe Space)
**Fungsi:** Tempat mahasiswa menumpahkan beban kognitif

**Fitur:**
- Sambutan personal yang hangat
- Text area luas untuk journaling bebas
- Tombol "Jeda Sejenak" untuk submit
- Bottom navigation (Home, Riwayat, Profil)

**UX Flow:**
```
User membuka app → Melihat sambutan → Menuliskan perasaan → Submit
```

---

### 2️⃣ Layar 2: Deteksi Level Kecemasan (AI Triage)
**Fungsi:** Menampilkan hasil analisis sentimen AI

**Fitur:**
- Visualisasi lingkaran animasi yang berubah warna sesuai tier
- Pesan validasi emosional
- Sistem triage 3 level:
  - **Tier 1** (Ringan) - Hijau 🟢
  - **Tier 2** (Sedang) - Kuning 🟡
  - **Tier 3** (Tinggi) - Merah 🔴

**Logic AI (Simulasi):**
```typescript
// Kata kunci untuk deteksi tier
Tier 3: "krisis", "bunuh diri", "menyerah"
Tier 2: "cemas", "stress", "capek", "lelah"
Tier 1: kondisi lainnya
```

**UX Flow:**
```
Analisis selesai → Tampilkan tier → Berikan pesan empatik → Arahkan ke intervensi
```

---

### 3️⃣ Layar 3: Latihan Pernapasan (Breathing Exercise)
**Fungsi:** Intervensi instan untuk Tier 2 (menurunkan kecemasan)

**Fitur:**
- Animasi lingkaran pernapasan 4-7-8
  - **4 detik** - Tarik napas
  - **7 detik** - Tahan napas
  - **8 detik** - Buang napas
- Instruksi dinamis real-time
- Auto-repeat 3 siklus
- Overlay gelap untuk fokus
- Tombol "Saya sudah merasa lebih tenang"

**Manfaat Teknik 4-7-8:**
- Menurunkan detak jantung
- Menenangkan sistem saraf
- Meningkatkan fokus
- Mengurangi kecemasan akut

**UX Flow:**
```
User menekan "Mulai" → Ikuti animasi pernapasan → Selesai 3 siklus → Lanjut ke musik
```

---

### 4️⃣ Layar 4: Playlist Relaksasi (Music Integration)
**Fungsi:** Distraksi positif & relaksasi

**Fitur:**
- 4 pilihan playlist curated:
  - 💻 **Lo-fi untuk Coding** - Beats santai untuk fokus
  - 🌧️ **Suara Hujan Tengah Malam** - Ambient alami
  - 📚 **Ambient Perpustakaan** - Suara ruang belajar
  - 🎹 **Piano Klasik Malam** - Melodi menenangkan
- Mini player dengan waveform visualization
- Kontrol play/pause, volume
- Animasi waveform interaktif

**UX Flow:**
```
Pilih playlist → Play musik → Nikmati relaksasi → Lanjutkan journey
```

---

### 5️⃣ Layar 5: Rujukan BKM (Crisis Action - Tier 3)
**Fungsi:** Koneksi langsung ke konselor kampus

**Fitur:**
- Empathy card dengan pesan empatik
- Info konselor profesional:
  - Nama & kredensial
  - Jadwal tersedia
  - Pilihan online/offline
- Tombol high-contrast "Hubungi BKM (Satu Klik)"
- Jaminan privasi & kerahasiaan data
- Hotline darurat 119

**Yang Pengguna Dapatkan:**
✓ Konsultasi privat dengan psikolog profesional  
✓ Ruang aman tanpa judgement  
✓ Strategi coping personalized  
✓ Follow-up berkelanjutan  

**UX Flow:**
```
Deteksi Tier 3 → Tampilkan empathy message → Info konselor → One-tap connect
```

---

## 🔄 User Journey Complete

```
┌─────────────────────────────────────────────────────────────┐
│  1. HOME (Journal)                                           │
│     ↓ Submit                                                 │
│  2. TRIAGE (AI Analysis)                                     │
│     ↓                                                        │
│  ┌──────────┬──────────┬──────────┐                         │
│  │ Tier 1   │ Tier 2   │ Tier 3   │                         │
│  │ (Ringan) │ (Sedang) │ (Tinggi) │                         │
│  └────┬─────┴─────┬────┴─────┬────┘                         │
│       ↓           ↓          ↓                               │
│    MUSIC    BREATHING   COUNSELING                           │
│               ↓                                              │
│            MUSIC                                             │
│               ↓                                              │
│            HOME                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## 🎯 Fitur Unggulan

### 1. **Glassmorphism Design**
- Efek kaca blur untuk estetika premium
- Border subtle dengan opacity
- Background semi-transparan

### 2. **Noise Texture Background**
- Tekstur halus SVG untuk menghindari tampilan flat
- Opacity rendah untuk tidak mengganggu
- Pattern garis subtle untuk kedalaman visual

### 3. **Smooth Animations**
- Framer Motion untuk transisi halus
- Animasi pernapasan yang menenangkan
- Waveform musik yang interaktif
- Page transitions yang smooth

### 4. **Empathetic Messaging**
- Bahasa yang hangat & tidak judgmental
- Validasi emosional pengguna
- Pesan personalized berdasarkan kondisi

### 5. **Privacy First**
- Data lokal (journal entries di state)
- Explicit consent sebelum kontak BKM
- Transparansi penggunaan data

---

## 🛠️ Teknologi

- **Framework**: React + TypeScript
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **Font**: Plus Jakarta Sans
- **Icons**: Lucide React

---

## 📱 Responsive Design

Aplikasi dioptimalkan untuk:
- 📱 Mobile (375px - 428px)
- 📱 Tablet (768px+)
- 💻 Desktop (max-width: 448px container)

---

## 🔮 Pengembangan Selanjutnya

- [ ] Ganti warna backround teks pada safe space journaling menjadi #ffc4a3 dan warna teks menjadi hitam
- [ ] Tab riwayat yang berisi dummy history chat
- [ ] Lengkapi tab profil
- [ ] Ubah animasi lingkaran aturan nafas. 4 detik menghirup lingkaran membesar. 7 detik tahan lingkaran tetap. 8 detik hembus lingkaran mengecil.

---

## 🧪 Testing Scenarios

### Test Case 1: Normal Flow (Tier 2)
1. Buka app → Tulis journal: "Capek banget hari ini, banyak deadline"
2. Submit → Sistem deteksi Tier 2
3. Muncul breathing exercise → Ikuti 3 siklus
4. Lanjut ke music → Play playlist
5. Kembali ke home

### Test Case 2: Crisis Flow (Tier 3)
1. Tulis journal dengan kata kunci krisis
2. Submit → Sistem deteksi Tier 3
3. Langsung redirect ke counseling screen
4. Tampilkan info BKM & tombol connect

### Test Case 3: Light Flow (Tier 1)
1. Tulis journal positif/netral
2. Submit → Sistem deteksi Tier 1
3. Langsung ke music (skip breathing)
4. Kembali ke home

---

## 📞 Support

Untuk feedback atau bantuan:
- **Developer**: Muhammad Akmal Fazli Riyadi
- **Email**: [email kampus]
- **Institution**: Informatika Universitas Diponegoro

---

## 🌟 Visi

Menjadi **first-aid mental health tool** yang:
- Menurunkan stigma mencari bantuan psikologis
- Memotong birokrasi akses konseling
- Memberikan intervensi instan saat dibutuhkan
- Menjembatani mahasiswa dengan layanan BKM

**"Tidak apa-apa untuk merasa tidak baik-baik saja. Kami di sini untuk mendengarkan."** 💜

---

## 📜 License

Proyek ini dibuat untuk kompetisi GEMASTIK XVIII 2025.
