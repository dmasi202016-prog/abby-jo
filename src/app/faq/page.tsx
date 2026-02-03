"use client";

import { useState } from "react";

const faqs = [
  {
    q: "최소 주문 수량이 있나요?",
    a: "카테고리별로 상이합니다. 일반 포장재는 1박스 단위, 대량 물류 장비는 별도 문의를 통해 견적을 안내드립니다.",
  },
  {
    q: "배송 기간은 얼마나 걸리나요?",
    a: "수도권 기준 1~2영업일, 지방 2~4영업일 소요됩니다. 대량 발주 시 별도 일정 조율이 필요할 수 있습니다.",
  },
  {
    q: "결제 방법은 어떻게 되나요?",
    a: "계좌이체, 카드 결제, 세금계산서 발행을 지원합니다. 신규 거래처는 담당자와 협의 후 결제 조건이 정해집니다.",
  },
  {
    q: "견적 요청 후 응답은 얼마나 걸리나요?",
    a: "영업일 기준 1~2일 내 담당자가 연락드립니다. 긴급 견적은 문의 폼에 '긴급' 표기 또는 전화 문의를 권장합니다.",
  },
  {
    q: "A/S 및 반품은 어떻게 처리되나요?",
    a: "제품 하자 시 교환 및 환불을 지원합니다. 도착 후 7일 이내에 담당자에게 연락 부탁드립니다.",
  },
];

export default function FAQPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div>
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-emerald-400/90 text-sm font-medium tracking-wider uppercase mb-4">
            FAQ
          </p>
          <h1 className="text-4xl font-bold mb-4">자주 묻는 질문</h1>
          <p className="text-lg text-white/60 mb-12">
            고객님이 자주 문의하시는 내용을 정리했습니다.
          </p>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-xl border border-white/5 bg-white/[0.02] overflow-hidden"
              >
                <button
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.02] transition-colors"
                >
                  <span className="font-medium pr-4">{faq.q}</span>
                  <span
                    className={`shrink-0 text-emerald-400 transition-transform ${
                      openIdx === i ? "rotate-180" : ""
                    }`}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>
                {openIdx === i && (
                  <div className="px-5 pb-5 pt-0">
                    <p className="text-white/70 text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
