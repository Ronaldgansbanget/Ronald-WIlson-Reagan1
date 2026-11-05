# Website Baru — Yayasan Buddha Tzu Chi Indonesia

Website satu halaman dengan desain **editorial hijau-putih**, ditulis memakai **Next.js App Router + TypeScript + CSS murni**. Bisa di-deploy langsung ke **Vercel**.

## Isi website

1. Hero / sambutan
2. Nilai kemanusiaan
3. Tentang Tzu Chi
4. Empat misi utama
5. Program Bebenah Kampung
6. Cara kerja program
7. Jejak kebaikan
8. Kisah / berita
9. Ajakan terlibat (`#terlibat`)
10. FAQ interaktif
11. Ajakan akhir dan footer

Termasuk navigasi seluler dan tombol menuju layanan resmi untuk donasi, relawan, dan pengajuan bantuan. **Situs ini tidak menerima pembayaran atau data pribadi** — tombol mengarahkan pengguna ke saluran resmi Tzu Chi.

## Jalankan secara lokal

Pastikan Node.js versi 20 ke atas.

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

## Upload ke GitHub

1. Ekstrak file ZIP, lalu buka folder `tzuchi-indonesia-web`.
2. Buat repository kosong di GitHub, contoh nama `website-tzu-chi-indonesia`.
3. Di terminal folder proyek:

```bash
git init
git add .
git commit -m "Website baru Tzu Chi Indonesia"
git branch -M main
git remote add origin https://github.com/USERNAME/website-tzu-chi-indonesia.git
git push -u origin main
```

Ganti `USERNAME` dengan username GitHub Anda. Alternatif: klik **Add file → Upload files** di repo GitHub dan unggah semua isi folder.

## Deploy ke Vercel

1. Masuk ke https://vercel.com/new.
2. Klik **Import Git Repository** dan pilih repo di GitHub.
3. Framework akan terdeteksi sebagai **Next.js**. Biarkan Root Directory `./`.
4. Klik **Deploy**. Tidak perlu environment variable.

Jika setelah perubahan ingin menerbitkan ulang, cukup `git add . && git commit -m "update" && git push`.

## Perbaikan logo Tzu Chi

Situs **tidak memakai logo rekaan berbentuk asterisk**. Logo diambil sebagai gambar asli dari laman resmi Tzu Chi Indonesia:

- Halaman sumber: https://www.tzuchi.or.id/tentang-kami/Logo-Tzu-Chi/6
- Gambar sumber: https://www.tzuchi.or.id/uploads/images/logo-1.jpg

Logo ditampilkan menggunakan `object-fit: contain` sehingga **tidak terdistorsi**. Sumber pada saat ini dimuat dari domain resmi. Supaya gambar logo tetap tersedia walaupun alamat di domain tersebut berubah, idealnya tim Tzu Chi menyediakan versi **PNG transparan resmi** dengan izin penggunaan, lalu:

1. Simpan sebagai `public/tzuchi-logo.png`.
2. Di `app/page.tsx`, ubah `LOGO_SRC` menjadi `"/tzuchi-logo.png"`.
3. Ganti ikon favicon di `app/layout.tsx` dengan `href="/tzuchi-logo.png"`.

**Jangan menggambar ulang lambang atau merubah warna/proporsinya** tanpa panduan identitas visual lembaga.

## Mengubah konten

- **Teks, tautan dan foto:** `app/page.tsx`
- **Warna, spasi dan tata letak:** `app/globals.css`
- **Judul tab browser dan SEO:** `app/layout.tsx`
- **Link resmi:** objek `LINKS` di awal `app/page.tsx`
- **Foto:** objek `PHOTO` di awal `app/page.tsx`

Foto dokumentasi memakai URL dari portal resmi Tzu Chi Indonesia; beberapa foto lainnya merupakan ilustrasi foto stok Unsplash dan **bukan** dokumentasi peristiwa Tzu Chi. Sebelum publikasi resmi, lakukan pemeriksaan lisensi/izin dan ganti foto ilustrasi dengan koleksi foto yang disetujui tim publikasi.

## Status

Ini adalah proyek **siap diunggah ke GitHub dan dikonfigurasi di Vercel**, tetapi belum otomatis diterbitkan di akun pengguna. Tinjau teks, tautan, dan persetujuan penggunaan materi sebelum menjadikannya situs resmi yayasan.
