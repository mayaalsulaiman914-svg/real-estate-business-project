import { Link, useLocation } from "react-router-dom";

function HashLink({ to, children, ...props }) {
    const location = useLocation();

    const handleClick = (e) => {
        const [path, hash] = to.split("#");
        if (location.pathname === path && hash) {
            e.preventDefault();
            const element = document.getElementById(hash);
            if (element) {
                element.scrollIntoView({
                    behavior: "smooth",
                });
            }
        }
    };
    return (
        <Link to={to} onClick={handleClick} {...props}>
            {children}
        </Link>
    );
}

export default HashLink;
