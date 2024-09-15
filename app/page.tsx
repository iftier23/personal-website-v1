import { Button } from "@/components/global/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Link from "next/link";

export default function Home() {
    return (
        <section className="wrap-md w-full wrap-px pt-4 mx-auto">
            <div className="grid grid-cols-6 gap-4">
                <div className="col-span-6 md:col-span-4 row-span-1">
                    <style>
                    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
                    </style>
                    <style>
                    @import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
                    </style>

                    <div className="flex h-full flex-wrap gap-4 content-center bg-neutral-300/20 sm:aspect-auto relative p-8 sm:p-12  border-neutral-400/30 rounded-xl shadow-sm overflow-hidden ">
                        <div className="content flex gap-4 flex-wrap max-w-60 sm:max-w-72 md:max-w-52 lg:max-w-80 relative z-10">
                            <h2 className="font-merriweather text-white-100 text-xl sm:text-3xl md:text-2xl mb-0">Welcome, my name is</h2>
                            <h1 className="font-merriweather text-white-100"><b>Iftier Rahman</b></h1>
                            <h4 className="text-black-200 mb-0 font-playfair font-semibold italic">Computer Engineering @ University of Toronto (UofT)</h4>

                            <div className="inline-flex">
                                <Button link="/Iftier-Rahman-Resume-Master-v2.pdf" className="mt-4 bg-black-500 hover:bg-black-300 text-white font-bold py-2 px-4 rounded" target="_blank">
                                    Check out my Resume
                                </Button>
                            </div>

                        </div>
                        
                        
                        <span className="block absolute inset-y-0 left-52 sm:left-72 md:left-[2px] w-full">
                            <span className="bg-gradient-to-r absolute to-[#17181a] from-transparent block w-full h-full"></span>
                        </span>
                        

                    </div>
                    
                </div>

                {/* This block will be hidden on small screens and visible on medium and larger screens */}
                <div className="hidden md:block col-span-6 md:col-span-2 lg:col-span-2">
                    <div className="flex flex-wrap h-full content-start bg-neutral-300/20 relative p-8 border-neutral-400/30 rounded-xl overflow-hidden">
                        <div className="image-container w-full h-full flex items-center justify-center">
                            <img
                                src="/1726191343610.jpeg"
                                alt="Description of the image"
                                className="w-full h-full object-cover rounded-xl absolute"
                            />
                        </div>
                    </div>
                </div>


                <div className="col-span-6 md:hidden lg:hidden">
                    <div className="relative bg-neutral-300/20 border-neutral-400/30 rounded-xl overflow-hidden">
                        <div className="relative w-full h-64 md:h-full">
                            <img
                                src="/1726191343610.jpeg"
                                alt="Description of the image"
                                className="absolute inset-0 w-full h-full object-cover rounded-xl"
                            />
                        </div>
                    </div>
                </div>
                
                <div id="contact" className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <div className="flex flex-wrap gap-4 h-full content-start bg-neutral-300/20 relative p-4 sm:p-4 border-neutral-400/30 rounded-xl">
                        <div className="text-white grid gap-12">
                            <h2 className="font-merriweather font-bold mb-0 mt-6">Contacts</h2>
                            <div className="content grid space-y-4">
                                <a
                                    href="mailto:rahman.iftier@gmail.com"
                                    className="flex items-center gap-2"
                                >
                                    <FontAwesomeIcon
                                        icon={faEnvelope}
                                        className="w-4 h-4"
                                        // Alternatively, use style={{ fontSize: '1rem' }}
                                    />
                                    rahman.iftier@gmail.com
                                </a>
                                <a
                                    href="https://linkedin.com/in/iftier-rahman/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2"
                                >
                                    <FontAwesomeIcon
                                        icon={faLinkedin}
                                        className="w-4 h-4"
                                        // Alternatively, use style={{ fontSize: '1rem' }}
                                    />
                                    linkedin.com/in/iftier-rahman
                                </a>
                                <a
                                    href="https://github.com/iftier23"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2"
                                >
                                    <FontAwesomeIcon
                                        icon={faGithub}
                                        className="w-4 h-4"
                                        // Alternatively, use style={{ fontSize: '1rem' }}
                                    />
                                    github.com/iftier23
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="about" className="col-span-6 sm:col-span-3 lg:col-span-4">
                    <div className="flex flex-wrap h-full gap-4 content-start bg-neutral-300/20 relative p-8 sm:p-12 border-neutral-400/30 rounded-xl">
                        <div className="content w-full h-full flex content-end flex-wrap">
                            <div className="flex flex-wrap max-w-[512px] gap-8 relative z-10">
                                <span className="text-white block text-sm sm:text-sm underline-offset-4">I love building things and learning more about the world around me.</span>
                                <span className="text-white block text-sm sm:text-sm underline-offset-4">I've interned at <b>Amazon Web Services (AWS)</b> twice, diving into software development and cloud computing, and now I’m on the hunt for my next adventure.</span>
                                <span className="text-white block text-sm sm:text-sm underline-offset-4">
                                    Feel free to reach out!
                                </span>
                                <span className="text-white block text-sm sm:text-sm underline-offset-4">
                                    I’m open to internships and PEY co-op positions from 4 to 16 months.
                                </span>
                                <span className="italic text-white block text-sm sm:text-sm underline-offset-4">P.S. The website logo is my name in Bengali</span>
                            </div>
                            <div className="absolute flex w-full h-full inset-y-0 right-0 max-w-96 left-40 sm:left-auto">
                                <span className="bg-gradient-to-r absolute to-[#17181a] from-transparent block w-full h-full"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
