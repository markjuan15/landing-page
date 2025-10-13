import { motion } from "motion/react";
import { useModalStates, useTheme } from "../../../global";

interface Iprops {
    data?: any,
    label?: any,
}

export default function Card({ data, label }: Iprops) {

    const { modalState, toggleModalState } = useModalStates()
    const { themeState } = useTheme()

    function setData(data: any) {
        toggleModalState(modalState)
        useModalStates.setState({ modalData: data })
    }

    const formatLabel = (label = ""): string =>
        label.replace(/\b([a-zA-Z]+(?:'s)?)\b/g, (match) => {
            const lower = match.toLowerCase();

            if (
                lower === "npdl" ||
                lower === "pdl" ||
                lower === "non" ||
                lower === "prof"
            ) return lower.toUpperCase();
            if (["or", "in", "and", "of", "to", "from"].includes(lower)) return lower;

            if (lower.endsWith("'s")) {
                const base = lower.slice(0, -2);
                return base.charAt(0).toUpperCase() + base.slice(1) + "'s";
            }

            return lower.charAt(0).toUpperCase() + lower.slice(1);
        });
    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.3 },
            }} onClick={() => setData(data)} className={`flex items-center justify-center cursor-pointer active:scale-[1.005] w-full h-[7rem] rounded-md dark:text-amber-500 text-white dark:bg-[#2e2929] dark:hover:bg-[#352f2f] bg-[#0037af] hover:bg-[#0640bd] font-semibold p-5 leading-none ${themeState && `dark`} transition-colors duration-300`}>
            <span className="text-[1.2rem] text-center text-ellipsis line-clamp-4">{formatLabel(label)}</span>
        </motion.div>
    )
}