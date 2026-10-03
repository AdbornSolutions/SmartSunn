import { motion } from "framer-motion";

const WhyChooseSmarttsun = ({ data }) => {
  const steps = data?.steps || [];
return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mb-14 text-center sm:mb-16"
        >
          <p className="mb-5 text-[14px] font-medium text-[#009b62] sm:text-[15px]">
            {data?.eyebrow || "Why Choose Smarttsun Power?"}
          </p>

          <h2 className="mx-auto max-w-[1380px] text-[30px] font-medium leading-[1.2] tracking-[-0.5px] text-[#050505] sm:text-[38px] lg:text-[40px]">
            {data?.title ||
              "More Than Installation. A Complete Solar Partnership."}
          </h2>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="relative hidden lg:block">

          {/* Base line */}
          <div className="absolute left-[4%] right-[4%] top-[18px] h-[2px] bg-[#e8ece9]" />

          {/* Animated line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            className="absolute left-[4%] right-[4%] top-[18px] h-[2px] origin-left bg-[#e5e9e6]"
          />

          <div className="relative grid grid-cols-8 gap-5">
            {steps.map((step, index) => (
              <motion.div
                key={step.id || index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                className="group relative"
              >
                {/* Step circle */}
                <motion.div
                  whileHover={{
                    scale: 1.12,
                    backgroundColor: "#ffbd21",
                    borderColor: "#ffbd21",
                  }}
                  transition={{ duration: 0.2 }}
                  className="relative z-10 mx-auto flex h-[36px] w-[36px] items-center justify-center rounded-full border border-[#e4e7e5] bg-[#f8f9f8] text-[11px] font-medium text-[#68706c] shadow-sm"
                >
                  {String(index + 1).padStart(2, "0")}
                </motion.div>

                {/* Content */}
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                  className="mt-4 min-h-[145px] rounded-xl px-1 py-2"
                >
                  <h3 className="text-[13px] font-bold leading-[1.35] text-[#101010]">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-[10px] leading-[1.55] text-[#69716e]">
                    {step.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tablet */}
        <div className="hidden sm:grid lg:hidden sm:grid-cols-2 sm:gap-5">
          {steps.map((step, index) => (
            <motion.div
              key={step.id || index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-[#edf0ee] bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
            >
              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full border border-[#e4e7e5] bg-[#f8f9f8] text-[11px] font-medium text-[#68706c] transition-colors duration-300 hover:border-[#ffbd21] hover:bg-[#ffbd21]">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3 className="text-[14px] font-bold leading-[1.4] text-[#101010]">
                {step.title}
              </h3>

              <p className="mt-2 text-[12px] leading-[1.55] text-[#69716e]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile Timeline */}
        <div className="relative sm:hidden">

          {/* Vertical line */}
          <div className="absolute bottom-5 left-[17px] top-5 w-[2px] bg-[#e8ece9]" />

          <div className="space-y-7">
            {steps.map((step, index) => (
              <motion.div
                key={step.id || index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.04,
                }}
                className="relative flex gap-5"
              >
                {/* Circle */}
                <motion.div
                  whileTap={{ scale: 0.95 }}
                  className="relative z-10 flex h-[36px] min-h-[36px] w-[36px] min-w-[36px] items-center justify-center rounded-full border border-[#e4e7e5] bg-white text-[10px] font-medium text-[#68706c] shadow-sm transition-all duration-300 hover:border-[#ffbd21] hover:bg-[#ffbd21] hover:text-[#111]"
                >
                  {String(index + 1).padStart(2, "0")}
                </motion.div>

                {/* Content */}
                <div className="pb-2 pt-1">
                  <h3 className="text-[14px] font-bold leading-[1.35] text-[#101010]">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-[12px] leading-[1.55] text-[#69716e]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseSmarttsun;