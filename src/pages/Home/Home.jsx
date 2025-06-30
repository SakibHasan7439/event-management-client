import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import SliderOption from '../../Components/HomeComponents/SliderOption';
import OurMission from '../../Components/HomeComponents/OurMission';
import UpComingEvents from '../../Components/HomeComponents/UpCommingEvent';
import SpecialOffer from '../../Components/HomeComponents/SpecialOffer';
import ClientReviews from '../../Components/HomeComponents/ClientReviews';
import FAQBlogSection from '../../Components/HomeComponents/FAQBlogSection';

const Home = () => {
    return (
        <div>
            <div>
                <Swiper>
                    <SwiperSlide>
                        <SliderOption image={"/eventImg.webp"} date={"10-12-2024"} location={"America"} city={"Los-angels"}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderOption image={"/swiperImg2.jpg"} date={"10-12-2024"} location={"America"} city={"Los-angels"}/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <SliderOption image={"/swiperImg3.jpg"} date={"8-3-2025"} location={"Bangladesh"} city={"Dhaka"}/>
                    </SwiperSlide>
                </Swiper>
            </div>
            <OurMission />
            <UpComingEvents />
            <SpecialOffer />
            <ClientReviews />
            <FAQBlogSection />
        </div>

        
    );
};

export default Home;