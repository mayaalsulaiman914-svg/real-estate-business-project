import "./SectionHeading.css";

function SectionHeading({title, description}) {
    return (
        <div className="section-heading">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
    }

export default SectionHeading;
