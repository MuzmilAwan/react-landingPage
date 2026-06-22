export default function GrowthSection() {
    return (
        <>
            <div className="max-w-[1440px] min-w-[300px] mx-auto flex items-center flex-col overflow-hidden gap-8 md:gap-16 lg:gap-20 px-4 py-12 sm:px-6 md:px-12 md:py-16 lg:px-20 lg:py-20">

                <div className="w-full flex flex-col items-center gap-4 sm:gap-5 md:gap-6">
                    <h1 className="font-bold md:font-extrabold text-[24px] sm:text-[32px] md:text-[44px] lg:text-[56px] text-center bg-[linear-gradient(90deg,#C026D3_0%,#701A75_50%)] bg-clip-text text-transparent">Get better everyday</h1>

                    <p className="w-full max-w-[361px] sm:max-w-[600px] md:max-w-[760px] lg:max-w-[900px] text-text font-normal text-center text-base sm:text-lg md:text-xl">Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin.</p>

                    <button className="w-[144px] h-[48px] sm:w-[170px] sm:h-[56px] md:w-[208px] md:h-[64px] bg-btn text-bg-primary font-medium md:font-bold text-base md:text-xl leading-[24px] tracking-[0.5px] border-[2px] rounded-[19px] md:rounded-[26px] p-2 md:py-4 md:px-5 cursor-pointer"> Start Now </button>
                </div>

                <div className="w-full max-w-[391px] sm:max-w-[500px] md:max-w-full pt-2">
                    <img src="/homePage/growthSection/performance.webp" alt="screens image" className="w-full hidden md:block"/>
                    <img src="/homePage/growthSection/screens.webp" alt="screens image" className="w-full block md:hidden"/>
                </div>

            </div>
        </>
    )
}