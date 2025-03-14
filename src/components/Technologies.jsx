import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import { SiCss3 } from "react-icons/si";
import { SiFlutter } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { motion  } from "framer-motion";

const iconVarients = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
})


const Technologies = () => {
  return (
    <div className="border-b border-neutral-8 00 pb-24 ">
      <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1.5 }} className="my-20 text-center text-4xl">Technologies</motion.h2>
      <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1.5 }} className="flex flex-wrap items-center justify-center gap-4 ">

        <motion.div variants={iconVarients(2.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>

        <motion.div variants={iconVarients(3)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-cyan-400" />
        </motion.div>

        <motion.div variants={iconVarients(5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-7xl text-cyan-400" />
        </motion.div>

        <motion.div variants={iconVarients(2)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <DiMysql className="text-7xl text-cyan-400" />
        </motion.div>

        <motion.div variants={iconVarients(3.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <AiFillHtml5 className="text-7xl text-cyan-400" />
        </motion.div>

        <motion.div variants={iconVarients(4.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiCss3 className="text-7xl text-cyan-400" />
        </motion.div>

        <motion.div variants={iconVarients(5.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiFlutter className="text-7xl text-cyan-400" />
        </motion.div>

        <motion.div variants={iconVarients(6.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiExpress className="text-7xl text-cyan-400" />
        </motion.div>

      </motion.div>
    </div>
  )
}

export default Technologies
