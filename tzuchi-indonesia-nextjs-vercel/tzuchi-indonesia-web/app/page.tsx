"use client";

import { useState } from "react";

/**
 * BRAND ASSET: Lambang resmi (bukan gambar SVG tiruan).
 * Sumber: https://www.tzuchi.or.id/tentang-kami/Logo-Tzu-Chi/6
 * Bila tim mempunyai logo PNG transparan resolusi tinggi yang disahkan,
 * salin ke public/tzuchi-logo.png dan ganti LOGO_SRC dengan '/tzuchi-logo.png'.
 */
const LOGO_SRC = "https://www.tzuchi.or.id/uploads/images/logo-1.jpg";
const LINKS = {
  donation: "https://www.tzuchi.or.id/donasi",
  volunteer: "https://www.tzuchi.or.id/form-relawan",
  assistance: "https://www.tzuchi.or.id/hubungi-kami/pengajuan-bantuan/7",
  story: "https://www.tzuchi.or.id/berita-kegiatan",
  about: "https://www.tzuchi.or.id/tentang-kami/tentang-tzu-chi-indonesia/3",
  health: "https://www.tzuchi.or.id/tentang-kami/tentang-tzu-chi/1",
  housing: "https://www.tzuchi.or.id/bedah-rumah",
  school: "https://www.tzuchi.or.id/tentang-kami/tentang-tzu-chi/1",
  contact: "https://www.tzuchi.or.id/hubungi-kami",
  official: "https://www.tzuchi.or.id/",
  faqs: "https://www.tzuchi.or.id/tentang-kami/faq/4",
};

// Foto ilustrasi, bukan klaim dokumentasi program tertentu. Dua gambar dari portal resmi Tzu Chi.
const PHOTO = {
  hero: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1500&q=85",
  about: "https://www.tzuchi.or.id/inliners/relawan-2.jpg",
  housing: "https://www.tzuchi.or.id/uploads/banner/foto2.jpg",
  charity: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=900&q=85",
  health: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=85",
  education: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=85",
  environment: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1000&q=85",
  story1: "https://www.tzuchi.or.id/inliners/1699596686-2-edt.jpg",
  story2: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=85",
};

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true" className="arrow">{diagonal ? "↗" : "→"}</span>;
}

function OfficialLogo({ inverted = false }: { inverted?: boolean }) {
  return (
    <a className={`brand ${inverted ? "brand-inverse" : ""}`} href="#beranda" aria-label="Tzu Chi Indonesia — kembali ke beranda">
      <span className="brand-emblem">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={LOGO_SRC} alt="Lambang resmi Tzu Chi: teratai dan perahu cinta kasih" width="84" height="63" />
      </span>
      <span className="brand-text">
        <span className="brand-title">Tzu Chi <strong>Indonesia</strong></span>
        <span className="brand-subtitle">Yayasan Buddha Tzu Chi Indonesia</span>
      </span>
    </a>
  );
}

const menu = [
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Misi Kami", href: "#misi" },
  { label: "Program", href: "#program" },
  { label: "Kisah", href: "#kisah" },
  { label: "Terlibat", href: "#terlibat" },
];

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="header-inner shell">
        <OfficialLogo />
        <nav className="desktop-nav" aria-label="Navigasi utama">
          {menu.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <div className="header-actions">
          <a className="header-donate" href={LINKS.donation} target="_blank" rel="noopener noreferrer">Donasi <Arrow diagonal /></a>
          <button
            className="mobile-menu-btn" type="button"
            aria-controls="mobile-menu" aria-expanded={open} aria-label={open ? "Tutup menu" : "Buka menu"}
            onClick={() => setOpen((v) => !v)}
          >{open ? "✕" : "☰"}</button>
        </div>
      </div>
      {open && <nav id="mobile-menu" className="mobile-nav" aria-label="Navigasi seluler">
        {menu.map((item) => <a href={item.href} onClick={() => setOpen(false)} key={item.href}>{item.label}<Arrow /></a>)}
        <a className="mobile-donation" href={LINKS.donation} target="_blank" rel="noopener noreferrer">Donasi sekarang <Arrow diagonal /></a>
      </nav>}
    </header>
  );
}

