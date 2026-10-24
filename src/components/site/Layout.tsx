import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { COMPANY, NAV, SERVICES } from "@/lib/site";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label={COMPANY.name}>
      <span className="grid h-11 w-11 place-items-center rounded-lg bg-primary text-lg font-black text-primary-foreground shadow-soft">
        <span className="relative">آ<span className="absolute -bottom-1 -left-1 h-1.5 w-1.5 rounded-full bg-cyan" /></span>
      </span>
      <span className="leading-tight">
        <span className={`block text-lg font-extrabold ${light ? "text-navy-foreground" : "text-navy"}`}>آرکام توس</span>
        <span className={`block text-[11px] font-medium ${light ? "text-navy-foreground/70" : "text-muted-foreground"}`}>مبدل حرارتی</span>
      </span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 10);
    f();
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header className={`sticky top-0 z-50 border-b bg-background/95 backdrop-blur transition-shadow ${scrolled ? "shadow-soft" : ""}`}>
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="منوی اصلی">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: true }}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary data-[status=active]:text-primary">
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/contact" className="hidden rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition hover:bg-navy sm:inline-flex">
            درخواست مشاوره
          </Link>
          <button onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center rounded-md border lg:hidden" aria-label={open ? "بستن منو" : "باز کردن منو"} aria-expanded={open}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t bg-background px-4 pb-4 lg:hidden animate-in fade-in slide-in-from-top-2" aria-label="منوی موبایل">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} activeOptions={{ exact: true }}
              className="block border-b py-3 font-medium data-[status=active]:text-primary">{n.label}</Link>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)} className="mt-4 block rounded-lg bg-primary py-3 text-center font-bold text-primary-foreground">درخواست مشاوره</Link>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-4 text-sm leading-7 text-navy-foreground/75">
            {COMPANY.name}؛ فعال در طراحی، تولید، نصب، تعمیر و تأمین قطعات مبدل‌های حرارتی.
          </p>
        </div>
        <div>
          <h3 className="mb-4 font-bold">دسترسی سریع</h3>
          <ul className="space-y-2 text-sm text-navy-foreground/75">
            {NAV.map((n) => <li key={n.to}><Link to={n.to} className="hover:text-cyan">{n.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-bold">خدمات</h3>
          <ul className="space-y-2 text-sm text-navy-foreground/75">
            {SERVICES.map((s) => <li key={s.title}><Link to="/services" className="hover:text-cyan">{s.title}</Link></li>)}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-bold">اطلاعات تماس</h3>
          <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-2 text-sm text-navy-foreground/85 hover:text-cyan">
            <Phone className="h-4 w-4 text-cyan" /> <span dir="ltr">{COMPANY.phoneDisplay}</span>
          </a>
          <p className="mt-3 flex items-start gap-2 text-sm leading-7 text-navy-foreground/85">
            <MapPin className="mt-1 h-4 w-4 shrink-0 text-cyan" /> {COMPANY.address}
          </p>
        </div>
      </div>
      <div className="border-t border-navy-foreground/10 py-5 text-center text-xs text-navy-foreground/60">
        © تمامی حقوق این وب‌سایت برای {COMPANY.name} محفوظ است.
      </div>
    </footer>
  );
}

export function PageHero({ title, subtitle, image }: { title: string; subtitle: string; image: string }) {
  return (
    <section className="relative overflow-hidden bg-navy">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" width={1920} height={1088} />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28">
        <span className="mb-3 block h-1 w-14 rounded bg-cyan" />
        <h1 className="text-3xl font-black text-navy-foreground md:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl leading-8 text-navy-foreground/80">{subtitle}</p>
      </div>
    </section>
  );
}
