# iPhone Frame Alignment & Scroll Fixes

## TL;DR
> **Summary**: Perbaiki alignment UI di dalam frame iPhone, hilangkan garis putih, cegah konten atas hilang saat tab switch, dan batasi scroll agar tidak kosong berlebihan.
> **Deliverables**: perbaikan wrapper/scroll di `App.tsx`, update `NoiseTexture.tsx`, dan penyesuaian `min-h-screen` di screen components.
> **Effort**: Short
> **Parallel**: YES — 2 waves
> **Critical Path**: Task 1 → Task 2 → Task 3

## Context
### Original Request
"pada layar hp nya, tampilan ui tidak pas ditengah dan ada seperti garis putih di pojok kanan bawah dan atas. ketika ganti tab, objek dan teks yang ada pada bagian atas menghilang. buat agar objek pas di tengah dengan menggesernya atau mebesarkannya ke kanan. lalu, buat agar saat di scroll tidak terlalu jauh atau terlalu banyak space kosong ketika scroll sudah mentok"

### Interview Summary
- Centering approach: **Inner wrapper (max-width + mx-auto)**
- Tab switch scroll: **Reset to top (instant)**

### Metis Review (gaps addressed)
- Fix viewport-bound overlay (`NoiseTexture` uses `fixed`) → must be `absolute` inside frame.
- Avoid `min-h-screen` inside constrained frame → use `min-h-full` or remove to reduce extra scroll.
- Ensure top safe-area padding to avoid Dynamic Island overlap.

## Work Objectives
### Core Objective
Tampilan UI benar-benar berada di tengah frame iPhone, tanpa bleed/garis putih, konten atas tidak hilang saat tab switch, dan scroll tidak menyisakan ruang kosong berlebihan.

### Deliverables
- `src/app/App.tsx`: scroll container + inner wrapper + scroll reset
- `src/app/components/ruangjeda/NoiseTexture.tsx`: `fixed` → `absolute`
- Screen components: ganti `min-h-screen` → `min-h-full` (atau remove) untuk mengurangi scroll ekstra

### Definition of Done
- [ ] UI centered di frame iPhone (tanpa offset miring).
- [ ] Tidak ada garis putih di pojok kanan atas/bawah.
- [ ] Top content tidak hilang saat tab switch.
- [ ] Scroll tidak menyisakan space kosong berlebih saat mentok.

### Must NOT Have
- ❌ Jangan ubah logic screen/flow.
- ❌ Jangan tambah dependency baru.

## Verification Strategy
- Build: `npm run build`
- Manual QA: cek alignment + tab switching + scroll bound di dalam frame

## Execution Strategy
Wave 1: Task 1, Task 2 (parallel)
Wave 2: Task 3

## TODOs
- [x] 1. Fix frame overlays & scroll container (App.tsx)
  **What to do**:
  - Tambahkan `ref` pada scroll container (div `h-full overflow-y-auto pb-24`).
  - Saat `currentScreen` berubah, reset scroll ke top **instant** (`scrollTop = 0`).
  - Bungkus konten `renderScreen()` dengan inner wrapper: `max-w-[360px] w-full mx-auto`.
  - Tambahkan safe-area padding atas dalam wrapper: `pt-10`.
  - Pastikan `hide-scrollbar` diterapkan jika tersedia (cek global CSS).

  **Acceptance Criteria**:
  - [ ] Scroll reset ke atas saat tab switch.
  - [ ] Konten terlihat rata tengah dalam frame.
  - [ ] Dynamic Island tidak menutupi konten atas.

  **QA Scenarios**:
  - Switch Home → History → Profile → Home: header selalu terlihat.

- [x] 2. Scope noise texture ke frame (NoiseTexture.tsx)
  **What to do**:
  - Ubah `fixed inset-0` menjadi `absolute inset-0`.
  - Pastikan noise hanya muncul di dalam iPhone frame.

  **Acceptance Criteria**:
  - [ ] Tidak ada bleed/garis putih di sudut frame.

- [x] 3. Reduce extra scroll in screens
  **What to do**:
  - Ganti `min-h-screen` pada screen components menjadi `min-h-full` atau hapus bila tidak perlu.
  - Fokus pada Screen1Home, Screen6History, Screen7Profile, Screen3Breathing jika ada.

  **Acceptance Criteria**:
  - [ ] Scroll tidak terlalu jauh / tidak ada ruang kosong saat mentok.

## Final Verification Wave
- [x] F1. Plan compliance audit (oracle)
- [x] F2. Manual QA (Playwright)

## Commit Strategy
- `fix(layout): center content and constrain scroll inside iphone frame`

## Success Criteria
- Frame bersih tanpa artefak putih.
- UI center konsisten.
- Scroll terkendali.
