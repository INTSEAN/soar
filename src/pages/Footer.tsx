import React, { useState } from 'react';
import {
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaGlobe,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Modal from "../components/Modal"; // Adjust the path as necessary

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer className="bg-slate-950 text-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-2">SOAR Africa</h3>
            <p className="mb-4">
              Empowering communities through innovative solutions and
              exceptional talent.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="tel:+254721588666"
                title="Call Us"
                className="text-gray-50 hover:text-purple-600"
                whileHover={{ scale: 1.1 }}
              >
                <FaPhone />
              </motion.a>
              <motion.a
                href="https://wa.me/+254721588666"
                target="_blank"
                rel="noopener noreferrer"
                title="Chat on WhatsApp"
                className="text-gray-50 hover:text-purple-600"
                whileHover={{ scale: 1.1 }}
              >
                <FaWhatsapp />
              </motion.a>
              <motion.a
                href="#contact"
                onClick={scrollToContact}
                title="Email Us"
                className="text-gray-50 hover:text-purple-600"
                whileHover={{ scale: 1.1 }}
              >
                <FaEnvelope />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/company/soar-africa"
                target="_blank"
                rel="noopener noreferrer"
                title="Connect on LinkedIn"
                className="text-gray-50 hover:text-purple-600"
                whileHover={{ scale: 1.1 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="https://twitter.com/soar_africa"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow us on Twitter"
                className="text-gray-50 hover:text-purple-600"
                whileHover={{ scale: 1.1 }}
              >
                <FaTwitter />
              </motion.a>
              <motion.a
                href="https://instagram.com/soar_africa"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow us on Instagram"
                className="text-gray-50 hover:text-purple-600"
                whileHover={{ scale: 1.1 }}
              >
                <FaInstagram />
              </motion.a>
              <motion.a
                href="https://soar-africa.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Visit our website"
                className="text-gray-50 hover:text-purple-600"
                whileHover={{ scale: 1.1 }}
              >
                <FaGlobe />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="hover:text-purple-600">
                  About Us
                </a>
              </li>
              <li>
                <a href="tel:+254721588666" className="hover:text-purple-600">
                  Call Us
                </a>
              </li>
              <li>
                <a href="https://wa.me/+254721588666" className="hover:text-purple-600">
                  Chat With Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={scrollToContact}
                  className="hover:text-purple-600"
                >
                  Email Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    const servicesSection = document.querySelector(".services-section");
                    if (servicesSection) {
                      servicesSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  }}
                  className="hover:text-purple-600"
                >
                  Our Services
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Services</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#contact"
                  onClick={scrollToContact}
                  className="hover:text-purple-600"
                >
                  Consulting Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={scrollToContact}
                  className="hover:text-purple-600"
                >
                  Talent Solutions
                </a>
              </li>
              <li>
                <a
                  onClick={scrollToContact}
                  className="hover:text-purple-600"
                >
                  Website Building Consulting
                </a>
              </li>
            </ul>
          </div>

          {/* Contact the Site Developer */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Contact the Site Developer</h4>
            <p className="mb-4">
              For any technical inquiries or feedback, reach out to the developer.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="mailto:developer@example.com"
                title="Email Developer"
                className="text-gray-50 hover:text-purple-600"
                whileHover={{ scale: 1.1 }}
              >
                <FaEnvelope />
              </motion.a>
              <motion.a
                href="https://github.com/intsean"
                target="_blank"
                rel="noopener noreferrer"
                title="Developer's GitHub"
                className="text-gray-50 hover:text-purple-600"
                whileHover={{ scale: 1.1 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/seandonovan-upenn"
                target="_blank"
                rel="noopener noreferrer"
                title="Developer's LinkedIn"
                className="text-gray-50 hover:text-purple-600"
                whileHover={{ scale: 1.1 }}
              >
                <FaLinkedin />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} SOAR Africa. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <button onClick={() => setShowPrivacy(true)} className="hover:text-purple-600">
              Privacy Policy
            </button>
            <button onClick={() => setShowTerms(true)} className="hover:text-purple-600">
              Terms of Service
            </button>
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      <Modal
        isOpen={showPrivacy}
        onClose={() => setShowPrivacy(false)}
        title="Privacy Policy"
      >
        <div className="legal-content">
          <h2>Privacy Policy</h2>
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          {/* Privacy Policy Content */}
        </div>
      </Modal>

      {/* Terms of Service Modal */}
      <Modal
        isOpen={showTerms}
        onClose={() => setShowTerms(false)}
        title="Terms of Service"
      >
        <div className="legal-content">
          <h2>Terms of Service</h2>
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          {/* Terms of Service Content */}
        </div>
      </Modal>
    </footer>
  );
};

export default Footer; 