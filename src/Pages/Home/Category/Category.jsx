import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css';
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <div>
                <SectionTitle
                    subHeading={'From 11:00am to 10:00pm'}
                    heading={'Order Online'}>
                </SectionTitle>
            </div>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper md:mt-12"
            >
                <SwiperSlide>
                    <img src={img1} alt="" />
                    <p className='text-3xl uppercase -mt-16 text-center text-white'>Salad</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />
                    <p className='text-3xl uppercase -mt-16 text-center text-white'>Pizza</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />
                    <p className='text-3xl uppercase -mt-16 text-center text-white'>Soup</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="" />
                    <p className='text-3xl uppercase -mt-16 text-center text-white'>Dessert</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt="" />
                    <p className='text-3xl uppercase -mt-16 text-center text-white'>Salad</p>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;