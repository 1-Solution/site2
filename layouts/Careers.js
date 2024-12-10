import { markdownify } from "@lib/utils/textConverter";
import { useState } from "react";

function Careers({ data }) {
  const { frontmatter } = data;
  const { title, profiles, cv, perks, perk_title, apply_now, fields } = frontmatter;
  const { name, email, selected_file, message, submit, upload_cv } = fields;
  const [selectedFile, setSelectedFile] = useState(null);
  const [activeProfile, setActiveProfile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file.name);
    }
  };

  const closePopup = () => setActiveProfile(null);

  return (
    <div>
      <section className="career-section section">
        <div className="container">
          {markdownify(title, "h1", "text-center font-normal" )}

          <ProfilesSection
            profiles={profiles}
            setActiveProfile={setActiveProfile}
          />

          {activeProfile && (
            <ProfilePopup profile={activeProfile} onClose={closePopup} />
          )}

          <PerksSection perkTitle={perk_title} perks={perks} />

          <ApplicationForm
            applyNow={apply_now}
            fields={{ name, email, selected_file, message, submit, upload_cv }}
            selectedFile={selectedFile}
            handleFileChange={handleFileChange}
          />
        </div>
      </section>
    </div>
  );
}

function ProfilesSection({ profiles, setActiveProfile }) {
  return (
    <div className="section no-padding-bottom row -mt-4 grid grid-cols-12">
      {profiles.map((profile, index) => (
        <ProfileCard
          key={index}
          profile={profile}
          onClick={() => setActiveProfile(profile)}
        />
      ))}
    </div>
  );
}

function ProfileCard({ profile, onClick }) {
  return (
    <div 
      className="mt-4 col-span-4 cursor-pointer"
      onMouseEnter={(e) => { 
        e.currentTarget.style.transform = "scale(1.1)"
        e.currentTarget.querySelector("h2").style.textDecoration = "underline";
      }}
      onMouseLeave={(e) => { 
        e.currentTarget.style.transform = "scale(1)"
        e.currentTarget.querySelector("h2").style.textDecoration = "none";
      }}
      onClick={onClick}
    >
      <div className="bg-white p-6 shadow feature-card rounded-xl min-h-full">
        <div className="relative">
          {markdownify(profile.title, "h2", "text-center font-normal min-h-28" )}
        </div>
        <div className="mt-4 text-left">
          {markdownify(`${profile.description.slice(0, 100)}...`, "p", "text-sm")}
        </div>
      </div>
    </div>
  );
}

function ProfilePopup({ profile, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg max-w-2xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600"
        >
          &times;
        </button>
        <div>
          {markdownify(profile.title, "h2", "text-center font-bold text-xl mb-4" )}
          {markdownify(profile.description, "p", "text-justify" )}
          <ul className="p-8 list-disc">
            {profile.skills.map((skill, index) => (
              <li key={index} className="">
                {markdownify(skill.skill, "span", { className: "text-center font-normal" })}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function PerksSection({ perkTitle, perks }) {
  return (
    <div className="bg-white p-12 shadow feature-card rounded-xl flex flex-col justify-center items-center mt-4">
      <div className="relative">
        {markdownify(perkTitle, "h2", "text-center font-normal" )}
      </div>
      <ul className="career-ul p-8">
        {perks.map((perk, index) => (
          <li key={index} className="p-2">
            {markdownify(perk.perk, "span", { className: "text-center font-normal" })}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ApplicationForm({ applyNow, fields, selectedFile, handleFileChange }) {
  const { name, email, selected_file, message, submit, upload_cv } = fields;

  return (
    <div className="bg-white p-12 shadow feature-card rounded-xl mt-4">
      <div className="relative mb-4">
        {markdownify(applyNow, "h2", "text-center font-normal" )}
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
        {selectedFile && (
          <p className="text-gray-600 text-sm mt-2">
            {selected_file}: {selectedFile}
          </p>
        )}
        <button type="submit" className="btn btn-primary">
          {submit}
        </button>
      </form>
    </div>
  );
}

export default Careers;
