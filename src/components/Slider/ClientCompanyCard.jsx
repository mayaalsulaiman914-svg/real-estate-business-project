import Button from "../Button/Button.jsx";
import "./ClientCompanyCard.css";

const ClientCompanyCard = ({ client }) => {
    return (
        <div className="client-company-card">
        <div className="client-company-header">
            <div>
            <span>{client.since}</span>
            <h2>{client.title}</h2>
            </div>
            <Button variant="secondary">
            Visit Website
            </Button>
        </div>
        <div className="client-company-info">
            <div className="info-item">
            <div className="info-title">
                <img src="/assets/img/Doman Icon (1).png" alt="" />
                <span>Domain</span>
            </div>
            <p>{client.domain}</p>
            </div>
            <div className="info-item">
            <div className="info-title">
                <img src="/assets/img/CategoryIcon (2).png" alt="" />
                <span>Category</span>
            </div>
            <p>{client.category}</p>
            </div>
        </div>
        <div className="client-company-quote">
            <img src="/assets/img/Smile.png" alt="" />
            <p>{client.testimonial}</p>
        </div>
        </div>
    );
};

export default ClientCompanyCard;