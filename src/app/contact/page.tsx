export const metadata = {
  title: "Contact Us - Netportal Solutions",
  description: "Get in touch with Netportal Solutions for IT consulting inquiries.",
};

export default function ContactPage() {
  return (
    <div className="bg-gray-50 dark:bg-zinc-900 py-16 md:py-24">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-gray-900 dark:text-gray-50">
          Contact Netportal Solutions
        </h1>

        <p className="text-xl text-center max-w-3xl mx-auto mb-16 text-gray-700 dark:text-gray-300">
          We'd love to hear from you! Whether you have a question about our
          services, need technical support, or want to explore a partnership,
          our team is ready to assist.
        </p>

        <div className="max-w-xl mx-auto bg-white dark:bg-zinc-800 p-8 rounded-lg shadow-lg">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-700 dark:text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-zinc-700 text-gray-900 dark:text-gray-100"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-zinc-700 text-gray-900 dark:text-gray-100"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-zinc-700 text-gray-900 dark:text-gray-100"
                placeholder="Your message..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ease-in-out"
            >
              Send Message
            </button>
          </form>

          <div className="mt-10 text-center text-gray-700 dark:text-gray-300">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-50">Other Ways to Connect</h3>
            <p className="mb-2"><strong>Email:</strong> info@netportalsolutions.com</p>
            <p className="mb-2"><strong>Phone:</strong> +1 (555) 123-4567</p>
            <p><strong>Address:</strong> 123 IT Consulting Ave, Tech City, TC 90210</p>
          </div>
        </div>
      </div>
    </div>
  );
}
