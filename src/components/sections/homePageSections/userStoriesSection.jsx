
export default function StorySection() {
    return (
        <>
            <div className="md:w-full md:h-[698px] w-full h-[566] flex items-center flex-col overflow-hidden md:gap-20 gap-8 md:p-20 py-12 px-4">

                <div className="w-[900px] h-[158px] flex flex-col items-center gap-6">
                    <h1 className="md:font-extrabold font-bold md:text-[56px] text-[24px] bg-gradient-to-r from-fuchsia-600 to-purple-800 bg-clip-text text-transparent">Stories from our users</h1>
                    <p className="md:w-[900px] md:h-[72px] w-[361px] h-[88px] text-text font-normal text-center md:text-xl text-base">Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin.</p>
                </div>

                <div className="md:w-[1280px] md:h-[300px] w-[320px] h-[300px] flex gap-6">
                    <img src="/homePage/storiesSection/arrow_btn.png" alt="" className="w-[48px] h-[48px] mt-[120px] md:flex hidden"/>

                    <div className="md:w-[266px] md:h-[300px] rounded-[10px] bg-bg-primary shadow-md sm:flex flex-col">
                        <img src="/homePage/storiesSection/story_1.webp" alt="flower frame image" className="w-full h-[220px] rounded-[10px]"/>

                        <div className="w-full h-[80px] flex justify-center p-4 gap-4">
                            <img src="/homePage/storiesSection/story_girl_1.webp" alt="" className="w-12 h-12"/>
                            <div className="w-[176px] h-[42px] flex flex-col justify-center">
                                <h5 className="text-base text-text-dark">Colorful Face</h5>
                                <p className="text-[14px] text-text">by Melvina Spring</p>
                            </div>
                        </div>
                    </div>


                     <div className="md:w-[266px] md:h-[300px] rounded-[10px] bg-bg-primary shadow-md md:flex flex-col ">
                        <img src="/homePage/storiesSection/story_2.webp" alt="flower frame image" className="w-full h-[220px] rounded-[10px]"/>

                        <div className="w-full h-[80px] flex justify-center p-4 gap-4">
                            <img src="/homePage/storiesSection/story_girl_2.webp" alt="" className="w-12 h-12"/>
                            <div className="w-[176px] h-[42px] flex flex-col justify-center">
                                <h5 className="text-base text-text-dark">Colorful Face</h5>
                                <p className="text-[14px] text-text">by Melvina Spring</p>
                            </div>
                        </div>
                    </div>

                     <div className="md:w-[266px] md:h-[300px] rounded-[10px] bg-bg-primary shadow-md md:flex flex-col hidden">
                        <img src="/homePage/storiesSection/story_3.webp" alt="flower frame image" className="w-full h-[220px] rounded-[10px]"/>

                        <div className="w-full h-[80px] flex justify-center p-4 gap-4">
                            <img src="/homePage/storiesSection/story_girl_3.webp" alt="" className="w-12 h-12"/>
                            <div className="w-[176px] h-[42px] flex flex-col justify-center">
                                <h5 className="text-base text-text-dark">Colorful Face</h5>
                                <p className="text-[14px] text-text">by Melvina Spring</p>
                            </div>
                        </div>
                    </div>

                     <div className="md:w-[266px] md:h-[300px] rounded-[10px] bg-bg-primary shadow-md md:flex flex-col hidden ">
                        <img src="/homePage/storiesSection/story_4.webp" alt="flower frame image" className="w-full h-[220px] rounded-[10px]"/>

                        <div className="w-full h-[80px] flex justify-center p-4 gap-4">
                            <img src="/homePage/storiesSection/story_girl_4.webp" alt="" className="w-12 h-12"/>
                            <div className="w-[176px] h-[42px] flex flex-col justify-center">
                                <h5 className="text-base text-text-dark">Colorful Face</h5>
                                <p className="text-[14px] text-text">by Melvina Spring</p>
                            </div>
                        </div>
                    </div>


                    <img src="/homePage/storiesSection/arrow_btn_1.png" alt="" className="w-[48px] h-[48px] mt-[120px] md:flex hidden"/>
                </div>

            </div>
        </>
    )
}