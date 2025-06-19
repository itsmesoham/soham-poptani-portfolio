/*Components*/

import SkillCard from "./SkillCard";
import tailwindcsslogo from '../assets/images/tailwindcss.svg'
import csslogo from '../assets/images/css3.svg'
import javascriptlogo from '../assets/images/javascript.svg'
import nodejslogo from '../assets/images/nodejs.svg'
import expressjslogo from '../assets/images/expressjs.svg'
import mongodblogo from '../assets/images/mongodb.svg'
import reactlogo from '../assets/images/react.svg'
import figmalogo from '../assets/images/figma.svg'

const skillItem = [
    {
        imgSrc: {tailwindcsslogo},
        label: 'TailwindCSS',
        desc: 'User Interface'
    },
    {
        imgSrc: {csslogo},
        label: 'CSS',
        desc: 'User Interface'
    },
    {
        imgSrc: {javascriptlogo},
        label: 'JavaScript',
        desc: 'Interaction'
    },
    {
        imgSrc: {nodejslogo},
        label: 'NodeJS',
        desc: 'Web Server'
    },
    {
        imgSrc: {expressjslogo},
        label: 'ExpressJS',
        desc: 'Node Framework'
    },
    {
        imgSrc: {mongodblogo},
        label: 'MongoDB',
        desc: 'Database'
    },
    {
        imgSrc: {reactlogo},
        label: 'React',
        desc: 'Framework'
    },
    {
        imgSrc: {figmalogo},
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