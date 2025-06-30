import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import Review from './Review';


const ClientReviews = () => {
    const reviews = [
        {
            id: 1,
            name: "Jenni Hernendis",
            profession: "Graphic Designer",
            description: "“Bring people together, or turn your passion into a business. Harmoni gives you everything you need to host your best event yet. lorem ipsum diamet. Bring people together, or turn your passion into a business. Harmoni gives you everything you need to host your best event yet.”"
        },

        {
            id: 2,
            name: "Adbussalam",
            profession: "Software Developer",
            description: "“Bring people together, or turn your passion into a business. Harmoni gives you everything you need to host your best event yet. lorem ipsum diamet. Bring people together, or turn your passion into a business. Harmoni gives you everything you need to host your best event yet.”",
        },

        {
            id: 3,
            name: "Abdullah",
            profession: "CEO",
            description: "“Bring people together, or turn your passion into a business. Harmoni gives you everything you need to host your best event yet. lorem ipsum diamet. Bring people together, or turn your passion into a business. Harmoni gives you everything you need to host your best event yet.”",
        },

        {
            id: 4,
            name: "Kevin Milford",
            profession: "Co-founder",
            description: "“Bring people together, or turn your passion into a business. Harmoni gives you everything you need to host your best event yet. lorem ipsum diamet. Bring people together, or turn your passion into a business. Harmoni gives you everything you need to host your best event yet.”",
        },
    ];

    return (
        <div className='max-w-[800px] mx-auto mb-20'>
            <Swiper 
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                modules={[Autoplay]} 
                className="mySwiper">
                {
                    reviews.map((review) =><SwiperSlide id={review?.id}>
                        <Review 
                            description={review?.description}
                            name={review?.name}
                            profession={review?.profession}    
                        />
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default ClientReviews;