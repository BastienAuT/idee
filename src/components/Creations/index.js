import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Zoom, Keyboard, EffectCards } from 'swiper';

import "./styles.scss";
import 'swiper/css';

import alacroiséedesmondes from './alacroiséedesmondes.jpg';
const Creations = () => {
  return (
    <Swiper
      modules={[Navigation, Zoom, EffectCards, Keyboard,]}
      effectCards
      navigation
      grabCursor={true}
      effect={"cards"}
      zoom={true}
      keyboard={{
        enabled: true,
      }}
      spaceBetween={10}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <div class="swiper-zoom-container">
      <SwiperSlide><img src={alacroiséedesmondes} alt="heheboi"></img></SwiperSlide>
      </div>
      <SwiperSlide><img src={alacroiséedesmondes} alt="heheboi"></img></SwiperSlide>
      <SwiperSlide><img src={alacroiséedesmondes} alt="heheboi"></img></SwiperSlide>
      <SwiperSlide><img src={alacroiséedesmondes} alt="heheboi"></img></SwiperSlide>
      <SwiperSlide><img src={alacroiséedesmondes} alt="heheboi"></img></SwiperSlide>

      ...
    </Swiper>
  );
};

export default Creations;
