import { motion } from "motion/react";
import { useTabStates } from "../../global";
import PDFViewer from "../components/pdfViewer";
import letas from "../../assets/letas/letas.pdf"

interface Iprops {
    index?: number
}

export default function Letas({ index }: Iprops) {
    const { toggleTabState } = useTabStates()

    return (
        <motion.div viewport={{ amount: 0.8 }} onViewportEnter={(entry: any) => toggleTabState(parseInt(entry.target.dataset.value))} id="letas" data-value={index} className="h-[calc(100vh-2.8rem)] snap-start snap-always">
            <div className="flex flex-col items-center w-full h-full gap-[2rem] overflow-auto no-scrollbar">
                <PDFViewer file={letas} />
            </div>
        </motion.div>
    )
}
