import Social from "@components/Social";
import config from "@config/config.json";
import menu from "@config/menu.json";
import social from "@config/social.json";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

const Footer = () => {
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;
  const { footer_content } = config[locale].params;
  const { footer } = menu[locale];

  const changeLocale = (nextLocale) => {
    router.push({ pathname, query }, asPath, { locale: nextLocale });
  };

  return (
    <footer className="section footer pb-0">
      <div className="container">
        {/* footer menu */}
        <div className="row">
          <div className="col">
            {footer.map((col) => {
              return (
                <div className="mb-12 sm:col-3 lg:col-3" key={col.text}>
                  <Link href={col.url} rel="" className="h5 font-bold">
                    {col.text}
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="col-6">
            {/* social icons */}
            <div className="md-12 sm:col-3 lg:col-10">
              <Link href="/" aria-label="Bigspring">
                <Image
                  src={config.site.logo}
                  width={config.site.logo_width}
                  height={config.site.logo_height}
                  alt=""
                />
              </Link>
              {markdownify(footer_content, "p", "mt-3 mb-6")}
              <Image
                className="mb-5"
                src={config.footer.partner_logo}
                width={config.footer.partner_logo_width}
                height={config.footer.partner_logo_height}
                alt="Microsoft Partner"
              />
            </div>
          </div>
          <div className="border-t border-border py-6">
            <a href="#"
              onClick={() => {
                changeLocale("fr");
              }}
            >
              fr
            </a>
            <span className="mx-2">|</span>
            <a href="#"
              onClick={() => {
                changeLocale("en");
              }}
            >
              en
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
