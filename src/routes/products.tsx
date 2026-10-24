import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHeroWrap, Products } from "@/components/site/pages";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/products")({
  head: () => seo("محصولات | مبدل‌های پوسته و لوله، صفحه‌ای و قطعات - آرکام توس", "دسته‌بندی محصولات و حوزه‌های کاری آرکام توس: مبدل پوسته و لوله، مبدل صفحه‌ای، قطعات جانبی و بازسازی تجهیزات حرارتی.", "/products"),
  component: () => (
    <>
      <PageHeroWrap kind="products" /><Products /><CtaBand />
    </>
  ),
});
