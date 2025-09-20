import MainLayout from "../../layout";
import lto from "../../assets/lto.png"
import dotr from "../../assets/dotr.png"
import bagongPilipinas from "../../assets/bagong-pilipinas.png"
import bg from "../../assets/bg.jfif"
import { motion } from "motion/react";
import { useTabStates } from "../../global";

export default function Home() {
    const { toggleTabState } = useTabStates()

    function mySnapCallback(entry: any) {
        console.log(entry.target.dataset.value)
        toggleTabState(parseInt(entry.target.dataset.value))
    }

    return (
        <MainLayout>
            <div className="flex flex-col">
                <motion.div viewport={{ amount: 0.8 }} onViewportEnter={(entry: any) => mySnapCallback(entry)} id="lto-bayombong" data-value={0} className="flex flex-col snap-start lg:items-center lg:justify-center md:items-center md:justify-center w-full lg:h-[calc(100vh-2.8rem)] md:h-[calc(100vh-2.8rem)] overflow-hidden gap-8 relative">
                    <div className="flex flex-col lg:flex-row md:flex-row items-center justify-center w-full gap-[1rem] lg:gap-[3rem] md:gap-[3rem]">
                        <img src={bagongPilipinas} className="w-[8rem] lg:w-[14rem] md:w-[10rem] z-10" alt="LTO" />
                        <img src={dotr} className="w-[8rem] lg:w-[14rem] md:w-[10rem] z-10" alt="LTO" />
                        <img src={lto} className="w-[8rem] lg:w-[14rem] md:w-[10rem] z-10" alt="LTO" />
                    </div>
                    <div className="flex flex-col justify-center items-center text-center leading-none z-10">
                        <span className="uppercase font-bold lg:text-[4.5rem] md:text-[2rem]">Land Transportation Office</span>
                        <span className="uppercase font-bold lg:text-[4.5rem] md:text-[2rem]">Bayombong District Office</span>
                    </div>
                    <img src={bg} className="w-full absolute opacity-40 mask-b-from-30% mask-b-to-100%" alt="LTO" />
                </motion.div>
                <motion.div viewport={{ amount: 0.8 }} onViewportEnter={(entry: any) => mySnapCallback(entry)} id="agency-details" data-value={1} className="h-[calc(100vh-2.8rem)] snap-start">
                    second
                </motion.div>
                <motion.div viewport={{ amount: 0.8 }} onViewportEnter={(entry: any) => mySnapCallback(entry)} id="registration" data-value={2} className="h-[calc(100vh-2.8rem)] snap-start">
                    third
                </motion.div>
                <motion.div viewport={{ amount: 0.8 }} onViewportEnter={(entry: any) => mySnapCallback(entry)} id="license" data-value={3} className="h-[calc(100vh-2.8rem)] snap-start">
                    fourth
                </motion.div>
            </div>
        </MainLayout>
    )
}