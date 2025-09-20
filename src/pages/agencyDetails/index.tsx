import { motion } from "motion/react";
import { useTabStates } from "../../global";

export default function AgencyDetails() {
    const { toggleTabState } = useTabStates()

    return (
        <motion.div viewport={{ amount: 0.8 }} onViewportEnter={(entry: any) => toggleTabState(parseInt(entry.target.dataset.value))} id="agency-details" data-value={1} className="h-[calc(100vh-2.8rem)] snap-start snap-always">
            <div className="flex items-center justify-center w-full h-full gap-[5rem] p-[10rem] bg-[#1f1c1c]">
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.4,
                        scale: { type: "spring", visualDuration: 0.4, bounce: 0.3 },
                    }} className="flex flex-col items-start justify-center w-full leading-none">
                    <span className="text-white uppercase font-bold text-[6rem]">Agency</span>
                    <span className="text-white uppercase font-bold text-[6rem]">Details</span>
                </motion.div>
                <div className="grid grid-flow-col grid-rows-2 gap-10">
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.4,
                            scale: { type: "spring", visualDuration: 0.4, bounce: 0.3 },
                        }} className="flex items-center justify-center cursor-pointer active:scale-[1.005] w-[20rem] h-[7rem] rounded-md text-amber-500 bg-[#2e2929] hover:bg-[#352f2f] uppercase font-semibold"><span className="text-[1.2rem]">Mandate</span></motion.div>
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.4,
                            scale: { type: "spring", visualDuration: 0.4, bounce: 0.3 },
                        }} className="flex items-center justify-center cursor-pointer active:scale-[1.005] w-[20rem] h-[7rem] rounded-md text-amber-500 bg-[#2e2929] hover:bg-[#352f2f] uppercase font-semibold"><span className="text-[1.2rem]">Mission</span></motion.div>
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.4,
                            scale: { type: "spring", visualDuration: 0.4, bounce: 0.3 },
                        }} className="flex items-center justify-center cursor-pointer active:scale-[1.005] w-[20rem] h-[7rem] rounded-md text-amber-500 bg-[#2e2929] hover:bg-[#352f2f] uppercase font-semibold"><span className="text-[1.2rem]">Vission</span></motion.div>
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.4,
                            scale: { type: "spring", visualDuration: 0.4, bounce: 0.3 },
                        }} className="flex items-center justify-center cursor-pointer active:scale-[1.005] w-[20rem] h-[7rem] rounded-md text-amber-500 bg-[#2e2929] hover:bg-[#352f2f] uppercase font-semibold"><span className="text-[1.2rem]">Service Pledge</span></motion.div>
                </div>
            </div>
        </motion.div>
    )
}
