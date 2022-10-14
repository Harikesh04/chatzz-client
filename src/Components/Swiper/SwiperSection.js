// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination, Autoplay]);
const SwiperSection = ({ data, Component }) => {
  return (
    <Swiper spaceBetween={50} slidesPerView={1} pagination loop autoplay>
      {data.map((cardInformation, index) => {
        return (
          <SwiperSlide key={index}>
            <Component data={cardInformation} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SwiperSection;
