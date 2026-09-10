import Title from "../components/Title";
import ImageCard from "../components/ImageCard";
import monstera from "../assets/monstera-deliciosa.svg";
import calathea from "../assets/calathea-orbifona.svg";
import fiddle from "../assets/fiddle-leaf.svg";
import laurentii from "../assets/laurentii.svg";

import "../styles/Collections.css";

function Collections() {
  return (
    <>
      <section className="collections-section">
        <Title
          subtitle="CURATED COLLECTION"
          mainTitle="Foliage for modern spaces"
        />
        <div className="collections-card">
          <ImageCard
            image={monstera}
            tag="COLLECTOR'S CHOICE"
            productName="Monstera Deliciosa"
            productSubName="Monstera Deliciosa"
            price="$65.00"
          />
          <ImageCard
            image={calathea}
            tag="PET FRIENDLY"
            productName="Calathea Orbifolia"
            productSubName="Calathea Orbifolia"
            price="$48.00"
          />
          <ImageCard
            image={fiddle}
            tag="STATEMENT PIECE"
            productName="Fiddle Leaf Fig"
            productSubName="Ficus Lyrata"
            price="$110.00"
          />
          <ImageCard
            image={laurentii}
            tag="EASY CARE"
            productName="Laurentii Snake Plant"
            productSubName="Sansevieria Trifasciata"
            price="$38.00"
          />
        </div>
      </section>
    </>
  );
}

export default Collections;
