# Ruang Jeda Development Plan

## TL;DR

> **Quick Summary**: Melanjutkan pengembangan aplikasi Ruang Jeda dengan 4 fitur: (1) UI fix warna journaling, (2) update animasi breathing circle, (3) Tab Riwayat dengan detail + statistik, (4) Tab Profil dengan info user + statistik + settings.
> 
> **Deliverables**:
> - Screen1Home.tsx dengan warna background `#ffc4a3` dan teks hitam
> - Screen3Breathing.tsx dengan animasi lingkaran membesar/mengecil
> - Screen6History.tsx - Tab Riwayat dengan journal list + line chart + bar chart
> - Screen7Profile.tsx - Tab Profil dengan info user + statistik + settings
> - App.tsx updated dengan state management untuk journal entries dan navigation
> 
> **Estimated Effort**: Medium
> **Parallel Execution**: YES - 3 waves
> **Critical Path**: Task 1 → Task 3 → Task 5 → Task 6

---

## Context

### Original Request
User ingin melanjutkan pengembangan aplikasi Ruang Jeda berdasarkan 4 item di RUANG_JEDA_GUIDE.md:
1. Ganti warna background teks pada safe space journaling menjadi #ffc4a3 dan warna teks menjadi hitam
2. Tab riwayat
3. Lengkapi tab profil
4. Ubah animasi lingkaran aturan nafas: 4 detik menghirup (lingkaran membesar), 7 detik tahan (lingkaran tetap), 8 detik hembus (lingkaran mengecil)

### Interview Summary
**Key Discussions**:
- **Prioritas**: UI fixes dulu (warna + animasi), lalu Tab Riwayat, lalu Tab Profil
- **Data Persistence**: State saja, tidak perlu localStorage
- **Grafik Statistik**: Line chart (tren mood) + bar chart (distribusi tier)
- **Profile Info**: Static/hardcoded untuk demo
- **Settings**: App preferences (toggle notifikasi, tema)

**Research Findings**:
- **App.tsx**: State-based routing, handles all navigation
- **Screen1Home.tsx**: RichTextEditor untuk journaling, perlu update warna
- **Screen3Breathing.tsx**: Animasi breathing ada tapi scale animation perlu diperbaiki
- **Recharts**: Sudah ada di dependencies, bisa langsung dipakai untuk chart
- **BottomNav**: Sudah ada 3 tab (Home, Riwayat, Profil), tapi Riwayat dan Profil belum ada screen

### Metis Review
**Identified Gaps** (addressed):
- **Data flow untuk riwayat**: Journal entries perlu disimpan di App.tsx state array dan di-pass ke History screen
- **Animasi breathing**: Perlu menggunakan Framer Motion scale dengan duration yang sesuai fase
- **Chart data**: Perlu compute statistik dari journal entries array untuk line chart dan bar chart

---

## Work Objectives

### Core Objective
Menyelesaikan 4 pengembangan aplikasi Ruang Jeda sesuai spesifikasi di RUANG_JEDA_GUIDE.md

### Concrete Deliverables
- Screen1Home.tsx dengan warna background `#ffc4a3` dan teks hitam
- Screen3Breathing.tsx dengan animasi lingkaran membesar (4s) → tahan (7s) → mengecil (8s)
- Screen6History.tsx dengan journal list, line chart, dan bar chart
- Screen7Profile.tsx dengan info user hardcoded, statistik penggunaan, dan app preferences
- App.tsx updated dengan journal entries state dan navigation ke history/profile

