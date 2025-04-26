import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import { Helmet } from "react-helmet";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_o5waciu", "template_9k3oxyt", form.current, {
        publicKey: "Ixlh6vm8McR5cAfbL",
      })
      .then(
        () => {
          alert("Message sent successfully!");
          window.location.reload(false);
        },
        (error) => {
          alert("Failed to send message, please try again.");
          console.error("Error sending email:", error);
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <Helmet>
        <title>Contact | Philip Okeniyi</title>
        <meta
          name="description"
          content="Get in touch with Philip Okeniyi for collaborations, freelance opportunities, or tech discussions."
        />
        <meta property="og:title" content="Contact | Philip Okeniyi" />
        <meta
          property="og:description"
          content="Reach out via the contact form or connect through social media."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <h2 className="contact-title">Contact Me</h2>
      <section className="contact__container">
        <p>
          I am available for freelance and full-time opportunities. I am always
          open to discussing new projects, creative ideas, or opportunities to
          be part of your vision.
        </p>

        <p>
          Feel free to reach out to me at{" "}
          <a href="mailto:okeniyiphilip@gmail.com">okeniyiphilip@gmail.com</a>{" "}
          or by using the form below.
        </p>

        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <div className="contact__form__container">
            <label htmlFor="name_from">
              Name {/* <abbr title="subject field is required">*</abbr> */}
            </label>
            <input type="text" name="name_from" required />
          </div>

          <div className="contact__form__container">
            <label htmlFor="email_from">Email</label>
            <input type="email" name="email_from" required />
          </div>

          <div className="contact__form__container">
            <label htmlFor="title_from">Subject</label>
            <input type="text" name="title_from" required />
          </div>

          <div className="contact__form__container">
            <label htmlFor="message">Message</label>
            <textarea name="message" rows={5} />
          </div>

          <input type="submit" value="Send" className="contact_submit" />
        </form>
      </section>
    </section>
  );
}
export default Contact;
