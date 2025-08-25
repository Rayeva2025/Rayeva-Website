import React, { useState, useEffect } from "react";
import {
  MapPin,
  Twitter,
  Instagram,
  Mail,
  ChevronRight,
  PhoneCall,
} from "lucide-react";
import ContactForm from "./contact_form";

const Email = (props) => (
  <svg
    fill="#4da8be"
    height="200px"
    width="200px"
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#4da8be"
    {...props}
  >
    <g>
      <path d="M410.272,243.145c-3.63-4.486-10.211-5.179-14.695-1.548l-3.636,2.942c-4.485,3.631-5.177,10.211-1.546,14.696 c2.066,2.551,5.083,3.875,8.128,3.875c2.309,0,4.634-0.762,6.568-2.328l3.635-2.942 C413.21,254.209,413.903,247.63,410.272,243.145z" />
      <path d="M380.363,267.357c-3.63-4.486-10.211-5.179-14.695-1.549l-74.708,59.674c-4.485,3.631-5.177,10.21-1.546,14.695 c2.064,2.551,5.082,3.875,8.127,3.875c2.309,0,4.634-0.762,6.568-2.327l74.708-59.674 C383.301,278.421,383.994,271.843,380.363,267.357z" />
      <path d="M449.742,62.685H62.258C27.929,62.685,0,90.614,0,124.942v262.117c0,34.329,27.929,62.257,62.258,62.257h387.484 c34.33,0,62.258-27.928,62.258-62.257V124.942C512,90.614,484.072,62.685,449.742,62.685z M419.912,83.582L255.859,216.19 L91.806,83.582H419.912z M428.126,428.418H83.592V184.382l165.712,133.49c3.826,3.082,9.284,3.082,13.11,0l165.711-133.49V428.418 z M491.102,387.058c0,22.806-18.554,41.359-41.36,41.359h-0.717v-265.87c0-4.023-2.309-7.688-5.939-9.425 c-3.632-1.738-7.934-1.235-11.065,1.288L255.859,296.318L79.697,154.41c-3.134-2.523-7.438-3.026-11.065-1.288 c-3.63,1.737-5.939,5.402-5.939,9.425v265.87h-0.436c-22.805,0.001-41.359-18.553-41.359-41.358V124.942 c0-21.626,16.688-39.418,37.861-41.2l190.532,154.012c1.915,1.549,4.242,2.323,6.568,2.323c2.327,0,4.653-0.774,6.568-2.323 L452.983,83.721c21.295,1.66,38.119,19.507,38.119,41.22V387.058z" />
    </g>
  </svg>
);

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen  flex items-center justify-center">
      <div className="w-full min-h-screen">
        <div className="grid min-h-screen lg:grid-cols-2 gap-0 overflow-hidden">
          {/* Left Panel - We're here */}
          <div
            className={`py-24 relative overflow-hidden transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            }`}
          >
            <div className="relative px-12 z-10">
              <h1
                className={`text-6xl font-extrabold text-teal-700 mb-6 transform transition-all duration-700 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ animationDelay: "0.2s" }}
              >
                We're here
              </h1>

              <p
                className={`text-teal-600 mb-12 font-bold text-2xl transform transition-all duration-700 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ animationDelay: "0.4s" }}
              >
                Our door is always open for a good cup of coffee.
              </p>
              <div className="flex gap-4 h-full">
                <div
                  className={`transform transition-all duration-700 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{ animationDelay: "0.6s" }}
                >
                  <h3 className="text-3xl font-extrabold text-teal-700 mb-6">
                    Our Office
                  </h3>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-start space-x-3 group">
                      <MapPin className="w-5 h-5 text-[#4da8b3] mt-1 group-hover:scale-110 transition-transform duration-200 " />
                      <div className="text-lg text-[#4da8b3]">
                        <p className="">Thatcher Road</p>
                        <p className="">Bombay , Maharashtra</p>
                        <p className="">India</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="p-3 bg-gray-100 rounded-full hover:bg-blue-100 hover:scale-110 transition-all duration-300 group"
                    >
                      <Twitter className="w-5 h-5 text-[#278c97] group-hover:text-blue-500" />
                    </a>
                    <a
                      href="#"
                      className="p-3 bg-gray-100 rounded-full hover:bg-pink-100 hover:scale-110 transition-all duration-300 group"
                    >
                      <Instagram className="w-5 h-5 text-[#278c97] group-hover:text-pink-500" />
                    </a>
                    <a
                      href="#"
                      className="p-3 bg-gray-100 rounded-full hover:bg-green-100 hover:scale-110 transition-all duration-300 group"
                    >
                      <Mail className="w-5 h-5 text-[#278c97] group-hover:text-green-500" />
                    </a>
                  </div>
                </div>
                <div className="w-[4px] bg-[#278c97] rounded-full"></div>
                <div
                  className={`transform transition-all duration-700 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  }`}
                  style={{ animationDelay: "0.6s" }}
                >
                  <h3 className="text-3xl h-[2.3rem] font-extrabold text-teal-700 mb-6">
                    {" "}
                  </h3>

                  <div className="space-y-3 mb-2">
                    <div className="flex items-start space-x-3 group">
                      <PhoneCall className="w-5 h-5 text-[#4da8b3] mt-1 group-hover:scale-110 transition-transform duration-200 " />
                      <div className="text-lg text-[#4da8b3]">
                        <p className="">+1234567890</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-start space-x-3 group">
                      <Email className="w-5 h-5 text-[#4da8b3] mt-1 group-hover:scale-110 transition-transform duration-200 " />
                      <div className="text-lg text-[#4da8b3]">
                        <p className="">support@rayeva.in</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-6 mt-4 lg:h-[62%] h-[50%] rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823264!2d72.741099957962!3d19.08219783905152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1665555555555!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>

          {/* Right Panel - Let's talk */}
          <div
            className={`bg-[#4da8b3] text-white relative overflow-hidden transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }`}
          >
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
