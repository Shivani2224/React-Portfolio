import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 bg-gray-50 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[oklch(70.4%_0.14_182.503)]">
        Contact Us
      </h2>

      <form className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow space-y-4 text-left">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[oklch(70.4%_0.14_182.503)]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[oklch(70.4%_0.14_182.503)]"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea
            name="message"
            rows="4"
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[oklch(70.4%_0.14_182.503)]"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-[oklch(70.4%_0.14_182.503)] text-white px-6 py-2 rounded hover:opacity-90 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
