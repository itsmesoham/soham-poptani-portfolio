/*Components*/
import { ButtonPrimary } from "./Button";
import logo from '../assets/images/logo_new.svg'

const sitemap = [
    {
        label: 'Home',
        href: '#home',
        section: 'home'
    },
    {
        label: 'About',
        href: '#about',
        section: 'about'
    },
    {
        label: 'Work',
        href: '#work',
        section: 'work'
    },
    // {
    //     label: 'Reviews',
    //     href: '#review',
    //     section: 'review'
    // },
    {
        label: 'Contact me',
        href: '#contact',
        section: 'contact'
    }
];

const socials = [
    {
        label: 'GitHub',
        href: 'https://github.com/itsmesoham'
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/soham-poptani-/'
    }
];

const Footer = () => {
    const handleFooterLinkClick = (e, section) => {
        e.preventDefault();
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            
            // Dispatch a custom event to notify Navbar of the change
            window.dispatchEvent(new CustomEvent('sectionChange', { detail: section }));
        }
    };

    return (
        <footer className="section" id="contact">
            <div className="container">
                <div className="lg:grid lg:grid-cols-2">
                    <div className="mb-10">
                        <h2 className="headline-1 mb-8 lg:max-w-[12ch]">
                            Let&apos;s work together today!
                        </h2>
                        <ButtonPrimary
                            href="mailto:sohampoptani6704@gmail.com"
                            label="Start project"
                            icon="chevron_right"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4 lg:pl-20">
                        <div>
                            <p className="mb-2">Sitemap</p>
                            <ul>
                                {sitemap.map(({ label, href, section }, key) => (
                                    <li key={key}>
                                        <a
                                            href={href}
                                            onClick={(e) => handleFooterLinkClick(e, section)}
                                            className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                                        >
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <p className="mb-2">Socials</p>
                            <ul>
                                {socials.map(({ label, href }, key) => (
                                    <li key={key}>
                                        <a
                                            href={href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                                        >
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between pt-10 mb-8">
                    <a href="#home" className="">
                        <img
                            src={logo}
                            width={40}
                            height={40}
                            alt="Logo"
                        />
                    </a>
                    <p className="text-zinc-500 text-sm">
                        2025 <span className="text-zinc-200">| itsmesoham</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;