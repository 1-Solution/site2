import Social from "@components/Social";
import config from "@config/config.json";
import menu from "@config/menu.json";
import social from "@config/social.json";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import { useRouter } from 'next/router'
import Link from "next/link";


const Footer = () => {
  const router = useRouter()
  const { pathname, asPath, query, locale } = router
  const { footer_content } = config[locale].params;
  const { footer } = menu;

  const changeLocale = (nextLocale) => {
    router.push({ pathname, query }, asPath, { locale: nextLocale });
  }

  return (
    <footer className="section bg-theme-light pb-0">
      <div className="container">
        {/* footer menu */}
        <div className="row">
          {footer.map((col) => {
            return (
              <div className="mb-12 sm:col-6 lg:col-3" key={col.name}>
                {markdownify(col.name, "h2", "h4")}
                <ul className="mt-6">
                  {col?.menu.map((item) => (
                    <li className="mb-1" key={item.text}>
                      <Link href={item.url} rel="">
                        {item.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
          {/* social icons */}
          <div className="md-12 sm:col-6 lg:col-3">
            <Link href="/" aria-label="Bigspring">
              <Image
                src={config.site.logo}
                width={config.site.logo_width}
                height={config.site.logo_height}
                alt=""
              />
            </Link>
            {markdownify(footer_content, "p", "mt-3 mb-6")}
            <Social source={social} className="social-icons mb-8" />
          </div>
        </div>
        {/* copyright */}
        <div className="border-t border-border py-6">
          <span
            onClick={() => {
              changeLocale('fr')
            }}
          >
            fr
          </span>
          <span className="mx-2">|</span>
          <span
            onClick={() => {
              changeLocale('en')
            }}
          >
            en
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
