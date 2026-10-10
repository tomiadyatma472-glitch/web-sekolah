
const galleryItems = [
  {
    title: "Lingkungan Sekolah",
    description: "Kenali lingkungan SMA Negeri 1 Pekalongan.",
    image: "/halaman-sekolah.jpg",
    alt: "Lingkungan sekolah",
  },
  {
    title: "Kegiatan Pembelajaran",
    description: "Dokumentasi kegiatan belajar siswa.",
    image: "/kegiatan-belajar.jpg",
    alt: "Kegiatan pembelajaran siswa",
  },
  {
    title: "Kegiatan Siswa",
    description: "Dokumentasi aktivitas siswa di luar sekolah.",
    image: "/kegiatan-siswa.jpg",
    alt: "Kegiatan siswa",
  },
  {
    title: "Fasilitas Sekolah",
    description: "Lihat fasilitas yang tersedia di sekolah.",
    image: "/fasilitas-sekolah.png",
    alt: "Fasilitas sekolah",
  },
  {
    title: "Ekstrakurikuler",
    description: "Dokumentasi kegiatan pengembangan minat siswa.",
    image: "/kegiatan-ekstrakurikuler.jpg",
    alt: "Kegiatan ekstrakurikuler",
  },
];

const missions = [
  "[Meningkatkan ketakwaan, akhlak mulia, dan berjiwa nasionalis.]",
  "[Meningkatkan profesionalisme pendidikan dan tenaga pendidikan.]",
  "[meningkatkan karakter warga sekolah melalui gerakan Kegiatan Anak Indonesia Hebat (KAIH).]",
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-800">
      {/* HERO */}
      <section className="relative isolate flex min-h-[480px] items-center bg-slate-950 px-6 py-20 text-white md:min-h-[560px]">
        <img
          src="/foto-sekolah.jpg"
          alt="Gedung SMA Negeri 1 Pekalongan"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/20" />

        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-blue-300">
              Mengenal Lebih Dekat
            </p>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
              Tentang Kami
              <span className="mt-2 block text-blue-400">
                SMA Negeri 1 Pekalongan
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 md:text-lg">
              Kenali identitas, tujuan, dan lingkungan pendidikan
              sekolah melalui informasi yang informatif dan terpercaya.
            </p>

            <a
              href="#profil"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-blue-600 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-500"
            >
              Jelajahi Sekolah
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-1.5 w-1/3 bg-blue-500" />
      </section>

      {/* PROFIL SEKOLAH */}
      <section id="profil" className="scroll-mt-20 px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
              <span className="h-1 w-8 rounded-full bg-blue-600" />
              Profil Sekolah
            </p>

            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-4xl">
              Mengenal Sekolah Lebih Dekat, Membangun Masa Depan
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              [SMA Negeri 1 Pekalongan, populer dengan julukan Smansa atau Kartinians. Sekolah ini terletak di Jawa Tengah, Pekalongan.
              Salah satu sekolah degan akreditasi A. Sekolah ini memiliki motto: unggul dalam berprestasi, luhur dalam budi pekerti.
              Alasan mengapa sekolah ini mendapat julukan Kartinians yaitu karena sekolah ini terletak di jalan kartini.
              Hal tersebut pada akhirnya membuat orang-orang sekitar pada jamannya memanggilnya SMA Kartini.
              Sebagai salah satu sekolah terbaik di Pekalongan, tentunya Smansa sudah dibekali dengan banyak fasilitas yang memadai untuk pembelajaran maupun kenyaman semua tenaga kerja dan siswa.
              sekolah ini juga adaptif terhadap dinamika kurikulum nasional, mulai dari penerapan Kurikulum 1974, Kurikulum 1994, KBK 2004, hingga dipercaya menyelenggarakan program Rintisan Sekolah Bertaraf Internasional (RSBI) pada tahun pelajaran 2009/2010.]
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Informasi ini diharapkan dapat membantu siswa, orang tua,
              alumni, dan masyarakat mengenal sekolah dengan lebih baik.
            </p>

            <a
              href="#visi-misi"
              className="mt-7 inline-flex items-center gap-2 font-bold text-blue-700 transition hover:text-blue-500"
            >
              Kenali visi dan misi
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="relative">
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-tl-3xl border-l-4 border-t-4 border-blue-500" />

            <img
              src="/halaman-sekolah.jpg"
              alt="Halaman dan lingkungan sekolah"
              className="relative h-[320px] w-full rounded-2xl object-cover shadow-xl md:h-[420px]"
            />

            <div className="absolute -bottom-5 right-4 max-w-xs rounded-xl border border-slate-100 bg-white p-5 shadow-xl md:-right-5">
              <p className="text-sm font-semibold leading-6 text-slate-700">
                “Pendidikan membuka jalan menuju masa depan.”
              </p>
              <p className="mt-2 text-xs text-blue-700">
                Semangat belajar dan berkembang
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VISI DAN MISI */}
      <section
        id="visi-misi"
        className="scroll-mt-20 bg-slate-50 px-6 py-20 md:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
              <span className="h-1 w-8 rounded-full bg-blue-600" />
              Arah Pendidikan
            </p>

            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
              Visi dan Misi Sekolah
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Bagian ini menjelaskan arah dan tujuan pendidikan
              berdasarkan visi dan misi resmi sekolah.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-5">
            <article className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:border-blue-200 hover:shadow-lg md:col-span-2 md:p-9">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-2xl text-blue-700">
                ◎
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                Visi
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                [Terwujudnya insan yang berakhlak mulia, berkualitas, serta berwawasan lingkungan dan global berdasarkan nilai-nilai pancasila.]
              </p>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:border-blue-200 hover:shadow-lg md:col-span-3 md:p-9">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-2xl text-blue-700">
                ≡
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                Misi
              </h3>

              <ol className="mt-5 space-y-4">
                {missions.map((mission, index) => (
                  <li key={index} className="flex gap-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <p className="leading-7 text-slate-600">{mission}</p>
                  </li>
                ))}
              </ol>
            </article>
          </div>
        </div>
      </section>

      {/* GALERI */}
      <section id="galeri" className="scroll-mt-20 px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
                <span className="h-1 w-8 rounded-full bg-blue-600" />
                Kehidupan Sekolah
              </p>

              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
                Galeri Kegiatan dan Fasilitas
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                Lihat lebih dekat lingkungan, kegiatan, dan fasilitas
                sekolah melalui dokumentasi foto.
              </p>
            </div>

            <a
              href="#galeri"
              className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-500"
            >
              Galeri Sekolah
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {galleryItems.map((item, index) => (
              <article
                key={item.title}
                className={`group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  index === 0 ? "lg:col-span-2" : ""
                }`}
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    className={`w-full object-cover transition duration-500 group-hover:scale-105 ${
                      index === 0 ? "h-64" : "h-52"
                    }`}
                  />
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PENUTUP */}
      <section className="px-6 pb-20">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-slate-950 px-7 py-12 text-white md:px-14 md:py-16">
          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-blue-600/30 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-1.5 w-1/3 bg-blue-500" />

          <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
                Mengenal Lebih Dekat
              </p>

              <h2 className="text-2xl font-extrabold leading-tight md:text-4xl">
                Bersama Membangun Masa Depan
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                [Tambahkan informasi kontak resmi atau petunjuk untuk
                menghubungi pihak sekolah.]
              </p>
            </div>

            <a
              href="#profil"
              className="inline-flex shrink-0 items-center justify-center gap-3 self-start rounded-full bg-white px-6 py-3 font-bold text-blue-800 transition hover:bg-blue-50 md:self-center"
            >
              Kembali ke Atas
              <span aria-hidden="true">↑</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
