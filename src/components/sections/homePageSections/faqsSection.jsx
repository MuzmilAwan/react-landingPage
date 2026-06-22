import React, { useState } from 'react'

const faqData = [
    {
        question: "Enim sodales consequat adipiscing facilisis massa venenatis, non lorem lobortis?",
        answer: "Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin."
    },
    {
        question: "Venenatis nulla sagittis nunc, lobortis nec sollicitudin neque, dolor?",
        answer: "Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin."
    },
    {
        question: "Varius ultricies molestie tellus fermentum, viverra ipsum scelerisque etiam lorem?",
        answer: "Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin."
    },
    {
        question: "Nulla etiam vitae, at sagittis, nibh ultrices feugiat faucibus?",
        answer: "Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin."
    },
    {
        question: "Sagittis consectetur gravida nec turpis eros, id sit et, dictum?",
        answer: "Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin."
    },
]

export default function FAQS() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-[1440px] min-w-[300px] mx-auto bg-bgblue flex items-center flex-col overflow-hidden gap-8 md:gap-16 lg:gap-20 px-4 py-12 sm:px-6 md:px-12 md:py-16 lg:px-20 lg:py-20">

                <div className="w-full flex flex-col items-center gap-4 sm:gap-5 md:gap-6">
                    <h1 className="font-bold md:font-extrabold text-[24px] sm:text-[32px] md:text-[44px] lg:text-[56px] text-center bg-[linear-gradient(90deg,#C026D3_0%,#701A75_50%)] bg-clip-text text-transparent">Frequently asked questions</h1>

                    <p className="max-w-[361px] sm:max-w-[600px] md:max-w-[760px] lg:max-w-[900px] text-text font-normal text-center text-base sm:text-lg md:text-xl">Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin.</p>

                </div>

                <div className=" max-w-[1280px] pt-2 flex flex-col gap-3 sm:gap-4">
                    {faqData.map((item, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div key={index} className="w-full bg-bg-primary rounded-[10px] shadow-sm overflow-hidden">
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    aria-expanded={isOpen}
                                    className="w-full flex items-center justify-between gap-4 text-left px-4 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6"
                                >
                                    <span className="text-text-dark font-medium text-sm sm:text-base md:text-lg leading-[22px] sm:leading-[24px]">
                                        {item.question}
                                    </span>
                                   
                                    <img src="/homePage/faqsSection/faqsIcon.svg" alt="arrow down icon"   className={`shrink-0 w-4 h-4 sm:w-5 sm:h-5 text-fuchsia-600 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}/>

                                </button>

                                <div
                                    className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="text-text font-normal text-sm sm:text-base px-4 pb-4 sm:px-6 sm:pb-5 md:px-8 md:pb-6">
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
    )
}