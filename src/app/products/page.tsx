"use client";

import { useState } from "react";
import Link from "next/link";

// 샘플 제품 데이터
const sampleProducts = [
  {
    id: 1,
    name: "유통 표준 박스 A형",
    category: "포장재",
    spec: "400x300x200mm",
    price: "협의",
    desc: "일반 유통용 표준 박스",
  },
  {
    id: 2,
    name: "냉동 보냉박스",
    category: "포장재",
    spec: "500x400x300mm",
    price: "협의",
    desc: "냉동·냉장 물품 유통용",
  },
  {
    id: 3,
    name: "산업용 테이프",
    category: "소모품",
    spec: "48mm x 50m",
    price: "협의",
    desc: "강력 접착 산업용 테이프",
  },
  {
    id: 4,
    name: "파렛트 후판",
    category: "물류장비",
    spec: "1100x1100mm",
    price: "협의",
    desc: "목재 파렛트용 후판",
  },
  {
    id: 5,
    name: "스트레치필름",
    category: "소모품",
    spec: "500mm x 300m",
    price: "협의",
    desc: "파렛트 적재용 스트레치필름",
  },
  {
    id: 6,
    name: "우편함 겸용 박스",
    category: "포장재",
    spec: "200x150x100mm",
    price: "협의",
    desc: "소량 배송용 박스",
  },
];

const categories = ["전체", "포장재", "소모품", "물류장비"];

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("전체");

  const filtered = sampleProducts.filter((p) => {
    const matchCategory =
      selectedCategory === "전체" || p.category === selectedCategory;
    const matchSearch =
      !search ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div>
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-emerald-400/90 text-sm font-medium tracking-wider uppercase mb-4">
            제품 / 카탈로그
          </p>
          <h1 className="text-4xl font-bold mb-4">제품 카탈로그</h1>
          <p className="text-lg text-white/60 mb-10 max-w-2xl">
            애비앤조가 취급하는 주요 제품입니다. 견적은 문의 폼을 통해
            요청해 주세요.
          </p>

          {/* Search & Filter */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <input
              type="text"
              placeholder="제품명, 카테고리 검색"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
            />
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === cat
                      ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                      : "bg-white/5 text-white/70 border border-white/10 hover:bg-white/10"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product) => (
              <div
                key={product.id}
                className="p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:border-emerald-500/20 transition-colors"
              >
                <span className="text-xs text-emerald-400/80 font-medium">
                  {product.category}
                </span>
                <h3 className="text-lg font-semibold mt-1 mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-white/50 mb-2">{product.spec}</p>
                <p className="text-sm text-white/60 mb-4">{product.desc}</p>
                <p className="text-emerald-400 font-medium">{product.price}</p>
                <Link
                  href={`/contact?product=${encodeURIComponent(product.name)}`}
                  className="inline-block mt-4 text-sm text-emerald-400 hover:text-emerald-300"
                >
                  견적 문의 →
                </Link>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-white/50 py-12">
              검색 조건에 맞는 제품이 없습니다.
            </p>
          )}

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-medium rounded-lg hover:opacity-90"
            >
              맞춤 견적 요청하기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
