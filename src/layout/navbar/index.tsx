import { useTabStates, useTheme } from "../../global"
import { MdOutlineDarkMode } from 'react-icons/md';
import { AiFillSun } from 'react-icons/ai';

export default function Navbar() {

    const { tabState } = useTabStates()
    const { themeState, toggleThemeState } = useTheme()

    const link = [
        { label: "Agency Details", link: "#agency-details" },
        { label: "Registration", link: "#registration" },
        { label: "License", link: "#license" },
        { label: "LETAS", link: "#4" },
        { label: "Our Activities", link: "#5" },
        { label: "About Us", link: "#about" },
    ]

    return (
        <div className={`bg-[#0037af] dark:bg-[#2e2929] w-screen h-[3rem] px-2 ${themeState && `dark`} transition-colors duration-300`}>
            <div className="flex items-center h-full w-full justify-between px-[2rem]">
                <div className="flex items-center gap-2 cursor-pointer">
                    <a href="#lto-bayombong" className={` ${0 === tabState ? `border-b-2 dark:border-amber-500 border-white` : `border-b-2 border-[#fff0]`} transition-all duration-300 uppercase text-white text-[.8rem] font-semibold pb-[.15rem]`}>LTO Bayombong</a>
                </div>
                <div className="flex items-center gap-5">
                    <div className="flex gap-4">
                        {link.map((value: any, index: any) =>
                            <a key={index} href={value.link} className={` ${(index + 1) === tabState ? `border-b-2 dark:border-amber-500 border-white` : `border-b-2 border-[#fff0]`} transition-all duration-300 uppercase text-white text-[.8rem] font-semibold pb-[.15rem]`}>{value.label}</a>
                        )}
                    </div>
                    <div className="flex p-1 dark:bg-[#1f1c1c] bg-slate-200 rounded-sm gap-1">
                        <div onClick={() => toggleThemeState(true)} className={`dark:bg-[#2e2929] dark:hover:bg-[#352f2f] bg-white hover:bg-slate-300 p-1 rounded-sm cursor-pointer ${!themeState && `!bg-slate-300`}`}>
                            <AiFillSun className="text-[#0037af] dark:text-white" />
                        </div>
                        <div onClick={() => toggleThemeState(false)} className={`dark:bg-[#2e2929] dark:hover:bg-[#352f2f] bg-white hover:bg-slate-300 p-1 rounded-sm cursor-pointer ${themeState && `!bg-[#484141]`}`}>
                            <MdOutlineDarkMode className="text-[#0037af] dark:text-white" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}