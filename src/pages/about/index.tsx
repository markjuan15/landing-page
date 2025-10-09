import { motion } from "motion/react";
import { useTabStates } from "../../global";
import { FaLocationDot, FaPhone } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import bg from "../../assets/bg.jfif"

export default function About() {
    const { toggleTabState } = useTabStates()

    return (
        <motion.div viewport={{ amount: 0.8 }} onViewportEnter={(entry: any) => toggleTabState(parseInt(entry.target.dataset.value))} id="about" data-value={6} className="h-[calc(100vh-2.8rem)] snap-start snap-always">
            <div className="flex flex-col items-center w-full h-full gap-[2rem] overflow-auto p-[2rem] no-scrollbar">
                <div className="flex items-center justify-center w-full h-full text-white gap-4">
                    <img src={bg} alt="" className="w-[36.4rem] rounded-md" />
                    <div className="flex flex-col w-full h-full gap-4 overflow-auto no-scrollbar">
                        <div className="flex flex-col gap-4">
                            <span className="uppercase text-[3rem] font-bold leading-7">PREFACE</span>
                            <div className="flex flex-col w-full h-full gap-4">
                                <span className="text-justify indent-[3rem]">
                                    In the province of Nueva Vizcaya lies the festive and vibrant town of Bayombong. Vizcaya’s capital surrounded by various cultural establishments and lush green mountains; neighboring rice fields filled with crops that represent Bayombong. The name Bayombong spring from the Gaddang (one of the local languages) word “Bayongyong” which means the confluence of two mighty rivers. As told, the Tribe of Maalate tried to conquer the place, which caused the outbreak of the first tribal war in the area. The place then was renamed “Bayumbung” as a sign of the Gaddangs first victory in defending their private domains.
                                </span>
                                <span className="text-justify indent-[3rem]">
                                    LTO Bayombong District Office caters the registration and licensing needs of the demographic landscapes of the municipalities of Bayombong, Bagabag, Diadi, Villaverde, Solano, Ambaguio and Quezon.
                                </span>
                                <span className="text-justify indent-[3rem]">
                                    Adjudged as the 2nd placer Outstanding District Office for CY 2023 and a special award for Road Safety Advocates National Level on 18 April 2024, for attaining a high rating in the performance of projects and improvements introduced in relation with LTO’s mandates which resulted to the enhancement of service efficiency and realization of goals in upholding road safety, environmentally sustainable transport and good governance.
                                </span>
                                <span className="text-justify indent-[3rem]">
                                    As illustrated in the statistical graph, the core transactional mandates of the office revealed increase in every record penned in 2024. Registration of motor vehicle rocketed by 6.68 % with 48,763 total number of registered motor vehicles compared to the 45,711 of 2023. Meanwhile, on the Driver’s License, it has risen up to 16.7 % with 32,767 total number of issued DL as against the 2023 volume of 28,057. Law enforcement as well escalated by 11.32% with 6,745 apprehension cases compared to the 6,059 recorded in 2023, as a result of solicited efforts in information dissemination, conduct of Road Safety Lectures and Free Theoretical Driving Course, “Oplan Balik Rehistro/Lisensya” , Household surveys in every barangay within our GAOR.
                                </span>
                                <span className="text-justify indent-[3rem]">
                                    LTO Bayombong District Office will always be and will consistently and continuously shine with excellence in every aspect of its service delivery. Bringing out the full potential and the best in every personnel in the performance, discharge and execution of the core mandates of the LTO. With its dedication in advocating Road Safety, we will persevere and pursue to make safer roads, safer vehicles and safer road users.
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col w-full h-full">
                            <div className="flex flex-col gap-4">
                                <span className="uppercase text-[3rem] font-semibold">Contact Us</span>
                                <div className="flex flex-col gap-1">
                                    <div className="flex items-center gap-2 text-[1.2rem]">
                                        <FaLocationDot />
                                        <span className="">Capitol Compound, Bayombong, Nueva Vizcaya</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-[1.2rem]">
                                        <MdEmail />
                                        <span className="">ltobaydo@gmail.com</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-[1.2rem]">
                                        <FaPhone />
                                        <span className="">(078) 392 0936</span>
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
