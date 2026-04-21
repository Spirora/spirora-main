import { motion } from 'framer-motion';
import {
  Hexagon,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Code,
  Users,
  Award,
  Zap
} from 'lucide-react';
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700/50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%230ea5e9%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">

          {/* Brand Section - Large and Prominent */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <Hexagon className="w-12 h-12 text-brand-accent" />
                <div className="absolute inset-0 bg-brand-accent/20 rounded-full blur-xl" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white tracking-tight">
                  Spirora<span className="text-brand-accent">Innovations</span>
                </h3>
                <p className="text-sm text-slate-400 -mt-1">Transforming Ideas Into Reality</p>
              </div>
            </div>

            <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-md">
              We craft cutting-edge digital solutions that drive innovation and accelerate business growth.
              From concept to deployment, we&apos;re your technology partner.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-accent">50+</div>
                <div className="text-xs text-slate-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-accent">100%</div>
                <div className="text-xs text-slate-400">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-accent">24/7</div>
                <div className="text-xs text-slate-400">Support</div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-brand-accent text-slate-400 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 group">
                <FaTwitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-brand-accent text-slate-400 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 group">
                <FaLinkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-brand-accent text-slate-400 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 group">
                <FaGithub className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 hover:bg-brand-accent text-slate-400 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 group">
                <FaInstagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <h4 className="text-xl font-bold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-slate-400 hover:text-brand-accent transition-colors flex items-center gap-2 group">
                <Code className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Web Development
              </a></li>
              <li><a href="#services" className="text-slate-400 hover:text-brand-accent transition-colors flex items-center gap-2 group">
                <Zap className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Mobile Apps
              </a></li>
              <li><a href="#services" className="text-slate-400 hover:text-brand-accent transition-colors flex items-center gap-2 group">
                <Users className="w-4 h-4 group-hover:scale-110 transition-transform" />
                SaaS Solutions
              </a></li>
              <li><a href="#services" className="text-slate-400 hover:text-brand-accent transition-colors flex items-center gap-2 group">
                <Award className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Enterprise Software
              </a></li>
              <li><a href="#services" className="text-slate-400 hover:text-brand-accent transition-colors flex items-center gap-2 group">
                <Hexagon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                AI & ML
              </a></li>
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <h4 className="text-xl font-bold text-white mb-6">Company</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-slate-400 hover:text-brand-accent transition-colors">About Us</a></li>
              <li><a href="#works-section" className="text-slate-400 hover:text-brand-accent transition-colors">Our Work</a></li>
              <li><a href="#process" className="text-slate-400 hover:text-brand-accent transition-colors">Our Process</a></li>
              <li><a href="#testimonials" className="text-slate-400 hover:text-brand-accent transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-brand-accent transition-colors">Contact Us</a></li>
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <h4 className="text-xl font-bold text-white mb-6">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-brand-accent transition-colors">Blog</a></li>
              <li><a href="#" className="text-slate-400 hover:text-brand-accent transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-slate-400 hover:text-brand-accent transition-colors">Documentation</a></li>
              <li><a href="#" className="text-slate-400 hover:text-brand-accent transition-colors">Support</a></li>
              <li><a href="#" className="text-slate-400 hover:text-brand-accent transition-colors">Privacy Policy</a></li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <h4 className="text-xl font-bold text-white mb-6">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-slate-300 font-medium">Email Us</p>
                  <a href="mailto:hello@spirorainnovations.com" className="text-slate-400 hover:text-brand-accent transition-colors text-sm">
                    hello@spirorainnovations.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-slate-300 font-medium">Call Us</p>
                  <a href="tel:+1234567890" className="text-slate-400 hover:text-brand-accent transition-colors text-sm">
                    +1 (234) 567-8900
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-slate-300 font-medium">Visit Us</p>
                  <p className="text-slate-400 text-sm">
                    123 Innovation Drive<br />
                    Tech City, TC 12345
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="pt-8 border-t border-slate-700/50"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
              <p className="text-slate-400 text-sm">
                © {currentYear} Spirora Innovations. All rights reserved.
              </p>
              <div className="flex items-center gap-4 text-xs text-slate-500">
                <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
                <span>•</span>
                <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
                <span>•</span>
                <a href="#" className="hover:text-slate-400 transition-colors">Cookie Policy</a>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-brand-accent text-slate-400 hover:text-white rounded-lg transition-all duration-300 group"
            >
              <span className="text-sm font-medium">Back to Top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
