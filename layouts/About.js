import { markdownify } from "@lib/utils/textConverter";

function About({ data }) {
  const { frontmatter } = data;
  const { title, mission, vision, values } = frontmatter;
  return (
    (
      <section className="section">
        <div className="container">
          {markdownify(title, "h1", "text-center font-normal")}
          <div className="section row  -mt-6">
            {mission.map((mission, index) => (
              <div key={index} className="col-6 mt-6 md:col-6">
                <div className="p-12  shadow">
                  <div className=" relative">
                    {markdownify(mission.title, "h4","text-center font-normal")}
                  </div>
                  {markdownify(mission.answer, "p", "faq-body mt-4")}
                </div>
              </div>
            ))}
          </div>
          <div className="section row  -mt-6">
            {values.map((values, index) => (
              <div key={index} className="col-6 mt-6 md:col-6">
                <div className="p-12  shadow">
                  <div className="faq-head relative">
                    {markdownify(values.title, "h4")}
                  </div>
                  {markdownify(values.answer, "p", "faq-body mt-4")}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  );
}

export default About;
