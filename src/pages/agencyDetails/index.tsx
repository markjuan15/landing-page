import { motion } from "motion/react";
import { useTabStates } from "../../global";
import Card from "../card";
import { agencyDetails } from "../data";

export default function AgencyDetails() {
    const { toggleTabState } = useTabStates()

    return (
        <>
            <motion.div viewport={{ amount: 0.8 }} onViewportEnter={(entry: any) => toggleTabState(parseInt(entry.target.dataset.value))} id="agency-details" data-value={1} className="h-[calc(100vh-2.8rem)] snap-start snap-always">
                <div className="flex flex-col lg:flex-row items-center lg:justify-center w-full h-full gap-[2rem] lg:gap-[3rem] overflow-auto p-[4rem] no-scrollbar">
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.4,
                            scale: { type: "spring", visualDuration: 0.4, bounce: 0.3 },
                        }} className="flex flex-col items-center justify-center leading-none w-full">
                        <span className="text-white uppercase font-bold text-[6rem]">Agency</span>
                        <span className="text-white uppercase font-bold text-[6rem]">Details</span>
                    </motion.div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full">
                        {agencyDetails.map((value: any, index: any) =>
                            <Card data={value?.data} label={value?.label} key={index} />
                        )}
                    </div>
                </div>
            </motion.div>
        </>
    )
}
