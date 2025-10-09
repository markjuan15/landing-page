import { motion } from "motion/react";
import { useTabStates } from "../../global";
import PdfViewer from "./components/pdfViewer";


export default function Letas() {
    const { toggleTabState } = useTabStates()

    return (
        <motion.div viewport={{ amount: 0.8 }} onViewportEnter={(entry: any) => toggleTabState(parseInt(entry.target.dataset.value))} id="letas" data-value={4} className="h-[calc(100vh-2.8rem)] snap-start snap-always">
            <div className="flex flex-col items-center w-full h-full gap-[2rem] overflow-auto p-[2rem] no-scrollbar">
                <PdfViewer />
            </div>
        </motion.div>
    )
}
