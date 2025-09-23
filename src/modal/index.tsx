import { motion } from "motion/react";
import { AiFillCloseCircle } from 'react-icons/ai';
import { useModalStates } from "../global";

interface Iprops {
    state?: boolean
}

export default function Modal({ state }: Iprops) {

    const { modalState, modalData, toggleModalState } = useModalStates()

    return state ? (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex flex-col lg:flex-row gap-5 items-center justify-center bg-[#00000072] fixed z-50 w-screen h-screen">
            <motion.div initial={{ scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.4,
                    scale: { type: "spring", visualDuration: 0.4, bounce: 0.3 },
                }}
                className="bg-[#1f1c1c] min-w-[20rem] min-h-[10rem] rounded-md p-1 relative">
                <img src={modalData} className="w-[60rem] rounded-md" alt="." />
                <AiFillCloseCircle onClick={() => toggleModalState(modalState)} className="text-4xl text-white absolute lg:-right-10 lg:-top-10 cursor-pointer invisible lg:visible" />
            </motion.div>
            <motion.div initial={{ scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.4,
                    scale: { type: "spring", visualDuration: 0.4, bounce: 0.3 },
                }}>
                <AiFillCloseCircle onClick={() => toggleModalState(modalState)} className="text-4xl text-white lg:-right-10 lg:-top-10 cursor-pointer visible lg:invisible" />
            </motion.div>
        </motion.div>
    ) : null
}