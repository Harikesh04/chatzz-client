import Wrapper from '../Components/layouts/Wrapper';
import SwiperSection from '../Components/Swiper/SwiperSection';
import SwiperCard from '../Components/front/HomeCard';
import Button from '../Components/ui/Button';
import GoogleOAuth from '../Components/lib/GoogleOAuth';

import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Context } from '../Contexts/userContext';
import { useContext } from 'react';
const data = [
  {
    heading: "Let's Get Started",
    description:
      'Chatting online with this app will goinf to blow your misd, Thanks for visiting',
    src: '/assets/images/overview-chat.jpg',
  },
  {
    heading: "Let's Chat Online",
    description:
      'Chatting online with this app will goinf to blow your misd, Thanks for visiting',
    src: '/assets/images/private-chat.jpg',
  },
  {
    heading: "Let's Get code",
    description:
      'Chatting online with this app will goinf to blow your misd, Thanks for visiting',
    src: '/assets/images/public-chat.jpg',
  },
];

export default function Home() {
  const user = useContext(Context);
  useEffect(() => {
    user.fetchLocalStorage();
  }, []);

  return (
    <Wrapper>
      <div className='bg-gray-100  flex flex-col justify-center items-center px-2 h-full'>
        <SwiperSection data={data} Component={SwiperCard} />
        <div className='flex flex-col justify-center items-center mt-10 space-y-2'>
          <Link to='/dashboard'>
            <Button btnType='primary'>Welcome to the Chat</Button>
          </Link>
          <GoogleOAuth className='' />
        </div>
      </div>
    </Wrapper>
  );
}
