import { motion } from "motion/react";
import { useModalStates, useTabStates } from "../../global";
import { activities } from "../data";

export default function OurActivities() {
    const { toggleTabState } = useTabStates()
    const { indexState, toggleIndexState } = useModalStates()

    const filteredActivities = activities.filter(
        (activity) => Object.values(activity)[0].length > 0
    );

    const handleData = (data: any) => {
        toggleIndexState(indexState)
        useModalStates.setState({ indexModalData: data })
    }

    return (
        <motion.div viewport={{ amount: 0.8 }} onViewportEnter={(entry: any) => toggleTabState(parseInt(entry.target.dataset.value))} id="our-activities" data-value={5} className="h-[calc(100vh-2.8rem)] snap-start snap-always">
            <div className="flex flex-col items-center w-full h-full gap-[2rem] overflow-auto p-[2rem] no-scrollbar">
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.4,
                        scale: { type: "spring", visualDuration: 0.4, bounce: 0.3 },
                    }} className="flex flex-col items-start justify-center leading-none">
                    <span className="text-white uppercase font-bold text-[3rem] lg:text-[6rem]">Our Activities</span>
                </motion.div>
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.4,
                        scale: { type: "spring", visualDuration: 0.4, bounce: 0.3 },
                    }} className="grid grid-cols-1 lg:grid-cols-4 gap-10 w-full">
                    {filteredActivities.map((activity, i) => {
                        const [key, value] = Object.entries(activity)[0];

                        return (
                            <div key={i} onClick={() => handleData(value)} className="overflow-hidden rounded-md cursor-pointer">
                                <div className="relative group">
                                    <div className="absolute flex items-center justify-center h-[2rem] bg-white opacity-60 w-full">
                                        <span className="font-semibold">{key.toUpperCase()}</span>
                                    </div>
                                    <img src={value[0].image} alt={`${key} thumbnail`} className="w-full" />
                                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition-all duration-300" />
                                </div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </motion.div>
    )
}
