import { useModalStates } from "../../../global";
import { IndexModal } from "../../../modal";


export default function ActivityModal() {

    const { indexModalData } = useModalStates()

    return (
        <IndexModal>
            <div className="grid grid-cols-4 gap-4 w-full">
                {indexModalData?.map((value: any, index: any) =>
                    <div className="rounded-md overflow-hidden" key={index}>
                        <img src={value.image} alt="" className="" />
                    </div>
                )}
            </div>
        </IndexModal>
    )
}