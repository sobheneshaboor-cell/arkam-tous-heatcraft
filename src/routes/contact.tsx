import { createFileRoute } from "@tanstack/react-router";
import { ContactSection, Faq, Location, PageHeroWrap } from "@/components/site/pages";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  validateSearch: (s: Record<string, unknown>): { type?: string } =>
    typeof s["type"] === "string" ? { type: s["type"] } : {},
  head: () => seo("تماس با ما | درخواست مشاوره مبدل حرارتی - آرکام توس", "تماس با شرکت مبدل حرارتی آرکام توس؛ تلفن ۰۵۱۳۲۴۴۵۶۷۱، مشهد، شهرک صنعتی، بلوار اندیشه، پلاک ۶.", "/contact"),
  component: ContactPage,
});

function ContactPage() {
  const { type } = Route.useSearch();
  return (
    <>
      <PageHeroWrap kind="contact" />
      <ContactSection key={type} defaultType={type ?? ""} />
      <Location /><Faq />
    </>
  );
}