const missions = [
  { num: "01", name: "Misi Amal", text: "Mendampingi keluarga prasejahtera dan masyarakat terdampak bencana dengan sepenuh hati.", img: PHOTO.charity, link: LINKS.assistance, tag: "Berbagi harapan" },
  { num: "02", name: "Misi Kesehatan", text: "Menghadirkan kepedulian melalui pelayanan dan pendampingan kesehatan bagi sesama.", img: PHOTO.health, link: LINKS.health, tag: "Merawat kehidupan" },
  { num: "03", name: "Misi Pendidikan", text: "Menumbuhkan pengetahuan, budi pekerti, dan kesempatan bagi generasi masa depan.", img: PHOTO.education, link: LINKS.school, tag: "Menanam kebaikan" },
  { num: "04", name: "Misi Budaya Humanis", text: "Merawat nilai kemanusiaan, kebiasaan baik, dan kepedulian terhadap lingkungan.", img: PHOTO.environment, link: LINKS.about, tag: "Menjaga bumi" },
];

const faqs = [
  { q: "Apakah Tzu Chi terbuka untuk semua kalangan?", a: "Ya. Tzu Chi berlandaskan cinta kasih universal dan melayani tanpa membedakan suku, ras, agama, atau latar belakang." },
  { q: "Bagaimana cara menjadi relawan?", a: "Buka formulir relawan resmi Tzu Chi, isi data yang diminta, kemudian tim akan menghubungi Anda sesuai domisili dan proses yang berlaku." },
  { q: "Di mana saya bisa mengajukan permohonan bantuan?", a: "Gunakan jalur pengajuan bantuan pada situs resmi Tzu Chi Indonesia. Jenis bantuan, dokumen, serta kelayakan akan dinilai berdasarkan ketentuan program." },
  { q: "Apakah saya dapat berdonasi secara online?", a: "Tentu. Tombol donasi pada situs ini mengarah langsung ke halaman donasi resmi Tzu Chi Indonesia; situs konsep ini tidak menyimpan data pembayaran." },
];

