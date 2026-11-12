import { useState } from "react";
import data from "../../data/index.json";
import Tilt3D from "../../components/Tilt3D";

export default function Experience() {
  const [activeTab, setActiveTab] = useState("ux");

  const items =
    activeTab === "ux"
      ? data?.experience?.ux || []
      : data?.experience?.organization || [];

  return (
    <section id="Experience" className="experience--section">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Career &amp; Leadership</p>
          <h2 className="sections--heading">Experience</h2>
        </div>

        <div className="experience--tabs" role="tablist" aria-label="Experience categories">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "ux"}
            className={`experience--tab-btn ${activeTab === "ux" ? "active" : ""}`}
            onClick={() => setActiveTab("ux")}
          >
            UX Research &amp; Design
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "organization"}
            className={`experience--tab-btn ${
              activeTab === "organization" ? "active" : ""
            }`}
            onClick={() => setActiveTab("organization")}
          >
            Organizational
          </button>
        </div>
      </div>

      <div className="experience--grid">
        {items.map((item) => (
          <Tilt3D
            key={item.id}
            className="experience--card"
            maxTilt={6}
            scale={1.02}
          >
            <div className="experience--card-top layer-3d-mid">
              <span className="experience--period">{item.period}</span>
              <span className="experience--location">{item.location}</span>
            </div>
            <div className="experience--card-body layer-3d-mid">
              <h3 className="experience--role">{item.role}</h3>
              <p className="experience--org">{item.organization}</p>
              <ul className="experience--highlights">
                {item.highlights.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </Tilt3D>
        ))}
      </div>
    </section>
  );
}

