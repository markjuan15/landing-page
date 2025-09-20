import { useTabStates } from "../../global"

export default function Navbar() {

    const { tabState, toggleTabState } = useTabStates()

    const link = [
        { label: "Agency Details", link: "#agency-details" },
        { label: "Registration", link: "#registration" },
        { label: "License", link: "#license" },
        { label: "LETAS", link: "#4" },
        { label: "Our Activities", link: "#5" },
        { label: "About Us", link: "#6" },
    ]

    function goToPage(index: any) {
        toggleTabState(index)
        console.log(index)
    }

    return (
        <div className="bg-[#0037af] w-screen h-[3rem] px-2">
            {/* bg-[#0037af] */}
            <div className="flex items-center h-full w-full justify-between px-[2rem]">
                <div className="flex items-center gap-2 cursor-pointer">
                    <a href="#lto-bayombong" onClick={() => goToPage(0)} className={` ${0 === tabState ? `border-b-2 border-amber-500` : `border-b-2 border-[#fff0]`} transition-all duration-300 uppercase text-white text-[.8rem] font-semibold pb-[.15rem]`}>LTO Bayombong</a>
                </div>
                <div className="">
                    <div className="flex gap-4">
                        {link.map((value: any, index: any) =>
                            <a key={index} href={value.link} onClick={() => goToPage(index + 1)} className={` ${(index + 1) === tabState ? `border-b-2 border-amber-500` : `border-b-2 border-[#fff0]`} transition-all duration-300 uppercase text-white text-[.8rem] font-semibold pb-[.15rem]`}>{value.label}</a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}