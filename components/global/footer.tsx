import { Button } from "./button";

const date = new Date();
const year = date.getFullYear();

export const Footer = () => {
    return (
        <footer className="footer py-12 relative overflow-hidden">
            <div className="inner-container max-w-[512px] mx-auto wrap-px relative z-10">
                <div className="grid gap-8 text-center">
                    <div className="col-span-1">
                        <div className="logo-container ">
                            {/** 
                            <h1 className="logo mb-4 leading-0 flex justify-center">
                                <a className="font-black text-2xl hover:text-primary-500 transition duration-500 uppercase flex items-center" href="/">
                                    <img id="logo-81" src="logo-official-v3.png" width="125" height="125" alt="Logo from https://logoipsum.com/" />
                                    <span className="sr-only">bent-o</span>
                                </a>
                            </h1>
                            <p className="text-base">Click download to jazz it up with your style! 🚀.</p>
                            <Button link="https://github.com/christian-luntok/bent-o" className="mt-6 md:mt-8" target="_blank">
                                Download Bent-o
                            </Button>
                            */}
                        </div>
                    </div>
                </div>
                <section className="footer-credit relative z-10 pt-8">
                    <div className="wrap grid text-center relative">
                        <div className="footer-credit--item flex flex-wrap justify-center ">
                            <p className="my-0 text-white-100">
                                ©{year} Iftier Rahman. All rights reserved.{" "}
                                <span className="font-normal">
                                    
                                </span>
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </footer>
    );
};
