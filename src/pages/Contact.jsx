import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";
const Contact = () => {
  return (
    <section className="max-w-4xl mx-auto py-16 px-6 ">
      <h1 className="text-4xl font-bold  text-center mb-4">Contact Us</h1>
      <p className="text-gray-600 text-center mb-10 text-lg">
        Feel free to reach out for recipe suggestions or feedback.
      </p>
      <div className="bg-white shadow-md rounded-xl p-8">
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea
              rows="4"
              placeholder="Write your message"
              className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="bg-gray-50 shadow-md rounded-xl p-8 mt-10">
        <h2 className="text-2xl font-semibold text-center mb-8">Contact Information</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center gap-2 text-gray-700">
                <EnvelopeIcon className="w-6 h-6 text-orange-500"/>
                <span>support@foodrecipes.in</span>
            </div>
            <div className="flex flex-col items-center gap-2 text-gray-700">
                <PhoneIcon className="w-6 h-6 text-orange-500"/>
                <span>+91 1234567898</span>
            </div>
            <div className="flex flex-col items-center gap-1 text-gray-700">
                <MapPinIcon className="w-6 h-6 text-orange-500"/>
                <span></span>Hyderabad, India
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
