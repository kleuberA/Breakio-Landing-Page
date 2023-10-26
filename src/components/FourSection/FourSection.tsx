import CardSection from "./CardSection";
import TitleFourSection from "./TitleFourSection";

interface FourSectionProps {

}
export default function FourSection(props: FourSectionProps) {
    return (
        <div className="bg-[#FDF4FF] h-screen w-full overflow-hidden">
            <div className="relative w-full">
                <div className="absolute right-0 z-10 w-20 h-10 lg:w-auto lg:h-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="169" height="207" viewBox="0 0 169 207" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M215.648 119.906C246.156 89.4046 287.696 34.1187 296.502 6.50277C309.911 -35.5496 292.609 -62.9207 256.769 -83.0353C189.52 -120.778 81.567 -88.0721 43.4922 -49.9973C7.9288 -14.4338 -2.40744 11.5348 6.50849 47.0478C15.4244 82.5608 21.2852 107.747 7.69369 141.756C-5.69617 175.261 1.03888 194.764 21.3604 201.844C43.3395 209.501 73.6693 208.186 110.021 192.983C147.108 177.473 185.147 150.399 215.648 119.906Z" stroke="#C026D3" />
                    </svg>
                </div>
                <div className="absolute right-0 z-0 w-20 h-10 lg:w-auto lg:h-auto" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="169" height="250" viewBox="0 0 169 250" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M215.648 162.906C246.156 132.405 287.696 77.1187 296.502 49.5028C309.911 7.45042 292.609 -19.9207 256.769 -40.0354C189.52 -77.7777 81.5672 -45.0721 43.4923 -6.99729C7.92891 28.5662 -2.40732 54.5348 6.50862 90.0478C15.4245 125.561 21.2853 150.747 7.6938 184.756C-5.69605 218.261 1.039 237.764 21.3605 244.844C43.3396 252.501 73.6694 251.186 110.021 235.983C147.108 220.473 185.147 193.399 215.648 162.906Z" fill="#FAE8FF" />
                    </svg>
                </div>
                <div className="absolute top-[75vh] left-0 w-20 h-10 lg:w-auto lg:h-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="206" height="191" viewBox="0 0 206 191" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M-37.6708 57.3699C-1.44421 84.8107 5.0168 9.06708 41.3375 28.7148C143.128 83.7786 119.667 -22.2146 176.287 11.2689C264.696 63.5516 128.299 275.619 96.3724 284.174C66.5514 292.164 45.1998 286.034 16.6254 260.006C-11.9489 233.979 -32.2265 215.874 -60.191 207.887C-87.7407 200.019 -124.71 184.863 -140.46 126.082C-146.077 105.119 -159.202 18.2001 -132.933 2.42903C-112.067 -10.0984 -60.7864 39.8604 -37.6708 57.3699Z" fill="#FAE8FF" />
                    </svg>

                </div>
                <div className="absolute top-[80vh] left-0 z-0 w-20 h-10 lg:w-auto lg:h-auto" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="222" height="164" viewBox="0 0 222 164" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M-22.6708 57.4409C13.5558 84.8817 20.0168 9.13813 56.3375 28.7858C158.128 83.8496 134.667 -22.1436 191.287 11.3399C279.696 63.6227 143.299 275.69 111.372 284.245C81.5514 292.235 60.1998 286.105 31.6254 260.077C3.05111 234.05 -17.2265 215.945 -45.191 207.958C-72.7407 200.09 -109.71 184.934 -125.46 126.153C-131.077 105.19 -144.202 18.2711 -117.933 2.50007C-97.0671 -10.0273 -45.7864 39.9314 -22.6708 57.4409Z" stroke="#C026D3" />
                    </svg>
                </div>
            </div>
            <div className="flex flex-col gap-20 justify-center items-center h-full">
                <div className="flex flex-col gap-3 z-20 lg:z-0">
                    <TitleFourSection />
                </div>
                <div className="flex justify-center items-center z-20 lg:z-0">
                    <CardSection />
                </div>
            </div>
        </div>
    )
}