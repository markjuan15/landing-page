import Navbar from "./navbar";

interface Iprops {
    children: any
}

export default function MainLayout({ children }: Iprops) {

    return (
        <div className="flex flex-col w-screen h-screen relative select-none overflow-hidden">
            <Navbar />
            <div className="flex w-full h-full overflow-hidden">
                <div className="w-full relative">
                    <div className="bg-white h-full overflow-auto no-scrollbar scroll-smooth snap-y snap-mandatory snap-always">
                        {children}
                    </div>
                </div>
            </div>
        </div >
    )
}