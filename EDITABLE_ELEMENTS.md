# 📝 Panduan Edit Elemen Poster RUANG JEDA

Poster ini sekarang menggunakan sistem modular berbasis data yang memungkinkan Anda untuk dengan mudah mengedit, menambah, atau menghapus elemen-elemen tanpa harus menyentuh banyak file komponen.

## 🎯 File Konfigurasi Utama

**Lokasi:** `src/data/posterData.ts`

Semua konten poster (teks, statistik, warna, dll.) disimpan dalam file ini. Anda hanya perlu mengedit file ini untuk mengubah seluruh konten poster.

---

## 📋 Struktur Data

### 1. **Header (Bagian Atas)**

```typescript
header: {
  logos: [...]           // Array ikon logo (bisa ditambah/dikurangi)
  teamInfo: {
    teamName: "..."      // Nama tim
    members: [...]       // Array anggota tim
    advisor: "..."       // Nama dosen pembimbing
    institution: "..."   // Nama institusi
  }
  title: "..."           // Judul utama
  subtitle: "..."        // Subtitle
  tagline: "..."         // Tagline/slogan
}
```

**Cara Edit:**
```typescript
// Ubah nama tim
teamInfo: {
  teamName: "Tim GEMASTIK XVIII",
  ...
}

// Tambah/hapus logo
logos: [
  { icon: Award, color: "#ffc4a3", ... },
  { icon: Heart, color: "#c4b5fd", ... },
  // Tambahkan baris baru atau hapus untuk menambah/mengurangi logo
]
```

---

### 2. **Left Column - "The Why & The Who"**

```typescript
leftColumn: {
  title: "..."              // Judul section
  subtitle: "..."           // Subtitle section
  sdg: {
    badge: "..."            // Teks SDG badge
    target: "..."           // Deskripsi target
  }
  statistics: [
    { value: "80%", description: "..." },
    { value: "70%", description: "..." }
  ]
  problems: [
    { text: "..." },
    // Tambahkan baris baru untuk problem baru
  ]
  userEnvironment: [
    { icon: Smartphone, label: "...", description: "..." },
    // Tambahkan baris baru untuk item baru
  ]
}
```

**Contoh - Menambah Statistik:**
```typescript
statistics: [
  { value: "80%", description: "Mahasiswa rentan stres krusial" },
  { value: "70%", description: "Menunda mencari bantuan konselor" },
  { value: "50%", description: "Statistik baru" }, // ← Tambahkan baris ini
]
```

**Contoh - Menghapus Problem:**
```typescript
problems: [
  { text: 'Merasa "belum cukup parah"' },
  // Hapus baris yang tidak diinginkan
  { text: "Terjebak doomscrolling saat burnout" }
]
```

---

### 3. **Middle Column - "The How"**

```typescript
middleColumn: {
  title: "..."
  subtitle: "..."
  designPerspective: {
    from: "..."            // Perspektif lama
    to: "..."              // Perspektif baru
  }
  hcdSteps: [
    {
      icon: Heart,
      title: "Empathize",
      description: "...",
      color: "#ffc4a3"
    },
    // Tambah/hapus step HCD
  ]
  colorPalette: [
    { color: "#1a1f3a", name: "...", description: "..." },
    // Tambah/hapus warna
  ]
}
```

**Contoh - Menambah Step HCD:**
```typescript
hcdSteps: [
  { icon: Heart, title: "Empathize", ... },
  { icon: Pencil, title: "Define", ... },
  { icon: Lightbulb, title: "Ideate", ... },
  { icon: TestTube, title: "Prototype & Test", ... },
  { icon: Star, title: "Deploy", description: "Peluncuran produk", color: "#ffc4a3" }, // ← Baru
]
```

---

### 4. **Right Column - "The Solution"**

```typescript
rightColumn: {
  title: "..."
  subtitle: "..."
  sectionTitle: "..."
  features: [
    {
      icon: BookOpen,
      title: "Safe Space Notes",
      description: "...",
      highlightText: "...",
      color: "#ffc4a3",
      mockupType: "safeSpace"
    },
    // Tambah/hapus fitur
  ]
}
```

**Contoh - Menambah Fitur:**
```typescript
features: [
  { icon: BookOpen, title: "Safe Space Notes", ... },
  { icon: Brain, title: "AI Sentiment Triage", ... },
  { icon: Send, title: "One-Tap BKM Routing", ... },
  { 
    icon: Bell, 
    title: "Smart Notifications", 
    description: "Pengingat aktivitas sehat",
    highlightText: "Notifikasi Cerdas.",
    color: "#c4b5fd",
    mockupType: "safeSpace" // Gunakan mockup yang sudah ada
  }, // ← Fitur baru
]
```

---

### 5. **Mockup Data**

