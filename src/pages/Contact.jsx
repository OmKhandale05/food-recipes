const Contact = () => {
  return (
    <section className="max-w-4xl mx-auto py-16 px-6 ">
      <h1 className="text-4xl font-bold  text-center mb-4">Contact Us</h1>
      <p className="text-grey-600 text-center mb-10 text-lg">
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

      <div className="bg-gray-50 shadow-md rounded-xl p-8 text-center space-y-4 mt-5">
        <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
        <div className="flex justify-center gap-8 mt-4">
          <p className="text-gray-700">Email: support@foodrecipes.in</p>
          <p className="text-gray-700">Phone: +91 1234567898</p>
          <p className="text-gray-700">Location: Hyderabad, India</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
