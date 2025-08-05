import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          Get In <span className="text-teal-600">Touch</span>
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Have a project in mind or want to discuss opportunities? I'd love to
          hear from you!
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
            <p className="mb-6 text-gray-600">
              I'm always excited to work on new projects and collaborate with
              passionate individuals and teams. Whether you have a specific
              project in mind or just want to explore possibilities, feel free
              to reach out.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg shadow-sm">
                <div className="text-teal-600 text-xl">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-sm">Patelshivani1410@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg shadow-sm">
                <div className="text-teal-600 text-xl">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-sm">Ontario, Canada</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg shadow-sm">
                <div className="text-teal-600 text-xl">
                  <FaCheckCircle />
                </div>
                <div>
                  <p className="font-semibold">Availability</p>
                  <p className="text-sm">
                    Currently available for new projects and opportunities. I
                    typically respond within 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Send Message</h3>
            <form className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label className="text-sm font-medium">Your Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div className="flex-1">
                  <label className="text-sm font-medium">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">Subject</label>
                <input
                  type="text"
                  placeholder="Project Discussion"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Message</label>
                <textarea
                  placeholder="Tell me about your project..."
                  rows="4"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700 transition"
              >
                <FaPaperPlane />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
