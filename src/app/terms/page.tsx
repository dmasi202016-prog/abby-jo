export default function TermsPage() {
  return (
    <div>
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-emerald-400/90 text-sm font-medium tracking-wider uppercase mb-4">
            이용약관
          </p>
          <h1 className="text-4xl font-bold mb-10">이용약관</h1>

          <div className="prose prose-invert prose-sm max-w-none space-y-8 text-white/80">
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                제1조 (목적)
              </h2>
              <p>
                본 약관은 애비앤조(이하 &quot;회사&quot;)가 제공하는 웹사이트 및
                관련 서비스의 이용과 관련하여 회사와 이용자 간의 권리·의무 및
                책임사항을 규정함을 목적으로 합니다.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                제2조 (정의)
              </h2>
              <p>
                &quot;서비스&quot;란 회사가 제공하는 웹사이트를 통한 제품
                정보 조회, 견적·문의 접수 등 유통 관련 서비스를 의미합니다.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                제3조 (서비스 이용)
              </h2>
              <p>
                이용자는 본 웹사이트를 통해 제품 카탈로그 확인, 견적·문의 폼
                제출 등 서비스를 이용할 수 있습니다. 회사는 서비스 품질 향상을
                위해 필요한 경우 사전 공지 후 서비스를 변경할 수 있습니다.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                제4조 (면책)
              </h2>
              <p>
                회사는 천재지변, 통신 장애 등 불가항력적 사유로 인한 서비스
                중단에 대해 책임을 지지 않습니다.
              </p>
            </section>
            <p className="text-sm text-white/50">
              시행일: 2024년 1월 1일
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