```typescript
mockups: {
  safeSpace: {
    messages: [
      { text: "...", isAI: false },
      { text: "...", isAI: true },
    ],
    inputPlaceholder: "..."
  }
  aiTriage: {
    tier: "...",
    percentage: 65,
    recommendations: [...]
  }
  bkmRouting: {
    infoText: "...",
    schedule: "...",
    buttonText: "..."
  }
}
```

**Contoh - Menambah Pesan di Safe Space:**
```typescript
messages: [
  { text: "Capek banget hari ini...", isAI: false },
  { text: "Saya dengar kamu...", isAI: true },
  { text: "Pesan user baru", isAI: false }, // ← Tambahkan pesan baru
]
```

---

## 🎨 Mengubah Ikon

Ikon menggunakan library `lucide-react`. Untuk mengubah ikon:

1. **Lihat daftar ikon yang tersedia:** https://lucide.dev/icons
2. **Import ikon yang diinginkan di `posterData.ts`:**
   ```typescript
   import { Award, Heart, Star, Zap } from "lucide-react";
   ```
3. **Gunakan di data:**
   ```typescript
   logos: [
     { icon: Star, color: "#ffc4a3", ... }, // ← Ganti dari Award ke Star
   ]
   ```

---

## 🎨 Mengubah Warna

Warna menggunakan format hex. Beberapa warna tema:
- **Muted Peach:** `#ffc4a3`
- **Soft Lilac:** `#c4b5fd`
- **Deep Indigo:** `#1a1f3a`

**Contoh:**
```typescript
statistics: [
  { value: "80%", description: "..." },
]

// Warna statistik bisa diubah di komponen StatCard di posterData
```

---

## ✅ Checklist Edit

1. ✏️ Buka file `src/data/posterData.ts`
2. 🔍 Cari section yang ingin diedit (header, leftColumn, middleColumn, rightColumn, mockups)
3. ✂️ Edit/tambah/hapus data sesuai kebutuhan
4. 💾 Save file
5. 🔄 Refresh browser untuk melihat perubahan

---

## 🚀 Fitur Lanjutan

### Menambah Logo/Ikon Baru
```typescript
logos: [
  ...logos,
  { 
    icon: Shield,           // Import dari lucide-react
    color: "#22c55e",       // Warna hijau
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30"
  }
]
```

### Mengubah Urutan Elemen
Cukup pindahkan posisi object dalam array:
```typescript
// Sebelum
features: [featureA, featureB, featureC]

// Sesudah (B jadi pertama)
features: [featureB, featureA, featureC]
```

### Menghapus Elemen
Hapus object dari array atau comment dengan `//`:
```typescript
problems: [
  { text: "Problem 1" },
  // { text: "Problem 2" }, // ← Di-comment = tidak ditampilkan
  { text: "Problem 3" }
]
```

---

## 📁 Struktur File

```
src/
├── data/
│   └── posterData.ts          # ← FILE UTAMA UNTUK EDIT
├── app/
│   ├── components/
│   │   ├── Header.tsx         # Komponen header
│   │   ├── LeftColumn.tsx     # Komponen kolom kiri
│   │   ├── MiddleColumn.tsx   # Komponen kolom tengah
│   │   ├── RightColumn.tsx    # Komponen kolom kanan
│   │   ├── MockupSafeSpace.tsx
│   │   ├── MockupAITriage.tsx
│   │   ├── MockupBKMRouting.tsx
│   │   └── ui/                # Komponen utilitas
│   │       ├── IconBox.tsx
│   │       ├── SectionHeader.tsx
│   │       ├── StatCard.tsx
│   │       └── InfoCard.tsx
│   └── App.tsx                # Main app component
```

**💡 Pro Tip:** Anda tidak perlu menyentuh file komponen di folder `components/`. Cukup edit `posterData.ts`!

---

## ❓ FAQ

**Q: Bagaimana cara menambah statistik baru?**  
A: Tambahkan object baru di array `statistics` dalam `leftColumn`.

**Q: Bisa ubah ukuran font?**  
A: Ya, ubah class Tailwind di komponen yang sesuai (contoh: `text-xl` menjadi `text-2xl`).

**Q: Bagaimana cara menghapus fitur?**  
A: Hapus atau comment object fitur di array `features` dalam `rightColumn`.

**Q: Bisa ganti warna tema?**  
A: Ya, ubah nilai color di data (contoh: `#ffc4a3` menjadi `#ff6b6b`).

---

## 💡 Tips

1. **Backup data** sebelum melakukan perubahan besar
2. **Test setelah setiap perubahan** untuk memastikan tidak ada error
3. **Gunakan TypeScript autocomplete** (Ctrl+Space) untuk melihat opsi yang tersedia
4. **Konsisten dengan warna tema** untuk menjaga kohesivitas desain

---

**🎉 Selamat mengedit! Jika ada pertanyaan, silakan hubungi developer.**
