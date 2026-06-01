# CLAUDE.md — Muladari Coffee One Page Website

## Project Overview
- **Nama Project**: Muladari Coffee — One Page Website
- **Tipe**: Single Page Landing Page / Brand Profile
- **Stack**: React JS + Vite + Tailwind CSS
- **Target Deploy**: Vercel / Netlify

---

## Bash Commands
- `pnpm install` — Install semua dependencies
- `pnpm dev` — Jalankan dev server (localhost:5173)
- `pnpm build` — Build production ke folder `dist/`
- `pnpm preview` — Preview build production secara lokal
- `pnpm lint` — Jalankan ESLint

---

## Tech Stack & Libraries
- **React 18** + **Vite** — Framework & build tool utama
- **Tailwind CSS** — Utility-first styling, tidak ada custom CSS kecuali di `index.css`
- **Framer Motion** — Semua animasi: scroll reveal, hover, transisi
- **Lucide React** — Icon set utama (location, clock, phone, instagram, dsb)
- **React Icons** — Khusus ikon sosial media (WhatsApp, Instagram)
- **Swiper JS** — Carousel jika dibutuhkan di gallery atau review

---

## Struktur Folder
```
muladari-coffee/
├── public/images/{hero,menu,gallery,events}/
├── src/
│   ├── components/
│   │   ├── common/       → Navbar, Footer, SectionTitle, FloatingWhatsapp
│   │   └── home/         → Hero, Story, MenuSection, MenuCard, Vibes,
│   │                        Gallery, Events, Location, Contact
│   ├── data/             → menu.js, events.js, gallery.js, vibes.js
│   ├── utils/            → formatCurrency.js, scrollToSection.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
```

---

## Routing & Navigation
- **Tidak ada React Router** — ini single page, semua navigasi adalah smooth scroll
- Navbar scroll ke: `#home`, `#story`, `#menu`, `#vibes`, `#events`, `#location`, `#contact`
- Gunakan `scrollIntoView({ behavior: 'smooth' })` atau utility `scrollToSection.js`
- Active nav link dideteksi via `IntersectionObserver` atau scroll position

---

## Code Style
- Gunakan **ES Modules** (`import/export`), bukan CommonJS (`require`)
- Destructure imports: `import { useState, useEffect } from 'react'`
- Komponen: **PascalCase** (`MenuCard.jsx`)
- File data & utils: **camelCase** (`formatCurrency.js`)
- CSS class: **Tailwind utility only** — hindari inline style kecuali nilai dinamis
- Setiap komponen satu file, satu tanggung jawab

---

## Konvensi Komponen
- Semua section punya `id` yang sesuai: `<section id="menu">`
- Gunakan `SectionTitle` component untuk heading section yang konsisten
- Animasi scroll reveal pakai Framer Motion `whileInView` + `viewport={{ once: true }}`
- Data menu, events, vibes **jangan di-hardcode** di JSX — ambil dari `src/data/`

---

## Brand & Desain
- **Palet warna utama** (definisikan di Tailwind config atau CSS variables):
  - Cream: `#F5EFE0`
  - Espresso: `#2C1810`
  - Mocha: `#5C3D2E`
  - Caramel: `#C4863A`
  - Gold: `#D4A853`
- **Font**: Playfair Display (heading/display) + DM Sans (body) — via Google Fonts
- **Tema**: Vintage, hangat, nostalgik — hindari tampilan modern/minimalis dingin
- **Tagline**: *"Berawal dari cerita menjadi sebuah cita-cita"*

---

## Data Bisnis (Jangan Ubah Tanpa Konfirmasi)
- **WhatsApp**: Ganti `NOMOR_WA` dengan nomor aktif sebelum deploy
- **Instagram**: `@muladaricoffee`
- **Outlet utama**: Jl. Minang, depan Hotel Emerone, Batusangkar
- **Outlet lain**: Depan Gedung Nasional Batusangkar & Kampus 2 UIN Mahmud Yunus
- **Jam buka**: Senin–Jumat & Minggu 10.00–22.00 | Sabtu 10.00–00.00
- **Google Rating**: 4.8 ⭐ dari 23 ulasan

---

## Functional Requirements (MVP Checklist)
- [ ] Navbar fixed + smooth scroll ke semua section
- [ ] Hero: headline, subheadline, CTA button
- [ ] Story: narasi brand + value cards
- [ ] Menu: minimal 6 item, filter per kategori (Hot/Cold/Non-Kopi/Makanan)
- [ ] Vibes: minimal 4 mood card
- [ ] Gallery: minimal 6 foto (placeholder boleh dulu)
- [ ] Events: tampil promo aktif + banner "Coming Soon — District Muladari"
- [ ] Location: alamat lengkap + tombol Google Maps + tombol WhatsApp
- [ ] Contact: tombol WhatsApp + Instagram link
- [ ] Footer: logo, tagline, copyright, sosmed links
- [ ] Floating WhatsApp button (kanan bawah, animasi pulse)
- [ ] Responsive: mobile (< 768px), tablet (768–1024px), desktop (> 1024px)
- [ ] Tidak ada nomor WA dummy di build production

---

## Hal yang TIDAK Boleh Dilakukan
- Jangan tambah halaman baru atau React Router
- Jangan hardcode data menu/events langsung di JSX
- Jangan pakai CSS framework selain Tailwind (no Bootstrap, no MUI)
- Jangan taruh nomor WhatsApp asli sebelum pemilik konfirmasi
- Jangan hapus `id` dari elemen section (dipakai untuk smooth scroll)
- Jangan commit file `.env` atau API key ke repo

---

## Referensi Visual
- Website preview HTML tersedia di: `docs/muladari-coffee-preview.html`
- Instagram brand: https://www.instagram.com/muladaricoffee/
- Palette & font sudah diimplementasikan di preview — gunakan sebagai acuan

---

## Workflow yang Disarankan
1. Scaffold project Vite + install deps
2. Setup Tailwind + konfigurasi warna brand di `tailwind.config.js`
3. Buat komponen `common/` terlebih dahulu (Navbar, Footer, SectionTitle)
4. Kerjakan section satu per satu dari atas ke bawah
5. Isi `src/data/` dengan data real setelah komponen selesai
6. Tambahkan animasi Framer Motion di akhir (jangan blocking)
7. Test responsif di DevTools sebelum build
8. `pnpm build` dan cek tidak ada error sebelum deploy