import FiveSection from '@/components/fiveSection/FiveSection';
import Footer from '@/components/footer/Footer';
import FourSection from '@/components/FourSection/FourSection';
import MainSection from '@/components/mainSection/MainSection';
import NavBar from '@/components/NavBar/Navbar';
import SecondSection from '@/components/SecondSection/SecondSection';
import SixSection from '@/components/sixSection/SixSection';
import ThirdSection from '@/components/ThirdSection/ThirdSection';

export default function Home() {
  return (
    <div className='w-full h-auto'>
      <div className='flex flex-col w-full h-auto gap-14'>
        <div>
          <NavBar />
        </div>
        <div>
          <MainSection />
        </div>
        <div>
          <SecondSection />
        </div>
        <div>
          <ThirdSection />
        </div>
        <div>
          <FourSection />
        </div>
        <div>
          <FiveSection />
        </div>
        <div>
          <SixSection />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  )
}
