export default function HeroSection() {
    return (
        <>
        <div className="max-w-[1440px] min-w-[300px] mx-auto flex items-center overflow-hidden flex-col gap-8 md:gap-16 lg:gap-20 px-4 py-12 sm:px-6 md:px-12 md:pt-12 md:pb-16 lg:px-20 lg:pt-14 lg:pb-20">

            <div className="w-full flex flex-col items-center gap-4 sm:gap-5 md:gap-6">
                <h1 className="font-bold md:font-extrabold text-[32px] sm:text-5xl md:text-6xl lg:text-7xl text-center bg-[linear-gradient(90deg,#C026D3_0%,#701A75_50%)] bg-clip-text text-transparent">It’s time to take a break</h1>

                <p className="text-text font-normal text-center text-base md:text-xl">Build your meditation skills with an app that gives you all you need!</p>

                <div className="w-full max-w-[391px] sm:max-w-[550px] md:max-w-[700px] flex items-center justify-center gap-2 md:gap-4">

                    <input type="text" placeholder="Enter your name" className="flex-1 min-w-0 h-[48px] md:h-[64px] py-[13px] px-4 sm:px-6 border-[1px] border-border rounded-[19px] md:rounded-[26px] select-none cursor-not-allowed pointer-events-none " readOnly/>

                    <button className="shrink-0 w-[110px] sm:w-[132px] md:w-[208px] h-[48px] md:h-[64px] bg-btn text-bg-primary font-medium md:font-bold text-sm sm:text-base md:text-xl leading-[24px] tracking-[0.5px] border-[2px] rounded-[19px] md:rounded-[26px] p-2 md:py-4 md:px-5 cursor-pointer"> Start Now </button>
                </div>
            </div>

            <div className="w-full max-w-[391px] sm:max-w-[500px] md:max-w-full">
                <img src="/homePage/heroSection/heroImg.webp" alt="Hero image" className="w-full hidden md:block"/>
                <img src="/homePage/heroSection/heroImg2.webp" alt="Hero image" className="w-full block md:hidden"/>
            </div>

        </div>
        </>
    )
}