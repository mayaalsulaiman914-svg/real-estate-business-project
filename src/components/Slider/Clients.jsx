import ClientCompanyCard from "./ClientCompanyCard";
import Slider from "./Slider";


const clients = [
    {
        id: 1,
        since: "Since 2019",
        title: "ABC Corporation",
        domain: "Commercial Real Estate",
        category: "Luxury Home Development",
        testimonial:
            "Estaten's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
    },
    {
        id: 2,
        since: "Since 2020",
        title: "XYZ Company",
        domain: "Commercial Real Estate",
        category: "Retail Space",
        testimonial:
            "Estatein's ability to identify prime retail locations helped us expand our brand presence. They are a trusted partner in our growth.",
    },
    {
        id: 3,
        since: "Since 2018",
        title: "focal Company",
        domain: "Commercial Real Estate",
        category: "Retail Space",
        testimonial:
            "Estatein's ability to identify prime retail locations helped us expand our brand presence. They are a trusted partner in our growth.",
    },
    {
        id: 4,
        since: "Since 2016",
        title: "hp Company",
        domain: "Commercial Real Estate",
        category: "Retail Space",
        testimonial:
            "Estatein's ability to identify prime retail locations helped us expand our brand presence. They are a trusted partner in our growth.",
    },
];

const Clients = () => {
    return (
        <section className="clients">
            <Slider
                items={clients}
                renderItem={(client) => (
                    <ClientCompanyCard client={client} />
                )}
                desktopItemsPerSlide={2}
            />
        </section>
    );
};

export default Clients;