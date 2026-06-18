
export default function GrowthSection() {
    return (
        <>
            <div className="md:w-full md:h-[1316px] w-full h-[977px] flex items-center flex-col overflow-hidden md:gap-20 gap-8 md:p-20 py-12 px-4">

                <div className="md:w-[900px] md:h-[246px] w-full h-[210px] flex flex-col items-center gap-6">
                    <h1 className="md:font-extrabold font-bold md:text-[56px] text-[24px] bg-gradient-to-r from-fuchsia-600 to-purple-800 bg-clip-text text-transparent">Get better everyday</h1>
                    <p className="md:w-[900px] md:h-[72px] w-[361px] h-[88px] text-text font-normal text-center md:text-xl text-base">Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin.</p>

                    <button className="md:w-[208px] md:h-[64px] w-[144px] h-[48px] bg-btn bg-btn text-bg-primary font-medium text-base leading-[24px] tracking-[0.5px] border-[2px] md:rounded-[26px] rounded-[19px] md:py-5 md:px-6 p-3"> Button Text </button>
                </div>

                <div className="md:w-[1280px] md:h-[830px] w-[391px] h-[647px] pt-2 ">
                    <img src="/homePage/growthSection/performance.webp" alt="screen images" className="md:flex hidden"/>
                    <img src="/homePage/growthSection/screens.webp" alt="screen images" className="md:hidden flex"/>

                </div>

            </div>
        </>
    )
}