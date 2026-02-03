import Link from "next/link";

const footerLinks = {
  home: [
    { href: "/", label: "HOME" },
    { href: "/company", label: "회사소개" },
    { href: "/products", label: "제품/카탈로그" },
    { href: "/contact", label: "문의하기" },
  ],
  resources: [
    { href: "/news", label: "공지/뉴스" },
    { href: "/faq", label: "FAQ" },
  ],
  legal: [
    { href: "/privacy", label: "개인정보처리방침" },
    { href: "/terms", label: "이용약관" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0b] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-xl font-bold text-white">
              애비앤조
            </Link>
            <p className="mt-3 text-sm text-white/50 max-w-xs">
              신뢰와 품질로 함께하는 유통 파트너
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-4">
              HOME
            </h4>
            <ul className="space-y-2">
              {footerLinks.home.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-4">
              RESOURCES
            </h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-4">
              LEGAL
            </h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} 애비앤조. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
