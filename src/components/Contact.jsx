import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setStatus("Sending...");

    emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(
        () => {
          setStatus("Message sent successfully!");

          form.current.reset();
        },
        () => {
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <div className="section-title">
        <h2>Contact Me</h2>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Let's Connect</h3>

          <p>
            I'm always interested in discussing software
            development, AI, internships, freelance work,
            and collaboration opportunities.
          </p>

          <div className="contact-details">
            <p>imtiyazhaider11@gmail.com</p>

            <p>India</p>

            <p>github.com/imtiyazhaiider</p>
          </div>
        </div>

        <form
          ref={form}
          className="contact-form"
          onSubmit={sendEmail}
        >
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
          />

          <textarea
            rows="6"
            name="message"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>

          {status && (
            <p
              style={{
                marginTop: "15px",
                color: "#4db5ff",
                fontWeight: "600",
              }}
            >
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;