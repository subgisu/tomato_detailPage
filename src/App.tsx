import React from 'react';
import { Sun, Search, Package, Wind, ArrowDownToLine } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] font-serif text-stone-800 flex justify-center">
      <div className="w-full max-w-[500px] bg-white shadow-2xl overflow-hidden">
        
        {/* 1. Intro (CHECK 01) */}
        <section className="relative pt-12 pb-12 text-center bg-white">
          <div className="relative mb-12 w-full">
            <img 
              src="https://images.unsplash.com/photo-1524593166156-312f362cada0?auto=format&fit=crop&q=80&w=1000" 
              alt="토마토" 
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Gold circle badge */}
            <div className="absolute top-4 right-4 md:right-8 w-24 h-24 rounded-full border-2 border-[#c5a059] bg-white flex items-center justify-center shadow-md">
              <div className="text-center text-[#c5a059]">
                <span className="text-3xl font-bold leading-none">10</span>
                <span className="text-sm ml-0.5">brix↑</span>
              </div>
            </div>
          </div>

          <div className="mb-4 px-6">
            <span className="text-[#c5a059] text-sm font-bold tracking-[0.2em]">CHECK 01</span>
          </div>
          <h2 className="text-4xl font-medium mb-8 leading-tight text-stone-800 px-6">
            과즙이 넘치는<br/>
            <span className="font-bold">진한 선홍빛 달콤 토마토</span>
          </h2>
          
          <div className="text-lg text-stone-500 leading-loose font-light mb-12 px-6">
            <p>제주 햇살 아래</p>
            <p>꽃바람 맞으며 높은 당도를 자랑합니다.</p>
            <p><strong className="font-medium text-[#9b2226]">10브릭스 이상의 고당도</strong> 토마토만을 선별해 드립니다.</p>
          </div>
        </section>

        {/* Full Width Images Section 1 */}
        <section className="w-full flex flex-col">
          <img 
            src="https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=1000" 
            alt="토마토 단면" 
            className="w-full h-72 object-cover"
            referrerPolicy="no-referrer"
          />
          <img 
            src="https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&q=80&w=1000" 
            alt="토마토 바구니" 
            className="w-full h-72 object-cover"
            referrerPolicy="no-referrer"
          />
        </section>

        {/* CHECK 03 */}
        <section className="bg-[#fcfbf9] pt-20 pb-10 text-center px-6">
          <div className="mb-4">
            <span className="text-[#c5a059] text-sm font-bold tracking-[0.2em]">CHECK 03</span>
          </div>
          <h2 className="text-4xl font-medium mb-8 leading-tight text-stone-800">
            갓 수확한 토마토 중에서도<br/>
            <span className="font-bold">좋은 토마토만</span>
          </h2>
          <div className="text-lg text-stone-500 leading-loose font-light break-keep">
            <p>수확한 토마토를 그대로 보내드리지 않습니다.</p>
            <p>모양과 색상, 품질을 꼼꼼하게 확인하여</p>
            <p>산지직송의 신선함을 그대로 담아<br/>안전하게 배송해 드립니다.</p>
          </div>
        </section>

        {/* Process Icons */}
        <section className="bg-[#fcfbf9] pt-0 pb-20 text-center">
          <div className="flex justify-center items-center gap-4 mb-12 px-6">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 border border-stone-200 rounded-full flex items-center justify-center mb-4 bg-white">
                <Sun size={28} className="text-stone-400" strokeWidth={1.5} />
              </div>
              <span className="text-sm font-medium text-stone-600">신선 수확</span>
            </div>
            <div className="w-6 h-[1px] bg-stone-300 mb-8"></div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 border border-stone-200 rounded-full flex items-center justify-center mb-4 bg-white">
                <Search size={28} className="text-stone-400" strokeWidth={1.5} />
              </div>
              <span className="text-sm font-medium text-stone-600">당도 검수</span>
            </div>
            <div className="w-6 h-[1px] bg-stone-300 mb-8"></div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 border border-stone-200 rounded-full flex items-center justify-center mb-4 bg-white">
                <Package size={28} className="text-stone-400" strokeWidth={1.5} />
              </div>
              <span className="text-sm font-medium text-stone-600">꼼꼼 포장</span>
            </div>
          </div>
        </section>

        {/* Full Width Images Section 2 */}
        <section className="w-full flex flex-col">
          <img 
            src="https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&q=80&w=1000" 
            alt="토마토 수확하는 손" 
            className="w-full h-96 object-cover"
            referrerPolicy="no-referrer"
          />
        </section>

        {/* CHECK 02 */}
        <section className="bg-white pt-20 pb-20 text-center px-6">
          <div className="mb-4">
            <span className="text-[#c5a059] text-sm font-bold tracking-[0.2em]">CHECK 02</span>
          </div>
          <h2 className="text-4xl font-medium mb-8 leading-tight text-stone-800">
            신선하고 안전하게<br/>
            <span className="font-bold">당일 수확</span>
          </h2>
          <div className="text-lg text-stone-500 leading-loose font-light">
            <p>당일 수확 및 선별을 거쳐 매일 배송합니다.</p>
            <p>갓 수확한 토마토의 싱그러운 풍미를 느껴보세요.</p>
          </div>
        </section>

        {/* Full Width Images Section 3 */}
        <section className="w-full flex flex-col">
          <img 
            src="https://images.unsplash.com/photo-1558818498-28c1e002b655?auto=format&fit=crop&q=80&w=1000" 
            alt="바구니에 담긴 토마토" 
            className="w-full h-80 object-cover"
            referrerPolicy="no-referrer"
          />
        </section>

        {/* Storage Box */}
        <section className="bg-[#fcfbf9] py-20 px-6">
          <div className="text-center mb-10">
            <span className="bg-[#c5a059] text-white text-sm px-5 py-1.5 rounded-full font-medium">더 오래 먹는</span>
            <h3 className="text-2xl font-bold text-stone-800 mt-5">토마토 보관 방법</h3>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-10 border border-stone-200">
            <div className="space-y-10 text-left">
              <div className="flex items-start gap-6">
                <div className="mt-1 text-[#c5a059] flex flex-col items-center w-14">
                  <Wind size={32} strokeWidth={1.5} />
                  <span className="text-sm font-bold mt-3">후숙</span>
                </div>
                <div>
                  <h4 className="font-bold text-stone-800 mb-3 text-lg">후숙하면 더욱 맛있습니다!</h4>
                  <p className="text-base text-stone-500 leading-relaxed font-light">
                    바람이 잘 통하는 서늘한 곳에<br/>
                    2~3일 정도 후숙하여 드시면<br/>
                    더욱 깊은 단맛을 느끼실 수 있습니다.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="mt-1 text-[#c5a059] flex flex-col items-center w-14">
                  <ArrowDownToLine size={32} strokeWidth={1.5} />
                  <span className="text-sm font-bold mt-3">냉장보관</span>
                </div>
                <div>
                  <h4 className="font-bold text-stone-800 mb-3 text-lg">개별포장해 주세요</h4>
                  <p className="text-base text-stone-500 leading-relaxed font-light">
                    오래 두고 드실 경우,<br/>
                    물기를 제거 후 랩이나 신문지로 개별 포장하여<br/>
                    냉장 보관 하시면 좋습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Gift Set Section */}
        <section className="w-full flex flex-col">
          <img 
            src="https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?auto=format&fit=crop&q=80&w=1000" 
            alt="프리미엄 토마토 박스" 
            className="w-full h-80 object-cover"
            referrerPolicy="no-referrer"
          />
          
          <div className="bg-[#c5a059] text-white text-center py-16 px-6">
            <p className="text-sm tracking-[0.2em] mb-4 text-white/90 font-sans uppercase">Premium Gift Set</p>
            <h2 className="text-3xl font-medium leading-relaxed">
              귀한 분에게<br/>감사의 마음을 전하세요
            </h2>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=1000" 
              alt="토마토 클로즈업" 
              className="w-full h-96 object-cover brightness-[0.4]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-12 text-white text-left">
              <p className="text-lg font-light leading-loose">
                단순한 토마토가 아닙니다!<br/>
                엄격하게 선별한<br/>
                <strong className="font-medium text-2xl mt-2 block">프리미엄 완숙 토마토</strong>만<br/>
                전해드립니다.
              </p>
            </div>
          </div>
        </section>

        {/* Option Info */}
        <section className="bg-white pt-20 pb-28 px-6">
          <div className="text-center mb-16">
            <h3 className="text-sm font-bold tracking-[0.2em] text-[#c5a059] mb-3">OPTION</h3>
            <h2 className="text-3xl font-bold text-stone-800">상품정보</h2>
            <p className="text-base text-stone-500 mt-5 leading-relaxed font-light">
              산지 직송의 신선함을 그대로 담아<br/>
              안전하게 배송해 드립니다.
            </p>
          </div>

          {/* Size Comparison */}
          <div className="mb-20">
            <div className="flex justify-center mb-10">
              <div className="bg-[#c5a059] text-white text-sm px-6 py-1.5 rounded-full font-medium">사이즈</div>
            </div>
            
            <div className="flex justify-center items-end gap-8 h-40 border-b border-stone-200 pb-8 px-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-[#d62828] mb-5 shadow-sm"></div>
                <span className="text-base font-medium text-stone-800">소과</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-[#d62828] mb-5 shadow-sm"></div>
                <span className="text-base font-medium text-stone-800">중과</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-[#d62828] mb-5 shadow-sm"></div>
                <span className="text-base font-medium text-stone-800">대과</span>
              </div>
              <div className="flex flex-col items-center ml-6">
                <div className="w-16 h-24 bg-stone-100 border border-stone-200 rounded-b-lg mb-5 flex items-center justify-center">
                  <span className="text-sm text-stone-400">종이컵</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-stone-400 text-center mt-6 font-light">
              * 생물 특성상 크기가 일정하지 않을 수 있습니다.
            </p>
          </div>

          {/* Package */}
          <div className="text-center">
            <div className="flex justify-center mb-10">
              <div className="bg-[#c5a059] text-white text-sm px-6 py-1.5 rounded-full font-medium">포장</div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1603048297172-c92544798d5e?auto=format&fit=crop&q=80&w=500" 
                  alt="선물용 박스" 
                  className="w-full aspect-square object-cover rounded-xl mb-4"
                  referrerPolicy="no-referrer"
                />
                <span className="text-base font-bold text-stone-800 block">선물포장</span>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1587049352847-4d4b124054da?auto=format&fit=crop&q=80&w=500" 
                  alt="일반 박스" 
                  className="w-full aspect-square object-cover rounded-xl mb-4"
                  referrerPolicy="no-referrer"
                />
                <span className="text-base font-bold text-stone-800 block">일반포장</span>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