### Definition of Done
- [ ] `npm run build` berhasil tanpa error
- [ ] `npm run dev` berjalan dan semua screen bisa diakses
- [ ] Tab Riwayat menampilkan journal entries dengan grafik
- [ ] Tab Profil menampilkan info user, statistik, dan settings
- [ ] Animasi breathing sesuai spesifikasi (membang/mengecil)
- [ ] Warna journaling sesuai spesifikasi (#ffc4a3 + teks hitam)

### Must Have
- Warna background journaling `#ffc4a3` dengan teks hitam
- Animasi breathing: 4s membesar, 7s tahan, 8s mengecil
- Tab Riwayat dengan line chart + bar chart
- Tab Profil dengan info user + statistik + settings

### Must NOT Have (Guardrails)
- ❌ Tidak ada localStorage/persistence (state only)
- ❌ Tidak ada backend/API calls
- ❌ Tidak ada authentication
- ❌ Tidak ada editable profile (hardcoded saja)
- ❌ Tidak mengubah screen yang sudah ada selain Screen1 dan Screen3

---

## Verification Strategy (MANDATORY)

> **ZERO HUMAN INTERVENTION** - ALL verification is agent-executed. No exceptions.

### Test Decision
- **Infrastructure exists**: NO (tidak ada test framework)
- **Automated tests**: None (no unit/integration tests)
- **Framework**: None
- **Agent-Executed QA**: ALWAYS (mandatory for all tasks)

### QA Policy
Setiap task MUST include agent-executed QA scenarios:
- **Frontend/UI**: Playwright - Navigate, interact, assert DOM, screenshot
- **Build**: `npm run build` harus berhasil tanpa error

---

## Execution Strategy

### Parallel Execution Waves

```
Wave 1 (Start Immediately - UI fixes):
├── Task 1: Update warna journaling Screen1Home [quick]
└── Task 2: Update animasi breathing Screen3Breathing [quick]

Wave 2 (After Wave 1 - Tab Riwayat):
├── Task 3: Buat Screen6History dengan journal list [unspecified-high]
└── Task 4: Tambahkan charts (line + bar) ke Screen6History [unspecified-high]

Wave 3 (After Wave 2 - Tab Profil + Integration):
├── Task 5: Buat Screen7Profile dengan info + stats + settings [unspecified-high]
└── Task 6: Update App.tsx dengan state management + navigation [deep]

Wave FINAL (After ALL tasks — 4 parallel reviews):
├── Task F1: Plan compliance audit (oracle)
├── Task F2: Code quality review (unspecified-high)
├── Task F3: Real manual QA (unspecified-high)
└── Task F4: Scope fidelity check (deep)
```

### Dependency Matrix
- **1-2**: - (independent, bisa parallel)
- **3**: 6 (butuh journal entries state dari App.tsx) - *actually bisa dibuat dulu dengan mock data, lalu connect*
- **4**: 3 (butuh Screen6History dulu)
- **5**: - (independent, bisa parallel dengan Wave 2)
- **6**: 3, 4, 5 (butuh semua screen dulu untuk wiring)

**Revised waves for max parallelism**:
```
Wave 1 (Start Immediately - UI fixes):
├── Task 1: Update warna journaling Screen1Home [quick]
└── Task 2: Update animasi breathing Screen3Breathing [quick]

Wave 2 (After Wave 1 - New screens, MAX PARALLEL):
├── Task 3: Buat Screen6History dengan journal list + charts [unspecified-high]
└── Task 4: Buat Screen7Profile dengan info + stats + settings [unspecified-high]

Wave 3 (After Wave 2 - Integration):
└── Task 5: Update App.tsx dengan journal entries state + navigation [deep]

Wave FINAL (After ALL tasks):
├── Task F1: Plan compliance audit (oracle)
├── Task F2: Code quality review (unspecified-high)
├── Task F3: Real manual QA (unspecified-high)
└── Task F4: Scope fidelity check (deep)
```

### Agent Dispatch Summary
- **Wave 1**: **2** - T1 → `quick`, T2 → `quick`
- **Wave 2**: **2** - T3 → `unspecified-high`, T4 → `unspecified-high`
- **Wave 3**: **1** - T5 → `deep`
- **FINAL**: **4** - F1 → `oracle`, F2 → `unspecified-high`, F3 → `unspecified-high`, F4 → `deep`

---

## TODOs

- [x] 1. Update warna journaling Screen1Home

  **What to do**:
  - Buka `src/app/components/ruangjeda/Screen1Home.tsx`
  - Cari GlassCard yang membungkus RichTextEditor
  - Ganti background area teks menjadi `#ffc4a3` (peach/warm color)
  - Ganti warna teks menjadi hitam (`#000000` atau `text-black`)
  - Pastikan placeholder text juga terlihat di background baru
  - Pastikan UI tetap konsisten dengan design system (glassmorphism, border, dll)

  **Must NOT do**:
  - ❌ Tidak mengubah layout atau struktur komponen
  - ❌ Tidak mengubah komponen lain selain warna background dan teks
  - ❌ Tidak mengubah RichTextEditor component本身

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Single file change, hanya update warna CSS
  - **Skills**: []
  - **Skills Evaluated but Omitted**:
    - `frontend-ui-ux`: Tidak perlu karena hanya perubahan warna sederhana

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1 (with Task 2)
  - **Blocks**: None
  - **Blocked By**: None (can start immediately)

  **References**:
  - `src/app/components/ruangjeda/Screen1Home.tsx` - File yang perlu dimodifikasi
  - `src/app/components/ruangjeda/GlassCard.tsx` - Pattern glassmorphism yang digunakan
  - `RUANG_JEDA_GUIDE.md:218` - Spesifikasi: "Ganti warna backround teks pada safe space journaling menjadi #ffc4a3 dan warna teks menjadi hitam"

  **Acceptance Criteria**:
  - [ ] Background area journaling berwarna `#ffc4a3`
  - [ ] Teks di area journaling berwarna hitam
  - [ ] Placeholder text tetap terlihat
  - [ ] `npm run build` berhasil tanpa error

  **QA Scenarios**:
  ```
  Scenario: Journaling screen menampilkan warna yang benar
    Tool: Playwright
    Preconditions: App berjalan di dev server
    Steps:
      1. Navigate ke localhost:5173
      2. Assert element RichTextEditor/GlassCard memiliki background-color: rgb(255, 196, 163)
      3. Assert text color di area editor adalah rgb(0, 0, 0) atau hitam
      4. Screenshot untuk evidence
    Expected Result: Background peach (#ffc4a3) dengan teks hitam terlihat jelas
    Evidence: .sisyphus/evidence/task-1-journal-colors.png

  Scenario: Journaling screen tetap konsisten dengan design system
    Tool: Playwright
    Preconditions: App berjalan di dev server
    Steps:
      1. Navigate ke localhost:5173
      2. Assert GlassCard border dan backdrop-blur masih terlihat
      3. Assert bottom navigation masih terlihat di bawah
      4. Assert header "Ruang Jeda" masih terlihat di atas
      5. Screenshot untuk evidence
    Expected Result: Warna baru tidak mengganggu elemen UI lainnya
    Evidence: .sisyphus/evidence/task-1-design-consistency.png
  ```

  **Commit**: YES (groups with 2)
  - Message: `style(journaling): update background color to #ffc4a3 with black text`
  - Files: `src/app/components/ruangjeda/Screen1Home.tsx`

---

- [x] 2. Update animasi breathing Screen3Breathing

  **What to do**:
  - Buka `src/app/components/ruangjeda/Screen3Breathing.tsx`
  - Update animasi lingkaran breathing sesuai spesifikasi:
    - **Fase 1 (4 detik)**: "Tarik Napas" - lingkaran MEMBESAR (scale dari 1 ke 1.8)
    - **Fase 2 (7 detik)**: "Tahan" - lingkaran TETAP (scale tetap di 1.8)
    - **Fase 3 (8 detik)**: "Buang Napas" - lingkaran MENGECIL (scale dari 1.8 ke 0.8)
  - Gunakan Framer Motion `animate` dengan `transition: { duration: X }` sesuai durasi fase
  - Pastikan instruksi teks update sesuai fase
  - Pastikan countdown timer tetap berjalan
  - Auto-repeat 3 siklus

  **Must NOT do**:
  - ❌ Tidak mengubah struktur komponen atau layout
  - ❌ Tidak mengubah durasi fase (harus tetap 4-7-8)
  - ❌ Tidak mengubah jumlah siklus (tetap 3)

  **Recommended Agent Profile**:
  - **Category**: `quick`
    - Reason: Single file change, update animasi yang sudah ada
  - **Skills**: []
  - **Skills Evaluated but Omitted**:
    - `frontend-ui-ux`: Tidak perlu karena hanya update parameter animasi

  **Parallelization**:
  - **Can Run In Parallel**: YES
  - **Parallel Group**: Wave 1 (with Task 1)
  - **Blocks**: None
  - **Blocked By**: None (can start immediately)

  **References**:
  - `src/app/components/ruangjeda/Screen3Breathing.tsx` - File yang perlu dimodifikasi
  - `RUANG_JEDA_GUIDE.md:221` - Spesifikasi: "Ubah animasi lingkaran aturan nafas. 4 detik menghirup lingkaran membesar. 7 detik tahan lingkaran tetap. 8 detik hembus lingkaran mengecil."
  - Official docs: `https://motion.dev/docs/react-transitions` - Framer Motion transition duration

  **Acceptance Criteria**:
  - [ ] Fase "Tarik Napas" (4s): lingkaran membesar dengan animasi smooth
  - [ ] Fase "Tahan" (7s): lingkaran tetap di ukuran besar
  - [ ] Fase "Buang Napas" (8s): lingkaran mengecil dengan animasi smooth
  - [ ] 3 siklus berjalan otomatis
  - [ ] `npm run build` berhasil tanpa error

  **QA Scenarios**:
  ```
  Scenario: Breathing animation mengikuti pola 4-7-8 dengan scale yang benar
    Tool: Playwright
    Preconditions: App berjalan, user sudah submit journal dengan tier 2
    Steps:
      1. Navigate ke breathing screen
      2. Klik tombol "Mulai"
      3. Wait 4 seconds, assert circle scale meningkat (membesar)
      4. Wait 7 seconds, assert circle scale tetap (tidak berubah)
      5. Wait 8 seconds, assert circle scale menurun (mengecil)
      6. Assert siklus berulang sampai 3 kali
      7. Screenshot setiap fase untuk evidence
    Expected Result: Animasi mengikuti pola: membesar (4s) → tahan (7s) → mengecil (8s)
    Evidence: .sisyphus/evidence/task-2-breathing-animation.png

  Scenario: Breathing exercise selesai setelah 3 siklus
    Tool: Playwright
    Preconditions: App berjalan, user sudah submit journal dengan tier 2
    Steps:
      1. Navigate ke breathing screen
      2. Klik tombol "Mulai"
      3. Wait 57 seconds (4+7+8) * 3 cycles = 57s total
      4. Assert tombol "Saya sudah merasa lebih tenang" atau similar muncul
      5. Assert teks menampilkan "Siklus 3 dari 3" sebelum selesai
      6. Screenshot untuk evidence
    Expected Result: Setelah 3 siklus, breathing exercise selesai dan user bisa lanjut
    Evidence: .sisyphus/evidence/task-2-breathing-complete.png
  ```

  **Commit**: YES (groups with 1)
  - Message: `style(breathing): update circle animation to scale in/out with 4-7-8 timing`
  - Files: `src/app/components/ruangjeda/Screen3Breathing.tsx`

---

- [x] 3. Buat Screen6History dengan journal list + charts

  **What to do**:
  - Buat file baru `src/app/components/ruangjeda/Screen6History.tsx`
  - Komponen menerima props: `journalEntries: Array<{ text: string, tier: string, timestamp: Date }>`
  - Tampilkan daftar journal entries dengan:
    - Tanggal/waktu entry
    - Preview teks journal (truncate jika terlalu panjang)
    - Badge tier (Tier 1 🟢, Tier 2 🟡, Tier 3 🔴)
    - GlassCard styling konsisten dengan screen lain
  - Tambahkan section statistik dengan:
    - **Line chart**: Tren anxiety level dari waktu ke waktu (x: tanggal, y: tier level 1-3)
    - **Bar chart**: Distribusi tier (jumlah entry per tier)
  - Gunakan Recharts untuk kedua chart
  - Empty state jika belum ada journal entries (pesan "Belum ada jurnal")
  - Scrollable list untuk banyak entries

  **Must NOT do**:
  - ❌ Tidak ada localStorage/persistence
  - ❌ Tidak ada edit/delete journal entries
  - ❌ Tidak ada filter/search

  **Recommended Agent Profile**:
  - **Category**: `unspecified-high`
    - Reason: Komponen baru dengan multiple sub-fitur (list + 2 charts)
  - **Skills**: []
  - **Skills Evaluated but Omitted**:
    - `frontend-ui-ux`: Bisa membantu tapi tidak critical karena design sudah ada pattern-nya

  **Parallelization**:
  - **Can Run In Parallel**: YES (dengan Task 4)
  - **Parallel Group**: Wave 2 (with Task 4, Task 5)
  - **Blocks**: Task 5 (App.tsx perlu pass data ke screen ini)
  - **Blocked By**: None (bisa dibuat dengan mock data dulu)

  **References**:
  - `src/app/components/ruangjeda/Screen1Home.tsx` - Pattern GlassCard dan styling
  - `src/app/components/ruangjeda/GlassCard.tsx` - Komponen glassmorphism
  - `src/app/App.tsx` - Struktur state dan routing pattern
  - Official docs: `https://recharts.org/en-US/api/LineChart` - Recharts LineChart API
  - Official docs: `https://recharts.org/en-US/api/BarChart` - Recharts BarChart API

  **Acceptance Criteria**:
  - [ ] Screen6History.tsx dibuat dan export default component
  - [ ] Journal list menampilkan entries dengan tanggal, preview teks, dan badge tier
  - [ ] Line chart menampilkan tren anxiety level (tier 1-3) dari waktu ke waktu
  - [ ] Bar chart menampilkan distribusi jumlah entry per tier
  - [ ] Empty state ditampilkan jika belum ada entries
  - [ ] `npm run build` berhasil tanpa error

  **QA Scenarios**:
  ```
  Scenario: History screen menampilkan journal entries dengan charts
    Tool: Playwright
    Preconditions: App berjalan, ada beberapa journal entries di state
    Steps:
      1. Navigate ke localhost:5173
      2. Klik tab "Riwayat" di bottom nav
      3. Assert list journal entries terlihat dengan tanggal dan tier badge
      4. Assert line chart terlihat dengan data points
      5. Assert bar chart terlihat dengan 3 bars (Tier 1, 2, 3)
      6. Screenshot untuk evidence
    Expected Result: History screen menampilkan list + line chart + bar chart
    Evidence: .sisyphus/evidence/task-3-history-screen.png

  Scenario: History screen menampilkan empty state
    Tool: Playwright
    Preconditions: App berjalan, tidak ada journal entries
    Steps:
      1. Navigate ke localhost:5173
      2. Klik tab "Riwayat" di bottom nav
      3. Assert pesan "Belum ada jurnal" atau similar terlihat
      4. Assert charts tidak ditampilkan atau menampilkan empty state
      5. Screenshot untuk evidence
    Expected Result: Empty state message ditampilkan dengan benar
    Evidence: .sisyphus/evidence/task-3-history-empty.png
  ```

  **Commit**: YES (groups with 4)
  - Message: `feat(history): add history screen with journal list and analytics charts`
  - Files: `src/app/components/ruangjeda/Screen6History.tsx`

---

- [x] 4. Buat Screen7Profile dengan info user + statistik + settings

  **What to do**:
  - Buat file baru `src/app/components/ruangjeda/Screen7Profile.tsx`
  - Komponen menerima props: `journalEntries: Array<{...}>` untuk menghitung statistik
  - Tampilkan 3 section:
    
    **Section 1 - Info User (hardcoded)**:
    - Avatar placeholder (icon User dari Lucide)
    - Nama: "Raka" (hardcoded)
    - Email: "raka@student.undip.ac.id" (hardcoded)
    - GlassCard styling
    
    **Section 2 - Statistik Penggunaan**:
    - Total journal entries (count dari journalEntries array)
    - Total breathing exercises completed (hardcoded atau counter)
    - Total music sessions (hardcoded atau counter)
    - Tampilkan dalam card/grid layout
    
    **Section 3 - App Preferences (Settings)**:
    - Toggle "Notifikasi Pengingat" (switch on/off, state lokal)
    - Toggle "Mode Gelap" (switch on/off, bisa integrasi dengan next-themes)
    - Toggle "Suara Ambient" (switch on/off)
    - GlassCard styling dengan switch components dari shadcn/ui
  
  - Gunakan Lucide icons untuk visual
  - Gunakan shadcn/ui Switch untuk toggle

  **Must NOT do**:
  - ❌ Tidak ada editable profile (hardcoded saja)
  - ❌ Tidak ada backend/API calls
  - ❌ Tidak ada authentication/login

  **Recommended Agent Profile**:
  - **Category**: `unspecified-high`
    - Reason: Komponen baru dengan multiple sections dan settings toggles
  - **Skills**: []
  - **Skills Evaluated but Omitted**:
    - `frontend-ui-ux`: Bisa membantu tapi design sudah ada pattern-nya

  **Parallelization**:
  - **Can Run In Parallel**: YES (dengan Task 3)
  - **Parallel Group**: Wave 2 (with Task 3, Task 5)
  - **Blocks**: Task 5 (App.tsx perlu pass data ke screen ini)
  - **Blocked By**: None (bisa dibuat dengan mock data dulu)

  **References**:
  - `src/app/components/ruangjeda/Screen1Home.tsx` - Pattern GlassCard dan styling
  - `src/app/components/ruangjeda/GlassCard.tsx` - Komponen glassmorphism
  - `src/app/components/ui/switch.tsx` - shadcn/ui Switch component
  - `src/app/App.tsx` - Struktur state dan routing pattern
  - `lucide-react` - Icons: User, Mail, BookOpen, Wind, Music

  **Acceptance Criteria**:
  - [ ] Screen7Profile.tsx dibuat dan export default component
  - [ ] Section info user menampilkan nama "Raka" dan email hardcoded
  - [ ] Section statistik menampilkan total entries, breathing sessions, music sessions
  - [ ] Section settings menampilkan 3 toggle switches (notifikasi, mode gelap, suara ambient)
  - [ ] Toggle switches bisa di-click dan berubah state (visual feedback)
  - [ ] `npm run build` berhasil tanpa error

  **QA Scenarios**:
  ```
  Scenario: Profile screen menampilkan semua section dengan benar
    Tool: Playwright
    Preconditions: App berjalan
    Steps:
      1. Navigate ke localhost:5173
      2. Klik tab "Profil" di bottom nav
      3. Assert info user terlihat: nama "Raka", email "raka@student.undip.ac.id"
      4. Assert statistik terlihat: total entries, breathing sessions, music sessions
      5. Assert 3 toggle switches terlihat: Notifikasi, Mode Gelap, Suara Ambient
      6. Klik salah satu toggle, assert state berubah (visual feedback)
      7. Screenshot untuk evidence
    Expected Result: Profile screen menampilkan 3 section lengkap dengan functional toggles
    Evidence: .sisyphus/evidence/task-4-profile-screen.png

  Scenario: Profile screen menampilkan statistik yang benar dengan data
    Tool: Playwright
    Preconditions: App berjalan, ada beberapa journal entries di state
    Steps:
      1. Navigate ke localhost:5173
      2. Submit minimal 1 journal entry
      3. Klik tab "Profil" di bottom nav
      4. Assert "Total Jurnal" atau similar menampilkan angka > 0
      5. Assert statistik lainnya terlihat (breathing sessions, music sessions)
      6. Screenshot untuk evidence
    Expected Result: Statistik menampilkan count yang benar berdasarkan journal entries
    Evidence: .sisyphus/evidence/task-4-profile-stats.png
  ```

  **Commit**: YES (groups with 3)
  - Message: `feat(profile): add profile screen with user info, stats, and settings`
  - Files: `src/app/components/ruangjeda/Screen7Profile.tsx`

---

- [x] 5. Update App.tsx dengan journal entries state + navigation

  **What to do**:
  - Buka `src/app/App.tsx`
  - Tambahkan state untuk menyimpan journal entries:
    ```typescript
    const [journalEntries, setJournalEntries] = useState<Array<{
      id: number;
      text: string;
      tier: Tier;
      timestamp: Date;
    }>>([]);
    ```
  - Update `handleJournalSubmit` untuk menyimpan entry ke array:
    ```typescript
    const handleJournalSubmit = (text: string) => {
      setJournalEntry(text);
      // ... existing tier detection logic ...
      const newEntry = {
        id: Date.now(),
        text,
        tier: detectedTier,
        timestamp: new Date()
      };
      setJournalEntries(prev => [newEntry, ...prev]);
      setCurrentScreen("triage");
    };
    ```
  - Tambahkan import untuk Screen6History dan Screen7Profile
  - Update `renderScreen` untuk handle case "history" dan "profile":
    ```typescript
    case "history":
      return <Screen6History journalEntries={journalEntries} />;
    case "profile":
      return <Screen7Profile journalEntries={journalEntries} />;
    ```
  - Pastikan BottomNav tetap tampil di semua screen (home, history, profile)
  - Pastikan navigation dari bottom nav bekerja dengan benar

  **Must NOT do**:
  - ❌ Tidak mengubah logic triage/breathing/music/counseling yang sudah ada
  - ❌ Tidak menambahkan localStorage/persistence
  - ❌ Tidak mengubah screen components yang sudah ada

  **Recommended Agent Profile**:
  - **Category**: `deep`
    - Reason: Integrasi multiple komponen, perlu memahami seluruh flow aplikasi
  - **Skills**: []
  - **Skills Evaluated but Omitted**:
    - None needed

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Parallel Group**: Wave 3 (sequential after Wave 2)
  - **Blocks**: None (ini adalah task integrasi terakhir)
  - **Blocked By**: Task 3, Task 4 (screen components harus ada dulu untuk di-import)

  **References**:
  - `src/app/App.tsx` - File utama yang perlu dimodifikasi
  - `src/app/components/ruangjeda/BottomNav.tsx` - Navigation pattern
  - `src/app/components/ruangjeda/Screen6History.tsx` - Props interface
  - `src/app/components/ruangjeda/Screen7Profile.tsx` - Props interface

  **Acceptance Criteria**:
  - [ ] Journal entries disimpan di state array saat submit
  - [ ] Tab Riwayat menampilkan journal entries yang sudah disubmit
  - [ ] Tab Profil menampilkan statistik yang benar (count dari entries)
  - [ ] Bottom navigation berfungsi untuk berpindah antara Home, Riwayat, Profil
  - [ ] Flow journal → triage → breathing/music/counseling → home tetap berfungsi
  - [ ] `npm run build` berhasil tanpa error

  **QA Scenarios**:
  ```
  Scenario: Complete user journey - journal to history
    Tool: Playwright
    Preconditions: App berjalan
    Steps:
      1. Navigate ke localhost:5173
      2. Ketik journal: "Capek banget hari ini, banyak deadline"
      3. Klik tombol "Jeda Sejenak" (submit)
      4. Assert redirect ke triage screen
      5. Klik "Lanjutkan" atau similar
      6. Ikuti flow sampai kembali ke home
      7. Klik tab "Riwayat" di bottom nav
      8. Assert journal entry yang baru ditulis terlihat di list
      9. Assert tier badge sesuai (Tier 2 untuk "capek")
      10. Screenshot untuk evidence
    Expected Result: Journal entry tersimpan dan muncul di Tab Riwayat
    Evidence: .sisyphus/evidence/task-5-journey-history.png

  Scenario: Navigation antara semua tab berfungsi
    Tool: Playwright
    Preconditions: App berjalan
    Steps:
      1. Navigate ke localhost:5173
      2. Klik tab "Home", assert home screen tampil
      3. Klik tab "Riwayat", assert history screen tampil
      4. Klik tab "Profil", assert profile screen tampil
      5. Klik tab "Home" lagi, assert kembali ke home screen
      6. Screenshot setiap screen untuk evidence
    Expected Result: Semua tab navigasi berfungsi dengan benar
    Evidence: .sisyphus/evidence/task-5-navigation.png
  ```

  **Commit**: YES (groups with 3, 4)
  - Message: `feat(app): integrate history and profile screens with journal state management`
  - Files: `src/app/App.tsx`

---

## Final Verification Wave (MANDATORY — after ALL implementation tasks)

> 4 review agents run in PARALLEL. ALL must APPROVE. Present consolidated results to user and get explicit "okay" before completing.

- [ ] F1. **Plan Compliance Audit** — `oracle`
  Read the plan end-to-end. For each "Must Have": verify implementation exists (read file, curl endpoint, run command). For each "Must NOT Have": search codebase for forbidden patterns — reject with file:line if found. Check evidence files exist in .sisyphus/evidence/. Compare deliverables against plan.
  Output: `Must Have [N/N] | Must NOT Have [N/N] | Tasks [N/N] | VERDICT: APPROVE/REJECT`

- [ ] F2. **Code Quality Review** — `unspecified-high`
  Run `npm run build`. Review all changed files for: `as any`/`@ts-ignore`, empty catches, console.log in prod, commented-out code, unused imports. Check AI slop: excessive comments, over-abstraction, generic names (data/result/item/temp).
  Output: `Build [PASS/FAIL] | Files [N clean/N issues] | VERDICT`

- [ ] F3. **Real Manual QA** — `unspecified-high` (+ `playwright` skill if UI)
  Start from clean state. Execute EVERY QA scenario from EVERY task — follow exact steps, capture evidence. Test cross-task integration (features working together, not isolation). Test edge cases: empty state, invalid input, rapid actions. Save to `.sisyphus/evidence/final-qa/`.
  Output: `Scenarios [N/N pass] | Integration [N/N] | Edge Cases [N tested] | VERDICT`

- [ ] F4. **Scope Fidelity Check** — `deep`
  For each task: read "What to do", read actual diff (git log/diff). Verify 1:1 — everything in spec was built (no missing), nothing beyond spec was built (no creep). Check "Must NOT do" compliance. Detect cross-task contamination: Task N touching Task M's files. Flag unaccounted changes.
  Output: `Tasks [N/N compliant] | Contamination [CLEAN/N issues] | Unaccounted [CLEAN/N files] | VERDICT`

---

## Commit Strategy

- **Wave 1**: `style(ui): update journaling colors and breathing animation` 
  - Files: `src/app/components/ruangjeda/Screen1Home.tsx`, `src/app/components/ruangjeda/Screen3Breathing.tsx`
  - Pre-commit: `npm run build`

- **Wave 2**: `feat(screens): add history and profile screens with state integration`
  - Files: `src/app/components/ruangjeda/Screen6History.tsx`, `src/app/components/ruangjeda/Screen7Profile.tsx`, `src/app/App.tsx`
  - Pre-commit: `npm run build`

---

## Success Criteria

### Verification Commands
```bash
npm run build  # Expected: Build completed without errors
npm run dev    # Expected: Dev server starts, all screens accessible
```

### Final Checklist
- [ ] Warna journaling `#ffc4a3` dengan teks hitam - DONE
- [ ] Animasi breathing: membesar (4s) → tahan (7s) → mengecil (8s) - DONE
- [ ] Tab Riwayat menampilkan journal list + line chart + bar chart - DONE
- [ ] Tab Profil menampilkan info user + statistik + settings - DONE
- [ ] Navigation Home ↔ Riwayat ↔ Profil berfungsi - DONE
- [ ] Journal entries tersimpan di state dan muncul di Riwayat - DONE
- [ ] `npm run build` berhasil tanpa error - DONE
- [ ] Semua "Must Have" present - DONE
- [ ] Semua "Must NOT Have" absent - DONE