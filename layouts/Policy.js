import { markdownify } from "@lib/utils/textConverter";

function Policy({ data }) {
  const { frontmatter } = data;
  const { title, info, description } = frontmatter;
  return (
    <div>
      <section className="section">
        <div className="container">
          {markdownify(title, "h1", "text-center font-normal ")}
          <div>
          {markdownify(info.description, "p", "mt-4")}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Policy;
