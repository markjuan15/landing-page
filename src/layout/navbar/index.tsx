import { useTabStates, useTheme } from "../../global"
import { MdOutlineDarkMode } from 'react-icons/md';
import { AiFillSun } from 'react-icons/ai';
import { FiMenu } from "react-icons/fi";

import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, TransitionChild } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from "react";

export default function Navbar() {

    const { tabState } = useTabStates()
    const { themeState, toggleThemeState } = useTheme()

    const [open, setOpen] = useState(true)

    const link = [
        { label: "Directory", link: "#directory" },
        { label: "Agency Details", link: "#agency-details" },
        { label: "Registration", link: "#registration" },
        { label: "License", link: "#license" },
        { label: "LETAS", link: "#letas" },
        { label: "Our Activities", link: "#our-activities" },
        { label: "Org Chart", link: "#org-chart" },
        { label: "LTO Tracker", link: "#lto-tracker" },
        { label: "About Us", link: "#about" },
    ]

    return (
        <div className={`bg-[#0037af] dark:bg-[#2e2929] w-screen h-[3rem] px-2 ${themeState && `dark`} transition-colors duration-300`}>
            <div className="hidden items-center h-full w-full justify-between px-[2rem] lg:flex">
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
            <div className="flex items-center h-full w-full lg:hidden">
                <span onClick={() => setOpen(true)} className="text-white text-[1.5rem] cursor-pointer"><FiMenu /></span>
                <Dialog open={open} onClose={setOpen} className="relative z-10 lg:hidden">
                    <DialogBackdrop transition className="fixed inset-0 bg-gray-900/50 transition-opacity duration-500 ease-in-out data-closed:opacity-0" />
                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                                <DialogPanel transition className="pointer-events-auto relative w-screen max-w-[17rem] transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700">
                                    <TransitionChild>
                                        <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 duration-500 ease-in-out data-closed:opacity-0 sm:-ml-10 sm:pr-4">
                                            <button
                                                type="button"
                                                onClick={() => setOpen(false)}
                                                className="relative rounded-md text-gray-400 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                                            >
                                                <span className="absolute -inset-2.5" />
                                                <span className="sr-only">Close panel</span>
                                                <XMarkIcon aria-hidden="true" className="size-6 cursor-pointer" />
                                            </button>
                                        </div>
                                    </TransitionChild>
                                    <div className={`relative flex h-full flex-col overflow-y-auto bg-[#0037af] dark:bg-[#2e2929] ${themeState && `dark`} py-6 shadow-xl after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-white/10`}>
                                        <div className="flex items-center justify-between px-4 sm:px-6">
                                            <DialogTitle className="text-base font-semibold text-white">Menu</DialogTitle>
                                            <div className="flex w-fit p-1 dark:bg-[#1f1c1c] bg-slate-200 rounded-sm gap-1">
                                                <div onClick={() => toggleThemeState(true)} className={`dark:bg-[#2e2929] dark:hover:bg-[#352f2f] bg-white hover:bg-slate-300 p-1 rounded-sm cursor-pointer ${!themeState && `!bg-slate-300`}`}>
                                                    <AiFillSun className="text-[#0037af] dark:text-white" />
                                                </div>
                                                <div onClick={() => toggleThemeState(false)} className={`dark:bg-[#2e2929] dark:hover:bg-[#352f2f] bg-white hover:bg-slate-300 p-1 rounded-sm cursor-pointer ${themeState && `!bg-[#484141]`}`}>
                                                    <MdOutlineDarkMode className="text-[#0037af] dark:text-white" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-between px-4 sm:px-6 h-full">
                                            <div className="relative mt-6 flex-1">
                                                <div className="flex flex-col gap-4">
                                                    <a href="#lto-bayombong" className={` ${0 === tabState ? `border-b-2 dark:border-amber-500 border-white` : `border-b-2 border-[#fff0]`} transition-all duration-300 uppercase text-white text-[.8rem] font-semibold pb-[.15rem]`}>LTO Bayombong</a>
                                                    {link.map((value: any, index: any) =>
                                                        <a key={index} href={value.link} className={` ${(index + 1) === tabState ? `border-b-2 dark:border-amber-500 border-white` : `border-b-2 border-[#fff0]`} transition-all duration-300 uppercase text-white text-[.8rem] font-semibold pb-[.15rem]`}>{value.label}</a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </DialogPanel>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </div>
        </div>
    )
}