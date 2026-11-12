import data from "../../data/index.json";

export default function AchievementList() {
  return (
    <section className="achievement--section" id="achievement">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">My Achievements</p>
          <h2 className="sections--heading">Achievement List</h2>
        </div>
      </div>
      <ul className="achievement--section--container">
        {data?.achievement?.map((item, index) => (
          <li key={index} className="achievement--section--card">
            <div className="achievement--section--card--img-wrap">
              <img
                src={item.certificateImage}
                alt={item.achievementName}
                className="achievement--section--card--image"
                loading="lazy"
              />
            </div>
            <div className="achievement--section--card--content">
              <span className="achievement--year">{item.year}</span>
              <h3 className="achievement--title">{item.achievementName}</h3>
              <p className="achievement--author--designation">{item.author}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
