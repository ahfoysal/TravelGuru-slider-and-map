import Banner from '@/components/Banner';
import items from '@/components/Items';
import { Button } from '@nextui-org/button';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { useState } from 'react';

export default function Home() {
  const [activeData, setActiveData] = useState(items[0]);

  const containerStyle = {
    backgroundImage: `url(${activeData.image})`,
    backgroundSize: 'cover  ',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className=" overflow-hidden text-black " style={containerStyle}>
      <div className="flex overflow-hidden backdrop-brightness-50">
        <div className="w-[40%]  flex items-center">
          <div className="w-[450px] mx-auto overflow-hidden">
            <h1 className="text-white text-5xl mb-2">{activeData.name}</h1>
            <h1 className="text-white text-base font-normal">
              {activeData.description}
            </h1>
            <Button className="bg-[#F9A51A] py-3 px-4 mt-6 rounded-lg  font-medium  text-black">
              Booking
              <ArrowRightIcon className="ml-2 " />
            </Button>
          </div>
        </div>
        <div className="w-[60%]">
          <Banner setActiveData={setActiveData} />
        </div>
      </div>
    </div>
  );
}
