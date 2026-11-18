import { useState } from "react";
import { useApp } from "../../context/AppContext";
import { translations } from "../../data/translations";

function MailIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

export default function ContactMe() {
  const { lang } = useApp();
  const t = translations[lang].contact;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
    topic: "",
    message: "",
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);
  const [lastMailtoUrl, setLastMailtoUrl] = useState("");
  const [lastComposedText, setLastComposedText] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(t.emailAddress);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      window.location.href = `mailto:${t.emailAddress}`;
    }
  };

  const handleCopyMessage = async () => {
    if (!lastComposedText) return;
    try {
      await navigator.clipboard.writeText(lastComposedText);
      setCopiedMessage(true);
      setTimeout(() => setCopiedMessage(false), 2200);
    } catch {
      // Fallback ignored if clipboard blocked
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const fullName = `${formData.firstName} ${formData.lastName}`.trim();
    const subject = `[Portfolio] ${formData.topic} — ${fullName}`;
    const bodyLines = [
      `Halo Khisan,`,
      "",
      `Nama: ${fullName}`,
      `Email: ${formData.email}`,
      formData.organization ? `Instansi / Peran: ${formData.organization}` : null,
      `Topik: ${formData.topic}`,
      "",
      "Pesan:",
      formData.message,
    ].filter((line) => line !== null);

    const formattedBody = bodyLines.join("\n");
    const mailtoUrl = `mailto:${t.emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(formattedBody)}`;

    setLastComposedText(`Subject: ${subject}\n\n${formattedBody}`);
    setLastMailtoUrl(mailtoUrl);
    window.location.href = mailtoUrl;
  };

  return (
    <section id="Contact" className="contact--section">
      <div className="contact--header">
        <p className="sub--title">{t.subTitle}</p>
        <h2 className="sections--heading">{t.heading}</h2>
        <p className="text-lg contact--subtitle">{t.description}</p>
        <div className="contact--status-row">
          <span className="contact--status-pill">
            <span className="hero--badge--dot" aria-hidden="true"></span>
            {t.availability}
          </span>
          <span className="contact--location-pill">📍 {t.location}</span>
        </div>
      </div>

      <div className="contact--hub-grid">
        {/* Left Column: Direct Email, LinkedIn & GitHub */}
        <div className="contact--channels">
          <div className="contact--channel-card contact--channel-email">
            <div className="contact--channel-top">
              <div className="contact--channel-icon contact--icon-email">
                <MailIcon />
              </div>
              <div>
                <h3 className="contact--channel-title">{t.emailTitle}</h3>
                <p className="contact--channel-handle">{t.emailAddress}</p>
              </div>
            </div>
            <p className="contact--channel-desc">{t.emailDesc}</p>
            <div className="contact--channel-actions">
              <a
                href={`mailto:${t.emailAddress}?subject=${encodeURIComponent(
                  "Collaboration / Opportunity Inquiry"
                )}`}
                className="btn btn-primary btn-3d contact--channel-btn"
              >
                <MailIcon />
                <span>{t.emailBtn}</span>
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="btn btn-outline-primary contact--copy-btn"
              >
                {copiedEmail ? t.copiedBtn : t.copyEmailBtn}
              </button>
            </div>
          </div>

          <div className="contact--channel-card contact--channel-linkedin">
            <div className="contact--channel-top">
              <div className="contact--channel-icon contact--icon-linkedin">
                <LinkedInIcon />
              </div>
              <div>
                <h3 className="contact--channel-title">{t.linkedinTitle}</h3>
                <p className="contact--channel-handle">{t.linkedinHandle}</p>
              </div>
            </div>
            <p className="contact--channel-desc">{t.linkedinDesc}</p>
            <div className="contact--channel-actions">
              <a
                href={t.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-linkedin btn-3d contact--channel-btn"
              >
                <LinkedInIcon />
                <span>{t.linkedinBtn}</span>
              </a>
            </div>
          </div>

          <div className="contact--channel-card contact--channel-github">
            <div className="contact--channel-top">
              <div className="contact--channel-icon contact--icon-github">
                <GitHubIcon />
              </div>
              <div>
                <h3 className="contact--channel-title">{t.githubTitle}</h3>
                <p className="contact--channel-handle">{t.githubHandle}</p>
              </div>
            </div>
            <p className="contact--channel-desc">{t.githubDesc}</p>
            <div className="contact--channel-actions">
              <a
                href={t.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary contact--channel-btn"
              >
                <GitHubIcon />
                <span>{t.githubBtn}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Structured Email Composer Form */}
        <form
          className="contact--form--container contact--3d-card"
          onSubmit={handleSubmit}
        >
          <div className="contact--form-intro">
            <h3 className="contact--form-title">{t.formTitle}</h3>
            <p className="contact--form-subtitle">{t.formSubtitle}</p>
          </div>

          <div className="container">
            <label htmlFor="first-name" className="contact--label">
              <span className="text-md">{t.firstName}</span>
              <input
                type="text"
                className="contact--input text-md"
                name="firstName"
                id="first-name"
                placeholder={t.firstNamePh}
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </label>
            <label htmlFor="last-name" className="contact--label">
              <span className="text-md">{t.lastName}</span>
              <input
                type="text"
                className="contact--input text-md"
                name="lastName"
                id="last-name"
                placeholder={t.lastNamePh}
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </label>
            <label htmlFor="email" className="contact--label">
              <span className="text-md">{t.email}</span>
              <input
                type="email"
                className="contact--input text-md"
                name="email"
                id="email"
                placeholder={t.emailPh}
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <label htmlFor="organization" className="contact--label">
              <span className="text-md">{t.organization}</span>
              <input
                type="text"
                className="contact--input text-md"
                name="organization"
                id="organization"
                placeholder={t.organizationPh}
                value={formData.organization}
                onChange={handleChange}
              />
            </label>
          </div>

          <label htmlFor="choose-topic" className="contact--label">
            <span className="text-md">{t.topic}</span>
            <select
              id="choose-topic"
              className="contact--input text-md"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                {t.topicSelect}
              </option>
              {t.topics.map((topicName, idx) => (
                <option key={idx} value={topicName}>
                  {topicName}
                </option>
              ))}
            </select>
          </label>

          <label htmlFor="message" className="contact--label">
            <span className="text-md">{t.message}</span>
            <textarea
              className="contact--input text-md"
              id="message"
              rows="5"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t.messagePh}
              required
            />
          </label>

          <label htmlFor="checkbox" className="checkbox--label">
            <input type="checkbox" required name="checkbox" id="checkbox" />
            <span className="text-sm">{t.terms}</span>
          </label>

          <div className="contact--submit--wrap">
            <button
              type="submit"
              className="btn btn-primary btn-3d contact--form--btn"
            >
              <MailIcon />
              <span>{t.submit}</span>
            </button>
          </div>

          {lastMailtoUrl && (
            <div className="contact--submitted-banner" role="status">
              <p className="contact--submitted-title">{t.submittedTitle}</p>
              <p className="contact--submitted-desc">{t.submittedDesc}</p>
              <div className="contact--submitted-actions">
                <a
                  href={lastMailtoUrl}
                  className="btn btn-outline-primary contact--mini-btn"
                >
                  {t.openEmailAgain}
                </a>
                <button
                  type="button"
                  onClick={handleCopyMessage}
                  className="btn btn-outline-primary contact--mini-btn"
                >
                  {copiedMessage ? t.messageCopiedBtn : t.copyMessageBtn}
                </button>
                <a
                  href={t.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-linkedin contact--mini-btn"
                >
                  {t.connectLinkedin}
                </a>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
