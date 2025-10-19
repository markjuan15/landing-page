import { motion } from "motion/react";
import { useTabStates } from "../../global";
import ltoTracker from "../../assets/ltoTracker/lto-tracker.avif"

interface Iprops {
    index?: number
}

export default function LtoTracker({ index }: Iprops) {
    const { toggleTabState } = useTabStates()

    return (
        <motion.div viewport={{ amount: 0.8 }} onViewportEnter={(entry: any) => toggleTabState(parseInt(entry.target.dataset.value))} id="lto-tracker" data-value={index} className="h-[calc(100vh-2.8rem)] snap-start snap-always">
            <div className="flex flex-col items-center w-full h-full gap-[2rem] overflow-auto p-[2rem] no-scrollbar">
                <div className="flex flex-col lg:flex-row items-center lg:justify-center w-full h-full gap-[2rem] lg:gap-[3rem] overflow-auto p-[4rem] no-scrollbar">
                    <motion.img
                        initial={{ scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.4,
                            scale: { type: "spring", visualDuration: 0.4, bounce: 0.3 },
                        }} src={ltoTracker} alt="LTO Tracker" className="rounded-md w-[20rem]" />
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.4,
                            scale: { type: "spring", visualDuration: 0.4, bounce: 0.3 },
                        }} className="flex flex-col items-start justify-center leading-none">
                        <span className="text-white uppercase font-bold text-[6rem]">LTO</span>
                        <span className="text-white uppercase font-bold text-[6rem]">Tracker</span>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}
