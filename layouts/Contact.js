import config from "@config/config.json";
import { markdownify } from "@lib/utils/textConverter";
import { useRouter } from "next/router";
import { useState } from "react";

const Contact = ({ data }) => {
  const router = useRouter();
  const { locale } = router;
  const { frontmatter } = data;
  const { title, info, fields } = frontmatter;
  const { name, email, subject, message, submit } = fields;
  const { contact_form_action } = config[locale].params;

  return (
    <section className="section contact">
      <div className="container">
        {markdownify(title, "h1", "text-center font-normal")}
        <div className="section row pb-0">
          <div className="col-12 md:col-6 lg:col-7">
            <form
              className="contact-form"
              method="POST"
              data-netlify="true"
              name="Contact"
              encType="multipart/form-data"
            >
              <input type="hidden" name="form-name" value="Contact" />
              <div className="mb-3">
                <input
                  className="form-input w-full rounded"
                  name="name"
                  type="text"
                  placeholder={name}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-input w-full rounded"
                  name="email"
                  type="email"
                  placeholder={email}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-input w-full rounded"
                  name="subject"
                  type="text"
                  placeholder={subject}
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  name="message"
                  className="form-textarea w-full rounded-md"
                  rows="7"
                  placeholder={message}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                {submit}
              </button>
            </form>

          </div>
          <div className="content col-12 md:col-6 lg:col-5">
            {markdownify(info.title, "h4")}
            {markdownify(info.description, "p", "mt-4")}
            <ul className="contact-list mt-5">
              {info.contacts.map((contact, index) => (
                <li key={index}>
                  {markdownify(contact, "strong", "text-dark")}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
