
export default function ReviewSection() {
    return (
        <>
            <div className="md:w-full md:h-[766px] w-full h-[495px] flex items-center justify-center flex-col bg-bg-secondary md:gap-20 gap-8 md:p-20 py-12 px-4">

                {/* <div className=" relative top-0 right-4">
                    <img src="/homePage/reviewSection/decoRight.webp" alt="Right vector image" />
                </div> */}



                <h1 className="md:font-extrabold font-bold md:text-[56px] text-[24px] bg-gradient-to-r from-fuchsia-600 to-purple-800 bg-clip-text text-transparent ">What other users say</h1>

                <div className="md:w-[900px] md:h-[464px] w-full h-[341px] md:pt-12 pt-6 flex items-center gap-6">
                    <img src="/homePage/storiesSection/arrow_btn.png" alt="" className="w-[48px] h-[48px] mt-[120px] md:flex hidden" />

                    <div className="md:w-[756px] md:h-[464px] w-[361] h-[341] rounded-[10px] bg-bg-primary flex items-center flex-col md:gap-2 p-12">

                        <h4 className="text-text-dark font-bold md:text-[32px] text-[24px] pb-6">Placerat feugiat senectus</h4>
                        <p className=" text-text font-normal text-center md:text-xl text-base ">Ultricies pharetra arcu turpis dui massa interdum lorem. Viverra nunc quisque congue tincidunt potenti. Tellus, enim vel habitasse commodo ultrices aenean ultricies.</p>

                        <div className="md:w-[640px] md:h-[179px]  flex flex-col items-center justify-center pt-20 ">
                            <img src="/homePage/reviewSection/userThumb.webp" alt="user thumb image" className="w-16 h-16"/>
                             <h5 className="text-base text-text-dark pt-6">Colorful Face</h5>
                             <p className="text-[14px] text-text">by Melvina Spring</p>
                        </div>
                    </div>
                    <img src="/homePage/storiesSection/arrow_btn_1.png" alt="" className="w-[48px] h-[48px] mt-[120px] md:flex hidden" />

                </div>

                {/* <div className="">
                    <img src="/homePage/reviewSection/decoLeft.webp" alt=" left vector image" />
                </div> */}



            </div>
        </>
    )
}


