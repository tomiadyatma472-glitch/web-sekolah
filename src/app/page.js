
import Link from "next/link";
import berita from "@/data/berita";
import BeritaCard from "@/components/BeritaCard";

const keunggulan = [
  {
    nomor: "01",
    judul: "Pendidikan Berkualitas",
    deskripsi:
      "Mendorong siswa untuk mengembangkan pengetahuan, karakter, dan kemampuan akademik.",
  },
  {
    nomor: "02",
    judul: "Pengembangan Potensi",
    deskripsi:
      "Memberikan ruang bagi siswa untuk mengembangkan bakat melalui kegiatan akademik dan ekstrakurikuler.",
  },
  {
    nomor: "03",
    judul: "Lingkungan Positif",
    deskripsi:
      "Membangun budaya sekolah yang disiplin, peduli, kreatif, dan bertanggung jawab.",
  },
];

export default function Home() {
  const beritaTerbaru = berita.slice(0, 3);

  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden bg-blue-950 text-white">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-800/40 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-2 lg:py-28">
          <div>
            <p className="mb-5 inline-block rounded-full border border-blue-400/40 bg-blue-900/60 px-4 py-2 text-sm font-medium text-blue-200">
              Website Resmi Sekolah
            </p>

            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              SMA Negeri 1
              <span className="mt-2 block text-blue-300">
                Pekalongan
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-blue-100 sm:text-lg">
              Membangun generasi yang berkarakter, berprestasi,
              berwawasan luas, dan siap menghadapi masa depan.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="rounded-xl bg-white px-6 py-3 font-bold text-blue-950 transition hover:bg-blue-100"
              >
                Kenali Sekolah Kami
              </Link>

              <Link
                href="/berita"
                className="rounded-xl border border-blue-300/60 px-6 py-3 font-bold text-white transition hover:bg-blue-900"
              >
                Lihat Berita
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur-sm">
              <img
                src="/sekolah.jpg"
                alt="Lingkungan SMA Negeri 1 Pekalongan"
                className="h-64 w-full rounded-2xl object-cover sm:h-80 lg:h-96"
              />
            </div>

            <div className="mt-4 text-center text-sm text-blue-200">
              Mengenal lingkungan dan kegiatan sekolah
            </div>
          </div>
        </div>
      </section>

      {/* SAMBUTAN */}
      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
            Selamat Datang
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Mengenal SMA Negeri 1 Pekalongan
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600">
            Website ini menjadi media informasi mengenai profil sekolah,
            kegiatan siswa, serta berita dan informasi pendidikan.
            Kami berharap website ini dapat membantu siswa, orang tua,
            alumni, dan masyarakat mengenal lingkungan sekolah dengan
            lebih mudah.
          </p>

          <Link
            href="/about"
            className="mt-7 inline-flex font-bold text-blue-800 hover:text-blue-600"
          >
            Selengkapnya tentang sekolah →
          </Link>
        </div>
      </section>

      {/* KEUNGGULAN */}
      <section className="bg-slate-50 px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
              Mengapa Kami?
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Bertumbuh dan Berprestasi Bersama
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Pendidikan tidak hanya tentang pelajaran, tetapi juga
              tentang karakter, potensi, dan pengalaman.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {keunggulan.map((item) => (
              <div
                key={item.nomor}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-sm font-extrabold tracking-widest text-blue-700">
                  {item.nomor}
                </span>

                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  {item.judul}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {item.deskripsi}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BERITA TERBARU */}
      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
                Informasi Sekolah
              </p>

              <h2 className="mt-3 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Berita Terbaru
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                Simak artikel dan informasi seputar kegiatan serta
                pengembangan potensi siswa.
              </p>
            </div>

            <Link
              href="/berita"
              className="font-bold text-blue-800 hover:text-blue-600"
            >
              Semua Berita →
            </Link>
          </div>

          <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {beritaTerbaru.map((item) => (
              <BeritaCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* AJAKAN */}
      <section className="bg-blue-950 px-5 py-14 text-center text-white sm:px-8 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Ingin Mengenal Sekolah Kami Lebih Dekat?
          </h2>

          <p className="mt-4 leading-7 text-blue-100">
            Jelajahi profil, informasi, dan berbagai kegiatan
            SMA Negeri 1 Pekalongan melalui website ini.
          </p>

          <Link
            href="/about"
            className="mt-7 inline-flex rounded-xl bg-white px-6 py-3 font-bold text-blue-950 transition hover:bg-blue-100"
          >
            Tentang Sekolah
          </Link>
        </div>
      </section>
    </main>
  );
}