function FAQs() {
  const [active, setActive] = useState<number | null>(0);
  return (
    <div className="faq-list">
      {faqs.map((item, index) => (
        <div className={`faq-item ${active === index ? "is-active" : ""}`} key={item.q}>
          <button type="button" className="faq-question" onClick={() => setActive((v) => (v === index ? null : index))} aria-expanded={active === index}>
            <span><small>{String(index + 1).padStart(2, "0")}</small>{item.q}</span>
            <span className="faq-symbol">{active === index ? "−" : "+"}</span>
          </button>
          {active === index && <p className="faq-answer">{item.a}</p>}
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main id="beranda">
        {/* 01 Hero */}
        <section className="hero shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> Bersama dalam kebaikan</div>
            <h1 id="hero-title">Ketika kita <em>peduli,</em> harapan kembali tumbuh.</h1>
            <p className="hero-lead">Satu tindakan baik bisa mengubah hari seseorang. Bersama Tzu Chi Indonesia, kita merawat kehidupan melalui cinta kasih yang melampaui segala perbedaan.</p>
            <div className="hero-buttons">
              <a className="btn btn-green" href="#misi">Kenali misi kami <Arrow diagonal /></a>
              <a className="text-link" href="#terlibat">Temukan peranmu <Arrow /></a>
            </div>
            <div className="hero-note"><span className="hero-note-mark">✳</span> Peduli pada manusia. Menjaga bumi. Menumbuhkan harapan.</div>
          </div>
          <div className="hero-visual">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={PHOTO.hero} alt="Ilustrasi kegiatan kebersamaan dan kepedulian sosial" className="hero-image" />
            <div className="hero-image-shade" />
            <div className="hero-sticker"><span>LOVE</span><span>IN ACTION</span><span className="sticker-flower">✳</span></div>
            <div className="hero-image-label"><span className="hero-label-dot" /> Cinta kasih diwujudkan dalam tindakan <small>Foto ilustrasi</small></div>
          </div>
        </section>

        {/* 02 Impact strip */}
        <section className="intro-bar" aria-label="Prinsip kemanusiaan">
          <div className="shell intro-bar-content"><span>Cinta kasih universal</span><i>✳</i><span>Tanpa membeda-bedakan</span><i>✳</i><span>Bergerak bersama</span><i>✳</i><span>Untuk semua kehidupan</span></div>
        </section>

        {/* 03 About */}
        <section className="section section-about shell" id="tentang">
          <div className="about-image-wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={PHOTO.about} loading="lazy" alt="Dokumentasi interaksi hangat relawan Tzu Chi dengan warga" />
            <div className="about-image-badge"><span>Sejak</span><strong>1993</strong><span>hadir di Indonesia</span></div>
          </div>
          <div className="about-copy">
            <span className="section-index">01 / Mengenal kami</span>
            <h2>Berawal dari hati, <em>bertumbuh</em> bersama.</h2>
            <p>Tzu Chi adalah lembaga sosial kemanusiaan yang bermula di Taiwan pada tahun 1966 dan hadir di Indonesia sejak 1993. Gerakannya bertumpu pada empati, pelayanan, dan penghormatan kepada setiap kehidupan.</p>
            <p>Bukan hanya memberi bantuan, Tzu Chi mengajak lebih banyak orang untuk menghadirkan kebaikan melalui tindakan yang konsisten dan berkelanjutan.</p>
            <a className="underline-link" href={LINKS.about} target="_blank" rel="noopener noreferrer">Pelajari perjalanan Tzu Chi <Arrow diagonal /></a>
            <div className="about-signature"><span className="signature-star">✳</span> Bersumbangsih dengan sukacita</div>
          </div>
        </section>

        {/* 04 Pillars */}
        <section className="section missions-section" id="misi">
          <div className="shell">
            <div className="section-heading mission-heading">
              <div><span className="section-index">02 / Misi kami</span><h2>Empat misi.<br /><em>Satu hati.</em></h2></div>
              <p>Setiap orang berhak untuk hidup dengan lebih baik. Inilah bidang-bidang tempat kepedulian diwujudkan.</p>
            </div>
            <div className="mission-grid">
              {missions.map((mission) => (
                <a key={mission.num} className="mission-card" href={mission.link} target="_blank" rel="noopener noreferrer">
                  <div className="mission-img">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img loading="lazy" src={mission.img} alt={`Foto ilustrasi ${mission.name.toLowerCase()}`} />
                    <span className="mission-num">{mission.num} / 04</span>
                    <span className="mission-link-icon">↗</span>
                  </div>
                  <div className="mission-content"><span className="mission-tag">{mission.tag}</span><h3>{mission.name}</h3><p>{mission.text}</p></div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* 05 Feature */}
        <section className="section featured-section shell" id="program">
          <div className="featured-top"><span className="section-index">03 / Program pilihan</span><span className="featured-kicker">Rumah yang layak, kehidupan yang lebih baik.</span></div>
          <div className="featured-grid">
            <div className="featured-text"><span className="pill pill-light">Program Bebenah Kampung</span><h2>Lebih dari <em>sebuah rumah.</em></h2><p>Rumah yang aman adalah awal dari kehidupan yang lebih sehat dan bermartabat. Melalui Bebenah Kampung, Tzu Chi turut mendampingi keluarga untuk membangun kembali rasa aman dan harapan.</p><div className="feature-bottom"><span className="feature-highlight">Rumah layak. Harapan baru.</span><a className="btn btn-white" href={LINKS.housing} target="_blank" rel="noopener noreferrer">Lihat program <Arrow diagonal /></a></div></div>
            <div className="featured-photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={PHOTO.housing} loading="lazy" alt="Dokumentasi resmi Tzu Chi: kondisi rumah sebelum dan sesudah program pembenahan" />
              <span className="photo-credit">Dokumentasi program — Tzu Chi Indonesia</span>
            </div>
          </div>
        </section>

        {/* 06 Steps */}
        <section className="section steps-section shell">
          <div className="steps-intro"><span className="section-index">04 / Cara kami bergerak</span><h2>Memulai dari <em>mendengarkan.</em></h2><p>Setiap program berangkat dari kepedulian yang diterjemahkan menjadi langkah nyata, bersama masyarakat dan berbagai pihak.</p></div>
          <div className="steps-grid">
            <div className="step"><span>01</span><span className="step-icon">◎</span><h3>Melihat kebutuhan</h3><p>Mendengarkan, memahami keadaan, dan mengenali hal-hal yang paling mendesak.</p></div>
            <div className="step"><span>02</span><span className="step-icon">⌁</span><h3>Bergerak bersama</h3><p>Memadukan tenaga relawan, dukungan donatur, dan kolaborasi berbagai pihak.</p></div>
            <div className="step"><span>03</span><span className="step-icon">✳</span><h3>Menjaga keberlanjutan</h3><p>Mendampingi proses agar manfaat yang hadir bisa menjadi awal perubahan yang lebih panjang.</p></div>
          </div>
        </section>

        {/* 07 Stats */}
        <section className="impact-section" id="dampak"><div className="shell impact-inner">
          <div><span className="section-index section-index-light">05 / Jejak kebaikan</span><h2>Kebaikan yang meluas, <em>tanpa batas.</em></h2><p>Gerakan kemanusiaan Tzu Chi terus bertumbuh melalui kebersamaan relawan dan masyarakat di berbagai negara.</p><a className="link-on-dark" href={LINKS.official} target="_blank" rel="noopener noreferrer">Lihat informasi resmi <Arrow diagonal /></a></div>
          <div className="impact-numbers"><div><strong>1966</strong><span>Awal perjalanan Tzu Chi di Taiwan</span></div><div><strong>1993</strong><span>Benih Tzu Chi hadir di Indonesia</span></div><div><strong>68</strong><span>Negara dengan sebaran relawan Tzu Chi</span></div><div><strong>139</strong><span>Negara yang menerima bantuan Tzu Chi secara global</span></div><small>Angka jaringan global mengacu pada informasi resmi Tzu Chi Indonesia yang tersedia pada 2026.</small></div>
        </div></section>

        {/* 08 Stories */}
        <section className="section stories-section shell" id="kisah"><div className="section-heading stories-heading"><div><span className="section-index">06 / Cerita baik</span><h2>Kisah yang membuat <em>kita dekat.</em></h2></div><a className="underline-link" href={LINKS.official} target="_blank" rel="noopener noreferrer">Lihat kabar terbaru <Arrow diagonal /></a></div>
          <div className="stories-grid">
            <a className="story-primary" href={LINKS.housing} target="_blank" rel="noopener noreferrer"><div className="story-photo"><img loading="lazy" src={PHOTO.housing} alt="Dokumentasi rumah sebelum dan sesudah diperbaiki" /></div><div className="story-meta">PROGRAM SOSIAL <span>•</span> BEBENAH KAMPUNG</div><h3>Ketika rumah kembali memberi rasa aman.</h3><p>Sebuah ruang yang layak memberi keluarga kesempatan untuk memulai hari dengan lebih tenang.</p><span className="story-arrow">Baca selengkapnya <Arrow diagonal /></span></a>
            <a className="story-secondary" href="https://www.tzuchi.or.id/read-berita/bertambahnya-barisan-insan-tzu-chi-di-bandung/11331" target="_blank" rel="noopener noreferrer"><div className="story-photo"><img loading="lazy" src={PHOTO.story1} alt="Dokumentasi Tzu Chi: pertemuan sosialisasi relawan" /></div><div className="story-meta">RELAWAN <span>•</span> KOMUNITAS</div><h3>Satu langkah kecil untuk mulai bersumbangsih.</h3><p>Perjalanan relawan sering dimulai dari sebuah perjumpaan sederhana.</p><span className="story-arrow">Baca kisahnya <Arrow diagonal /></span></a>
          </div>
        </section>

        {/* 09 Participation */}
        <section className="section involvement-section" id="terlibat"><div className="shell">
          <div className="involvement-header"><span className="section-index">07 / Ambil bagian</span><div><h2>Ada tempat <em>untukmu</em><br />di sini.</h2><p>Kebaikan punya banyak bentuk. Pilih cara yang paling dekat dengan dirimu untuk mulai berkontribusi.</p></div></div>
          <div className="involvement-grid">
            <a href={LINKS.assistance} target="_blank" rel="noopener noreferrer" className="involvement-card"><span className="involve-icon">♡</span><span className="involve-number">01</span><h3>Penerima manfaat</h3><p>Temukan informasi mengenai pengajuan bantuan dan layanan yang tersedia.</p><span className="involve-action">Informasi bantuan <Arrow diagonal /></span></a>
            <a href={LINKS.volunteer} target="_blank" rel="noopener noreferrer" className="involvement-card"><span className="involve-icon">✳</span><span className="involve-number">02</span><h3>Relawan</h3><p>Luangkan waktu dan tenaga untuk berjalan bersama mereka yang membutuhkan.</p><span className="involve-action">Jadi relawan <Arrow diagonal /></span></a>
            <a href={LINKS.donation} target="_blank" rel="noopener noreferrer" className="involvement-card"><span className="involve-icon">↗</span><span className="involve-number">03</span><h3>Donatur & mitra</h3><p>Dukung program sosial melalui sumbangsih dan kolaborasi yang bermakna.</p><span className="involve-action">Salurkan donasi <Arrow diagonal /></span></a>
            <a href={LINKS.school} target="_blank" rel="noopener noreferrer" className="involvement-card"><span className="involve-icon">✎</span><span className="involve-number">04</span><h3>Pelajar & pendidik</h3><p>Tumbuhkan karakter, kepedulian, dan kebiasaan baik sejak dini.</p><span className="involve-action">Jelajahi pendidikan <Arrow diagonal /></span></a>
          </div>
        </div></section>

        {/* 10 FAQ */}
        <section className="section faq-section shell" id="faq"><div className="faq-copy"><span className="section-index">08 / Pertanyaan umum</span><h2>Punya pertanyaan? <em>Kami bantu arahkan.</em></h2><p>Berikut beberapa hal yang sering ditanyakan sebelum menjadi bagian dari perjalanan Tzu Chi.</p><a className="underline-link" href={LINKS.faqs} target="_blank" rel="noopener noreferrer">Baca FAQ resmi <Arrow diagonal /></a></div><FAQs /></section>

        {/* 11 CTA */}
        <section className="final-cta shell"><div className="cta-orb cta-orb-one"/><div className="cta-orb cta-orb-two"/><span className="section-index section-index-light">Setiap kebaikan berarti</span><h2>Mari membuat dunia <em>sedikit lebih baik,</em> mulai hari ini.</h2><div className="cta-links"><a className="btn btn-white" href={LINKS.volunteer} target="_blank" rel="noopener noreferrer">Menjadi relawan <Arrow diagonal /></a><a className="btn btn-outline-white" href={LINKS.donation} target="_blank" rel="noopener noreferrer">Donasi sekarang <Arrow diagonal /></a></div></section>
      </main>
      <footer className="footer"><div className="shell footer-top"><div className="footer-about"><OfficialLogo /><p>Menebarkan cinta kasih universal melalui aksi nyata untuk manusia, kehidupan, dan bumi.</p></div><div className="footer-nav"><h4>Jelajahi</h4><a href="#tentang">Tentang kami</a><a href="#misi">Misi kami</a><a href="#program">Program</a><a href="#kisah">Kisah</a></div><div className="footer-nav"><h4>Ambil bagian</h4><a href={LINKS.volunteer} target="_blank" rel="noopener noreferrer">Jadi relawan</a><a href={LINKS.donation} target="_blank" rel="noopener noreferrer">Berdonasi</a><a href={LINKS.assistance} target="_blank" rel="noopener noreferrer">Pengajuan bantuan</a><a href="#faq">Pertanyaan umum</a></div><div className="footer-nav"><h4>Terhubung</h4><a href={LINKS.official} target="_blank" rel="noopener noreferrer">Website resmi ↗</a><a href="https://wa.me/6285280095599" target="_blank" rel="noopener noreferrer">WhatsApp resmi ↗</a><a href={LINKS.contact} target="_blank" rel="noopener noreferrer">Hubungi kami ↗</a><span>Jakarta, Indonesia</span></div></div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} Yayasan Buddha Tzu Chi Indonesia — Konsep desain website.</span><span>Foto ilustrasi ditandai; foto dokumentasi bersumber dari Tzu Chi Indonesia. <a href="#beranda">Kembali ke atas ↑</a></span></div></footer>
    </>
  );
}
