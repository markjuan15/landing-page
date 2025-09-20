import { motion } from "motion/react";
import { useTabStates } from "../../global";

export default function License() {
    const { toggleTabState } = useTabStates()

    return (
        <motion.div viewport={{ amount: 0.8 }} onViewportEnter={(entry: any) => toggleTabState(parseInt(entry.target.dataset.value))} id="license" data-value={3} className="h-[calc(100vh-2.8rem)] snap-start snap-always">
            fourth
        </motion.div>
    )
}
