import "./ValueCard.css";

const ValueCard = ({ values }) => {
    return (
        <div className="value-card">
        {values.map((value) => (
            <div className="value-item" key={value.title}>
            <div className="value-icon">
                <img src={value.icon} alt="" />
            </div>
            <div className="value-info">
                <h3>{value.title}</h3>
                <p>{value.description}</p>
            </div>
            </div>
        ))}
        </div>
    );
};

export default ValueCard;