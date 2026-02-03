"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function ContactForm() {
  const searchParams = useSearchParams();
  const preselectedProduct = searchParams.get("product") || "";
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    product: preselectedProduct,
    quantity: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {submitted ? (
        <div className="p-8 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-center">
          <p className="text-emerald-400 font-medium mb-2">
            문의가 접수되었습니다.
          </p>
          <p className="text-sm text-white/60">
            담당자가 확인 후 영업일 기준 1~2일 내 연락드리겠습니다.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">
              성함 / 담당자 *
            </label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) =>
                setForm((f) => ({ ...f, name: e.target.value }))
              }
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
              placeholder="홍길동"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">
              회사명 *
            </label>
            <input
              type="text"
              required
              value={form.company}
              onChange={(e) =>
                setForm((f) => ({ ...f, company: e.target.value }))
              }
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
              placeholder="(주)회사명"
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">
                이메일 *
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) =>
                  setForm((f) => ({ ...f, email: e.target.value }))
                }
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                placeholder="email@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white/80 mb-2">
                연락처 *
              </label>
              <input
                type="tel"
                required
                value={form.phone}
                onChange={(e) =>
                  setForm((f) => ({ ...f, phone: e.target.value }))
                }
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                placeholder="010-1234-5678"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">
              문의 제품
            </label>
            <input
              type="text"
              value={form.product}
              onChange={(e) =>
                setForm((f) => ({ ...f, product: e.target.value }))
              }
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
              placeholder="제품명 또는 카탈로그 번호"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">
              수량 (선택)
            </label>
            <input
              type="text"
              value={form.quantity}
              onChange={(e) =>
                setForm((f) => ({ ...f, quantity: e.target.value }))
              }
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
              placeholder="예: 100박스"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">
              문의 내용
            </label>
            <textarea
              value={form.message}
              onChange={(e) =>
                setForm((f) => ({ ...f, message: e.target.value }))
              }
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 resize-none"
              placeholder="견적, 발주, 배송, 기타 문의사항을 적어 주세요."
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
          >
            문의 보내기
          </button>
        </form>
      )}
    </>
  );
}

export default function ContactPage() {
  return (
    <div>
      <section className="py-16 lg:py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-emerald-400/90 text-sm font-medium tracking-wider uppercase mb-4">
            문의 · 견적 · 발주
          </p>
          <h1 className="text-4xl font-bold mb-4">문의하기</h1>
          <p className="text-lg text-white/60 mb-10">
            제품 견적, 발주, 기타 문의사항을 남겨 주시면 담당자가 신속히
            연락드리겠습니다.
          </p>

          <Suspense fallback={<div className="text-white/50">로딩 중...</div>}>
            <ContactForm />
          </Suspense>

          <div className="mt-12 pt-12 border-t border-white/10">
            <h3 className="text-lg font-semibold mb-4">직접 연락</h3>
            <p className="text-white/70">대표전화: 02-1234-5678</p>
            <p className="text-white/70">이메일: contact@avienjo.co.kr</p>
            <p className="text-sm text-white/50 mt-2">
              평일 09:00 ~ 18:00 (점심 12:00 ~ 13:00)
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
