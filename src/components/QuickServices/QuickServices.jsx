import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./QuickServices.css";
import quickServicesData from "./quickServicesData";

function QuickServices() {
    const navigate = useNavigate();
    const [services, setServices] = useState(() => {
        const savedServices = localStorage.getItem("quickServices");
        return savedServices
            ? JSON.parse(savedServices)
            : quickServicesData;
    });
    useEffect(() => {
        localStorage.setItem(
            "quickServices",
            JSON.stringify(services)
        );
    }, [services]);
    return (
        <div className="quick-services">
            {services.map((service) => (
                <div
                    className="quick-service-card"
                    key={service.id}
                    onClick={() => navigate("/dashboard/services")}
                >
                    <img
                        src={service.icon}
                        className="quick-service-icon"
                        alt=""
                    />
                    <img
                        src="/assets/img/find your dream home Icon.png"
                        className="quick-service-arrow"
                        alt=""
                    />
                    <h3>{service.title}</h3>
                </div>
            ))}
        </div>
    );
}

export default QuickServices;