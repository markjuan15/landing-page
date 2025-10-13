import MainLayout from "../../layout";
import AgencyDetails from "../agencyDetails";
import Registration from "../registration";
import License from "../license";
import LTOOffice from "../ltoOffice";
import Modal from "../../modal";
import About from "../about";
import OurActivities from "../activities";
import ActivityModal from "../activities/components/modal";
import Letas from "../letas";
import OrgChart from "../orgChart";

export default function Home() {

    return (
        <>
            <Modal />
            <ActivityModal />
            <MainLayout>
                <div className="flex flex-col">
                    <LTOOffice />
                    <AgencyDetails />
                    <Registration />
                    <License />
                    <Letas />
                    <OurActivities />
                    <OrgChart />
                    <About />
                </div>
            </MainLayout>
        </>
    )
}