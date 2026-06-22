export default function ReviewSection() {
    return (
        <>
            <div className="relative max-w-[1440px] min-w-[300px] mx-auto flex items-center justify-center flex-col bg-bg-secondary overflow-hidden gap-8 md:gap-16 px-4 py-12 sm:px-6 md:px-12 md:pb-20 lg:px-20">

                
                <div className="absolute top-0 right-0 z-0 w-[120px] sm:w-[200px] md:w-[280px]">
                    <img src="/homePage/reviewSection/decoRight.webp" alt="Right vector image" className="w-full h-auto" />
                </div>

                <h1 className="relative z-10 font-bold md:font-extrabold text-[24px] sm:text-[32px] md:text-[44px] lg:text-[56px] text-center bg-[linear-gradient(90deg,#C026D3_0%,#701A75_50%)] bg-clip-text text-transparent">What other users say</h1>

                <div className="relative z-10 flex items-center justify-center sm:px-6 p-8 gap-2 sm:gap-4 md:gap-6">
                    <img src="/homePage/storiesSection/arrow_2.svg" alt="Arrow icon" className="w-12 h-12  mt-[20px] hidden md:flex" />

                    <div className=" min-h-[341px]  rounded-[10px] bg-bg-primary flex items-center flex-col gap-2 px-4 py-6 sm:px-8 md:p-12 shadow-md">

                        <h4 className="text-text-dark font-bold text-[20px] sm:text-2xl md:text-[32px] text-center pb-4 md:pb-6">Placerat feugiat senectus</h4>
                        <p className="w-full sm:w-[460px] md:w-[560px] text-text-dark font-normal text-center text-base sm:text-lg md:text-xl">Ultricies pharetra arcu turpis dui massa interdum lorem. Viverra nunc quisque congue tincidunt potenti. Tellus, enim vel habitasse commodo ultrices aenean ultricies.</p>

                        <div className="flex flex-col items-center justify-center pt-6 sm:pt-8 md:pt-16">
                            <img src="/homePage/reviewSection/userThumb.webp" alt="user image" className="w-14 h-14 sm:w-16 sm:h-16"/>
                             <h5 className="text-lg font-normal text-text-dark pt-2 md:pt-6">Jane Doe</h5>
                             <p className="text-base text-text font-normal">Senior Designer</p>
                        </div>
                    </div>
                    <img src="/homePage/storiesSection/arrow_1.svg" alt="Arrow icon" className="w-12 h-12 mt-[20px] hidden md:flex shrink-0" />

                </div>

                  {/* Bottom left corner vector image */}
                 <div className="absolute bottom-0 left-0 z-0 w-[120px] sm:w-[180px] md:w-auto pointer-events-none">
                    <img src="/homePage/reviewSection/decoLeft.webp" alt=" left vector image" className="w-full h-auto" />
                </div>

            </div>
        </>
    )
}