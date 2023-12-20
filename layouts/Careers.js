import { markdownify } from "@lib/utils/textConverter";

function Careers({ data }) {
  const { frontmatter } = data;
  const { title, profiles, cv, perks, perk_title} = frontmatter;
  return (
    <div title={title}>
      <section className="section">
        <div className="container">
          {markdownify(title, "h1", "text-center font-normal")}
          <div className="section row -mt-2">
            {profiles.map((profile, index) => (
              <div key={index} className="mt-2">
                <div className="bg-white p-12 shadow border feature-card rounded-xl">
                  <div className="relative">
                    {markdownify(
                      profile.title,
                      "h2",
                      "text-center",
                      "font-normal"
                    )}
                  </div>
                  {markdownify(profile.description, "p", "mt-4 text-justify")}
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white p-12 shadow border feature-card rounded-xl">
            <div className="relative">
              {markdownify(
                perk_title,
                "h2",
                "text-center",
                "font-normal")}
            </div>
          {perks.map((perk, index) => (
            <div key={index} className="mt-2">
              <div className="relative">
                    {markdownify(
                      perk.perk,
                      "text-left",
                      "font-normal"
                    )}
                  </div>
            </div>
          ))}
          </div>
          <div className="relative p-12">
              {markdownify(cv, "h5", "text-center")}
            </div>
        </div>
      </section>
    </div>
  );
}

export default Careers;
