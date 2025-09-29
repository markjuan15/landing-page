import { motion } from "motion/react";
import { useTabStates } from "../../global";
import { FaSquareFacebook } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import bg from "../../assets/bg.jfif"

export default function About() {
    const { toggleTabState } = useTabStates()

    return (
        <motion.div viewport={{ amount: 0.8 }} onViewportEnter={(entry: any) => toggleTabState(parseInt(entry.target.dataset.value))} id="about" data-value={6} className="h-[calc(100vh-2.8rem)] snap-start snap-always">
            <div className="flex flex-col items-center w-full h-full gap-[2rem] overflow-auto p-[2rem] no-scrollbar">
                <div className="flex items-center justify-center w-full h-full text-white gap-4 leading-none">
                    <img src={bg} alt="" className="w-[35rem] rounded-md" />
                    <div className="flex flex-col w-full h-full">
                        <div className="flex flex-col w-full h-full gap-4">
                            <span className="uppercase text-[3rem] font-bold">About Us</span>
                            <span className="text-justify">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus unde ea ut illum numquam porro incidunt, distinctio eius laboriosam magnam exercitationem sequi consequatur totam commodi, pariatur ipsa magni necessitatibus perspiciatis.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus unde ea ut illum numquam porro incidunt, distinctio eius laboriosam magnam exercitationem sequi consequatur totam commodi, pariatur ipsa magni necessitatibus perspiciatis.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus unde ea ut illum numquam porro incidunt, distinctio eius laboriosam magnam exercitationem sequi consequatur totam commodi, pariatur ipsa magni necessitatibus perspiciatis.
                            </span>
                        </div>
                        <div className="flex flex-col w-full h-full">
                            <div className="flex flex-col gap-4">
                                <span className="uppercase text-[3rem] font-semibold">Contact Us</span>
                                <div className="flex flex-col gap-1">
                                    <div className="flex items-center gap-2 text-[1.2rem]">
                                        <FaSquareFacebook />
                                        <span className="">District Office II - Service Desk</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-[1.2rem]">
                                        <MdEmail />
                                        <span className="">ltobaydo@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
