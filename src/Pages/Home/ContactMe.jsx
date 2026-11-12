import { useState } from "react";

export default function ContactMe() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    topic: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = [
      `First Name: ${formData.firstName}`,
      `Last Name: ${formData.lastName}`,
      `Email: ${formData.email}`,
      `Phone Number: ${formData.phoneNumber}`,
      `Topic: ${formData.topic}`,
      "",
      "Message:",
      formData.message,
    ].join("\n");

    const whatsappLink = `https://wa.me/6281230670853?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappLink, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="Contact" className="contact--section">
      <div className="contact--header">
        <p className="sub--title">Get In Touch</p>
        <h2 className="sections--heading">Contact Me</h2>
        <p className="text-lg">
          Have a project or collaboration in mind? Send me a message directly.
        </p>
      </div>
      <form className="contact--form--container" onSubmit={handleSubmit}>
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="firstName"
              id="first-name"
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="lastName"
              id="last-name"
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Phone Number</span>
            <input
              type="tel"
              className="contact--input text-md"
              name="phoneNumber"
              id="phone-number"
              placeholder="+62 812..."
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <label htmlFor="choose-topic" className="contact--label">
          <span className="text-md">Choose a topic</span>
          <select
            id="choose-topic"
            className="contact--input text-md"
            name="topic"
            value={formData.topic}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select One...
            </option>
            <option value="Penawaran Project">Penawaran Project</option>
            <option value="Kerjasama">Kerjasama</option>
            <option value="Lainnya">Lainnya</option>
          </select>
        </label>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="6"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type your message..."
            required
          />
        </label>
        <label htmlFor="checkbox" className="checkbox--label">
          <input type="checkbox" required name="checkbox" id="checkbox" />
          <span className="text-sm">I accept the terms</span>
        </label>
        <div className="contact--submit--wrap">
          <button type="submit" className="btn btn-primary contact--form--btn">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
