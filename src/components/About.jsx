
const aboutItems = [
    {
        label: 'Project done',
        string: '3'
    },
    {
        label: 'Years of experience',
        string: '6 Months'
    }
];

const About = () => {
    return (
        <section
            id="about"
            className="section"
        >
            <div className="container">

                <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
                    <p className="text-zinc-300 mb-4 md:mb-8 md:text-lg md:max-w-[95ch]">
                        Welcome! I&apos;m Soham, a professional web developer with a knack for crafting
                        visually stunning and highly functional websites. Combining creativity and technical
                        expertise. I transform your vision into digital masterpiece that excels in both appeareance
                        and perfomance.
                    </p>

                    <div className="flex flex-wrap items-center gap-4 md:gap-7">
                        {
                            aboutItems.map(({ label, string }, key) => (
                                <div className={key}>
                                    <div className="flex items-center md:mb-2">
                                        <span className="text-xl font-semibold md:text-[29px]">{string}</span>
                                        <span className="text-sky-400 font-semibold md:text-[26px]">+</span>
                                    </div>

                                    <p className="text-base text-zinc-400">{label}</p>
                                </div>
                            ))
                        }
                    </div>

                </div>

            </div>
        </section>
    )
}

export default About