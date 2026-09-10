import "../styles/Address.css";

function Address() {
  return (
    <>
      <section className="address-section">
        <div className="left-container">
          <div className="address-text-container text">
            <p className="address-subtitle sub-text text">VISIT OUR NURSERY</p>
            <h3 className="address-title main-text text">
              Come take a walk through our greenhouse
            </h3>
            <p className="address-description sub-text text">
              Located in the heart of the arts district, our physical nursery
              features thousands of specimen plants.
            </p>
          </div>
          <div className="address-info-container">
            <div className="address-location">
              <h5 className="location-title sub-text">ADDRESS</h5>
              <p className="location-text sub-text">
                420 Greenhouse Lane Portland, OR 97205
              </p>
            </div>
            <div className="address-schedule">
              <h5 className="schedule-title sub-text">HOURS</h5>
              <p className="schedule-text sub-text">
                Tue – Sat: 10am – 6pm Sun: 11am – 5pm
              </p>
            </div>
          </div>
        </div>
        <div className="address-map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.2568415862975!2d-122.76187202402986!3d45.504908071074695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495095e44b1695f%3A0x4cb773d74ea5c8bb!2sSW%20Greenhouse%20Ln%2C%20Portland%2C%20OR%2097225%2C%20USA!5e0!3m2!1sen!2sph!4v1788245996861!5m2!1sen!2sph"
            width="100%"
            height="120%"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
        <div>
          <form action="" className="form-container">
            <h2 className="newsletter-title main-text">Join the collective</h2>
            <p className="newsletter-description sub-text">
              Sign up for the collection drops notifications, botanic events in
              the nursery, and occasional care journals
            </p>
            <div className="form-details">
              <input
                className="form-email sub-text"
                type="email"
                placeholder="Enter your email address"
              />
              <button className="form-button sub-text">Subscribe</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Address;
