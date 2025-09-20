import { motion } from "motion/react";
import { useTabStates } from "../../global";

export default function Registration() {
    const { toggleTabState } = useTabStates()

    return (
        <motion.div viewport={{ amount: 0.8 }} onViewportEnter={(entry: any) => toggleTabState(parseInt(entry.target.dataset.value))} id="registration" data-value={2} className="h-[calc(100vh-2.8rem)] snap-start snap-always">
            third
        </motion.div>
    )
}
