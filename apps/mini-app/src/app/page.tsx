export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-6 text-white">
      <section className="mx-auto flex w-full max-w-md flex-col gap-4">
        <div className="rounded-3xl bg-slate-900 p-5 shadow-lg shadow-black/20">
          <p className="text-sm text-slate-400">المحفظة العربية</p>
          <h1 className="mt-2 text-2xl font-bold">مرحبًا بك</h1>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            هذه الواجهة الأساسية لتطبيق Telegram Mini App الخاص بمحفظة العملات
            المشفرة.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <button className="rounded-2xl bg-blue-600 px-4 py-4 font-semibold">
            استقبال
          </button>
          <button className="rounded-2xl bg-slate-800 px-4 py-4 font-semibold">
            إرسال
          </button>
        </div>

        <div className="rounded-3xl bg-slate-900 p-5">
          <p className="text-sm text-slate-400">الأرصدة</p>
          <p className="mt-3 text-lg font-medium">سيتم ربط المحافظ لاحقًا</p>
        </div>
      </section>
    </main>
  );
}
