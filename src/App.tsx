import React from 'react';
import { CheckCircle2, Sun, Package, ThermometerSun, Snowflake, Info } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-stone-800">
      {/* 1. Intro */}
      <section className="relative w-full max-w-2xl mx-auto pt-20 pb-16 px-6 text-center">
        <div className="mb-8 relative inline-block">
          <img 
            src="https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=800" 
            alt="완숙 토마토 단면" 
            className="w-64 h-64 object-cover rounded-full shadow-2xl mx-auto border-4 border-white"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -top-4 -right-4 bg-red-600 text-white w-20 h-20 rounded-full flex items-center justify-center font-bold text-xl shadow-lg transform rotate-12">
            <div className="text-center leading-tight">
              8~10<br/><span className="text-sm font-medium">Brix</span>
            </div>
          </div>
        </div>
        <h2 className="text-red-600 font-bold tracking-widest text-sm mb-4">PREMIUM TOMATO</h2>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight break-keep">
          한 입 베어 무는 순간<br/>터지는 <span className="text-red-600">붉은 에너지</span>
        </h1>
        <p className="text-lg text-stone-600 break-keep">
          고당도 선별로 더 달콤하고 진한 <strong>프리미엄 완숙 토마토</strong>
        </p>
      </section>

      {/* 2. CHECK 01 */}
      <section className="w-full max-w-2xl mx-auto bg-stone-50 py-16 px-6 text-center">
        <h3 className="text-red-600 font-bold tracking-widest text-sm mb-2">CHECK 01</h3>
        <h2 className="text-3xl font-bold mb-8 break-keep">과즙이 넘치는<br/>산지직송 달콤 토마토</h2>
        <div className="space-y-4 text-stone-600 leading-relaxed mb-10">
          <p>인위적인 후숙이 아닌 햇살 아래서 충분히 익혀 수확했습니다.</p>
          <p><strong>평균 8~10 Brix 이상</strong>의 고당도 토마토만 엄선.</p>
          <p>탱글탱글한 식감과 깊은 풍미를 약속드립니다.</p>
        </div>
        <img 
          src="https://images.unsplash.com/photo-1561136594-7f68413baa99?auto=format&fit=crop&q=80&w=1000" 
          alt="신선한 토마토" 
          className="w-full h-80 object-cover rounded-2xl shadow-md"
          referrerPolicy="no-referrer"
        />
      </section>

      {/* 3. CHECK 02 */}
      <section className="w-full max-w-2xl mx-auto py-16 px-6 text-center">
        <h3 className="text-red-600 font-bold tracking-widest text-sm mb-2">CHECK 02</h3>
        <h2 className="text-3xl font-bold mb-12 break-keep">당일 수확하여<br/>산지의 신선함을 그대로</h2>
        
        <div className="grid grid-cols-3 gap-4 mb-12">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-red-50 text-red-600 rounded-full flex items-center justify-center mb-4">
              <Sun size={32} />
            </div>
            <h4 className="font-bold mb-2">신선 수확</h4>
            <p className="text-xs text-stone-500 break-keep">매일 아침 가장 잘 익은 토마토만 수확</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-red-50 text-red-600 rounded-full flex items-center justify-center mb-4">
              <CheckCircle2 size={32} />
            </div>
            <h4 className="font-bold mb-2">꼼꼼 검수</h4>
            <p className="text-xs text-stone-500 break-keep">크기, 당도, 모양별 3단계 정밀 선별</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-red-50 text-red-600 rounded-full flex items-center justify-center mb-4">
              <Package size={32} />
            </div>
            <h4 className="font-bold mb-2">안전 포장</h4>
            <p className="text-xs text-stone-500 break-keep">파손 방지를 위한 전용 완충 패키지</p>
          </div>
        </div>

        <img 
          src="https://images.unsplash.com/photo-1595856724015-62d25032906c?auto=format&fit=crop&q=80&w=1000" 
          alt="토마토 수확" 
          className="w-full h-80 object-cover rounded-2xl shadow-md"
          referrerPolicy="no-referrer"
        />
      </section>

      {/* 4. CHECK 03 */}
      <section className="w-full max-w-2xl mx-auto bg-stone-50 py-16 px-6 text-center">
        <h3 className="text-red-600 font-bold tracking-widest text-sm mb-2">CHECK 03</h3>
        <h2 className="text-3xl font-bold mb-8 break-keep">갓 수확한 토마토 중에서도<br/>최상품만</h2>
        <div className="space-y-4 text-stone-600 leading-relaxed mb-10">
          <p>무분별한 대량 생산이 아닌,<br/>가족이 먹는다는 마음으로 정성을 다했습니다.</p>
          <p>껍질이 얇고 과육이 단단해 씹는 맛이 일품입니다.</p>
        </div>
        <img 
          src="https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&q=80&w=1000" 
          alt="박스에 담긴 토마토" 
          className="w-full h-80 object-cover rounded-2xl shadow-md"
          referrerPolicy="no-referrer"
        />
      </section>

      {/* 5. Storage & Tips */}
      <section className="w-full max-w-2xl mx-auto py-16 px-6">
        <div className="bg-green-700 text-white rounded-3xl p-8 md:p-10 shadow-xl">
          <h2 className="text-2xl font-bold mb-8 text-center">토마토 보관 및 꿀팁</h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4 bg-white/10 p-5 rounded-2xl">
              <ThermometerSun className="flex-shrink-0 mt-1" size={28} />
              <div>
                <h4 className="font-bold text-lg mb-1">실온 보관</h4>
                <p className="text-green-50 text-sm leading-relaxed">꼭지를 아래로 향하게 하여 통풍이 잘되는 서늘한 곳에 두세요.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 bg-white/10 p-5 rounded-2xl">
              <Snowflake className="flex-shrink-0 mt-1" size={28} />
              <div>
                <h4 className="font-bold text-lg mb-1">냉장 보관</h4>
                <p className="text-green-50 text-sm leading-relaxed">오래 두고 드실 경우 씻어서 물기를 제거 후 밀폐 용기에 보관하세요.</p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-green-500/50 text-center">
              <span className="inline-block bg-yellow-400 text-green-900 font-bold px-4 py-1 rounded-full text-sm mb-3">맛있게 먹는 법</span>
              <p className="font-medium text-lg">"설탕 대신 소금을 살짝 뿌리면<br/>단맛이 극대화됩니다!"</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Options & Info */}
      <section className="w-full max-w-2xl mx-auto bg-stone-100 py-16 px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-2">상품 정보 및 옵션</h2>
          <p className="text-stone-500 text-sm">원하시는 사이즈와 포장을 선택해주세요.</p>
        </div>

        {/* Size Guide */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
          <h3 className="font-bold text-lg mb-6 text-center border-b pb-4">사이즈 가이드</h3>
          <div className="flex justify-between items-end px-2 md:px-8">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-red-500 rounded-full mb-3 shadow-inner"></div>
              <span className="font-medium">S</span>
              <span className="text-xs text-stone-500">한입 사이즈</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-red-500 rounded-full mb-3 shadow-inner"></div>
              <span className="font-medium">M</span>
              <span className="text-xs text-stone-500">표준 사이즈</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-20 bg-stone-200 rounded-t-lg mb-3 flex items-end justify-center pb-2 text-xs text-stone-400">종이컵</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-red-500 rounded-full mb-3 shadow-inner"></div>
              <span className="font-medium">L</span>
              <span className="text-xs text-stone-500">대과</span>
            </div>
          </div>
        </div>

        {/* Packaging */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
          <h3 className="font-bold text-lg mb-6 text-center border-b pb-4">포장 안내</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1587049352847-4d4b124054da?auto=format&fit=crop&q=80&w=500" 
                alt="실속형 박스" 
                className="w-full h-32 object-cover rounded-lg mb-3"
                referrerPolicy="no-referrer"
              />
              <span className="font-medium block">실속형</span>
              <span className="text-xs text-stone-500">일반 박스 포장</span>
            </div>
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1603048297172-c92544798d5e?auto=format&fit=crop&q=80&w=500" 
                alt="선물용 패키지" 
                className="w-full h-32 object-cover rounded-lg mb-3"
                referrerPolicy="no-referrer"
              />
              <span className="font-medium block">선물용</span>
              <span className="text-xs text-stone-500">완충재 포함 고급 패키지</span>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="bg-white rounded-2xl p-6 shadow-sm text-sm text-stone-600">
          <h3 className="font-bold text-lg mb-4 text-stone-800 flex items-center gap-2">
            <Info size={20} className="text-red-600" />
            상품 상세 고시
          </h3>
          <ul className="space-y-2 divide-y divide-stone-100">
            <li className="py-2 flex justify-between"><span className="text-stone-400 w-24">품목</span> <span className="flex-1 text-right font-medium">토마토 (완숙/스테비아)</span></li>
            <li className="py-2 flex justify-between"><span className="text-stone-400 w-24">원산지</span> <span className="flex-1 text-right font-medium">국산</span></li>
            <li className="py-2 flex justify-between"><span className="text-stone-400 w-24">중량</span> <span className="flex-1 text-right font-medium">옵션별 상이 (1kg / 3kg / 5kg)</span></li>
            <li className="py-2 flex justify-between"><span className="text-stone-400 w-24">보관방법</span> <span className="flex-1 text-right font-medium">실온 보관 (장기 보관 시 냉장)</span></li>
          </ul>
        </div>
      </section>
      
      {/* Footer CTA */}
      <div className="sticky bottom-0 w-full bg-white border-t border-stone-200 p-4 flex justify-center z-50">
        <button className="w-full max-w-2xl bg-red-600 hover:bg-red-700 text-white font-bold text-lg py-4 rounded-xl shadow-lg transition-colors">
          구매하기
        </button>
      </div>
    </div>
  );
}
