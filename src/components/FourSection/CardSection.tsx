import Image from "next/image"
import AvatarSecton from "../../../public/avatarPicture.png"
export default function CardSection() {
    return (
        <div className="w-[90%] lg:w-[50%] lg:h-80 bg-white shadow-md shadow-black/25 rounded-md p-5">
            <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-3 justify-center items-center">
                    <h1 className="text-center text-[#0F172A] text-lg lg:text-2xl font-bold">Placerat feugiat senectus</h1>
                    <p className="text-[#0F172A] text-base text-center w-[95%] lg:w-[75%]">Ultricies pharetra arcu turpis dui massa interdum lorem.
                        Viverra nunc quisque congue tincidunt potenti. Tellus,
                        enim vel habitasse commodo ultrices aenean ultricies.
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div>
                        <Image src={AvatarSecton} alt="Imagem Ilustrativa." />
                    </div>
                    <div>
                        <h1 className="text-[#0F172A] text-center">Jane Doe</h1>
                        <span className="text-[#475569] text-sm">Senior Developer</span>
                    </div>
                </div>
            </div>
        </div>
    )
}