function Contact() {
  return (
    <section id="contact" className="contact">

      <div className="section-title">
        <h2>Contact Me</h2>
      </div>

      <div className="contact-container">

        <div className="contact-info">

          <h3>Let's Connect</h3>

          <p>
            I'm always interested in discussing
            software development, AI, internships,
            freelance work, and collaboration opportunities.
          </p>

          <div className="contact-details">

            <p>
              📧 imtiyazhaider11@gmail.com
            </p>

            <p>
              📍 India
            </p>

            <p>
              💻 github.com/imtiyazhaiider
            </p>

          </div>

        </div>

        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <input
            type="text"
            placeholder="Subject"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;