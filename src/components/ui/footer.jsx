export default function Footer() {
    return (
        <>
            <div className="max-w-[1440px] min-w-[300px] mx-auto flex items-center flex-col overflow-hidden gap-8 md:gap-12 lg:gap-16 px-4 py-12 sm:px-6 md:px-12 md:py-14 lg:px-20 lg:py-16">

                <div className="w-full max-w-[391px] sm:max-w-[500px] md:max-w-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-y-8 sm:gap-x-6 md:gap-x-4 lg:gap-x-8 text-left">

                    <div className="flex flex-col items-start gap-3 sm:gap-4">
                        <p text-text-dark font-medium text-base>Categories</p>
                        <ul className="flex flex-col items-start gap-2 sm:gap-3">
                            <li  className="text-text font-normal text-base cursor-pointer">User Interface</li>
                            <li  className="text-text font-normal text-base cursor-pointer">User Experience</li>
                            <li  className="text-text font-normal text-base cursor-pointer">Digital Media</li>
                            <li  className="text-text font-normal text-base cursor-pointer">Lifestyle</li>
                            <li  className="text-text font-normal text-base cursor-pointer">Programming</li>
                            <li  className="text-text font-normal text-base cursor-pointer">Animation</li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-start gap-3 sm:gap-4">
                        <p text-text-dark font-medium text-base>Product</p>
                        <ul className="flex flex-col items-start gap-2 sm:gap-3">
                            <li  className="text-text font-normal text-base cursor-pointer">Pricing</li>
                            <li  className="text-text font-normal text-base cursor-pointer">Overview</li>
                            <li  className="text-text font-normal text-base cursor-pointer">Browse</li>
                            <li  className="text-text font-normal text-base cursor-pointer">Accessibility</li>
                            <li  className="text-text font-normal text-base cursor-pointer">Five</li>
                            <li  className="text-text font-normal text-base cursor-pointer">Changelog</li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-start gap-3 sm:gap-4">
                        <p text-text-dark font-medium text-base>Solutions</p>
                        <ul className="flex flex-col items-start gap-2 sm:gap-3">
                            <li  className="text-text font-normal text-base cursor-pointer">Brainstorming</li>
                            <li  className="text-text font-normal text-base cursor-pointer">Ideation</li>
                            <li  className="text-text font-normal text-base cursor-pointer">Wireframing</li>
                            <li  className="text-text font-normal text-base cursor-pointer">Research</li>
                            <li  className="text-text font-normal text-base cursor-pointer">Design</li>
                            <li  className="text-text font-normal text-base cursor-pointer">Concept</li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-start gap-3 sm:gap-4">
                        <p text-text-dark font-medium text-base>Resources</p>
                        <ul className="flex flex-col items-start gap-2 sm:gap-3">
                            <li  className="text-text font-normal text-base cursor-pointer">Help Center</li>
                            <li  className="text-text font-normal text-base cursor-pointer">Blog</li>
                            <li  className="text-text font-normal text-base cursor-pointer">Tutorials</li>
                            <li  className="text-text font-normal text-base cursor-pointer">FAQs</li>
                            <li  className="text-text font-normal text-base cursor-pointer">Community</li>
                            <li  className="text-text font-normal text-base cursor-pointer">Events</li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-start gap-3 sm:gap-4">
                        <p text-text-dark font-medium text-base>Support</p>
                        <ul className="flex flex-col items-start gap-2 sm:gap-3">
                            <li  className="text-text font-normal text-base cursor-pointer">Contact Us</li>
                            <li  className="text-text font-normal text-base cursor-pointer">Developers</li>
                            <li  className="text-text font-normal text-base cursor-pointer">Documentation</li>
                            <li  className="text-text font-normal text-base cursor-pointer">Integrations</li>
                            <li  className="text-text font-normal text-base cursor-pointer">Reports</li>
                            <li  className="text-text font-normal text-base cursor-pointer">Webinar</li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-start gap-3 sm:gap-4">
                        <p className="text-text-dark font-medium text-base">Company</p>
                        <ul className="flex flex-col items-start gap-2 sm:gap-3">
                            <li className="text-text font-normal text-base cursor-pointer">About</li>
                            <li  className="text-text font-normal text-base cursor-pointer">Press</li>
                            <li  className="text-text font-normal text-base cursor-pointer">Events</li>
                            <li  className="text-text font-normal text-base cursor-pointer">Careers</li>
                            <li  className="text-text font-normal text-base cursor-pointer">Customers</li>
                            <li  className="text-text font-normal text-base cursor-pointer">Partners</li>
                        </ul>
                    </div>

                </div>

                <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-4 border-t border-border pt-8">

                    <div className="flex sm:flex-row flex-col sm:items-center items-start gap-3">
                        <img src="/homePage/navbar/logo.svg" alt="logo image" className="w-[67px] h-[22px]" />
                        <p className="text-text text-base">@ 2026 - All rights reserved</p>
                    </div>

                    <div className="flex sm:items-center items-start justify-center gap-4 sm:gap-5">
                        <img src="/homePage/footer/youtube.svg" alt="youtube icon" className="w-6 h-6 cursor-pointer" />
                        <img src="/homePage/footer/facebook.svg" alt="fb icon" className="w-6 h-6 cursor-pointer" />
                        <img src="/homePage/footer/twitter.svg" alt="twitter icon" className="w-6 h-6 cursor-pointer" />
                        <img src="/homePage/footer/instagram.svg" alt="instagram icon" className="w-6 h-6 cursor-pointer" />
                        <img src="/homePage/footer/linkedin.svg" alt="linkedin icon" className="w-6 h-6 cursor-pointer" />
                    </div>

                </div>

            </div>

        </>
    )
}
