import { useEffect, useState } from "react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
} from "../../../components/common/Icons";

// Replace the image paths with your real product photos
// (public/images/products/)
const products = [
  {
    name: "SunMax Pro 550W",
    category: "Monocrystalline Panel",
    image: "/images/products/product-1.png",
  },
  {
    name: "VoltSync Hybrid 8kW",
    category: "Hybrid Inverter",
    image: "/images/products/product-2.png",
  },
  {
    name: "PowerCell 13.5kWh",
    category: "LiFePO₄ Battery",
    image: "/images/products/product-3.png",
  },
  {
    name: "EcoView Monitor",
    category: "Energy Manager",
    image: "/images/products/product-4.png",
  },
  {
    name: "Smart Optimizer",
    category: "Power Optimizer",
    image: "/images/products/product-5.png",
  },
  {
    name: "Home Energy Hub",
    category: "Smart Energy System",
    image: "/images/products/product-6.png",
  },
];

const GAP = 16; // px between cards

function ArrowButton({ direction, disabled, onClick }) {
  const Icon = direction === "prev" ? ArrowLeftIcon : ArrowRightIcon;

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={
        direction === "prev"
          ? "Previous products"
          : "Next products"
      }
      className={`flex h-[40px] w-[40px] items-center justify-center rounded-full border transition lg:h-[46px] lg:w-[46px] ${
        disabled
          ? "cursor-default border-[#D9D6CE] text-[#C9C9C9]"
          : "border-[#CFCBC1] text-[#1A1A1A] hover:bg-[#0B1F2E] hover:text-white"
      }`}
    >
      <Icon className="h-[16px] w-[16px]" />
    </button>
  );
}

function Products() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(4);

  // Cards per view:
  // 1 mobile / 2 tablet / 4 desktop
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
    <section
      id="products"
      className="
        w-full
        overflow-hidden
        bg-[#F5F3EE]
        pb-[30px]
        pt-[48px]

        sm:pb-[40px]
        sm:pt-[55px]

        lg:pb-[50px]
        lg:pt-[67px]
      "
    >
      <div
        className="
          mx-auto
          w-[90%]
          max-w-[1500px]
        "
      >
        {/* =====================================================
            HEADING
        ====================================================== */}

        <div>
          <p
            className="
              font-manrope
              text-[15px]
              font-medium
              leading-[22px]
              text-[#00A87A]

              lg:text-[16.8px]
            "
          >
            Our Products
          </p>

          <h2
            className="
              mt-[16px]
              font-manrope
              text-[28px]
              font-semibold
              leading-[1.2]
              text-[#14202B]

              lg:mt-[27px]
              lg:text-[38px]
              lg:leading-[46px]
            "
          >
            Premium Solar Equipment
          </h2>
        </div>

        {/* =====================================================
            PRODUCT SLIDER PANEL
        ====================================================== */}

        <div
          className="
            mt-[28px]
            bg-[#F5F3EE]
            px-0
            pb-8
            pt-5

            lg:mt-[37px]
            lg:pb-9
            lg:pl-0
            lg:pr-0
            lg:pt-6
          "
        >
          {/* TOP CONTENT */}

          <div className="flex items-start justify-between gap-6">
            <p
              className="
                max-w-[570px]
                font-roboto
                text-[15px]
                leading-[1.7]
                text-[#4B4B4B]

                lg:text-[18.4px]
                lg:leading-[31px]
              "
            >
              Browse our curated selection of high-performance solar
              modules, inverters, and storage solutions.
            </p>

            {/* ARROWS */}

            <div
              className="
                flex
                shrink-0
                items-center
                gap-[10px]

                lg:mt-[5px]
              "
            >
              <ArrowButton
                direction="prev"
                disabled={current === 0}
                onClick={() => setIndex(current - 1)}
              />

              <ArrowButton
                direction="next"
                disabled={current >= maxIndex}
                onClick={() => setIndex(current + 1)}
              />
            </div>
          </div>

          {/* =====================================================
              PRODUCT TRACK
          ====================================================== */}

          <div
            className="
              mt-[28px]
              overflow-hidden

              lg:mt-[62px]
            "
          >
            <div
              className="
                flex
                transition-transform
                duration-500
                ease-out
              "
              style={{
                gap: `${GAP}px`,
                transform: `translateX(calc(${-current} * (100% + ${GAP}px) / ${visible}))`,
              }}
            >
              {products.map((p) => (
                <article
                  key={p.name}
                  className="shrink-0"
                  style={{
                    width: `calc((100% - ${
                      (visible - 1) * GAP
                    }px) / ${visible})`,
                  }}
                >
                  {/* PRODUCT IMAGE */}

                  <div
                    className="
                      group
                      aspect-square
                      w-full
                      overflow-hidden
                      rounded-[11px]
                      bg-[#E6E4DD]
                    "
                  >
                    <img
                      src={p.image}
                      alt={p.name}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-105
                      "
                    />
                  </div>

                  {/* PRODUCT NAME */}

                  <h3
                    className="
                      mt-[16px]
                      [font-family:Arial,Helvetica,sans-serif]
                      text-[13px]
                      font-bold
                      leading-[24px]
                      text-[#111]

                      lg:mt-[23px]
                      lg:text-[15.8px]
                    "
                  >
                    {p.name}
                  </h3>

                  {/* PRODUCT CATEGORY */}

                  <p
                    className="
                      mt-[6px]
                      [font-family:Arial,Helvetica,sans-serif]
                      text-[14px]
                      leading-[24px]
                      text-[#8A8A8A]

                      lg:mt-[13px]
                      lg:text-[16px]
                    "
                  >
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