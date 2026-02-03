export default function PrivacyPage() {
  return (
    <div>
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-emerald-400/90 text-sm font-medium tracking-wider uppercase mb-4">
            개인정보처리방침
          </p>
          <h1 className="text-4xl font-bold mb-10">개인정보처리방침</h1>

          <div className="prose prose-invert prose-sm max-w-none space-y-8 text-white/80">
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                1. 수집하는 개인정보 항목
              </h2>
              <p>
                애비앤조는 문의·견적·발주 처리 등을 위해 아래와 같은 개인정보를
                수집합니다. 필수 항목: 성함, 회사명, 이메일, 연락처 / 선택
                항목: 문의 제품, 수량, 문의 내용
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                2. 개인정보의 수집 및 이용 목적
              </h2>
              <p>
                수집된 개인정보는 견적·발주 처리, 고객 상담, 서비스 개선, 법적
                의무 이행 등에 활용됩니다.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                3. 보관 기간
              </h2>
              <p>
                수집된 개인정보는 목적 달성 후 지체 없이 파기합니다. 다만, 관련
                법령에 따라 보존이 필요한 경우 해당 기간 동안 보관합니다.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                4. 개인정보의 제3자 제공
              </h2>
              <p>
                애비앤조는 원칙적으로 이용자의 개인정보를 제3자에게 제공하지
                않습니다. 법령에 따른 요청이 있는 경우를 제외합니다.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                5. 이용자 권리
              </h2>
              <p>
                이용자는 개인정보 열람, 정정, 삭제, 처리정지 요청 권리를
                가집니다. 요청 시 contact@avienjo.co.kr로 연락 주시기 바랍니다.
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
