import { createFileRoute } from "@tanstack/react-router";
import { About, CtaBand, PageHeroWrap, Process, WhyUs } from "@/components/site/pages";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => seo("درباره ما | شرکت مبدل حرارتی آرکام توس", "آشنایی با شرکت مبدل حرارتی آرکام توس و رویکرد آن در طراحی، تولید، نصب و تعمیر مبدل‌های حرارتی.", "/about"),
  component: () => (
    <>
      <PageHeroWrap kind="about" />
      <About showLink={false} />
      <section className="mx-auto max-w-4xl px-4 pb-20 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-card p-8 shadow-soft">
            <h2 className="text-xl font-bold text-navy">مأموریت ما</h2>
            <p className="mt-4 leading-8 text-muted-foreground">ارائه خدمات مهندسی در حوزه مبدل‌های حرارتی متناسب با نیاز واقعی هر پروژه، با تمرکز بر عملکرد مطمئن تجهیزات حرارتی.</p>
          </div>
          <div className="rounded-2xl border bg-card p-8 shadow-soft">
            <h2 className="text-xl font-bold text-navy">حوزه فعالیت</h2>
            <p className="mt-4 leading-8 text-muted-foreground">طراحی، تولید، نصب و راه‌اندازی، تعمیر و نگهداری مبدل‌های حرارتی و تأمین قطعات مرتبط.</p>
          </div>
        </div>
      </section>
      <WhyUs /><Process /><CtaBand />
    </>
  ),
});
