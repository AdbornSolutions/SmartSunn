// import { useState, useEffect } from "react"; 
// import { ChevronLeft, ChevronRight } from "lucide-react"; 
 
// function Products() { 
//   const products = [ 
//     { 
//       name: "SunMax Pro 550W", 
//       category: "Monocrystalline Panel", 
//            image: "../images/products/product-1.jpg", 
 
//     }, 
//     { 
//       name: "VoltSync Hybrid 8kW", 
//       category: "Hybrid Inverter", 
//            image: "../images/products/product-1.jpg", 
 
//     }, 
//     { 
//       name: "PowerCell 13.5kWh", 
//       category: "LiFePO₄ Battery", 
//             image: "../images/products/product-1.jpg", 
 
//     }, 
//     { 
//       name: "EcoView Monitor", 
//       category: "Energy Manager", 
//             image: "../images/products/product-1.jpg", 
 
//     }, 
//     { 
//       name: "Smart Optimizer", 
//       category: "Power Optimizer", 
//       image: "../images/products/product-1.jpg", 
       
//     }, 
//     { 
//       name: "Home Energy Hub", 
//       category: "Smart Energy System", 
//       image: "../images/products/product-1.jpg", 
//     }, 
//   ]; 
 
//   const [currentIndex, setCurrentIndex] = useState(0); 
//   const [visibleCount, setVisibleCount] = useState(4); 
 
  
 
//   useEffect(() => { 
//     const updateVisibleCount = () => { 
//       if (window.innerWidth < 640) { 
//         setVisibleCount(1); 
//       } else if (window.innerWidth < 1024) { 
//         setVisibleCount(2); 
//       } else { 
//         setVisibleCount(4); 
//       } 
//     }; 
 
//     updateVisibleCount(); 
 
//     window.addEventListener("resize", updateVisibleCount); 
 
//     return () => { 
//       window.removeEventListener("resize", updateVisibleCount); 
//     }; 
//   }, []); 
 
 
 
//   const maxIndex = Math.max(products.length - visibleCount, 0); 
 
//   const nextSlide = () => { 
//     setCurrentIndex((prev) => 
//       prev >= maxIndex ? 0 : prev + 1 
//     ); 
//   }; 
 
//   const previousSlide = () => { 
//     setCurrentIndex((prev) => 
//       prev <= 0 ? maxIndex : prev - 1 
//     ); 
//   }; 
 
  
 
//   useEffect(() => { 
//     setCurrentIndex((prev) => Math.min(prev, maxIndex)); 
//   }, [visibleCount, maxIndex]); 
 
//   return ( 
//     <section className="w-full bg-white px-[16px] py-[55px] sm:px-[24px] sm:py-[65px] md:px-[40px] lg:px-[60px] lg:py-[75px]">
 
//       <div className="mx-auto w-full max-w-[1216px]"> 
 
 
//         <div className="mb-[26px] sm:mb-[30px] md:mb-[34px]"> 
 
//           <p className="!m-0 !text-[11px] !font-medium !tracking-[0.2px] !text-[#061E2D] sm:!text-[12px]"> 
//             Our Products 
//           </p> 
 
//           <h2 className="!m-0 !mt-[12px] !text-[25px] !font-medium !leading-[1.2] !tracking-[-0.4px] !text-[#061E2D] sm:!text-[28px] md:!text-[30px]"> 
//             Premium Solar Equipment 
//           </h2> 
 
//         </div> 
 
 
//         <div className="relative w-full overflow-hidden bg-[#F7F6F1] px-[13px] py-[17px] sm:px-[16px] sm:py-[20px] md:px-[17px] md:py-[22px]"> 
 
 
//           <div className="flex items-start justify-between gap-[20px]"> 
 
//             <p className="!m-0 max-w-[390px] !text-[10px] !leading-[1.55] !text-[#455766] sm:!text-[11px] md:!text-[12px]"> 
//               Browse our curated selection of high-performance solar 
//               modules, inverters, and storage solutions. 
//             </p> 
 
 
//             <div className="flex shrink-0 items-center gap-[8px]"> 
 
//               <button 
//                 type="button" 
//                 onClick={previousSlide} 
//                 aria-label="Previous products" 
//                 className="flex h-[30px] w-[30px] items-center justify-center rounded-full border border-[#E2E2DC] bg-transparent text-[#A0A0A0] transition-all duration-200 hover:border-[#061E2D] hover:bg-[#061E2D] hover:text-white active:scale-95 sm:h-[32px] sm:w-[32px]" 
//               > 
//                 <ChevronLeft size={14} strokeWidth={1.5} /> 
//               </button> 
 
//               <button 
//                 type="button" 
//                 onClick={nextSlide} 
//                 aria-label="Next products" 
//                 className="flex h-[30px] w-[30px] items-center justify-center rounded-full border border-[#E2E2DC] bg-transparent text-[#A0A0A0] transition-all duration-200 hover:border-[#061E2D] hover:bg-[#061E2D] hover:text-white active:scale-95 sm:h-[32px] sm:w-[32px]" 
//               > 
//                 <ChevronRight size={14} strokeWidth={1.5} /> 
//               </button> 
 
//             </div> 
//           </div> 
 
        
//           <div className="mt-[34px] overflow-hidden sm:mt-[38px] md:mt-[40px]"> 
 
//             <div 
//               className="flex gap-[8px] transition-transform duration-500 ease-out sm:gap-[10px] md:gap-[12px]" 
//               style={{ 
//                 transform: `translateX(calc(-${currentIndex} * ((100% + ${ 
//                   (visibleCount - 1) * 12 
//                 }px) / ${visibleCount})))`, 
//               }} 
//             > 
 
