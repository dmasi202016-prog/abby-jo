import Link from "next/link";

const features = [
  {
    title: "원스탑 유통 플랫폼",
    desc: "도매, 소매, 물류를 한 곳에서. 고객 맞춤형 유통 솔루션을 제공합니다.",
  },
  {
    title: "효율적인 가격 경쟁력",
    desc: "합리적인 가격 정책과 대량 구매 혜택으로 비즈니스 효율을 높입니다.",
  },
  {
    title: "신속한 배송·물류",
    desc: "체계적인 물류 네트워크로 안정적인 재고 확보와 빠른 납기를 보장합니다.",
  },
  {
    title: "전문 고객 지원",
    desc: "견적, 발주, 문의까지 전문 담당자가 신속하게 답변해 드립니다.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section - Lastic inspired */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/10 via-transparent to-transparent" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-emerald-400/90 text-sm font-medium tracking-wider uppercase mb-4">
            애비앤조 유통
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            <span className="gradient-text">신뢰와 품질</span>로
            <br />
            함께하는 유통 파트너
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/60 max-w-2xl mx-auto">
            도매·소매·물류 유통 전문. 최적의 가격과 신속한 서비스로
            <br className="hidden sm:block" />
            귀사의 비즈니스 성장을 함께합니다.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              제품 카탈로그
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border border-white/20 text-white font-medium rounded-lg hover:bg-white/5 transition-colors"
            >
              견적 요청
            </Link>
          </div>
        </div>
      </section>

      {/* For Partners Section */}
      <section className="py-20 lg:py-28 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-emerald-400/90 text-sm font-medium tracking-wider uppercase text-center mb-4">
            For Partners
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">
            애비앤조가 유통을 새롭게 합니다
          </h2>
          <p className="text-lg text-white/60 text-center max-w-3xl mx-auto mb-16">
            기존 거래처와 신규 바이어에게 최적의 서비스를 제공합니다.
            맞춤형 견적과 신속한 물류로 비즈니스 효율을 극대화하세요.
          </p>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:border-emerald-500/20 hover:bg-white/[0.04] transition-all"
              >
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/company"
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              자세히 알아보기
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-emerald-400/90 text-sm font-medium tracking-wider uppercase mb-4">
            The Partnership
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            거래처와 빌더를 하나로
          </h2>
          <p className="text-lg text-white/60 mb-10">
            견적 요청, 문의, 발주까지 한 곳에서 처리하세요.
          </p>
          <Link
            href="/contact"
            className="inline-flex px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            문의·견적 요청하기
          </Link>
        </div>
      </section>
    </div>
  );
}
