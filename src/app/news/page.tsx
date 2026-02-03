const newsItems = [
  {
    id: 1,
    date: "2024-01-15",
    type: "공지",
    title: "2024년 설날 연휴 휴무 안내",
    excerpt: "설날 연휴 기간 물류 센터 휴무로 인한 배송 일정 안내드립니다.",
  },
  {
    id: 2,
    date: "2024-01-10",
    type: "보도자료",
    title: "애비앤조, 전국 물류망 확충 완료",
    excerpt: "전국 5개 지역 물류센터 운영으로 24시간 내 배송 가능.",
  },
  {
    id: 3,
    date: "2024-01-05",
    type: "이벤트",
    title: "신규 거래처 대량 구매 할인 프로모션",
    excerpt: "1월 한 달간 신규 거래처 대량 구매 시 최대 15% 할인.",
  },
];

export default function NewsPage() {
  return (
    <div>
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-emerald-400/90 text-sm font-medium tracking-wider uppercase mb-4">
            공지 / 뉴스
          </p>
          <h1 className="text-4xl font-bold mb-4">공지사항 &amp; 뉴스</h1>
          <p className="text-lg text-white/60 mb-12 max-w-2xl">
            애비앤조의 최신 소식과 공지사항을 확인하세요.
          </p>

          <div className="space-y-6">
            {newsItems.map((item) => (
              <article
                key={item.id}
                className="p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:border-emerald-500/20 transition-colors"
              >
                <div className="flex flex-wrap gap-3 items-center mb-2">
                  <span className="text-xs text-white/50">{item.date}</span>
                  <span className="px-2 py-0.5 rounded text-xs bg-emerald-500/20 text-emerald-400">
                    {item.type}
                  </span>
                </div>
                <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
                <p className="text-sm text-white/60">{item.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
