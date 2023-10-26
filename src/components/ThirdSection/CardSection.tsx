import Image from 'next/image';
import Picture from '../../../public/Picture.png';
import Picture2 from '../../../public/Picture2.png';
import Picture3 from '../../../public/Picture3.png';
import Picture4 from '../../../public/Picture4.png';
import AvatarPicture from "../../../public/avatarPicture.png";
import AvatarPicture2 from "../../../public/avatarPicture2.png";
import AvatarPicture3 from "../../../public/avatarPicture3.png";
import AvatarPicture4 from "../../../public/avatarPicture4.png";

export default function CardSection() {
    return (
        <div className='w-full'>
            <div className='flex flex-col lg:flex-row gap-10'>
                <div className='flex flex-col'>
                    <div>
                        <Image className='rounded-t-md' src={Picture} alt=' Imagem Ilustrativa.' />
                    </div>
                    <div className='shadow-md shadow-blue-200 rounded-b-md'>
                        <div className='p-2 flex flex-row gap-2'>
                            <div>
                                <Image src={AvatarPicture} alt='Imagem Ilustrativa.' />
                            </div>
                            <div className='flex flex-col justify-start'>
                                <h1 className='text-[#0F172A] text-base'>Flower Decorations</h1>
                                <span className='text-[#475569] text-sm'>by Melvina Spring</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <Image className='rounded-t-md' src={Picture2} alt=' Imagem Ilustrativa.' />
                    </div>
                    <div className='shadow-md shadow-blue-200 rounded-b-md'>
                        <div className='p-2 flex flex-row gap-2'>
                            <div>
                                <Image src={AvatarPicture2} alt='Imagem Ilustrativa.' />
                            </div>
                            <div className='flex flex-col justify-start'>
                                <h1 className='text-[#0F172A] text-base'>Flower Decorations</h1>
                                <span className='text-[#475569] text-sm'>by Melvina Spring</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <Image className='rounded-t-md' src={Picture3} alt=' Imagem Ilustrativa.' />
                    </div>
                    <div className='shadow-md shadow-blue-200 rounded-b-md'>
                        <div className='p-2 flex flex-row gap-2'>
                            <div>
                                <Image src={AvatarPicture3} alt='Imagem Ilustrativa.' />
                            </div>
                            <div className='flex flex-col justify-start'>
                                <h1 className='text-[#0F172A] text-base'>Splash</h1>
                                <span className='text-[#475569] text-sm'>by Rwanda Melflor</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <Image className='rounded-t-md' src={Picture4} alt=' Imagem Ilustrativa.' />
                    </div>
                    <div className='shadow-md shadow-blue-200 rounded-b-md'>
                        <div className='p-2 flex flex-row gap-2'>
                            <div>
                                <Image src={AvatarPicture4} alt='Imagem Ilustrativa.' />
                            </div>
                            <div className='flex flex-col justify-start'>
                                <h1 className='text-[#0F172A] text-base'>Colorful Face</h1>
                                <span className='text-[#475569] text-sm'>by Melvina Spring</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}