import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import TitleSixSection from "./TitleSixSection";

interface SixSectionProps {

}
export default function SixSection(props: SixSectionProps) {
    return (
        <div className="w-full h-screen bg-[#F1F5F9] flex justify-center items-center">
            <div className="w-[80%] h-full mx-auto flex flex-col gap-5 justify-center">
                <div className="flex flex-col gap-3 z-20 lg:z-0">
                    <TitleSixSection />
                    <p
                        className="text-[#475569] self-stretch w-80 mx-auto lg:w-[75%] text-sm lg:text-xl font-normal text-center"
                    >
                        Et pulvinar nec interdum integer id urna molestie porta nullam.
                        A, donec ornare sed turpis pulvinar purus maecenas quam a.
                        Erat porttitor pharetra sed in mauris elementum sollicitudin.
                    </p>
                </div>
                <div>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem className="bg-white p-2 rounded-md shadow-md shadow-black/10 mb-3" value="item-1">
                            <AccordionTrigger className="text-xs lg:text-base">Enim sodales consequat adipiscing facilisis massa venenatis, non lorem lobortis?</AccordionTrigger>
                            <AccordionContent className="text-xs lg:text-base">
                                Et pulvinar nec interdum integer id urna molestie porta nullam.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem className="bg-white p-2 rounded-md shadow-md shadow-black/10 mb-3" value="item-2">
                            <AccordionTrigger className="text-xs lg:text-base">Venenatis nulla sagittis nunc, lobortis nec sollicitudin neque, dolor?</AccordionTrigger>
                            <AccordionContent className="text-xs lg:text-base">
                                A, donec ornare sed turpis pulvinar purus maecenas quam a.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem className="bg-white p-2 rounded-md shadow-md shadow-black/10 mb-3" value="item-3">
                            <AccordionTrigger className="text-xs lg:text-base">Varius ultricies molestie tellus fermentum, viverra ipsum scelerisque etiam lorem?</AccordionTrigger>
                            <AccordionContent className="text-xs lg:text-base">
                                Et pulvinar nec interdum integer id urna molestie porta nullam.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem className="bg-white p-2 rounded-md shadow-md shadow-black/10 mb-3" value="item-4">
                            <AccordionTrigger className="text-xs lg:text-base">Nulla etiam vitae, at sagittis, nibh ultrices mattis feugiat faucibus?</AccordionTrigger>
                            <AccordionContent className="text-xs lg:text-base">
                                A, donec ornare sed turpis pulvinar purus maecenas quam a.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem className="bg-white p-2 rounded-md shadow-md shadow-black/10" value="item-5">
                            <AccordionTrigger className="text-xs lg:text-base">Sagittis consectetur gravida nec turpis eros, id sit et, dictum?</AccordionTrigger>
                            <AccordionContent className="text-xs lg:text-base">
                                Erat porttitor pharetra sed in mauris elementum sollicitudin.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}