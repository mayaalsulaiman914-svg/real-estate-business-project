import "./ContactQuick.css";
import contactData from "../../data/Contact";

function ContactQuick() {
    return (
        <div className="contact-quick">
            {contactData.map((contact) => (
                <div className="contact-quick-card" key={contact.id}>
                    
                    <img
                        src={contact.icon}
                        className="contact-quick-icon"
                        alt=""
                    />

                    <img
                        src="/assets/img/find your dream home Icon.png"
                        className="contact-quick-arrow"
                        alt=""
                    />

                    {Array.isArray(contact.title) ? (
                        <div className="contact-quick-social">
                            {contact.title.map((social, index) => (
                                <span key={index}>{social}</span>
                            ))}
                        </div>
                    ) : (
                        <h3>{contact.title}</h3>
                    )}

                </div>
            ))}
        </div>
    );
}

export default ContactQuick;