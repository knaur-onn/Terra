import Title from "../components/Title";
import MethodCard from "../components/MethodCard";
import method1 from "../assets/method-1.svg";
import method2 from "../assets/method-2.svg";
import "../styles/CareTips.css";

function CareTips() {
  return (
    <>
      <section className="caretips-section">
        <Title
          subtitle="CARE MADE SIMPLE"
          mainTitle="How to cultivate longevity"
        />
        <div className="caretips-card">
          <MethodCard
            image={method1}
            subheader="METHOD 01"
            header="Assess the microclimate first"
            description="Plants don't just consume light; they consume stability. Identify natural drafts before designating a pot location."
          />
          <MethodCard
            image={method2}
            subheader="METHOD 02"
            header="The tactile saturation rule"
            description="Submerge your index finger two inches into top soil — water if dry and powdery. Avoid rigid calendars."
            isInverted={true}
          />
        </div>
      </section>
    </>
  );
}

export default CareTips;
