import { markdownify } from "@lib/utils/textConverter";

function Careers({ data }) {
  const { frontmatter } = data;
  const { title, careers} = frontmatter;
  return (
    <section className="section">
      <div className="container">
        {markdownify(title, "h1", "text-center font-normal")}
        <div className="section row  -mt-6">
          {careers.map((about, index) => (
            <div key={index} className="col-12 mt-6 md:col-6">
              <div className="p-12  shadow">
                <div className="faq-head relative">
                  {markdownify(careers.title, "h4")}
                </div>
                {markdownify(careers.answer, "p", "faq-body mt-4")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Careers;
