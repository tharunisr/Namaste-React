import { useState } from "react";

const Contact = () => {
  // const [form, setForm] = useState({
  //   fullName: "",
  //   email: ""
  // });

  const [fullName,setfullName]=useState("");

  const [email,setEmail]=useState("");


  const handleSubmit = (e) => {
  
    // console.log("Contact Form:", form);
    alert("Thanks for reaching out!");

    // Reset form
    // setfullName("");
    // setEmail("");
  };

  

  return (
    <div className="bg-white min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-gray-50 p-10 rounded-2xl shadow-xl">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-8">Get in Touch</h2>

        <form className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Full Name</label>
            <input data-testid="name"
              type="text"
              name="fullName"
              value={fullName}
              onChange={(e)=>setfullName(e.target.value)}
              placeholder="John Doe"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Email Address</label>
            <input data-testid="email"
              type="email"
              name="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              placeholder="john@example.com"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit" onClick={handleSubmit}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition duration-300"
          >
            Submit Message
          </button>
        </form>

        <div className="mt-10 text-sm text-center text-gray-500">
          <p>We're happy to help! Expect a reply within 24 hours.</p>
          
        </div>
      </div>
    </div>
  );
};






export default Contact;