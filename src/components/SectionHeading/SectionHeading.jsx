import "./SectionHeading.css";

function SectionHeading({title, description, showDecoration= false}) {
    return (
        <div className="section-heading">
            {showDecoration && (<img src="/assets/img/Stars.png"
                    alt=""
                    className="section-heading-decoration" />
            )}
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
    }

export default SectionHeading;
