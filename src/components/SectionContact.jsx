import React from "react";
import SectionTitleComponent from "./SectionTitleComponent";

function SectionContact() {
  return (
    <section id="contact" className="section_contact section_padding">
      <div className="container">
        <SectionTitleComponent
          header={"Contact"}
          text={
            "Get in Touch! Reach out to discuss collaborations, project inquiries, or just to say hello. I'm eager to hear from you and explore how we can work together to bring your ideas to life. Don't hesitate to drop me a message—I'm here to help!"
          }
        />

        <div className="contact-form-container">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SectionContact;
