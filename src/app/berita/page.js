
import berita from "@/data/berita";
import BeritaCard from "@/components/BeritaCard";

export default function BeritaPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header halaman berita */}
      <section className="bg-slate-900 px-6 py-16 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            Informasi Sekolah
          </p>

          <h1 className="text-3xl font-bold md:text-5xl">
            Berita Sekolah
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
            Ikuti berbagai informasi, kegiatan, dan prestasi
            SMA Negeri 1 Pekalongan.
          </p>
        </div>
      </section>

      {/* Daftar kartu berita */}
      <section className="px-6 py-12 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Berita Terbaru
              </h2>
              <p className="mt-2 text-slate-600">
                Informasi dan kegiatan seputar sekolah.
              </p>
            </div>

            <p className="text-sm text-slate-500">
              {berita.length} artikel
            </p>
          </div>

          {berita.length > 0 ? (
            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {berita.map((item) => (
                <BeritaCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <p className="rounded-xl border border-slate-200 bg-white p-8 text-center text-slate-600">
              Belum ada berita yang tersedia.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
