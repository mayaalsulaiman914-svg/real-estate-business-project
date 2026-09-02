import Button from "../Button/Button"
import SectionHeading from "../SectionHeading/SectionHeading"
import Stats from "../Stats/Stats"
import "./Hero.css"

function Hero({ title,
                description,
                secondaryButtonText,
                primaryButtonText,
                image,
                decorativeImage,
                children}) {
    return (
        <section className="hero" id="hero">
            <div className="hero-main">
                <div className="hero-content">
                    {decorativeImage && ( <img src={decorativeImage}
                                                alt="decorativeImage"
                                                className="hero-decorative-img" 
                                            />
                                        )}
                    <SectionHeading
                    title={title}
                    description={description}
                    />
                        {(secondaryButtonText || primaryButtonText) && (
                    <div className="hero-buttons">
                        {secondaryButtonText && (
                            <Button variant="secondary">
                                {secondaryButtonText}
                            </Button>
                        )}
                        {primaryButtonText && (
                            <Button variant="primary">
                                {primaryButtonText}
                            </Button>
                        )}
                    </div>
                        )}
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
