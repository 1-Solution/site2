import { markdownify } from "@lib/utils/textConverter";

function Policy({ data }) {
  const { frontmatter } = data;
  const { title, info, filename } = frontmatter;


  return (
    <div>
      <section className="section contact">
        <div className="container relative p-12">
          {markdownify(title, "h1", "text-center font-normal ")}
          <div className="p-4 text-center">
            {markdownify(info.description, "p", "text-center font-normal ")}
            <a href={`/content/${filename}`} target="_blank"> {markdownify(info.action, "p", "text-center font-normal text-blue-600 underline")} </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Policy;