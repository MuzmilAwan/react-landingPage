
export default function ReviewSection() {
    return (
        <>
            <div className="w-[1440px] h-[766px] flex items-center flex-col bg-bg-secondary gap-20 p-[80px]">

                <div className=" relative top-0 right-4">
                    <img src="/homePage/reviewSection/decoRight.webp" alt="Right vector image" />
                </div>
              


                <h1 className="md:font-extrabold font-bold md:text-14 text-6 bg-gradient-to-r from-fuchsia-600 to-purple-800 bg-clip-text text-transparent ">What other users say</h1>

                <div className="w-[900px] h-[464px]  flex  items-center gap-6">
                      <img src="/homePage/storiesSection/arrow_btn.png" alt="" className="w-[48px] h-[48px] mt-[120px]" />
                    <div className="w-[756px] h-[464px] rounded-[10px] bg-bg-primary flex items-center flex-col gap-2  p-[48px]">
                        <h4 className="text-text-dark font-bold text-[32px]">Placerat feugiat senectus</h4>
                        <p className="w-660px h-114px text-text-dard text-center font-normal text-2xl">Ultricies pharetra arcu turpis dui massa interdum lorem. Viverra nunc quisque congue tincidunt potenti. Tellus, enim vel habitasse commodo ultrices aenean ultricies.</p>
                    </div>
                    <img src="/homePage/storiesSection/arrow_btn_1.png" alt="" className="w-[48px] h-[48px] mt-[120px]"/>

                </div>

                {/* <div className="">
                    <img src="/homePage/reviewSection/decoLeft.webp" alt=" left vector image" />
                </div> */}

                

            </div>
        </>
    )
}


