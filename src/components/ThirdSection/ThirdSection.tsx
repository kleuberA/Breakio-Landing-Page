import CardSection from "./CardSection";
import TitleSecondSection from "./TitleThirdSection";

export default function ThirdSection() {
    return (
        <div className="flex flex-col gap-5 items-center justify-center">
            <div className="flex flex-col gap-3">
                <TitleSecondSection />
                <p
                    className="text-[#475569] self-stretch w-72 mx-auto lg:w-[60%] text-sm lg:text-xl font-normal text-center"
                >
                    Et pulvinar nec interdum integer id urna molestie porta nullam.
                    A, donec ornare sed turpis pulvinar purus maecenas quam a.
                    Erat porttitor pharetra sed in mauris elementum sollicitudin.
                </p>
            </div>
            <div>
                <CardSection />
            </div>
        </div>
    )
}