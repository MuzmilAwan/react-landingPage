
export default function HeroSection() {
    return (
        <>
        <div className="md:w-full md:h-[908px]  w-full h-[525px] flex items-center overflow-hidden flex-col md:gap-20 gap-8 md:pt-[56px] md:pb-20 md:px-20 py-12 px-4">

            <div className="md:w-[1280px] md:h-[227px] w-full h-[175px] flex flex-col items-center gap-6">
                <h1 className=" md:font-extrabold md:text-7xl font-bold text-[32px] bg-gradient-to-r from-fuchsia-600 to-purple-800 bg-clip-text text-transparent">It’s time to take a break</h1>
               
                <p className="text-text font-normal text-center md:text-xl text-base">Build your meditation skills with an app that gives you all you need!</p>
                <div className="md:w-[700px] md:h-[64px] w-[391px] h-[48px] flex items-center justify-center md:gap-4 gap-2">
                    
                    <input type="text" placeholder="Enter your name" className="md:w-[476px] md:h-[64px] w-[221px] h-[48px] py-[13px] px-6 gap-2 border-[1px] border-border md:rounded-[26px] rounded-[19px] " />
                    
                    <button className=" md:w-[208px] md:h-[64px] w-[132px] h-[48px] bg-btn text-bg-primary font-medium text-base leading-[24px] tracking-[0.5px] border-[2px] md:rounded-[26px] rounded-[19px] md:py-5 md:px-6 p-3"> Start Now </button>
                </div>
            </div>

            <div className="md:w-[1280px] md:h-[465px] w-[391px] h-[265px]">
            <img  src="/homePage/heroSection/heroImg.webp" alt="Hero imgage" className="md:flex hidden"/> 
            <img src="/homePage/heroSection/heroImg2.webp" alt="Hero imgage" className="md:hidden flex"/> 
            </div>

        </div>
        </>
    )
}