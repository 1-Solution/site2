import { markdownify } from "@lib/utils/textConverter";
import { useState } from "react";

function Careers({ data }) {
  const { frontmatter } = data;
  const { title, profiles, cv, perks, perk_title, apply_now, fields } = frontmatter;
  const { name, email, selected_file, message, submit, upload_cv } = fields;
  const [selectedFile, setSelectedFile] = useState(null);


  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file.name);
    }
  };
  return (
    <div>
      <section className="career-section">
        <div className="container">
          {markdownify(title, "h1", "text-center font-normal")}
          <div className="section no-padding-bottom row -mt-4">
            {profiles.map((profile, index) => (
              <div key={index} className="mt-4">
                <div className="bg-white p-12 shadow feature-card rounded-xl">
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
          <div className="bg-white p-12 shadow feature-card rounded-xl flex flex-col justify-center items-center mt-4">
            <div className="relative">
              {markdownify(
                perk_title,
                "h2",
                "text-center",
                "font-normal")}
            </div>
            <ul className="career-ul p-8">
              {perks.map((perk, index) => (
                <li key={index} className="p8">
                  {markdownify(
                    perk.perk,
                    "text-center",
                    "font-normal"
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-12 shadow feature-card rounded-xl mt-4">
            <div className="relative mb-4">
              {markdownify(apply_now, "h2", "text-center")}
            </div>
            <form
              className="flex flex-col gap-4"
              method="POST"
              data-netlify="true"
              name="Career"
              encType="multipart/form-data"
            >
              <input type="hidden" name="form-name" value="Career" />
              <input
                type="text"
                name="name"
                placeholder={name}
                className="p-4 border border-gray-300 rounded-md"
                required
              />
              <input
                type="email"
                name="email"
                placeholder={email}
                className="p-4 border border-gray-300 rounded-md"
                required
              />
              <textarea
                placeholder={message}
                className="p-4 border border-gray-300 rounded-md"
                rows="4"
                name="message"
                required
              />
              <label className="flex items-center justify-center p-4 border border-gray-300 rounded-md text-lg font-semibold text-gray-700 cursor-pointer bg-gray-100 hover:bg-gray-200 transition">
                {upload_cv}
                <input
                  type="file"
                  name="cv"
                  required
                  hidden
                  onChange={handleFileChange}
                  aria-label={selected_file}
                />
              </label>
              {/* Display selected file name */}
              {selectedFile && (
                <p className="text-gray-600 text-sm mt-2">{selected_file}: {selectedFile}</p>
              )}
              <button
                type="submit"
                className="btn btn-primary"
              >
                {submit}
              </button>
            </form>
          </div>
          <div className="relative p-12">
          </div>
        </div>
      </section>
    </div>
  );
}

export default Careers;
