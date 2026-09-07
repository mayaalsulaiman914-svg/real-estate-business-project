import "./ServiceCard.css";

const ServiceCard = ({ icon, title, description }) => {
    return (
        <div className="service-card">
            <div className="service-card-header">
                <div className="service-card-icon">
                    <img src={icon} alt="" />
                </div>
                <h3>{title}</h3>
            </div>
            <p>{description}</p>
        </div>
    );
};

export default ServiceCard;