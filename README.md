# porto

Portfolio pribadi Bima Gusto Mahatsafa — self-hosted di server rumah, dengan tema dark/light dan dukungan dwibahasa (ID/EN).

## 🔗 Akses

| Konteks | URL |
|---|---|
| **Publik (siapa saja, dari mana saja)** | https://mysql-pink-planet-financing.trycloudflare.com/ |
| Jaringan lokal saja (sama WiFi) | http://192.168.1.12/ |

> Catatan: `192.168.1.12` adalah alamat IP privat (LAN) dan **hanya bisa diakses dari perangkat yang terhubung ke jaringan WiFi yang sama** dengan server — tidak dapat diakses dari internet luar. Akses publik sepenuhnya melalui Cloudflare Tunnel di atas.

## 🛠️ Stack

- **Frontend**: HTML, CSS murni, vanilla JavaScript (tanpa framework)
- **Web server**: Nginx (Debian/Linux)
- **Exposure ke publik**: Cloudflare Tunnel (tanpa port forwarding)
- **Data**: konten prestasi/sertifikat/project dipisah di `data.js`, di-render otomatis oleh `script.js`

## 📁 Struktur

```
porto/
├── index.html      # struktur halaman
├── style.css        # semua styling
├── script.js         # logic tema, bahasa, & render data
├── data.js           # ⭐ satu-satunya file yang perlu diedit untuk update konten
├── add_item.py       # script interaktif untuk nambah data lewat terminal
└── assets/           # gambar/badge
```

## ➕ Update konten (prestasi, sertifikat, project)

Tidak perlu edit HTML/CSS. Jalankan di server:

```bash
python3 add_item.py
```

Ikuti pertanyaan interaktifnya — data otomatis masuk ke `data.js` dan langsung tampil setelah refresh browser.

## ✨ Fitur

- Toggle tema dark/light (tersimpan di localStorage)
- Toggle bahasa Indonesia/English
- Section: bio, skills, prestasi kompetisi, project, sertifikat, kredensial (Credly + WakaTime)
