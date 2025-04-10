import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form:", form);
    alert("Thanks for reaching out!");

    // Reset form
    setForm({ fullName: "", email: "" });
  };

  

  return (
    <div className="bg-white min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-gray-50 p-10 rounded-2xl shadow-xl">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-8">Get in Touch</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={form.fullName}
              onChange={handleInputChange}
              placeholder="John Doe"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleInputChange}
              placeholder="john@example.com"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition duration-300"
          >
            Submit Message
          </button>
        </form>

        <div className="mt-10 text-sm text-center text-gray-500">
          <p>We're happy to help! Expect a reply within 24 hours.</p>
          <p className="mt-2">Or email us directly at <a href="mailto:support@delight.com" className="text-indigo-600 underline">support@delight.com</a></p>
        </div>
      </div>
    </div>
  );
};






export default Contact;