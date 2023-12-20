import { markdownify } from "@lib/utils/textConverter";

function About({ data }) {
  const { frontmatter } = data;
  const { title, mission, vision, values, valueTitle, teamTitle, team } = frontmatter;
  return (
    <div>
      <section className="section">
        <div className="container">
          {markdownify(title, "h1", "text-center font-normal ")}
          <div className="section row  -mt-2">
            {vision.map((vision, index) => (
              <div key={index} className=" mt-2">
                <div className="bg-white p-12 shadow border feature-card rounded-xl">
                  <div className=" relative">
                    {markdownify(
                      vision.title,
                      "h2",
                      "text-center",
                      "font-normal"
                    )}
                  </div>
                  {markdownify(vision.answer, "p", "faq-body mt-4 text-center")}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="container">
          <div className="section row  -mt-2">
            {mission.map((mission, index) => (
              <div key={index} className=" mt-2">
                <div className="feature-card bg-white p-12 border rounded-xl">
                  <div className=" relative">
                    {markdownify(
                      mission.title,
                      "h2",
                      "text-center",
                      "font-normal"
                    )}
                  </div>
                  {markdownify(
                    mission.answer,
                    "p",
                    "faq-body mt-4 text-justify"
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-theme-light">
        <div className="container ">
          <div className="section row -mt-2 bg-theme-light">
            {markdownify(valueTitle, "h1", "text-center font-normal")}
            {values.map((values, index) => (
              <div key={index} className="col-12 md:col-6 mt-2">
                <div className="feature-card bg-white p-12 border rounded-xl full-height">
                  <div className="faq-head relative">
                    {markdownify(values.title, "h4")}
                  </div>
                  {markdownify(
                    values.answer,
                    "p",
                    "faq-body mt-4 text-justify"
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container ">
          <div className="section row -mt-2">
            {markdownify(teamTitle, "h1", "text-center font-normal")}
            {team.map((team, index) => (
              <div key={index} className="col-12 md:col-6 mt-2">
                <div className="feature-card bg-white p-12 border rounded-xl full-height">
                  <div className="relative text-center">
                    {markdownify(team.name, "h4")}
                  </div>
                  {markdownify(
                    team.bio,
                    "p",
                    "faq-body mt-4 text-justify"
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
