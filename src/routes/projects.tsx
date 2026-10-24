import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, Gallery, PageHeroWrap, Process } from "@/components/site/pages";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/projects")({
  head: () => seo("پروژه‌ها و گالری صنعتی | آرکام توس", "گالری تصاویر صنعتی مرتبط با مبدل‌های حرارتی، ساخت، لوله‌کشی و نگهداری تجهیزات.", "/projects"),
  component: () => (
    <>
      <PageHeroWrap kind="projects" />
      <section className="mx-auto max-w-3xl px-4 pt-16 text-center sm:px-6">
        <p className="leading-8 text-muted-foreground">
          اطلاعات پروژه‌های انجام‌شده پس از هماهنگی و تأیید منتشر خواهد شد. تصاویر زیر نمایشی هستند و فضای کاری صنعت مبدل‌های حرارتی را معرفی می‌کنند؛ برای کسب اطلاعات درباره سوابق کاری با ما تماس بگیرید.
        </p>
      </section>
      <Gallery /><Process /><CtaBand />
    </>
  ),
});
