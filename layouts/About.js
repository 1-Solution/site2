import { markdownify } from "@lib/utils/textConverter";

function About({ data }) {
  const { frontmatter } = data;
  const { title, about} = frontmatter;
  return (

    
    <section className="section">
      <div className="container">
        {markdownify(title, "h1", "text-center font-normal")}
        <div className="section row  -mt-6">
          {about.map((about, index) => (
            <div key={index} className="col-6 mt-6 md:col-6">
              <div className="p-12  shadow">
                <div className="faq-head relative">
                  {markdownify(about.title, "h4")}
                </div>
                {markdownify(about.answer, "p", "faq-body mt-4")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    
  );
}

export default About;
