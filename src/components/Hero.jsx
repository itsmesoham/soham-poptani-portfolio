/*Components*/

import { ButtonPrimary, ButtonOutline } from "./Button"
import avatar from '../assets/images/avatar-2.jpg'
import resume from '../../public/Poptani-Soham-CV.pdf'
import photo from '../assets/images/myphoto2.png'

const Hero = () => {
    return (
        <section
            id="home"
            className="pt-28 lg:pt-36"
        >
            <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">

                <div>
                    <div className="flex items-center gap-3">
                        <figure className="img-box w-9 h-9 rounded-lg">
                            <img
                                src={avatar}
                                width={40}
                                height={40}
                                alt="Soham Poptani portrait"
                                className="img-cover"
                            />
                        </figure>

                        <div className="flex items-center gap-1.5 text-zinc-500 text-sm tracking-wide">
                            <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                            </span>

                            Available for work
                        </div>
                    </div>

                    <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
                        Shaping the Modern Web with Scalable Solutions
                    </h2>

                    <div className="flex items-center gap-3">
                        <ButtonPrimary
                            label="Download CV"
                            icon="download"
                            href={resume}
                            download
                        />

                        {/* <ButtonOutline
                            href="#about"
                            label="Scroll down"
                            icon="arrow_downward"
                        /> */}
                    </div>

                </div>

                <div className="hidden lg:block">
                    {/* <figure className="w-full h-[550px] max-w-[480px] ml-auto bg-gradient-to-t from-blue-500 via-25% 
                    via-blue-500/40 to-65% rounded-[60px] overflow-hidden"> */}

                    <figure className="w-full h-[550px] max-w-[480px] ml-auto rounded-[60px] overflow-hidden">
                        <img
                            src={photo}
                            width={480}
                            height={550}
                            alt="Soham Poptani"
                            className="w-full"
                        />
                    </figure>
                </div>

            </div>
        </section>
    )
}

export default Hero