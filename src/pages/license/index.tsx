import { motion } from "motion/react";
import { useTabStates } from "../../global";
import Card from "../components/card";
import { license } from "../data";

export default function License() {
    const { toggleTabState } = useTabStates()

    return (
        <motion.div viewport={{ amount: 0.8 }} onViewportEnter={(entry: any) => toggleTabState(parseInt(entry.target.dataset.value))} id="license" data-value={3} className="h-[calc(100vh-2.8rem)] snap-start snap-always">
            <div className="flex flex-col items-center w-full h-full gap-[2rem] overflow-auto p-[2rem] no-scrollbar">
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.4,
                        scale: { type: "spring", visualDuration: 0.4, bounce: 0.3 },
                    }} className="flex flex-col items-start justify-center leading-none">
                    <span className="text-white uppercase font-bold text-[3rem] lg:text-[6rem]">License</span>
                </motion.div>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 w-full">
                    {license.map((value: any, index: any) =>
                        <Card data={value?.data} label={value?.label} key={index} />
                    )}
                </div>
            </div>
        </motion.div>
    )
}
