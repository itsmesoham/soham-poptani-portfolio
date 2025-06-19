/*Components*/

import SkillCard from "./SkillCard";

const tailwindcsslogo = new URL('../assets/images/tailwindcss.svg', import.meta.url).href;
const csslogo = new URL('../assets/images/css3.svg', import.meta.url).href;
const javascriptlogo = new URL('../assets/images/javascript.svg', import.meta.url).href;
const nodejslogo = new URL('../assets/images/nodejs.svg', import.meta.url).href;
const expressjslogo = new URL('../assets/images/expressjs.svg', import.meta.url).href;
const mongodblogo = new URL('../assets/images/mongodb.svg', import.meta.url).href;
const reactlogo = new URL('../assets/images/react.svg', import.meta.url).href;
const figmalogo = new URL('../assets/images/figma.svg', import.meta.url).href;

const skillItem = [
    {
        imgSrc: tailwindcsslogo,
        label: 'TailwindCSS',
        desc: 'User Interface'
    },
    {
        imgSrc: csslogo,
        label: 'CSS',
        desc: 'User Interface'
    },
    {
        imgSrc: javascriptlogo,
        label: 'JavaScript',
        desc: 'Interaction'
    },
    {
        imgSrc: nodejslogo,
        label: 'NodeJS',
        desc: 'Web Server'
    },
    {
        imgSrc: expressjslogo,
        label: 'ExpressJS',
        desc: 'Node Framework'
    },
    {
        imgSrc: mongodblogo,
        label: 'MongoDB',
        desc: 'Database'
    },
    {
        imgSrc: reactlogo,
        label: 'React',
        desc: 'Framework'
    },
    {
        imgSrc: figmalogo,
        label: 'Figma',
        desc: 'Design tool'
    },
];

const Skills = () => {
    return (
        <section className="section">
            <div className="container">

                <h2 className="headline-2">
                    Essential tools I use
                </h2>

                <p className="text-zinc-400 mt-3 mb-8">
                    Discover the powerful tools and technologies I use to create exceptional,
                    high-perfoming websites & applications.
                </p>

                <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                    {
                        skillItem.map(({ imgSrc, label, desc }, key) =>
                        (
                            <SkillCard 
                            key={key}
                            imgSrc={imgSrc}
                            label={label}
                            desc={desc}
                            />
                        ))
                    }
                </div>

            </div>
        </section>
    )
}

export default Skills