import { useState } from "react"

export default function Navbar() {

    const link = [
        { label: "Registration", link: "#2" },
        { label: "LETAS", link: "#3" },
        { label: "Our Activities", link: "#4" },
        { label: "About Us", link: "#5" },
    ]

    const [tabState, setTabState] = useState(0)

    function goToPage(index: any) {
        setTabState(index)
    }

    return (
        <div className="bg-[#0037af] w-screen h-[3rem] px-2">
            {/* bg-[#0037af] */}
            <div className="flex items-center h-full w-full justify-between px-[5rem]">
                <div className="flex items-center gap-2 cursor-pointer">
                    <span className="font-semibold text-white uppercase">LTO Bayombong</span>
                </div>
                <div className="">
                    <div className="flex gap-2">
                        {link.map((value: any, index: any) =>
                            <a key={index} href={value.link} onClick={() => goToPage(index)} className={` ${index === tabState ? `border-b-2 border-amber-500` : `border-b-2 border-[#fff0]`} transition-all duration-300 uppercase text-white text-[.8rem] font-semibold pb-[.15rem]`}>{value.label}</a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}