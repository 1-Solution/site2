import { markdownify } from "@lib/utils/textConverter";
import config from "@config/config.json";
import { IoBluetooth } from "react-icons/io5";

function About({ data }) {
  const { frontmatter } = data;
  const { title, mission, vision, values, valueTitle, teamTitle, team } = frontmatter;

  return (
    <div>
      {/* Vision & Mission Section */}
      <section className="section">
        <div className="container">
          {markdownify(title, "h1", "text-center font-normal")}
          <div className="section row -mt-2">
            {vision.map((item, index) => (
              <VisionCard key={index} title={item.title} answer={item.answer} />
            ))}
          </div>
        </div>
        <div className="container">
          <div className="section row -mt-2">
            {mission.map((item, index) => (
              <MissionCard key={index} title={item.title} answer={item.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section values-section">
        <div className="container">
          <div className="section row -mt-2 values-inner-section">
            {markdownify(valueTitle, "h1", "text-center font-normal")}
            {values.map((item, index) => (
              <ValueCard key={index} title={item.title} answer={item.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section no-padding-top">
        <div className="container">
          <div className="section row -mt-2">
            {markdownify(teamTitle, "h1", "text-center font-normal")}
            <div className="flex flex-wrap justify-center gap-4">
              {team.map((member, index) => (
                <TeamCard key={index} member={member} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function VisionCard({ title, answer }) {
  return (
    <div className="mt-2">
      <div className="bg-white p-12 shadow border feature-card rounded-xl">
        <div className="relative">
          {markdownify(title, "h2", "text-center font-normal")}
        </div>
        {markdownify(answer, "p", "mt-4 text-center")}
      </div>
    </div>
  );
}

function MissionCard({ title, answer }) {
  return (
    <div className="mt-2">
      <div className="feature-card bg-white p-12 border rounded-xl">
        <div className="relative">
          {markdownify(title, "h2", "text-center font-normal")}
        </div>
        {markdownify(answer, "p", "mt-4 text-justify")}
      </div>
    </div>
  );
}

function ValueCard({ title, answer }) {
  return (
    <div className="col-12 md:col-6 mt-2">
      <div className="feature-card bg-white p-12 border rounded-xl full-height">
        <div className="faq-head relative">
          {markdownify(title, "h4")}
        </div>
        {markdownify(answer, "p", "mt-4 text-justify")}
      </div>
    </div>
  );
}

function TeamCard({ member }) {
  const cardStyle = {
    perspective: "1000px",
  };

  const innerStyle = {
    position: "relative",
    width: "300px",
    height: "300px",
    margin: "0 auto", // Center the card within its container
    transformStyle: "preserve-3d",
    transition: "transform 0.5s ease-in-out, box-shadow 0.3s ease-in-out",
    borderRadius: "1rem",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const frontStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    backgroundImage: `url(/images/portrait/${member.photoId ? member.photoId : "default.jpg"})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "1rem",
  };

  const backStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    backgroundColor: "white",
    transform: "rotateY(180deg)",
    borderRadius: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    textAlign: "center"
  };

  const titleNameStyle = {
    position: "absolute",
    bottom: "10px",
    left: "50%",
    transform: "translateX(-50%)",
    color: "white",
    padding: "5px 5px",
    textAlign: "center",
    width: "100%",
  };

  const handleMouseEnter = (e) => {
    const element = e.currentTarget;
    element.style.boxShadow = "0 8px 15px rgba(0, 0, 0, 0.2)";
    setTimeout(() => {
      element.style.transform = "rotateY(180deg)";
    }, 100);
  };

  const handleMouseLeave = (e) => {
    const element = e.currentTarget;
    element.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
    setTimeout(() => {
      element.style.transform = "rotateY(0deg)";
    }, 100);
  };

  return (
    <div style={cardStyle} className="flex-shrink-0 w-[300px] m-6">
      <div
        style={innerStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div style={frontStyle} className="team-card-front">
          <div style={titleNameStyle}>
            {markdownify(member.title, "p")}
            <strong>{markdownify(member.name, "p")}</strong>
          </div>
        </div>
        <div style={backStyle} className="team-card-back">
          <div className="relative text-center bio">
            {markdownify(member.bio, "p")}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
