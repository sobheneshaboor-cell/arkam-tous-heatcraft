import { Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowLeft, ClipboardList, Cog, Gauge, Handshake, MapPin, Phone, Search, ShieldCheck, Layers, MessagesSquare, Info } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { COMPANY, FAQS, GALLERY, PRODUCTS, REQUEST_TYPES, SERVICES } from "@/lib/site";
import hero from "@/assets/hero.jpg";
import fabrication from "@/assets/fabrication.jpg";

export function SectionTitle({ eyebrow, title, desc, light = false }: { eyebrow: string; title: string; desc?: string; light?: boolean }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <span className="text-sm font-bold text-primary">{eyebrow}</span>
      <h2 className={`mt-2 text-2xl font-black md:text-4xl ${light ? "text-navy-foreground" : "text-navy"}`}>{title}</h2>
      <span className="mx-auto mt-4 block h-1 w-14 rounded bg-cyan" />
      {desc && <p className={`mt-4 leading-8 ${light ? "text-navy-foreground/75" : "text-muted-foreground"}`}>{desc}</p>}
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy">
      <img src={hero} alt="مبدل حرارتی پوسته و لوله در سالن صنعتی" className="absolute inset-0 -z-10 h-full w-full object-cover" width={1920} height={1088} fetchPriority="high" />
      <div className="absolute inset-0 -z-10 bg-hero-overlay" />
      <div className="mx-auto flex min-h-[78vh] max-w-7xl items-center px-4 py-24 sm:px-6">
        <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan/40 bg-navy/40 px-4 py-1.5 text-sm text-cyan">
            <span className="h-2 w-2 rounded-full bg-cyan" /> {COMPANY.name}
          </span>
          <h1 className="mt-6 text-3xl font-black leading-[1.5] text-navy-foreground sm:text-5xl sm:leading-[1.4]">
            راهکارهای مهندسی مبدل‌های حرارتی با آرکام توس
          </h1>
          <p className="mt-6 text-lg leading-9 text-navy-foreground/85">
            از طراحی و تولید تا نصب، تعمیر و تأمین قطعات؛ همراه شما در مسیر عملکرد مطمئن تجهیزات صنعتی.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/services" className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 font-bold text-primary-foreground shadow-lift transition hover:-translate-y-0.5">
              مشاهده خدمات <ArrowLeft className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="rounded-lg border border-navy-foreground/40 px-7 py-3.5 font-bold text-navy-foreground transition hover:bg-navy-foreground hover:text-navy">
              تماس با ما
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function About({ showLink = true }: { showLink?: boolean }) {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
      <div className="relative">
        <img src={fabrication} alt="ساخت و جوشکاری تجهیزات صنعتی" loading="lazy" width={1024} height={768} className="aspect-[4/3] w-full rounded-2xl object-cover shadow-soft" />
        <div className="absolute -bottom-6 left-6 hidden rounded-xl bg-navy p-5 text-navy-foreground shadow-lift sm:block">
          <p className="text-sm text-navy-foreground/70">حوزه فعالیت</p>
          <p className="mt-1 font-bold">طراحی · تولید · نصب · تعمیر · قطعات</p>
        </div>
      </div>
      <div>
        <span className="text-sm font-bold text-primary">درباره آرکام توس</span>
        <h2 className="mt-2 text-2xl font-black text-navy md:text-4xl">مهندسی حرارت، راهکارهای صنعتی</h2>
        <span className="mt-4 block h-1 w-14 rounded bg-cyan" />
        <p className="mt-6 leading-9 text-muted-foreground">
          شرکت مبدل حرارتی آرکام توس در زمینه طراحی، تولید، نصب و تعمیر مبدل‌های حرارتی و تأمین قطعات مرتبط فعالیت می‌کند. هدف ما ارائه راهکارهای مهندسی متناسب با نیازهای صنعتی و کمک به عملکرد مطمئن تجهیزات حرارتی است.
        </p>
        {showLink && (
          <Link to="/about" className="mt-8 inline-flex items-center gap-2 font-bold text-primary hover:gap-3 transition-all">
            بیشتر درباره ما <ArrowLeft className="h-4 w-4" />
          </Link>
        )}
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle eyebrow="خدمات ما" title="خدمات تخصصی مبدل‌های حرارتی" desc="پوشش مراحل مختلف چرخه عمر تجهیزات حرارتی، از طراحی اولیه تا پشتیبانی و تأمین قطعات." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, desc }) => (
            <article key={title} className="group rounded-2xl border bg-card p-7 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift">
              <span className="grid h-14 w-14 place-items-center rounded-xl bg-accent text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-7 w-7" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-navy">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{desc}</p>
            </article>
          ))}
          <Link to="/contact" className="flex flex-col justify-center rounded-2xl bg-navy p-7 text-navy-foreground transition hover:shadow-lift">
            <h3 className="text-lg font-bold">نیاز خاصی دارید؟</h3>
            <p className="mt-3 text-sm leading-7 text-navy-foreground/75">برای بررسی نیاز فنی پروژه با ما در تماس باشید.</p>
            <span className="mt-5 inline-flex items-center gap-2 font-bold text-cyan">درخواست مشاوره <ArrowLeft className="h-4 w-4" /></span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export function Products() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle eyebrow="دسته‌بندی‌ها" title="محصولات و حوزه‌های کاری" desc="دسته‌بندی‌های زیر حوزه‌های قابل بررسی را معرفی می‌کنند؛ امکان ارائه هر مورد پس از استعلام و بررسی مشخصات فنی اعلام می‌شود." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((p) => (
            <article key={p.title} className="group flex flex-col overflow-hidden rounded-2xl border bg-card transition hover:shadow-lift">
              <div className="overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" width={1024} height={768} className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-bold text-navy">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-7 text-muted-foreground">{p.desc}</p>
                <Link to="/contact" search={{ type: p.type }} className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg border border-primary px-4 py-2.5 text-sm font-bold text-primary transition hover:bg-primary hover:text-primary-foreground">
                  استعلام مشخصات <ArrowLeft className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const WHY = [
  { icon: Search, title: "توجه به نیازهای فنی پروژه", desc: "بررسی شرایط کاری و مشخصات فنی پیش از ارائه هر راهکار." },
  { icon: Layers, title: "خدمات در مراحل مختلف چرخه عمر تجهیزات", desc: "از طراحی و ساخت تا نصب، تعمیر و تأمین قطعات." },
  { icon: ShieldCheck, title: "تمرکز بر کیفیت اجرا", desc: "دقت در جزئیات اجرایی برای عملکرد مطمئن تجهیزات حرارتی." },
  { icon: MessagesSquare, title: "ارتباط مستقیم برای بررسی نیازهای مشتری", desc: "گفت‌وگوی مستقیم برای شفاف شدن نیاز و هماهنگی مراحل کار." },
];

export function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-navy py-20">
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary/30 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle light eyebrow="چرا آرکام توس" title="رویکرد ما در همکاری" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-navy-foreground/10 bg-navy-foreground/5 p-7 transition hover:border-cyan/50 hover:bg-navy-foreground/10">
              <Icon className="h-9 w-9 text-cyan" />
              <h3 className="mt-5 font-bold leading-8 text-navy-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-navy-foreground/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  { icon: Phone, title: "ثبت درخواست و تماس اولیه" },
  { icon: ClipboardList, title: "بررسی نیاز و مشخصات فنی" },
  { icon: Handshake, title: "ارائه راهکار و هماهنگی اجرا" },
  { icon: Cog, title: "انجام خدمات توافق‌شده و پیگیری" },
];

export function Process() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle eyebrow="فرایند همکاری" title="چهار گام تا اجرای خدمات" />
        <ol className="relative grid gap-8 md:grid-cols-4">
          <div className="absolute right-[12.5%] left-[12.5%] top-8 hidden h-0.5 bg-gradient-to-l from-primary to-cyan md:block" />
          {STEPS.map(({ icon: Icon, title }, i) => (
            <li key={title} className="relative flex flex-col items-center text-center">
              <span className="relative grid h-16 w-16 place-items-center rounded-full border-4 border-background bg-primary text-primary-foreground shadow-lift">
                <Icon className="h-7 w-7" />
                <span className="absolute -top-1 -right-1 grid h-6 w-6 place-items-center rounded-full bg-cyan text-xs font-bold text-navy">{(i + 1).toLocaleString("fa-IR")}</span>
              </span>
              <h3 className="mt-5 max-w-[14rem] font-bold leading-8 text-navy">{title}</h3>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Gallery() {
  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionTitle eyebrow="گالری صنعتی" title="نمایی از دنیای تجهیزات حرارتی" desc="تصاویر این بخش جنبه نمایشی دارند و برای معرفی فضای کاری صنعت مبدل‌های حرارتی استفاده شده‌اند." />
        <div className="grid auto-rows-[200px] grid-cols-2 gap-4 md:grid-cols-4">
          {GALLERY.map((g, i) => (
            <figure key={i} className={`group relative overflow-hidden rounded-xl ${i === 0 ? "col-span-2 row-span-2" : ""} ${i === 3 ? "md:col-span-2" : ""}`}>
              <img src={g.img} alt={g.alt} loading="lazy" width={1024} height={768} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/90 to-transparent p-4 text-sm text-navy-foreground opacity-0 transition group-hover:opacity-100">{g.alt}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionTitle eyebrow="پرسش‌های متداول" title="پاسخ به سؤالات شما" />
        <Accordion type="single" collapsible className="space-y-3" dir="rtl">
          {FAQS.map((f, i) => (
            <AccordionItem key={i} value={`f${i}`} className="rounded-xl border bg-card px-5 shadow-sm">
              <AccordionTrigger className="text-right text-base font-bold text-navy hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent className="leading-8 text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

type Errors = Partial<Record<"name" | "phone" | "type" | "message", string>>;

export function ContactSection({ defaultType = "" }: { defaultType?: string }) {
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim();
    const phone = String(fd.get("phone") || "").trim().replace(/[۰-۹]/g, (d) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(d)));
    const type = String(fd.get("type") || "");
    const message = String(fd.get("message") || "").trim();
    const er: Errors = {};
    if (name.length < 3) er.name = "لطفاً نام و نام خانوادگی را وارد کنید.";
    if (!/^0\d{10}$/.test(phone.replace(/[\s-]/g, ""))) er.phone = "شماره تماس معتبر نیست (مثال: ۰۹۱۲۱۲۳۴۵۶۷).";
    if (!type) er.type = "لطفاً نوع درخواست را انتخاب کنید.";
    if (message.length < 10) er.message = "لطفاً شرح نیاز را حداقل در ۱۰ نویسه بنویسید.";
    setErrors(er);
    setDone(Object.keys(er).length === 0);
  }

  const field = "mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20";
  const err = (k: keyof Errors) => errors[k] && <p className="mt-1.5 text-xs text-destructive">{errors[k]}</p>;

  return (
    <section className="bg-surface py-20" id="contact">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <span className="text-sm font-bold text-primary">تماس با ما</span>
          <h2 className="mt-2 text-2xl font-black text-navy md:text-4xl">درخواست مشاوره و استعلام</h2>
          <span className="mt-4 block h-1 w-14 rounded bg-cyan" />
          <p className="mt-6 leading-8 text-muted-foreground">برای بررسی نیاز فنی، استعلام یا درخواست خدمات با ما تماس بگیرید.</p>
          <div className="mt-8 space-y-4">
            <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-4 rounded-xl border bg-card p-5 transition hover:border-primary hover:shadow-soft">
              <span className="grid h-12 w-12 place-items-center rounded-lg bg-primary text-primary-foreground"><Phone className="h-5 w-5" /></span>
              <span><span className="block text-sm text-muted-foreground">تلفن:</span><span className="font-bold text-navy" dir="ltr">{COMPANY.phoneDisplay}</span></span>
            </a>
            <div className="flex items-center gap-4 rounded-xl border bg-card p-5">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-accent text-primary"><MapPin className="h-5 w-5" /></span>
              <span><span className="block text-sm text-muted-foreground">آدرس:</span><span className="font-bold leading-7 text-navy">{COMPANY.address}</span></span>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} noValidate className="rounded-2xl border bg-card p-6 shadow-soft sm:p-8 lg:col-span-3">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-medium">نام و نام خانوادگی *<input name="name" className={field} maxLength={100} aria-invalid={!!errors.name} />{err("name")}</label>
            <label className="text-sm font-medium">نام شرکت<input name="company" className={field} maxLength={120} /></label>
            <label className="text-sm font-medium">شماره تماس *<input name="phone" inputMode="tel" dir="ltr" className={`${field} text-right`} maxLength={15} aria-invalid={!!errors.phone} />{err("phone")}</label>
            <label className="text-sm font-medium">نوع درخواست *
              <select name="type" defaultValue={REQUEST_TYPES.includes(defaultType as never) ? defaultType : ""} className={field} aria-invalid={!!errors.type}>
                <option value="" disabled>انتخاب کنید</option>
                {REQUEST_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>{err("type")}
            </label>
            <label className="text-sm font-medium sm:col-span-2">شرح نیاز *<textarea name="message" rows={5} maxLength={1500} className={field} aria-invalid={!!errors.message} />{err("message")}</label>
          </div>
          {done && (
            <div role="status" className="mt-6 flex gap-3 rounded-lg border border-primary/30 bg-accent p-4 text-sm leading-7 text-accent-foreground">
              <Info className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <p>اطلاعات فرم کامل و صحیح است؛ اما ارسال آنلاین فرم هنوز راه‌اندازی نشده و درخواست شما <strong>ارسال نشده است</strong>. لطفاً برای ثبت درخواست با شماره <a href={`tel:${COMPANY.phone}`} className="font-bold text-primary underline" dir="ltr">{COMPANY.phoneDisplay}</a> تماس بگیرید.</p>
            </div>
          )}
          <button type="submit" className="mt-6 w-full rounded-lg bg-primary py-3.5 font-bold text-primary-foreground transition hover:bg-navy sm:w-auto sm:px-12">ثبت درخواست</button>
        </form>
      </div>
    </section>
  );
}

export function Location() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-2xl bg-navy p-10 text-center md:p-14">
          <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(var(--navy-foreground)_1px,transparent_1px),linear-gradient(90deg,var(--navy-foreground)_1px,transparent_1px)] [background-size:40px_40px]" />
          <div className="relative">
            <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-cyan text-navy"><MapPin className="h-8 w-8" /></span>
            <h2 className="mt-6 text-2xl font-black text-navy-foreground md:text-3xl">موقعیت ما</h2>
            <p className="mt-4 text-lg text-navy-foreground/85">{COMPANY.address}</p>
            <p className="mt-2 text-sm text-navy-foreground/60">برای هماهنگی مراجعه حضوری، پیش از مراجعه تماس بگیرید.</p>
            <a href={`tel:${COMPANY.phone}`} className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-bold text-primary-foreground hover:bg-primary/90">
              <Phone className="h-4 w-4" /> تماس برای هماهنگی
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="bg-primary py-14">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 text-center sm:px-6 md:flex-row md:text-right">
        <div>
          <h2 className="text-2xl font-black text-primary-foreground">برای بررسی نیاز پروژه خود آماده‌ایم</h2>
          <p className="mt-2 text-primary-foreground/80">با ما تماس بگیرید یا درخواست مشاوره ثبت کنید.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <a href={`tel:${COMPANY.phone}`} className="inline-flex items-center gap-2 rounded-lg bg-navy px-6 py-3 font-bold text-navy-foreground"><Gauge className="h-4 w-4" /> تماس تلفنی</a>
          <Link to="/contact" className="rounded-lg border border-primary-foreground/50 px-6 py-3 font-bold text-primary-foreground hover:bg-primary-foreground hover:text-primary">درخواست مشاوره</Link>
        </div>
      </div>
    </section>
  );
}
