import Button from "../Button/Button"
import SectionHeading from "../SectionHeading/SectionHeading"
import Stats from "../Stats/Stats"
import "./Hero.css"

function Hero({ title,
                description,
                secondaryButtonText,
                primaryButtonText,
                image,
                children}) {
    return (
        <section className="hero">
            <div className="hero-main">
                <div className="hero-content">
                    <SectionHeading
                    title={title}
                    description={description}
                    />
                    <div className="hero-buttons">
                        <Button variant="secondary">
                            {secondaryButtonText}
                        </Button>
                        <Button variant="primary">
                            {primaryButtonText}
                        </Button>
                    </div>
                    <Stats/>
                </div>
                <div className="hero-image">
                    <img src= {image} alt="property"/>
                </div>
            </div>
            {children}
        </section>
    )
}

export default Hero
