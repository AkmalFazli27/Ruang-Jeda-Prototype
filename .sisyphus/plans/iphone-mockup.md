# iPhone 15 Mockup Frame

## TL;DR

> **Quick Summary**: Membungkus aplikasi ke dalam *mockup frame* iPhone 15 (layar 6.1 inch, dimensi ~393x852) agar presentasi prototipe terlihat seperti di layar HP sungguhan.
> 
> **Deliverables**: 
> - Wrapper layout di `App.tsx` dengan border tebal, *rounded corners*, dan *Dynamic Island* statis.
> - Penyesuaian `BottomNav.tsx` agar tetap berada di dalam frame HP, tidak meluber ke *browser window*.
> 
> **Estimated Effort**: Quick
> **Parallel Execution**: NO - sequential
> **Critical Path**: Task 1

---

## Context

### Original Request
"saya ingin menambahkan border hp iphone 15 dengan ukuran layar 6,1 inch. jadi, tampilan seperti melihat hp langsung dan tampilan hanya dibatasi sampai border hp tersebut"

### Interview Summary
**Key Discussions**:
- Tujuan: Tampilan presentasi prototipe yang lebih realistis.

**Metis Review (Auto-Resolved)**:
- **Gap**: Jika menggunakan frame HP statis (misal 393x852px), navigasi bawah yang saat ini menggunakan `fixed` akan menempel ke *window browser*, bukan ke frame HP.
- **Resolution**: Ubah `fixed` menjadi `absolute` pada `BottomNav.tsx` dan pastikan kontainer frame HP memiliki *property* `relative` dan `overflow-hidden`.

---

## Work Objectives

### Core Objective
Mengubah *root layout* aplikasi menjadi simulasi fisik iPhone 15 yang berada di tengah layar desktop/browser.

### Concrete Deliverables
- `src/app/App.tsx`: Outer wrapper untuk *centering* + iPhone frame div.
- `src/app/components/ruangjeda/BottomNav.tsx`: Ubah class `fixed` menjadi `absolute`.

### Definition of Done
- [ ] Aplikasi tampil di tengah layar browser di dalam kotak berbentuk iPhone.
- [ ] Terdapat simulasi *Dynamic Island* (pil hitam di bagian atas atas layar).
- [ ] Konten yang panjang bisa di-scroll *di dalam* frame HP tersebut, tidak *scroll* seluruh layar browser.
- [ ] Navigasi bawah tetap menempel di dasar *frame* iPhone.

### Must Have
- Frame dimensi proporsional iPhone 15 (393px width / 852px height) atau menggunakan `max-h-[90vh]` aspect-ratio agar tidak terpotong di layar laptop kecil.
- Border tebal (mirip bezel HP) dengan `rounded-[3rem]`.

### Must NOT Have (Guardrails)
- ❌ Tidak mengubah komponen logika *screen* satupun, murni hanya *layouting wrapper* terluar.

---

## Verification Strategy

### QA Policy
Setiap perubahan diverifikasi dengan mengecek apakah UI sudah masuk dalam batasan frame.

---

## Execution Strategy

### Parallel Execution Waves

```text
Wave 1 (Start Immediately - Layout wrapper):
└── Task 1: iPhone Frame Implementation [visual-engineering]

Wave FINAL (After ALL tasks):
├── Task F1: Plan compliance audit (oracle)
└── Task F2: Real manual QA (unspecified-high)
```

---

## TODOs

- [x] 1. Implement iPhone 15 Frame Wrapper

  **What to do**:
  - Di `src/app/App.tsx`:
    1. Tambahkan *outer wrapper* untuk memusatkan layar HP: `min-h-screen bg-neutral-900 flex items-center justify-center p-4`
    2. Ubah div utama (yang berisi `bg-[#1A1B41]`) menjadi *device frame*: `relative w-[393px] h-[852px] max-h-[90vh] bg-[#1A1B41] text-white overflow-hidden rounded-[3rem] shadow-2xl border-[14px] border-black shrink-0`.
    3. Tambahkan elemen *Dynamic Island* statis di atas konten: div kecil hitam `w-32 h-7 bg-black rounded-full absolute top-2 left-1/2 -translate-x-1/2 z-50`.
    4. Pastikan area konten di dalam bisa di-*scroll* dengan mengubah *container page transitions* dari `max-w-md mx-auto pb-24` menjadi `h-full overflow-y-auto pb-24 hide-scrollbar`.
  - Di `src/app/components/ruangjeda/BottomNav.tsx`:
    1. Ubah `fixed bottom-0` menjadi `absolute bottom-0`. Ini penting agar navigasi menempel pada batas bawah div iPhone, bukan batas bawah layar monitor browser.

  **Must NOT do**:
  - ❌ Jangan menghapus fungsionalitas *routing* atau struktur transisi *Framer Motion*.

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
    - Reason: Fokus pada *styling* *wrapper* responsif dan layout absolut/relatif UI komponen.
  - **Skills**: []

  **Parallelization**:
  - **Can Run In Parallel**: NO
  - **Parallel Group**: Sequential
  - **Blocks**: None
  - **Blocked By**: None

  **References**:
  - `src/app/App.tsx` - File pembungkus utama
  - `src/app/components/ruangjeda/BottomNav.tsx` - Komponen yang butuh pergantian `fixed` ke `absolute`

  **Acceptance Criteria**:
  - [ ] App terbungkus frame hitam membulat (border 14px, rounded 3rem).
  - [ ] Ada tiruan notch/Dynamic Island di atas tengah.
  - [ ] Navigasi bawah masih bisa diklik dan posisinya di atas *bezel* bawah.

  **QA Scenarios**:
  ```
  Scenario: Check device frame rendering
    Tool: Playwright
    Preconditions: App berjalan
    Steps:
      1. Buka halaman utama
      2. Capture full screen screenshot browser desktop
    Expected Result: Terlihat *mockup* iPhone 15 dengan *bezel* hitam, ujung melengkung, letaknya di tengah. Konten *scrollable* di dalamnya.
    Failure Indicators: Aplikasi meluber sejauh lebar/tinggi monitor penuh.
    Evidence: .sisyphus/evidence/task-1-iphone-frame.png
  ```

  **Evidence to Capture**:
  - [ ] Screenshot layar browser desktop: `task-1-iphone-frame.png`

  **Commit**: YES
  - Message: `style(layout): wrap application in iphone 15 mockup frame`
  - Files: `src/app/App.tsx`, `src/app/components/ruangjeda/BottomNav.tsx`

---

## Final Verification Wave

- [x] F1. **Plan Compliance Audit** — `oracle`
  Read the plan end-to-end. Verify `App.tsx` has the iPhone wrapper and `BottomNav.tsx` uses absolute positioning.
  Output: `VERDICT: APPROVE/REJECT`

- [x] F2. **Real Manual QA** — `unspecified-high`
  Buka aplikasi dengan Playwright. Verifikasi *screenshot* bahwa frame HP terlihat di tengah layar.
  Output: `Scenarios [N/N pass] | VERDICT`

---

## Commit Strategy

- **1**: `style(layout): wrap app in iphone 15 device frame mockup`

---

## Success Criteria

### Verification Commands
```bash
npm run build
```

### Final Checklist
- [ ] Bezel iPhone terlihat.
- [ ] Navigasi bawah ada di dalam frame.
- [ ] Scroll berada di dalam frame HP, tidak pada browser window.