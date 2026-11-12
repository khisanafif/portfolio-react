import data from "../../data/index.json";
import Tilt3D from "../../components/Tilt3D";

export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <p className="sub--title">My Skills</p>
        <h2 className="skills--section--heading">My Expertise</h2>
      </div>
      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <Tilt3D
            key={item.id || index}
            className="skills--section--card"
            maxTilt={8}
            scale={1.03}
          >
            <div className="skills--section--img layer-3d-pop">
              <img src={item.src} alt={item.title} />
            </div>
            <div className="skills--section--card--content layer-3d-mid">
              <h3 className="skills--section--title">{item.title}</h3>
              <p className="skills--section--description">{item.description}</p>
              {item.tags && (
                <div className="skills--tags">
                  {item.tags.map((tag, idx) => (
                    <span key={idx} className="skills--tag">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </Tilt3D>
        ))}
      </div>
    </section>
  );
}
