import data from "../../data/index.json";

export default function AchievementList() {
  return (
    <section className="achievement--section" id="achievement" style={{ marginLeft: '100px' }}>
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Skills & Achievements</p>
          <h2 className="sections--heading">Achievement List</h2>
        </div>
      </div>
      <ul className="achievement--section--container" style={{ listStyle: 'none', padding: 0 }}>
        {data?.achievement?.map((item, index) => (
          <li key={index} className="achievement--section--card" style={{ width: 'calc(50% - 8px)', marginBottom: '16px' }}>
            <img src={item.certificateImage} alt="Certificate" className="achievement--section--card--image" style={{ maxWidth: '100%', height: 'auto' }} />
            <div className="achievement--section--card--content" style={{ padding: '16px' }}>
              <h3 className="achievement--title" style={{ margin: '0', marginBottom: '8px' }}>{item.achievementName}</h3>
              <p className="achievement--year" style={{ margin: '0' }}>Year: {item.year}</p>
              <p className="achievement--author--designation" style={{ margin: '0', fontSize: '14px', color: '#888' }}>Author: {item.author}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
