/* ============================================================
   DATA PRESTASI & SERTIFIKAT
   ------------------------------------------------------------
   Ini satu-satunya file yang perlu kamu edit kalau mau nambah
   prestasi/sertifikat baru. Tinggal copy salah satu blok {...}
   di bawah, ganti isinya, taruh di paling atas array (paling
   baru duluan). Nggak perlu sentuh index.html atau style.css.
   ============================================================ */

const ACHIEVEMENTS = [
  {
    medal: "silver",              
    medalLabelId: "PERAK",
    medalLabelEn: "SILVER",
    titleId: "LSN 2026 &mdash; Informatika",
    titleEn: "LSN 2026 &mdash; Informatika",
    descId: "Lomba Sains Nasional &middot; Predikat A &middot; Tingkat Nasional",
    descEn: "Lomba Sains Nasional &middot; Grade A &middot; National Level",
    date: "11 Agustus 2026"
  },
  {
    medal: "silver",              
    medalLabelId: "PERAK",
    medalLabelEn: "SILVER",
    titleId: "LSN 2026 &mdash; Matematika",
    titleEn: "LSN 2026 &mdash; Matematika",
    descId: "Lomba Sains Nasional &middot; Predikat A &middot; Tingkat Nasional",
    descEn: "Lomba Sains Nasional &middot; Grade A &middot; National Level",
    date: "11 Agustus 2026"
  },
  {
    medal: "gold",              
    medalLabelId: "EMAS",
    medalLabelEn: "GOLD",
    titleId: "ISCO 2026 &mdash; Matematika",
    titleEn: "ISCO 2026 &mdash; Matematika",
    descId: "Indonesian Science Competition &middot; Predikat A+ &middot; Tingkat Nasional",
    descEn: "Indonesian Science Competition &middot; Grade A+ &middot; National Level",
    date: "19 MEI 2026"
  },
  {
    medal: "gold",
    medalLabelId: "EMAS",
    medalLabelEn: "GOLD",
    titleId: "ISCO 2026 &mdash; Informatika",
    titleEn: "ISCO 2026 &mdash; Informatika",
    descId: "Indonesian Science Competition &middot; Predikat A+ &middot; Tingkat Nasional",
    descEn: "Indonesian Science Competition &middot; Grade A+ &middot; National Level",
    date: "19 MEI 2026"
  },
  {
    medal: "silver",
    medalLabelId: "PERAK",
    medalLabelEn: "SILVER",
    titleId: "KOSN 2026 &mdash; Informatika",
    titleEn: "KOSN 2026 &mdash; Informatika",
    descId: "Kejuaraan Olimpiade Sains Nasional &middot; Predikat A &middot; Tingkat Nasional",
    descEn: "National Science Olympiad Championship &middot; Grade A &middot; National Level",
    date: "12 MEI 2026"
  },
  {
    medal: "silver",
    medalLabelId: "PERAK",
    medalLabelEn: "SILVER",
    titleId: "KOSN 2026 &mdash; Bahasa Indonesia",
    titleEn: "KOSN 2026 &mdash; Bahasa Indonesia",
    descId: "Kejuaraan Olimpiade Sains Nasional &middot; Predikat A &middot; Tingkat Nasional",
    descEn: "National Science Olympiad Championship &middot; Grade A &middot; National Level",
    date: "12 MEI 2026"
  },
  {
    medal: "part",
    medalLabelId: "FINAL",
    medalLabelEn: "FINAL",
    titleId: "NOOC 3.1 &mdash; Matematika (Advanced Level)",
    titleEn: "NOOC 3.1 &mdash; Matematika (Advanced Level)",
    descId: "Nusantara Online Olympiad Cup &middot; Babak Final Nasional",
    descEn: "Nusantara Online Olympiad Cup &middot; National Final Round",
    date: "2026"
  }
];

