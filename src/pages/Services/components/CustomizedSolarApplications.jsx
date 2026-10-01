import { motion } from "framer-motion";
import FallbackImage from "../../../components/common/FallbackImage";

const CustomizedSolarApplications = ({ data }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-full bg-[#f5f5f5] py-10 sm:py-14 lg:py-16"
    >
      <div className="mx-auto flex w-full max-w-[1220px] flex-col items-center gap-8 px-5 sm:px-8 lg:flex-row lg:gap-14 lg:px-10">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="w-full lg:w-[52%]"
        >
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-2 text-[13px] font-medium text-[#172d49]">
            <span className="h-2 w-2 rounded-full bg-[#ffbd21]" />
            {data.eyebrow}
          </div>

          <h2 className="text-[30px] font-medium leading-[1.15] text-[#102d4f] sm:text-[36px] lg:text-[38px]">
            {data.title}
            <br />
            <span className="text-[#ffbd21]">{data.highlight}</span>
          </h2>

          <div className="mt-3 space-y-5 text-[16px] leading-[1.6] text-[#171717] sm:text-[17px]">
            {data.paragraphs?.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="w-full overflow-hidden rounded-[20px] lg:w-[48%]"
        >
          <FallbackImage
            src={data.image}
            alt={data.title}
            className="block aspect-[1.05/1] w-full object-cover"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CustomizedSolarApplications;