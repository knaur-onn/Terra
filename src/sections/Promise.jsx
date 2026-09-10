import Card from "../components/Card";
import Title from "../components/Title";
import specimenIcon from "../assets/specimen-icon.svg";
import openBookIcon from "../assets/openbook-icon.svg";
import truckIcon from "../assets/truck-icon.svg";
import "../styles/Promise.css";

function Promise() {
  return (
    <>
      <section className="promise-section">
        <Title
          subtitle="THE TERRA PROMISE"
          mainTitle="Nurtured from sprout to root"
        />
        <div className="promise-card">
          <Card
            logo={specimenIcon}
            header="Hand-picked specimen"
            subheader="Our growers inspect each leaf, node, and root system before selection. You get only thriving, nursery-grade plants."
          />

          <Card
            logo={openBookIcon}
            header="Care guides included"
            subheader="Every specimen arrives with personalized soil, watering, and light metrics. We guarantee your confident parenting."
          />

          <Card
            logo={truckIcon}
            header="Local greenhouse delivery"
            subheader="Safely transported in climate-conditioned vans straight to your doorstep. Free local delivery over $75."
          />
        </div>
      </section>
    </>
  );
}

export default Promise;
