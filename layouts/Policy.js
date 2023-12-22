import { markdownify } from "@lib/utils/textConverter";

function Policy({ data }) {
  const { frontmatter } = data;
  const { title, info } = frontmatter;
  return (
    <div>
      <section className="section contact">
        <div className="container relative p-12">
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
