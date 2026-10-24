import { createFileRoute } from "@tanstack/react-router";
import { About, ContactSection, Faq, Gallery, Hero, Location, Process, Products, Services, WhyUs } from "@/components/site/Sections";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => seo("آرکام توس | طراحی، تولید و تعمیر مبدل حرارتی در مشهد", "شرکت مبدل حرارتی آرکام توس؛ طراحی، تولید، نصب، تعمیر و تأمین قطعات مبدل‌های حرارتی صنعتی در مشهد.", "/"),
  component: () => (
    <>
      <Hero /><About /><Services /><Products /><WhyUs /><Process /><Gallery /><Faq /><ContactSection /><Location />
    </>
  ),
});
