import { Link } from "react-router-dom";

function HashLink({ to, children, ...props }) {
    const handleClick = (e) => {
    const [path, hash] = to.split("#");
    if (window.location.pathname === path && hash) {
        e.preventDefault();
        document.getElementById(hash)?.scrollIntoView({
        behavior: "smooth",
            });
        }
    };
    return (
    <Link to={to} onClick={handleClick} {...props}>
        {children}
    </Link>
    );
}

export default HashLink;