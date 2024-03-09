'use server'
import NavBar from "../components/NavBar";
import Image from 'next/image';
import bg from '@/public/bg.svg'; // Import the image
import Formulaire from "../components/Formulaire";

export default  async function Home() {
 
  return (
    <main className="h-screen overflow-y-hidden  ">

      <NavBar />

      <div className="inscription flex flex-row  items-center h-[87.1vh]  ">
        <div className="">
         <Image src={bg} width={1100} height={769} alt="settings" /> {/* Use the imported image */}
        </div>
        <Formulaire/>
      </div>


    </main>
  );
}
