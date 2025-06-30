const SpecialOffer = () => {
    return (
        <div className="bg-[url(/offer-bg.png)] pb-1/2 mb-20 flex flex-col items-center justify-center object-cover object-center w-full h-[180px]">
            <div className="max-w-7xl flex flex-col lg:flex-row gap-14 items-center">
                <div>
                    <p className="text-white text-3xl mb-2"><span className="text-4xl font-bold text-[#ffbe30]">30%  </span>
                    Off in June~July for <span className="font-bold text-3xl text-white">Birthday Events</span></p>
                    <p>Contact us now and we will make your event unique & unforgettable</p>
                </div>
                <button className="uppercase bg-white px-4 py-2 rounded-3xl">make an event now</button>
            </div>
        </div>
    );
};

export default SpecialOffer;