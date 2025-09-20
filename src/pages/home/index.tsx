import MainLayout from "../../layout";
import AgencyDetails from "../agencyDetails";
import Registration from "../registration";
import License from "../license";
import LTOOffice from "../ltoOffice";

export default function Home() {

    return (
        <MainLayout>
            <div className="flex flex-col">
                <LTOOffice />
                <AgencyDetails />
                <Registration />
                <License />
            </div>
        </MainLayout>
    )
}