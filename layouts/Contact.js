import config from "@config/config.json";
import { markdownify } from "@lib/utils/textConverter";
import { useRouter } from "next/router";

const Contact = ({ data }) => {
  const router = useRouter();
  const { locale } = router;
  const { frontmatter } = data;
  const { title, info, fields } = frontmatter;
  const { name, email, subject, message, submit } = fields;
  const { contact_form_action } = config[locale].params;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        // Email sent successfully, show a success message or redirect the user.
        console.log('Email sent successfully');
      } else {
        // Handle email sending errors here
        console.error('Email sending failed:', data.error);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <section className="section contact">
      <div className="container">
        {markdownify(title, "h1", "text-center font-normal")}
        <div className="section row pb-0">
          <div className="col-12 md:col-6 lg:col-7">
            <form
              className="contact-form"
              method="POST"
              action={contact_form_action}
              onSubmit={handleSubmit}
            >
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
                  className="form-textarea w-full rounded-md"
                  rows="7"
                  placeholder={message}
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
