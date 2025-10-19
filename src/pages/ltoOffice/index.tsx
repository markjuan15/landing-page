import { motion } from "motion/react";
import { useTabStates } from "../../global";

import lto from "../../assets/lto.png"
import dotr from "../../assets/dotr.png"
import bagongPilipinas from "../../assets/bagong-pilipinas.png"
import bg from "../../assets/bg.jfif"

interface Iprops {
    index?: number
}

export default function LTOOffice({ index }: Iprops) {
    const { toggleTabState } = useTabStates()

    return (
        <motion.div viewport={{ amount: 0.8 }} onViewportEnter={(entry: any) => toggleTabState(parseInt(entry.target.dataset.value))} id="lto-bayombong" data-value={index} className="flex flex-col snap-start snap-always lg:items-center lg:justify-center md:items-center md:justify-center w-full lg:h-[calc(100vh-2.8rem)] md:h-[calc(100vh-2.8rem)] overflow-hidden gap-8 relative bg-[#5e5a5a]">
            <div className="flex flex-col lg:flex-row md:flex-row items-center justify-center w-full gap-[1rem] lg:gap-[3rem] md:gap-[3rem]">
                <motion.img initial={{ scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.4,
                        scale: { type: "spring", visualDuration: 0.4, bounce: 0.3 },
                    }} src={bagongPilipinas} className="w-[8rem] lg:w-[14rem] md:w-[10rem] z-10" alt="LTO" />
                <motion.img initial={{ scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.4,
                        scale: { type: "spring", visualDuration: 0.4, bounce: 0.3 },
                    }} src={dotr} className="w-[8rem] lg:w-[14rem] md:w-[10rem] z-10" alt="LTO" />
                <motion.img initial={{ scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.4,
                        scale: { type: "spring", visualDuration: 0.4, bounce: 0.3 },
                    }} src={lto} className="w-[8rem] lg:w-[14rem] md:w-[10rem] z-10" alt="LTO" />
            </div>
            <div className="flex flex-col justify-center items-center text-center leading-none z-10">
                <motion.span initial={{ scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.4,
                        scale: { type: "spring", visualDuration: 0.4, bounce: 0.3 },
                    }} className="uppercase font-bold lg:text-[4.5rem] md:text-[2rem] text-white">Land Transportation Office</motion.span>
                <motion.span initial={{ scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.4,
                        scale: { type: "spring", visualDuration: 0.4, bounce: 0.3 },
                    }} className="uppercase font-bold lg:text-[4.5rem] md:text-[2rem] text-white">Bayombong District Office</motion.span>
            </div>
            <img src={bg} className="w-full absolute opacity-50 mask-b-from-10% mask-b-to-100%" alt="LTO" />
        </motion.div>
    )
}
