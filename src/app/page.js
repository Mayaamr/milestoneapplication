"use client";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import logo from "@/app/public/assets/painted-logo.png";
import mstonelogo from "@/app/public/assets/mstone.png";
import ect from "@/app/public/assets/eact-.png";
import bSocity from "@/app/public/assets/b-society.png";

export default function MilestoneForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Construct form data
    const formData = new FormData(e.target);
    const urlEncodedData = new URLSearchParams(formData).toString();

    try {
      const response = await fetch(
        "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeXwT86LCOPGJ9s7dcDgjyePMlJW9H3tLN8daJmzSsW5joqaA/formResponse",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: urlEncodedData,
          mode: "no-cors", // Google Forms does not return CORS responses
        }
      );

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000); // Hide success message after 5 seconds
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Milestone Application</title>{" "}
        <meta
          name="description"
          content="Apply to Milestone and unlock your potential"
        />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-red-100 p-4 sm:p-6 md:p-8 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

        <nav className="relative z-10 mb-12">
          <ul className="flex items-center justify-center gap-8">
            <li>
              <a
                href="https://enactusmans.com/"
                className="text-gray-800 hover:text-purple-600 transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="mailto:info@enactusmans.com"
                className="text-gray-800 hover:text-purple-600 transition-colors duration-300"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>

        <div className="relative z-10 flex flex-col items-center mb-12">
          <Image
            className="mb-4 drop-shadow-md"
            src={logo || "/placeholder.svg"}
            width={100}
            height={100}
            alt="Logo"
          />
          <Image
            className="drop-shadow-md"
            src={mstonelogo || "/placeholder.svg"}
            width={500}
            height={200}
            alt="Milestone Logo"
          />

          <div className="flex flex-col items-center justify-center max-w-[40rem] mt-[-6rem]">
            <Image
              className="drop-shadow-md"
              src={ect || "/placeholder.svg"}
              width={600}
              height={200}
              alt="Milestone Logo"
            />
            <p className="text-yellow-400 font-bold text-[3rem]">NOTE!</p>
            <p className="text-gray-700 items-center text-center">
              PLEASE ANSWER ALL THE QUESTIONS IN APPROPRIATE ENGLISH ONLY
              WITHOUT USING ANY FRANCO-ARABIC, EMOJIS OR SYMBOLS. WE WISH YOU
              ALL THE BEST OF LUCK!
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-[1.02]">
          <div className="p-8 sm:p-12">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
              Unlock Your Potential with Milestone!
            </h1>
            <p className="text-center text-gray-600 mb-12 text-lg">
              We are Drawing chances.
            </p>
            <form onSubmit={handleSubmit} className="space-y-12">
              <Section title="Personal Information ℹ️">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField name="entry.1072741402" label="Name" />
                  <FormField
                    name="entry.1679749715"
                    label="Age"
                    type="number"
                  />
                  <FormField name="entry.530419223" label="Faculty" />
                  <FormField name="entry.833089096" label="Cellular" />
                  <FormField name="entry.1956175300" label="Address" />
                  <FormField
                    name="entry.1259163365"
                    label="Academic Year"
                    type="radio"
                    options={["1st", "2nd", "3rd", "4th", "5th"]}
                  />
                </div>
              </Section>

              <Section title="We Want to Know More About You">
                <div className="space-y-6">
                  <FormField
                    name="entry.1906036604"
                    label="Why do you want to join Milestone?"
                    textarea
                  />
                  <FormField
                    name="entry.1146697059"
                    label="Have you joined any student activity before? If yes, what was it? What was your role?"
                    textarea
                  />
                  <FormField
                    name="entry.27264011"
                    label="What fields are you interested in?"
                    select
                  >
                    <option value="">Select an option</option>
                    <option value="Data Collection">Data Collection</option>
                    <option value="Presentation">Presentation</option>
                    <option value="Script Writing">Script Writing</option>
                    <option value="Graphic Design">Graphic Design</option>
                  </FormField>
                  <FormField
                    name="entry.350118829"
                    label="What is your availability in terms of hours per week?"
                    type="number"
                  />
                  <FormField
                    name="entry.2117445651"
                    label="What are your strengths and weaknesses?"
                    textarea
                  />
                  <FormField
                    name="entry.1629061056"
                    label="Do you have any questions for us?"
                    textarea
                  />
                </div>
              </Section>

              <div className="flex flex-col justify-center pt-6">
                <button
                  type="submit"
                  className={`w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-lg rounded-md font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </button>
                {isSubmitted && (
                  <p className="text-center text-green-400 mt-4">
                    Your application has been submitted successfully.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>

        <div className="flex flex-col gap-6 mt-14 mb-6 items-center justify-center">
          <p className="text-lg font-bold text-gray-800 border-b border-gray-300 pb-2">
            Main Sponsor
          </p>
          <Image
            className="drop-shadow-md"
            src={bSocity || "/placeholder.svg"}
            width={100}
            height={200}
            alt="Milestone Logo"
          />
        </div>
      </div>
      <footer>
        <div class="bar w-full bg-yellow-500 text-black">
          <p className="text-center">© 2025 Enactus Mansoura University</p>
        </div>
      </footer>
    </>
  );
}

function Section({ title, children }) {
  return (
    <section className="space-y-6 transition-all duration-300 ease-in-out">
      <h2 className="text-3xl font-bold text-gray-800 border-b border-gray-300 pb-2">
        {title}
      </h2>
      {children}
    </section>
  );
}

function FormField({
  name,
  label,
  type = "text",
  textarea,
  select,
  options,
  children,
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      {textarea ? (
        <textarea
          id={name}
          name={name}
          required
          className="w-full min-h-[120px] px-4 py-3 text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 ease-in-out resize-none"
        />
      ) : select ? (
        <select
          id={name}
          name={name}
          required
          className="w-full px-4 py-3 text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 ease-in-out"
        >
          {children}
        </select>
      ) : type === "radio" ? (
        <div className="space-y-2">
          {options.map((option) => (
            <label key={option} className="inline-flex items-center mr-4">
              <input
                type="radio"
                name={name}
                value={option}
                className="form-radio text-purple-600 focus:ring-purple-500 h-5 w-5"
              />
              <span className="ml-2 text-gray-700">{option}</span>
            </label>
          ))}
        </div>
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          required
          className="w-full px-4 py-3 text-gray-700 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 ease-in-out"
        />
      )}
    </div>
  );
}
