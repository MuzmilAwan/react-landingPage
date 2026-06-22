import { useState, useRef } from "react";

export default function StorySection() {
    const [activeSlide, setActiveSlide] = useState(0);
    const trackRef = useRef(null);

    const handleScroll = () => {
        const track = trackRef.current;
        if (!track) return;
        const index = Math.round(track.scrollLeft / track.clientWidth);
        setActiveSlide(index);
    };

    const goToSlide = (index) => {
        const track = trackRef.current;
        if (!track) return;
        track.scrollTo({ left: index * track.clientWidth, behavior: "smooth" });
        setActiveSlide(index);
    };

    return (
        <>

            <div className="max-w-[1440px] min-w-[300px] mx-auto flex items-center flex-col overflow-hidden gap-8 md:gap-16 lg:gap-20 px-4 py-12 sm:px-6 md:px-12 md:py-16 lg:px-20 lg:py-20">

                <div className="w-full flex flex-col items-center gap-4 sm:gap-5 md:gap-6">
                    <h1 className="font-bold md:font-extrabold text-[24px] sm:text-[32px] md:text-[44px] lg:text-[56px] text-center bg-[linear-gradient(90deg,#C026D3_0%,#701A75_50%)] bg-clip-text text-transparent">Stories from our users</h1>

                    <p className="w-full max-w-[361px] sm:max-w-[600px] md:max-w-[760px] lg:max-w-[900px] text-text font-normal text-center text-base sm:text-lg md:text-xl">Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin.</p>

                </div>

                <div className="w-full max-w-[391px] sm:max-w-[500px] md:max-w-full pt-2">

                    <div
                        ref={trackRef}
                        onScroll={handleScroll}
                        className="w-full flex gap-4 sm:gap-6 2xl:overflow-hidden overflow-x-auto snap-x snap-mandatory sm:snap-none scroll-smooth"
                    >
                        <img src="/homePage/storiesSection/arrow_2.svg" alt="Arrow icon" className="w-[48px] h-[48px] mt-[120px] hidden md:flex shrink-0" />


                        <div className="w-full  snap-center sm:w-[266px] sm:shrink sm:h-[300px]  bg-bg-primary shadow-md flex flex-col rounded-[10px] mb-4">

                            <div className="relative w-full">
                                <button className="absolute w-[78px] h-[24px] px-[4px]  top-4 left-4 bg-[#DBEAFE] text-[#1E40AF] text-center text-sm font-normal  rounded-[4px]">Promoted</button>
                                <img src="/homePage/storiesSection/story_1.webp" alt="flower frame image" className="w-full h-[220px] rounded-t-[10px]" />
                            </div>

                            <div className="w-full h-[80px] flex justify-start p-4 gap-4">

                                <img src="/homePage/storiesSection/story_girl_1.webp" alt="girl image" className="w-12 h-12" />


                                <div className="w-[186px] h-[42px] flex flex-col justify-center">
                                    <h5 className="text-base text-text-dark">Flower Decorations</h5>
                                    <p className="text-[14px] text-text">by Melvina Spring</p>
                                </div>
                            </div>
                        </div>


                        <div className="w-full  snap-center sm:w-[266px] sm:shrink sm:h-[300px] rounded-[10px] bg-bg-primary shadow-md flex flex-col mb-4">
                            <img src="/homePage/storiesSection/story_2.webp" alt="flower frame 2 image" className="w-full h-[220px] rounded-t-[10px]" />

                            <div className="w-full h-[80px] flex justify-start p-4 gap-4">
                                <img src="/homePage/storiesSection/story_girl_2.webp" alt="girl image" className="w-12 h-12" />
                                <div className="w-[186px] h-[42px] flex flex-col justify-center">
                                    <h5 className="text-base text-text-dark">Flower Decorations</h5>
                                    <p className="text-[14px] text-text">by Melvina Spring</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full  snap-center sm:w-[266px] sm:shrink sm:h-[300px] rounded-[10px] bg-bg-primary shadow-md flex flex-col mb-4">
                            <img src="/homePage/storiesSection/story_3.webp" alt="splash frame image" className="w-full h-[220px] rounded-t-[10px]" />

                            <div className="w-full h-[80px] flex justify-start p-4 gap-4">
                                <img src="/homePage/storiesSection/story_girl_3.webp" alt="girl image" className="w-12 h-12" />
                                <div className="w-[186px] h-[42px] flex flex-col justify-center">
                                    <h5 className="text-base text-text-dark">Splash</h5>
                                    <p className="text-[14px] text-text">by Rwanda Melflor</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full  snap-center sm:w-[266px] sm:shrink sm:h-[300px] rounded-[10px] bg-bg-primary shadow-md flex flex-col mb-4">
                            <img src="/homePage/storiesSection/story_4.webp" alt="colorful face frame image" className="w-full h-[220px] rounded-t-[10px]" />

                            <div className="w-full h-[80px] flex justify-start p-4 gap-4">
                                <img src="/homePage/storiesSection/story_girl_4.webp" alt="girl image" className="w-12 h-12" />
                                <div className="w-[186px] h-[42px] flex flex-col justify-center">
                                    <h5 className="text-base text-text-dark">Colorful Face</h5>
                                    <p className="text-[14px] text-text">by Melvina Spring</p>
                                </div>
                            </div>
                        </div>

                        <img src="/homePage/storiesSection/arrow_1.svg" alt="Arrow icon" className="w-[48px] h-[48px] mt-[120px] hidden md:flex shrink-0" />
                    </div>


                    <div className="flex sm:hidden items-center justify-center gap-2 pt-5">
                        {[0, 1, 2, 3].map((index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                aria-label={`Go to story ${index + 1}`}
                                className={`h-2 rounded-full transition-all duration-300 ${activeSlide === index ? "w-6 bg-fuchsia-600" : "w-2 bg-border"}`}
                            />
                        ))}
                    </div>

                </div>

            </div>
        </>
    )
}