// import Swiper core and required modules
import { Navigation, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import Testimonial1Img from '../images/Testimonial1.jpg';
import Testimonial2Img from '../images/Testimonial2.jpg';
import Testimonial3Img from '../images/Testimonial3.jpg';
import { generarId } from '../../helpers';

//SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const testimonialData = [
  {
    id: generarId(),
    img: Testimonial1Img,
    title: 'Nik Holly',
    client: 'Client',
    descr:
      ' This company does a very good services, offers the best deals and does a good job, I recomend i',
  },

  {
    id: generarId(),
    img: Testimonial2Img,
    title: 'Sara Mill',
    client: 'Client',
    descr:
      'This company does a very good services, offers the best deals and does a good job, I recomend it',
  },
  {
    id: generarId(),
    img: Testimonial3Img,
    title: 'Clay Mitchell',
    client: 'Client',
    descr:
      ' This company does a very good services, offers the best deals and does a good job, I recomend it',
  },
];

const Testimonial2 = () => {
  return (
    <Swiper
      className="swiper-wrapper"
      modules={[Navigation, A11y]}
      spaceBetween={16}
      breakpoints={{
        640: {
          width: 640,
          slidesPerView: 1,
        },
        768: {
          width: 768,
          slidesPerView: 3,
        },
      }}
      loop={true}
      grabCursor={true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      pagination={({ clickable: true }, { el: '.swiper-pagination' })}
    >
      {testimonialData.map(({ id, img, title, client, descr }) => (
        <SwiperSlide
          key={id}
          className="testimonial__content swiper-slide cursor"
        >
          <img src={img} alt="" className="testimonial__img" />
          <h3 className="testimonial__title">{title}</h3>
          <span className="testimonial__client">{client}</span>
          <p className="testimonial__description">{descr}</p>
        </SwiperSlide>
      ))}
      <div className="swiper-pagination">
        <div className="swiper-pagination-bullet-active">
          <div className="swiper-pagination-bullet"></div>
        </div>
      </div>
    </Swiper>
  );
};

export default Testimonial2;
