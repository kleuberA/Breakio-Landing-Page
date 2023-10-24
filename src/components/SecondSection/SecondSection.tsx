import TitleSecondSection from "./TitleSecondSection";
import Image from "next/image";
import ImageSecondSection from "../../../public/imagesecondsection.png";

export default function SecondSection() {
    return (
        <div className="flex flex-col gap-5 items-center justify-center">
            <div className="flex flex-col gap-3">
                <TitleSecondSection />
                <p
                    className="text-[#475569] self-stretch w-64 mx-auto lg:w-[60%] text-sm lg:text-xl font-normal text-center"
                >
                    Et pulvinar nec interdum integer id urna molestie porta nullam.
                    A, donec ornare sed turpis pulvinar purus maecenas quam a.
                    Erat porttitor pharetra sed in mauris elementum sollicitudin.
                </p>
            </div>
            <div className="flex flex-row gap-3">
                <button className="p-2 px-4 lg:w-36 text-white border-2 border-transparent hover:border-backgroundButton hover:bg-transparent hover:text-textColor transition-all font-light rounded-[1.125rem] bg-backgroundButton">Start Now</button>
            </div>
            <div>
                <Image src={ImageSecondSection} alt={"Imagem ilustrativa."} className="lg:w-full w-[90%] mx-auto" />
            </div>
        </div>
    )
}