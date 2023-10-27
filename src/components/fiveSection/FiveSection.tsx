import CardsFiveSection from "./CardsFiveSection";
import TitleFiveSection from "./TitleFiveSection";

export default function FiveSection() {
    return (
        <div>
            <div className="flex flex-col gap-20 justify-center items-center h-full">
                <div className="flex flex-col gap-3 z-20 lg:z-0">
                    <TitleFiveSection />
                    <p
                        className="text-[#475569] self-stretch w-72 mx-auto lg:w-[60%] text-sm lg:text-xl font-normal text-center"
                    >
                        In risus nec molestie at in pulvinar tellus.
                        At integer id condimentum gravida nisi nisl.
                        Sem vitae porttitor arcu congue sem erat et sit faucibus.
                        Sollicitudin elit gravida tellus mattis porttitor.
                    </p>
                </div>
                <div className="flex justify-center items-center z-20 lg:z-0">
                    <CardsFiveSection />
                </div>
            </div>
        </div>
    )
}