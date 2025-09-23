import MainLayout from "../../layout";
import AgencyDetails from "../agencyDetails";
import Registration from "../registration";
import License from "../license";
import LTOOffice from "../ltoOffice";
import Modal from "../../modal";
import { useModalStates } from "../../global";
import About from "../about";

export default function Home() {

    const { modalState } = useModalStates()

    return (
        <>
            <Modal state={modalState} />
            <MainLayout>
                <div className="flex flex-col">
                    <LTOOffice />
                    <AgencyDetails />
                    <Registration />
                    <License />
                    <About />
                </div>
            </MainLayout>
        </>
    )
}