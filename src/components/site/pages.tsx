import { PageHero } from "./Layout";
import hero from "@/assets/hero.jpg";
import fabrication from "@/assets/fabrication.jpg";
import piping from "@/assets/piping.jpg";
import shellTube from "@/assets/shell-tube.jpg";
import maintenance from "@/assets/maintenance.jpg";

export * from "./Sections";

const HEROES = {
  about: { title: "درباره ما", subtitle: "مهندسی حرارت، راهکارهای صنعتی؛ آشنایی با شرکت مبدل حرارتی آرکام توس.", image: fabrication },
  services: { title: "خدمات", subtitle: "طراحی، تولید، نصب، تعمیر و تأمین قطعات مبدل‌های حرارتی در مراحل مختلف چرخه عمر تجهیزات.", image: maintenance },
  products: { title: "محصولات", subtitle: "دسته‌بندی‌های قابل بررسی در حوزه مبدل‌های حرارتی و تجهیزات جانبی؛ ارائه هر مورد پس از استعلام.", image: shellTube },
  projects: { title: "پروژه‌ها", subtitle: "نمایی از حوزه‌های کاری و فضای صنعتی مرتبط با مبدل‌های حرارتی.", image: piping },
  contact: { title: "تماس با ما", subtitle: "برای استعلام، مشاوره یا درخواست خدمات با ما در ارتباط باشید.", image: hero },
};

export function PageHeroWrap({ kind }: { kind: keyof typeof HEROES }) {
  return <PageHero {...HEROES[kind]} />;
}