//               {products.map((product, index) => ( 
 
//                 <article 
//                   key={index} 
//                   className="min-w-0 shrink-0 basis-full sm:basis-[calc((100%-10px)/2)] lg:basis-[calc((100%-36px)/4)]" 
//                 > 
 
               
 
//                   <div className="group relative aspect-[1/1] w-full overflow-hidden rounded-[5px] bg-[#EAE9E3]"> 
 
//                     <img 
//                       src={product.image} 
//                       alt={product.name} 
//                       className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]" 
//                     /> 
 
 
//                     <div className="pointer-events-none absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/[0.04]" /> 
 
//                   </div> 
 
 
//                   <div className="pt-[10px] sm:pt-[11px]"> 
 
//                     <h3 className="!m-0 !text-[10px] !font-semibold !leading-[1.3] !text-[#061E2D] sm:!text-[11px] md:!text-[12px]"> 
//                       {product.name} 
//                     </h3> 
 
//                     <p className="!m-0 !mt-[5px] !text-[8px] !leading-[1.3] !text-[#8B8B8B] sm:!text-[9px] md:!text-[10px]"> 
//                       {product.category} 
//                     </p> 
 
//                   </div> 
 
//                 </article> 
 
//               ))} 
 
//             </div> 
//           </div> 
 
//         </div> 
//       </div> 
//     </section> 
//   ); 
// } 
 
// export default Products;
import { useEffect, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "../../../components/common/Icons";

// Replace the image paths with your real product photos (public/images/products/)
const products = [
  { name: "SunMax Pro 550W", category: "Monocrystalline Panel", image: "/images/products/product-1.jpg" },
  { name: "VoltSync Hybrid 8kW", category: "Hybrid Inverter", image: "/images/products/product-1.jpg" },
  { name: "PowerCell 13.5kWh", category: "LiFePO₄ Battery", image: "/images/products/product-1.jpg" },
  { name: "EcoView Monitor", category: "Energy Manager", image: "/images/products/product-1.jpg" },
  { name: "Smart Optimizer", category: "Power Optimizer", image: "/images/products/product-1.jpg" },
  { name: "Home Energy Hub", category: "Smart Energy System", image: "/images/products/product-1.jpg" },
];

const GAP = 16; // px between cards

function ArrowButton({ direction, disabled, onClick }) {
  const Icon = direction === "prev" ? ArrowLeftIcon : ArrowRightIcon;
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "prev" ? "Previous products" : "Next products"}
      className={`flex h-[40px] w-[40px] items-center justify-center rounded-full border transition lg:h-[46px] lg:w-[46px] ${
        disabled
          ? "cursor-default border-[#E4E2DB] text-[#C9C9C9]"
          : "border-[#D9D7D0] text-[#1A1A1A] hover:bg-[#0B1F2E] hover:text-white"
      }`}
    >
      <Icon className="h-[16px] w-[16px]" />
    </button>
  );
}

function Products() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(4);

  // cards per view: 1 (mobile) / 2 (tablet) / 4 (desktop)
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setVisible(w < 640 ? 1 : w < 1024 ? 2 : 4);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(products.length - visible, 0);
  const current = Math.min(index, maxIndex);

  return (
    <section id="products" className="bg-white pb-[60px] pt-[48px] lg:pb-[70px] lg:pt-[67px]">
      <div className="mx-auto w-[90%]">
        {/* heading */}
        <p className="font-manrope text-[15px] font-medium leading-[22px] text-[#0B1F2E] lg:text-[16.8px]">
          Our Products
        </p>
        <h2 className="mt-[16px] font-manrope text-[28px] font-semibold leading-[1.2] text-[#14202B] lg:mt-[27px] lg:text-[38px] lg:leading-[46px]">
          Premium Solar Equipment
        </h2>

        {/* slider panel */}
        <div className="mt-[28px] bg-[#F5F3EE] px-4 pb-8 pt-5 lg:mt-[37px] lg:pb-9 lg:pl-[25px] lg:pr-[27px] lg:pt-6">
          <div className="flex items-start justify-between gap-6">
            <p className="max-w-[570px] font-roboto text-[15px] leading-[1.7] text-[#4B4B4B] lg:text-[18.4px] lg:leading-[31px]">
              Browse our curated selection of high-performance solar modules, inverters, and storage solutions.
            </p>
            <div className="flex shrink-0 items-center gap-[10px] lg:mt-[5px]">
              <ArrowButton direction="prev" disabled={current === 0} onClick={() => setIndex(current - 1)} />
              <ArrowButton direction="next" disabled={current >= maxIndex} onClick={() => setIndex(current + 1)} />
            </div>
          </div>

          {/* track */}
          <div className="mt-[28px] overflow-hidden lg:mt-[62px]">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                gap: `${GAP}px`,
                transform: `translateX(calc(${-current} * (100% + ${GAP}px) / ${visible}))`,
              }}
            >
              {products.map((p) => (
                <article
                  key={p.name}
                  className="shrink-0"
                  style={{ width: `calc((100% - ${(visible - 1) * GAP}px) / ${visible})` }}
                >
                  <div className="group aspect-square w-full overflow-hidden rounded-[11px] bg-[#E6E4DD]">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-[16px] [font-family:Arial,Helvetica,sans-serif] text-[17px] font-bold leading-[28px] text-[#111] lg:mt-[23px] lg:text-[20.8px]">
                    {p.name}
                  </h3>
                  <p className="mt-[6px] [font-family:Arial,Helvetica,sans-serif] text-[14px] leading-[24px] text-[#8A8A8A] lg:mt-[13px] lg:text-[16px]">
                    {p.category}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
