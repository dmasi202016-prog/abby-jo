export default function CompanyPage() {
  const history = [
    { year: "2020", desc: "애비앤조 법인 설립" },
    { year: "2021", desc: "물류센터 확장, 주요 거래처 50개사 돌파" },
    { year: "2023", desc: "B2B 플랫폼 구축, 온라인 카탈로그 서비스 오픈" },
    { year: "2024", desc: "전국 물류망 확충, 신규 사업부문 진출" },
  ];

  const values = [
    { title: "신뢰", desc: "약속을 지키고 투명한 거래로 장기적 파트너십을 구축합니다." },
    { title: "품질", desc: "엄선된 제품과 체계적인 QC로 고객 만족을 보장합니다." },
    { title: "혁신", desc: "유통 효율화와 디지털 전환으로 새로운 가치를 창출합니다." },
  ];

  return (
    <div>
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-emerald-400/90 text-sm font-medium tracking-wider uppercase mb-4">
            회사소개
          </p>
          <h1 className="text-4xl font-bold mb-6">애비앤조를 소개합니다</h1>
          <p className="text-lg text-white/70 leading-relaxed">
            애비앤조는 도매·소매·물류 유통 전문 기업으로, 신뢰와 품질을 바탕으로
            고객사의 비즈니스 성장을 지원합니다. 최적의 가격, 신속한 물류,
            전문적인 고객 지원을 통해 유통의 새로운 기준을 제시합니다.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-20 section-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">비전 · 미션</h2>
          <div className="space-y-6">
            <div className="p-6 rounded-xl border border-white/5 bg-white/[0.02]">
              <h3 className="text-lg font-semibold text-emerald-400 mb-2">비전</h3>
              <p className="text-white/70">
                유통 산업의 효율화와 디지털 전환을 선도하여, 파트너사와 함께
                성장하는 신뢰받는 유통 기업이 됩니다.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-white/5 bg-white/[0.02]">
              <h3 className="text-lg font-semibold text-emerald-400 mb-2">미션</h3>
              <p className="text-white/70">
                최적의 가격과 품질로 고객 가치를 극대화하고, 원스탑 유통 서비스를
                통해 비즈니스의 성공을 지원합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">핵심 가치</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border border-white/5 bg-white/[0.02] text-center"
              >
                <h3 className="text-xl font-bold text-emerald-400 mb-3">{v.title}</h3>
                <p className="text-sm text-white/60">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-20 section-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">연혁</h2>
          <div className="space-y-4">
            {history.map((item, i) => (
              <div
                key={i}
                className="flex gap-6 items-start p-4 rounded-lg border border-white/5"
              >
                <span className="text-emerald-400 font-semibold w-16 shrink-0">
                  {item.year}
                </span>
                <span className="text-white/70">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">오시는 길</h2>
          <div className="p-6 rounded-xl border border-white/5 bg-white/[0.02]">
            <p className="text-white/80 mb-2">
              <strong>주소:</strong> 서울특별시 강남구 테헤란로 123 애비앤조빌딩
            </p>
            <p className="text-white/80 mb-2">
              <strong>대표전화:</strong> 02-1234-5678
            </p>
            <p className="text-white/80">
              <strong>이메일:</strong> contact@avienjo.co.kr
            </p>
            <p className="text-sm text-white/50 mt-4">
              * 지하철 2호선 역삼역 3번 출구 도보 5분
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
