import Social from "@components/Social";
import config from "@config/config.json";
import menu from "@config/menu.json";
import social from "@config/social.json";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const { footer_content } = config.params;
  const { footer } = menu;
  return (
    <footer className="section footer pb-0">
      <div className="container">
        {/* footer menu */}
        <div className="row">
          {footer.map((col) => {
            return (
              <div className="mb-12 sm:col-3 lg:col-3" key={col.text}>
                  <Link href={col.url} rel="" className="h4 font-bold">
                    {col.text}
                  </Link>
              </div>
            );
          })}
          {/* social icons */}
          <div className="md-12 sm:col-3 lg:col-5">
            <Link href="/" aria-label="Bigspring">
              <Image
                src={config.site.logo}
                width={config.site.logo_width}
                height={config.site.logo_height}
                alt=""
              />
            </Link>
            {markdownify(footer_content, "p", "mt-3 mb-6")}
            <Social source={social} className="social-icons mb-10" />
          </div>
        </div>
        <div className="border-t border-border py-6">
        </div>
      </div>
    </footer>
  );
};

export default Footer;
