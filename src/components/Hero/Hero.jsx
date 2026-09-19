import { useNavigate } from "react-router-dom"
import Button from "../Button/Button"
import SectionHeading from "../SectionHeading/SectionHeading"
import Stats from "../Stats/Stats"
import "./Hero.css"

function Hero({ title,
                id,
                description,
                secondaryButtonText,
                primaryButtonText,
                showDecoration = false,
                image,
                imageVariant,
                showStats = true,
                children})
{
 const navigate = useNavigate()   
    return (
        <section className={`hero ${!image ? "hero-simple" : ""}`} id={id} >
            <div className="hero-main">
                <div className="hero-content">
                    <SectionHeading
                    showDecoration={showDecoration}
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
                            <Button variant="primary" onClick={()=> navigate("/properties")}>
                                {primaryButtonText}
                            </Button>
                        )}
                    </div>
                        )}
                    {showStats && <Stats/>}
                </div>
                {image && (
                <div className={`hero-image ${imageVariant || ""}`}>
                    <img src= {image} alt="property"/>
                </div>
                )}
            </div>
            {children}
        </section>
    )
}

export default Hero
