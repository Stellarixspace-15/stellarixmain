import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div id="contact" className="bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Contact Us</h2>
          <p className="mt-4 text-xl text-gray-400">
            Ready to explore the possibilities? Get in touch with us.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="bg-gray-800 p-8 rounded-lg">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-blue-500 mt-1" />
              <div>
                <h3 className="text-white font-medium">Email</h3>
                <p className="text-gray-400">contact@stellarix.space</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-blue-500 mt-1" />
              <div>
                <h3 className="text-white font-medium">Phone</h3>
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-blue-500 mt-1" />
              <div>
                <h3 className="text-white font-medium">Address</h3>
                <p className="text-gray-400">
                  123 Space Center Boulevard<br />
                  Houston, TX 77058<br />
                  United States
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}