import { useEffect, useState } from "react";
import quickServicesData from "../../components/QuickServices/quickServicesData";
import "./ServicesCardDashboard.css";

const ServicesCardDashboard = () => {
    const [services, setServices] = useState(() => {
        const savedServices = localStorage.getItem("quickServices");
        return savedServices
            ? JSON.parse(savedServices)
            : quickServicesData;
    });
    const [showForm, setShowForm] = useState(false);
    const [editingService, setEditingService] = useState(null);
    const [newService, setNewService] = useState({
        title: "",
        icon: "",
    });
    useEffect(() => {
        localStorage.setItem("quickServices", JSON.stringify(services));
    }, [services]);
    const handleAddService = (e) => {
        e.preventDefault();
        const service = {
            id: Date.now(),
            title: newService.title,
            icon: newService.icon,
        };
        setServices([...services, service]);
        setNewService({
            title: "",
            icon: "",
        });
        setShowForm(false);
    };
    const handleEditService = (e) => {
      e.preventDefault();
      setServices(
          services.map((service) =>
              service.id === editingService.id
                  ? editingService
                  : service
          )
      );
      setEditingService(null);
  };
  return (
    <div className="services-dashboard">
        <h1>Quick Services</h1>
        <button
            className="add-service-btn"
            onClick={() => {
                setEditingService(null);
                setShowForm(true);
            }}
        >
            Add Service
        </button>
        {showForm && (
            <form onSubmit={handleAddService}>
                <input
                    type="text"
                    placeholder="Service title"
                    value={newService.title}
                    onChange={(e) =>
                        setNewService({
                            ...newService,
                            title: e.target.value,
                        })
                    }
                />
                <input
                    type="text"
                    placeholder="Service icon"
                    value={newService.icon}
                    onChange={(e) =>
                        setNewService({
                            ...newService,
                            icon: e.target.value,
                        })
                    }
                />
                <button type="submit">
                    Add
                </button>
                <button
                    type="button"
                    onClick={() => setShowForm(false)}
                >
                    Cancel
                </button>
            </form>
        )}
        {editingService && (
            <form onSubmit={handleEditService}>
                <input
                    type="text"
                    value={editingService.title}
                    onChange={(e) =>
                        setEditingService({
                            ...editingService,
                            title: e.target.value,
                        })
                    }
                />
                <input
                    type="text"
                    value={editingService.icon}
                    onChange={(e) =>
                        setEditingService({
                            ...editingService,
                            icon: e.target.value,
                        })
                    }
                />
                <button type="submit">
                    Save
                </button>
                <button
                    type="button"
                    onClick={() => setEditingService(null)}
                >
                    Cancel
                </button>
            </form>
        )}
        <div className="services-grid">
            {services.map((service) => (
                <div
                    className="service-dashboard-card"
                    key={service.id}
                >
                    <img
                        src={service.icon}
                        alt=""
                    />
                    <h3>{service.title}</h3>
                    <div className="service-actions">
                        <button
                            onClick={() => {
                                setShowForm(false);
                                setEditingService(service);
                            }}
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => {
                                setServices(
                                    services.filter(
                                        (item) =>
                                            item.id !== service.id
                                    )
                                );
                            }}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    </div>
);
};

export default ServicesCardDashboard;