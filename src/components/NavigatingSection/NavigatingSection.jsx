import Section from "../Section/Section";
import Container from "../Container/Container";
import "./NavigatingSection.css";

const steps = [
  {
    step: "Step 01",
    title: "Discover a World of Possibilities",
    description:
      "Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location, type, size, and budget.",
  },
  {
    step: "Step 02",
    title: "Narrowing Down Your Choices",
    description:
      "Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.",
  },
  {
    step: "Step 03",
    title: "Personalized Guidance",
    description:
      "Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away.",
  },
  {
    step: "Step 04",
    title: "See It for Yourself",
    description:
      "Arrange viewings of the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home.",
  },
  {
    step: "Step 05",
    title: "Making Informed Decisions",
    description:
      "Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed and confident in your choice.",
  },
  {
    step: "Step 06",
    title: "Getting the Best Deal",
    description:
      "We'll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms.",
  },
];
const NavigatingSection = () => {
  return (
    <Section className="estatein-process-section">
      <Container>
        <div className="estatein-process">
          <header className="estatein-process__heading">
            <h2>Navigating the Estatein Experience</h2>
            <p>
              At Estatein, we've designed a straightforward process to help you find
              and purchase your dream property with ease. Here's a step-by-step guide
              to how it all works.
            </p>
          </header>

          <div className="estatein-process__grid">
            {steps.map(({ step, title, description }) => (
              <article className="estatein-process__item" key={step}>
                <div className="estatein-process__step">{step}</div>
                <div className="estatein-process__card">
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default NavigatingSection;