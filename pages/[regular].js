import NotFound from "@layouts/404";
import Base from "@layouts/Baseof";
import Contact from "@layouts/Contact";
import Default from "@layouts/Default";
import Careers from "@layouts/Careers";
import Policy from "@layouts/Policy"
import About from "@layouts/About";
import { getRegularPage, getSinglePage } from "@lib/contentParser";

// for all regular pages
const RegularPages = ({ data }) => {
  const { title, meta_title, description, image, noindex, canonical, layout} = data.frontmatter;
  const { content } = data;

  return (
    <Base
      title={title}
      description={description ? description : content.slice(0, 120)}
      meta_title={meta_title}
      image={image}
      noindex={noindex}
      canonical={canonical}
    >
      {layout === "404" ? (
        <NotFound data={data} />
      ) : layout === "contact" ? (
        <Contact data={data} />
      ) : layout === "careers" ? (
        <Careers data={data} />
      ) : layout === "about" ? (
        <About data={data} />
      ) : layout === "policy" ? (
        <Policy data={data} />
      ):(
        <Default data={data} />
      )}
    </Base>
  );
};
export default RegularPages;

// for regular page routes
export const getStaticPaths = async () => {
  const allFiles = getSinglePage("content");
  const paths = allFiles.map((f) => {
    return {
      params: {
        regular: f.slug,
      },
      locale: f.locale,
    }
  });

  return {
    paths,
    fallback: true,
  };
};

// for regular page data
export const getStaticProps = async ({ params, locale }) => {
  const { regular } = params;
  const regularPage = await getRegularPage(regular, locale);

  return {
    props: {
      slug: regular,
      data: regularPage,
    },
  };
};
