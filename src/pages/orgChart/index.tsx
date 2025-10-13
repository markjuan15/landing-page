import { motion } from "motion/react";
import { useTabStates } from "../../global";

export default function OrgChart() {
    const { toggleTabState } = useTabStates()

    return (
        <motion.div viewport={{ amount: 0.8 }} onViewportEnter={(entry: any) => toggleTabState(parseInt(entry.target.dataset.value))} id="org-chart" data-value={6} className="h-[calc(100vh-2.8rem)] snap-start snap-always">
            <div className="flex flex-col items-center w-full h-full gap-[2rem] overflow-auto p-[2rem] no-scrollbar">
                Org Chart
            </div>
        </motion.div>
    )
}
