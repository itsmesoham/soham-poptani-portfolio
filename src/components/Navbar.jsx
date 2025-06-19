import { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";

const Navbar = ({ navOpen }) => {
    const [activeSection, setActiveSection] = useState("home");
    const [threshold, setThreshold] = useState(window.innerWidth <= 768 ? 0.4 : 0.8);
    const activeBox = useRef(null);
    const navRef = useRef(null);
    const isScrolling = useRef(false);

    const navItems = [
        { label: "Home", link: "#home", className: "nav-link", section: "home" },
        { label: "About", link: "#about", className: "nav-link", section: "about" },
        { label: "Work", link: "#work", className: "nav-link", section: "work" },
        // { label: "Reviews", link: "#review", className: "nav-link", section: "review" },
        { label: "Contact", link: "#contact", className: "nav-link md:hidden", section: "contact" }
    ];

    const moveActiveBox = (element) => {
        if (!element || !activeBox.current || isScrolling.current) return;
        const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = element;
        Object.assign(activeBox.current.style, {
            top: `${offsetTop}px`,
            left: `${offsetLeft}px`,
            width: `${offsetWidth}px`,
            height: `${offsetHeight}px`,
            opacity: "1",
            transition: "all 0.3s ease-out"
        });
    };

    const handleLinkClick = (e, section) => {
        e.preventDefault();
        const target = document.querySelector(e.currentTarget.getAttribute("href"));
        if (target) {
            isScrolling.current = true;
            setActiveSection(section);
            target.scrollIntoView({ behavior: "smooth", block: "start" });
            
            // Set a timeout to mark scrolling as complete
            setTimeout(() => {
                isScrolling.current = false;
                const activeLink = navRef.current?.querySelector(`[href="#${section}"]`);
                if (activeLink) moveActiveBox(activeLink);
            }, 450); // Match this with your scroll duration
        }
    };

    useEffect(() => {
        const handleResize = () => {
            setThreshold(window.innerWidth <= 768 ? 0.3 : 0.8);
            // Immediately reposition active box on resize
            const activeLink = navRef.current?.querySelector(`[href="#${activeSection}"]`);
            if (activeLink) moveActiveBox(activeLink);
        };

        window.addEventListener("resize", handleResize);

        const observer = new IntersectionObserver(
            (entries) => {
                if (isScrolling.current) return; // Don't update during scroll
                
                let mostVisibleEntry = null;
                let highestRatio = 0;

                entries.forEach((entry) => {
                    if (entry.intersectionRatio > highestRatio) {
                        highestRatio = entry.intersectionRatio;
                        mostVisibleEntry = entry;
                    }
                });

                if (mostVisibleEntry && highestRatio >= threshold) {
                    setActiveSection(mostVisibleEntry.target.id);
                }
            },
            { threshold: [threshold] }
        );

        navItems.forEach(({ section }) => {
            const el = document.getElementById(section);
            if (el) observer.observe(el);
        });

        return () => {
            window.removeEventListener("resize", handleResize);
            observer.disconnect();
        };
    }, [threshold]);

    useEffect(() => {
        if (isScrolling.current) return;
        
        const timer = setTimeout(() => {
            const activeLink = navRef.current?.querySelector(`[href="#${activeSection}"]`);
            if (activeLink) moveActiveBox(activeLink);
        }, 100);

        return () => clearTimeout(timer);
    }, [activeSection, navOpen]);

    return (
        <nav className={`navbar${navOpen ? " active" : ""}`} ref={navRef}>
            {navItems.map(({ label, link, className, section }) => (
                <a
                    href={link}
                    key={section}
                    className={`${className} ${activeSection === section ? "active" : ""}`}
                    onClick={(e) => handleLinkClick(e, section)}
                >
                    {label}
                </a>
            ))}
            <div 
                className="active-box" 
                ref={activeBox}
                style={{ transition: "all 0.3s ease-out" }}
            />
        </nav>
    );
};

Navbar.propTypes = {
    navOpen: PropTypes.bool.isRequired
};

export default Navbar;