import "./ServiceCTA.css";
import Button from "../Button/Button";

const ServiceCTA = ({
    title,
    description,
    className = "",}) => {
    return (
        <div className={`service-cta ${className}`}>
            <div className="service-cta-content">
                <h2>{title}</h2>
                <Button variant="secondary">
                Learn More
            </Button>
            </div>
                <p>{description}</p>
        </div>
    );
};

export default ServiceCTA;