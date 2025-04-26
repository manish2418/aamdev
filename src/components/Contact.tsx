import React from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import Section from "./common/Section";

const Contact: React.FC = () => {
  return (
    <Section
      id="contact"
      title="Get In Touch"
      subtitle="Let's Discuss Your Next Project"
      className="bg-gray-50"
    >
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-white rounded-xl shadow-md p-8 animate-fadeIn">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Contact Information
          </h3>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <MapPin className="h-6 w-6 text-blue-800" />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium text-gray-900">
                  Office Location
                </h4>
                <p className="text-gray-600 mt-1">
                  Sushant Lok 1 Sector 43
                  <br />
                  Gurugram, 122002
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Mail className="h-6 w-6 text-blue-800" />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium text-gray-900">
                  Email Address
                </h4>
                <p className="text-gray-600 mt-1">
                  aamdeveloper3@gmail.com
                  <br />
                  {/* support@aamdeveloper.com */}
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Phone className="h-6 w-6 text-blue-800" />
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-medium text-gray-900">
                  Phone Number
                </h4>
                <p className="text-gray-600 mt-1">
                  +91 9792647235
                  <br />
                  +91 7905831836
                  <br />
                  +91 9260935205
                </p>
              </div>
            </div>
          </div>

          {/* <div className="mt-10">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Business Hours
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-medium text-gray-900">
                  Monday - Friday
                </h4>
                <p className="text-gray-600 text-sm">9:00 AM - 6:00 PM</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-900">Saturday</h4>
                <p className="text-gray-600 text-sm">10:00 AM - 4:00 PM</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-900">Sunday</h4>
                <p className="text-gray-600 text-sm">Closed</p>
              </div>
            </div>
          </div> */}
        </div>

        <div
          className="bg-white rounded-xl shadow-md p-8 animate-fadeIn"
          style={{ animationDelay: "0.2s" }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Send Us a Message
          </h3>

          <form>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-800 focus:border-blue-800"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-800 focus:border-blue-800"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-800 focus:border-blue-800"
                placeholder="How can we help you?"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-800 focus:border-blue-800"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-700 transition duration-300"
            >
              Send Message
              <Send className="ml-2 h-4 w-4" />
            </button>
          </form>
        </div>
      </div>

      {/* <div className="mt-16 bg-white rounded-xl shadow-md overflow-hidden">
        <div className="h-96">
          <iframe
            title="office-location"
            className="w-full h-full border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9914292657563!2d77.63768731482484!3d12.97019518085823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBrigade%20Road%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1635831146345!5m2!1sen!2sin"
            loading="lazy"
          ></iframe>
        </div>
      </div> */}
    </Section>
  );
};

export default Contact;
