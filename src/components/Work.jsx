/*Components*/

import ProjectCard from "./ProjectCard";

const works = [
    {
        imgSrc: '/src/assets/images/project-1.gif',
        title: 'Digital Agency Website',
        tags: ['ReactJS', 'CSS', 'MongoDB'],
        projectLink: ''
    },
    {
        imgSrc: '/src/assets/images/project-2.jpg',
        title: 'Musiflow (Online Music Streaming Platform)',
        tags: ['ReactJS', 'Tailwind CSS', 'Supabase'],
        projectLink: 'https://github.com/Meet211003/Music-Application-MUSIFLOW-'
    },
    {
        imgSrc: '/src/assets/images/project-3.jpg',
        title: 'Inventory Managment System',
        tags: ['Java', 'JavaSwing', 'MySQL'],
        projectLink: 'https://github.com/itsmesoham/inventory-managment-system-java-project'
    },
    // {
    //     imgSrc: '/src/assets/images/project-4.jpg',
    //     title: 'Real state website',
    //     tags: ['Web-design', 'Development'],
    //     projectLink: 'https://github.com/codewithsadee-org/wealthome'
    // },
    // {
    //     imgSrc: '/src/assets/images/project-5.jpg',
    //     title: 'eCommerce website',
    //     tags: ['eCommerce', 'Development'],
    //     projectLink: 'https://github.com/codewithsadee/anon-ecommerce-website'
    // },
    // {
    //     imgSrc: '/src/assets/images/project-6.jpg',
    //     title: 'vCard Personal portfolio',
    //     tags: ['Web-design', 'Development'],
    //     projectLink: 'https://github.com/codewithsadee/vcard-personal-portfolio'
    // },
];

const Work = () => {
    return (
        <section
            id="work"
            className="section min-h-screen pt-16 pb-20"
        >
            <div className="container">

                <h2 className="headline-2">
                    My portfolio highlights
                </h2>

                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                    {works.map(({ imgSrc, title, tags, projectLink },
                        key) => (
                        <ProjectCard 
                            key={key}
                            imgSrc={imgSrc}
                            title={title}
                            tags={tags}
                            projectLink={projectLink}
                        />
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Work