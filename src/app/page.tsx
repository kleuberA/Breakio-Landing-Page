import MainSection from '@/components/mainSection/MainSection';
import NavBar from '@/components/NavBar/Navbar';

export default function Home() {
  return (
    <div className='w-full h-auto'>
      <div className='flex flex-col w-full h-auto'>
        <div>
          <NavBar />
        </div>
        <div>
          <MainSection />
        </div>
      </div>
    </div>
  )
}
