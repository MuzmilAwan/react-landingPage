
export default function FavouriteTools() {
    return (
        <>
            <div className="max-w-[1440px] min-w-[300px] mx-auto flex items-center flex-col overflow-hidden gap-8 md:gap-16 lg:gap-20 px-4 py-12 sm:px-6 md:px-12 md:py-16 lg:px-20 lg:py-20">

                <div className="w-full flex flex-col items-center gap-4 sm:gap-5 md:gap-6">
                    <h1 className="font-bold md:font-extrabold text-[24px] sm:text-[32px] md:text-[44px] lg:text-[56px] text-center bg-[linear-gradient(90deg,#C026D3_0%,#701A75_50%)] bg-clip-text text-transparent">Your favourite tools</h1>

                    <p className="w-full max-w-[361px] sm:max-w-[600px] md:max-w-[760px] lg:max-w-[900px] text-text font-normal text-center text-base sm:text-lg md:text-xl">In risus nec molestie at in pulvinar tellus. At integer id condimentum gravida nisi nisl. Sem vitae porttitor arcu congue sem erat et sit faucibus. Sollicitudin elit gravida tellus mattis porttitor.</p>

                </div>

                <div className="w-full max-w-[391px] sm:max-w-[500px] md:max-w-full pt-2">
                    {/* Icons box Section */}
                    <div className="w-full grid md:grid-cols-3 grid-row-1 gap-4">

                        <div className= "w-full flex flex-col md:items-start items-center justify-center gap-4">
                            <img src="/homePage/favouriteToolsSection/icon.svg" alt="mail icon image" className="w-16 h-16" />
                            <h5 className="text-[24px] text-text-dark font-bold">Sapien amet est</h5>
                            <p className="text-[18px] text-text md:text-start text-center">Viverra netus odio nunc ac nibh lorem iaculis. Orci facilisis habitasse cursus tempor et.</p>
                        </div>

                        <div className="w-full  flex flex-col md:items-start items-center justify-center gap-4">
                            <img src="/homePage/favouriteToolsSection/icon-2.svg" alt="map icon image" className="w-16 h-16" />
                            <h5 className="text-[24px] text-text-dark font-bold">Tortor ornare</h5>
                            <p className="text-[18px] text-text  md:text-start text-center">Nulla etiam mattis amet suspendisse lacus nulla sed urna ultricies. </p>
                        </div>

                        <div className="w-full  flex flex-col md:items-start items-center justify-center gap-4">
                            <img src="/homePage/favouriteToolsSection/icon-3.svg" alt="tools icon" className="w-16 h-16" />
                            <h5 className="text-[24px] text-text-dark font-bold">Vel lacus</h5>
                            <p className="text-[18px] text-text  md:text-start text-center">Porttitor quis lectus varius quis dolor morbi massa pellentesque.</p>
                        </div>
                        <div className= "w-full flex flex-col md:items-start items-center justify-center gap-4">
                            <img src="/homePage/favouriteToolsSection/icon-4.svg" alt="tools icon" className="w-16 h-16" />
                            <h5 className="text-[24px] text-text-dark font-bold">Hendrerit blandit</h5>
                            <p className="text-[18px] text-text  md:text-start text-center">A aliquam pharetra in nec vitae ultrices commodo placerat eget.</p>
                        </div>

                        <div className="w-full  flex flex-col md:items-start items-center justify-center gap-4">
                            <img src="/homePage/favouriteToolsSection/icon-5.svg" alt="tools icon" className="w-16 h-16" />
                            <h5 className="text-[24px] text-text-dark font-bold">Enim risus turpis</h5>
                            <p className="text-[18px] text-text  md:text-start text-center">Tristique dui vestibulum senectus ac duis etiam adipiscing sapien.</p>
                        </div>

                        <div className="w-full  flex flex-col md:items-start items-center justify-center gap-4">
                            <img src="/homePage/favouriteToolsSection/icon-6.svg" alt="tools icon" className="w-16 h-16" />
                            <h5 className="text-[24px] text-text-dark font-bold">Aliquam lorem et</h5>
                            <p className="text-[18px] text-text  md:text-start text-center">Viverra netus odio nunc ac nibh lorem iaculis. Orci facilisis habitasse cursus tempor et.</p>
                        </div>
                        <div className= "w-full flex flex-col md:items-start items-center justify-center gap-4">
                            <img src="/homePage/favouriteToolsSection/icon-7.svg" alt="tools icon" className="w-16 h-16" />
                            <h5 className="text-[24px] text-text-dark font-bold">Sed aliquam lectus</h5>
                            <p className="text-[18px] text-text  md:text-start text-center">Rhoncus ut montes quis eget vulputate. Id hac consectetur ornare neque.</p>
                        </div>

                        <div className="w-full  flex flex-col md:items-start items-center justify-center gap-4">
                            <img src="/homePage/favouriteToolsSection/icon-8.svg" alt="tools icon" className="w-16 h-16" />
                            <h5 className="text-[24px] text-text-dark font-bold">Cursus diam</h5>
                            <p className="text-[18px] text-text  md:text-start text-center">Feugiat consectetur eu commodo odio venenatis pretium libero. Volutpat ultricies nisl turpis id.</p>
                        </div>

                        <div className="w-full  flex flex-col md:items-start items-center justify-center gap-4">
                            <img src="/homePage/favouriteToolsSection/icon-9.svg" alt="tools icon" className="w-16 h-16" />
                            <h5 className="text-[24px] text-text-dark font-bold">Facilisi vel malesuada</h5>
                            <p className="text-[18px] text-text  md:text-start text-center">Nibh cursus ultricies id neque proin urna vivamus bibendum. Quam sit platea integer sit.</p>
                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}
