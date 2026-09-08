import "./SectionHeading.css";

function SectionHeading({title, description, showDecoration= false , mobileEnd}) {
    const mobileDesc = mobileEnd ? description.split(mobileEnd)[0] + mobileEnd + "." : description;
    return (
        <div className="section-heading">
            {showDecoration && (<img src="/assets/img/Stars.png"
                    alt=""
                    className="section-heading-decoration" />
            )}
            <h1 className="desktop-title">{title}</h1>
            <p className="desktop-desc">{description}</p>
            <p className="mobile-desc">{mobileDesc}</p>
        </div>
    );
    }

export default SectionHeading;
