#!/usr/bin/env python3
"""
add_item.py — Tambah prestasi/sertifikat baru ke data.js lewat terminal,
tanpa perlu buka nano atau edit JS manual.

Cara pakai:
    python3 add_item.py
"""

import re
import sys
import os

DATA_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "data.js")


def ask(prompt, default=None):
    suffix = f" [{default}]" if default else ""
    val = input(f"{prompt}{suffix}: ").strip()
    return val if val else (default or "")


def ask_bilingual(label):
    """Tanya teks ID, tawarin auto-copy ke EN atau isi beda."""
    id_text = ask(f"{label} (Bahasa Indonesia)")
    same = ask(f"{label} (English) — kosongkan utk pakai teks sama", default=id_text)
    return id_text, same


def escape_js(s):
    return s.replace('"', '\\"')


def add_achievement():
    print("\n=== Tambah Prestasi Baru ===")
    print("Jenis medali: 1) Emas  2) Perak  3) Peserta/Finalis")
    choice = ask("Pilih (1/2/3)", default="1")
    medal_map = {
        "1": ("gold", "EMAS", "GOLD"),
        "2": ("silver", "PERAK", "SILVER"),
        "3": ("part", "FINAL", "FINAL"),
    }
    medal, medal_id, medal_en = medal_map.get(choice, medal_map["1"])

    title_id, title_en = ask_bilingual("Nama lomba/prestasi")
    desc_id, desc_en = ask_bilingual("Deskripsi singkat")
    date = ask("Tanggal (contoh: 19 MEI 2026)")

    entry = f"""  {{
    medal: "{medal}",
    medalLabelId: "{medal_id}",
    medalLabelEn: "{medal_en}",
    titleId: "{escape_js(title_id)}",
    titleEn: "{escape_js(title_en)}",
    descId: "{escape_js(desc_id)}",
    descEn: "{escape_js(desc_en)}",
    date: "{date}"
  }},
"""

    with open(DATA_FILE, "r") as f:
        content = f.read()

    marker = "const ACHIEVEMENTS = ["
    idx = content.find(marker)
    if idx == -1:
        print("❌ Tidak menemukan 'const ACHIEVEMENTS = [' di data.js")
        sys.exit(1)

    insert_pos = idx + len(marker)
    new_content = content[:insert_pos] + "\n" + entry + content[insert_pos:]

    with open(DATA_FILE, "w") as f:
        f.write(new_content)

    print("\n✅ Prestasi baru berhasil ditambahkan ke data.js (paling atas/terbaru)!")


def add_certificate():
    print("\n=== Tambah Sertifikat Baru ===")
    cat_id, cat_en = ask_bilingual("Kategori/penyelenggara")
    title, title_en = ask_bilingual("Judul sertifikat")
    desc_id, desc_en = ask_bilingual("Deskripsi singkat")

    entry = f"""  {{
    catId: "{escape_js(cat_id)}",
    catEn: "{escape_js(cat_en)}",
    title: "{escape_js(title)}",
    titleEn: "{escape_js(title_en)}",
    descId: "{escape_js(desc_id)}",
    descEn: "{escape_js(desc_en)}"
  }},
"""

    with open(DATA_FILE, "r") as f:
        content = f.read()

    marker = "const CERTIFICATES = ["
    idx = content.find(marker)
    if idx == -1:
        print("❌ Tidak menemukan 'const CERTIFICATES = [' di data.js")
        sys.exit(1)

    insert_pos = idx + len(marker)
    new_content = content[:insert_pos] + "\n" + entry + content[insert_pos:]

    with open(DATA_FILE, "w") as f:
        f.write(new_content)

    print("\n✅ Sertifikat baru berhasil ditambahkan ke data.js (paling atas/terbaru)!")


def add_project():
    print("\n=== Tambah Project Baru ===")
    tag = ask("Tag/tools (contoh: Python · Flask · API)")
    title = ask("Nama project")
    desc_id, desc_en = ask_bilingual("Deskripsi project")
    repo = ask("Link GitHub/demo (kosongkan kalau tidak ada)", default="")

    if repo:
        repo_line = f'    repoUrl: "{escape_js(repo)}",\n    repoLabel: "{escape_js(repo.replace("https://", "").replace("http://", ""))}"'
    else:
        repo_line = '    repoUrl: null,\n    repoLabel: null'

    entry = f"""  {{
    tag: "{escape_js(tag)}",
    title: "{escape_js(title)}",
    descId: "{escape_js(desc_id)}",
    descEn: "{escape_js(desc_en)}",
{repo_line}
  }},
"""

    with open(DATA_FILE, "r") as f:
        content = f.read()

    marker = "const PROJECTS = ["
    idx = content.find(marker)
    if idx == -1:
        print("❌ Tidak menemukan 'const PROJECTS = [' di data.js")
        sys.exit(1)

    insert_pos = idx + len(marker)
    new_content = content[:insert_pos] + "\n" + entry + content[insert_pos:]

    with open(DATA_FILE, "w") as f:
        f.write(new_content)

    print("\n✅ Project baru berhasil ditambahkan ke data.js (paling atas/terbaru)!")


def main():
    if not os.path.exists(DATA_FILE):
        print(f"❌ File data.js tidak ditemukan di: {DATA_FILE}")
        sys.exit(1)

    print("Mau tambah apa?")
    print("  1) Prestasi / medali kompetisi")
    print("  2) Sertifikat")
    print("  3) Project")
    choice = ask("Pilih (1/2/3)", default="1")

    if choice == "2":
        add_certificate()
    elif choice == "3":
        add_project()
    else:
        add_achievement()

    print("\nSelesai! Refresh halaman web kamu (Ctrl+Shift+R) untuk lihat perubahan.")


if __name__ == "__main__":
    main()