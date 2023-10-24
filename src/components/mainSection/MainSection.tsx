import TitleSection from "./TitleSection";
import Image from "next/image";
import ImageMainSection from "../../../public/mainsectionimage.png";

interface MainSectionProps {

}
export default function MainSection(props: MainSectionProps) {
    return (
        <div className="flex flex-col gap-5 items-center justify-center">
            <div className="flex flex-col gap-3">
                <TitleSection />
                <p className="text-[#475569] self-stretch w-64 mx-auto lg:w-auto text-sm lg:text-xl font-normal text-center">Build your meditation skills with an app that gives you all you need!</p>
            </div>
            <div className="flex flex-row gap-3">
                <input type="text" placeholder="Enter your name" className="outline-none border-2 py-2 px-4 border-[#CBD5E1] rounded-2xl lg:w-72" />
                <button className="p-2 px-4 lg:w-36 text-white border-2 border-transparent hover:border-backgroundButton hover:bg-transparent hover:text-textColor transition-all font-light rounded-[1.125rem] bg-backgroundButton">Start Now</button>
            </div>
            <div>
                <Image src={ImageMainSection} alt={"Imagem ilustrativa."} className="lg:w-auto w-[90%] mx-auto" />
            </div>
        </div>
    )
}