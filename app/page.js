import Image from "next/image";

import Header from '../components/header/Header'
import TextFeild from "@/components/textFeild/TextFeild";
import WorkSpace from "@/components/workSpace/WorkSpace";
export default function Home() {
  return (
    <div className='mb-5 flex flex-col'>
      <Header />
      <div className='spaceSide'>
      <WorkSpace>

        
        <TextFeild/>


      </WorkSpace>

      </div>
    </div>
  );
}
