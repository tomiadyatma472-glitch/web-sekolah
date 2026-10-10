
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState("2026");

  useEffect(() => {
    setYear(String(new Date().getFullYear()));
  }, []);

  return (
    <footer className="bg-blue-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:grid-cols-2">
        <div>
          <h2 className="text-lg font-bold">
            SMA Negeri 1 Pekalongan
          </h2>
          <p className="mt-3 text-sm leading-6 text-blue-100">
            Website profil sekolah, informasi pendidikan,
            kegiatan siswa, dan berita sekolah.
          </p>
          <p className="mt-3 text-sm text-blue-200">
            Kota Pekalongan, Jawa Tengah
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Navigasi</h3>
          <div className="mt-3 flex flex-col items-start gap-2 text-sm text-blue-100">
            <Link href="/" className="hover:text-yellow-300">
              Home
            </Link>
            <Link href="/about" className="hover:text-yellow-300">
              About
            </Link>
            <Link href="/berita" className="hover:text-yellow-300">
              Berita
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-blue-800 px-5 py-4 text-center text-xs text-blue-200">
        © {year} SMA Negeri 1 Pekalongan.
        Website profil sekolah.
      </div>
    </footer>
  );
}
