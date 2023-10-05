import { Button } from '@nextui-org/button';
import DisplayMap from '../components/Map';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="container mx-auto flex">
      <div className="flex flex-col items-center justify-center w-full">
        List Here
        <Link to={'/'}>
          <Button className="bg-[#F9A51A] py-3 px-4 mt-6 rounded-lg text-black">
            Home
          </Button>
        </Link>
      </div>

      <div className="flex items-center justify-end  text-center h-screen m-auto text-white  w-full ">
        <DisplayMap />
      </div>
    </div>
  );
}
