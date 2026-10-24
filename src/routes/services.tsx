import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, Faq, PageHeroWrap, Process, Services, WhyUs } from "@/components/site/pages";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/services")({
  head: () => seo("خدمات | طراحی، تولید، نصب و تعمیر مبدل حرارتی - آرکام توس", "خدمات آرکام توس شامل طراحی، تولید، نصب و راه‌اندازی، تعمیر و نگهداری و تأمین قطعات مبدل‌های حرارتی.", "/services"),
  component: () => (
    <>
      <PageHeroWrap kind="services" /><Services /><WhyUs /><Process /><Faq /><CtaBand />
    </>
  ),
});