const PROJECTS = [
  {
    tag: "Linux &middot; Nginx &middot; Cloudflare Tunnel",
    title: "Self-Hosted Portfolio Infrastructure",
    descId: "Website portfolio ini sendiri &mdash; di-hosting mandiri di server rumah (Linux/Debian), diekspos ke publik lewat Cloudflare Tunnel tanpa port forwarding, dilengkapi print server (CUPS) yang bisa diakses remote via SSH, dan alur update konten otomatis pakai script Python.",
    descEn: "This portfolio website itself &mdash; self-hosted on a home Linux server, exposed to the public via Cloudflare Tunnel with no port forwarding, complete with a remotely-accessible print server (CUPS) over SSH, and a Python-scripted content update workflow.",
    repoUrl: null,
    repoLabel: null
  },
  {
    tag: "x86-64 &middot; C &middot; systems",
    title: "bmahOS",
    descId: "Proyek sistem operasi eksperimental yang dikembangkan sebagai pembelajaran mandiri, berfokus pada pengembangan sistem tingkat rendah, arsitektur sistem operasi, dan sistem x86-64.",
    descEn: "An experimental operating system project developed as a personal learning project, focusing on low-level system development, operating system architecture, and x86-64 systems.",
    repoUrl: "https://github.com/mahatsafa/bmahOS",
    repoLabel: "github.com/mahatsafa/bmahOS"
  }
];

const CERTIFICATES = [
  {
    catId: "Cisco Networking Academy",
    catEn: "Cisco Networking Academy",
    title: "CCNA: Introduction to Networks",
    descId: "Instruktur Tito Tri Prabowo &middot; SMK Telkom Malang &middot; 06 Aug 2026",
    descEn: "Instructor Tito Tri Prabowo &middot; SMK Telkom Malang &middot; 06 Aug 2026"
  },
  {
    catId: "Cisco Networking Academy",
    catEn: "Cisco Networking Academy",
    title: "Getting Started with Cisco Packet Tracer",
    descId: "Direktur Lynn Bloomer &middot; 14 Aug 2026",
    descEn: "Director Lynn Bloomer &middot; 14 Aug 2026"
  },
  {
    catId: "MOKLET",
    catEn: "MOKLET",
    title: "CCNA 2026: Introduction to Networks",
    descId: "Knowledge Check &middot; 23 Mei 2026",
    descEn: "Knowledge Check &middot; 23 May 2026"
  },
  {
    catId: "SMK Telkom Malang &middot; Jagoan Hosting",
    catEn: "SMK Telkom Malang &middot; Jagoan Hosting",
    title: "Uji Unit Kompetensi (UUK) &mdash; TKJ",
    titleEn: "Competency Exam (UUK) &mdash; TKJ",
    descId: "Predikat: Cukup Kompeten &middot; Implementasi Jaringan Client-Server",
    descEn: "Grade: Competent &middot; Client-Server Network Implementation"
  },
  {
    catId: "Indonesian Science Competition",
    catEn: "Indonesian Science Competition",
    title: "Sertifikat Peserta &mdash; Informatika",
    titleEn: "Participation Certificate &mdash; Informatics",
    descId: "ISCO 2026 &middot; Yogyakarta, 19 Mei 2026",
    descEn: "ISCO 2026 &middot; Yogyakarta, 19 Mei 2026"
  },
  {
    catId: "Indonesian Science Competition",
    catEn: "Indonesian Science Competition",
    title: "Sertifikat Peserta &mdash; Matematika",
    titleEn: "Participation Certificate &mdash; Mathematics",
    descId: "ISCO 2026 &middot; Yogyakarta, 19 Mei 2026",
    descEn: "ISCO 2026 &middot; Yogyakarta, 19 Mei 2026"
  },
  {
    catId: "YASPRESNAS &middot; KOSN",
    catEn: "YASPRESNAS &middot; KOSN",
    title: "Sertifikat Peserta &mdash; Informatika",
    titleEn: "Participation Certificate &mdash; Informatics",
    descId: "KOSN 2026 &middot; Yogyakarta, 12 Mei 2026",
    descEn: "KOSN 2026 &middot; Yogyakarta, 12 Mei 2026"
  },
  {
    catId: "YASPRESNAS &middot; KOSN",
    catEn: "YASPRESNAS &middot; KOSN",
    title: "Sertifikat Peserta &mdash; Bahasa Indonesia",
    titleEn: "Participation Certificate &mdash; Bahasa Indonesia",
    descId: "KOSN 2026 &middot; Yogyakarta, 12 Mei 2026",
    descEn: "KOSN 2026 &middot; Yogyakarta, 12 Mei 2026"
  },
  {
    catId: "Nusantara Online Olympiad Cup",
    catEn: "Nusantara Online Olympiad Cup",
    title: "Babak Final &mdash; Matematika",
    titleEn: "Final Round &mdash; Mathematics",
    descId: "NOOC 3.1 Advanced Level &middot; SMKS Telkom Malang",
    descEn: "NOOC 3.1 Advanced Level &middot; SMKS Telkom Malang"
  }
];