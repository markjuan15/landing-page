import MainLayout from "../../layout";
import AgencyDetails from "../agencyDetails";
import Registration from "../registration";
import License from "../license";
import LTOOffice from "../ltoOffice";
import Modal, { DirectoryModal } from "../../modal";
import About from "../about";
import OurActivities from "../activities";
import ActivityModal from "../activities/components/modal";
import Letas from "../letas";
import OrgChart from "../orgChart";
import Directory from "../directory";

export default function Home() {

    return (
        <>
            <Modal />
            <DirectoryModal />
            <ActivityModal />
            <MainLayout>
                <div className="flex flex-col">
                    <LTOOffice index={0} />
                    <Directory index={1} />
                    <AgencyDetails index={2} />
                    <Registration index={3} />
                    <License index={4} />
                    <Letas index={5} />
                    <OurActivities index={6} />
                    <OrgChart index={7} />
                    <About index={8} />
                </div>
            </MainLayout>
        </>
    )
}