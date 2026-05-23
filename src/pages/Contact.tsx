import Navbar from "@/components/Navbar";
import FooterSection from "@/components/home/FooterSection";
import ScrollReveal from "@/components/ewm/ScrollReveal";
import contactBg from "@/assets/contact-hero-bg.jpeg";
import { MapPin, Mail, Phone, ArrowRight, Linkedin, Youtube } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative w-full">
        <div className="relative w-full overflow-hidden flex items-center" style={{ minHeight: "560px" }}>
          <img src={contactBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(8,11,20,0.55) 0%, rgba(8,11,20,0.35) 50%, rgba(8,11,20,0.2) 100%)",
            }}
          />
          <div className="relative z-10 mx-auto w-full max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20 pt-0 sm:pt-40 pb-0 sm:pb-24">
            <ScrollReveal animation="clipReveal" duration={1}>
              <h1
                className="text-white text-[40px] sm:text-[56px] md:text-[64px] font-normal leading-[1.05] max-w-[680px]"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                How Can We Help?
              </h1>
            </ScrollReveal>
          </div>
        </div>

        {/* Two-column row: left details, right form (form overlaps hero) */}
        <div className="mx-auto w-full max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-end">
            {/* Left column */}
            <ScrollReveal animation="fadeLeft" duration={0.9} className="pt-10 lg:pt-0 order-2 lg:order-1">
              <h2
                className="text-[28px] sm:text-[32px] lg:text-[34px] font-semibold text-[#0A1A3A] mb-4"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Contact Details
              </h2>
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed max-w-[420px] mb-6">
                Feel free to reach to us using the contact details below or fill out the form, and we'll get back to you as soon as posible
              </p>

              <div className="flex items-center gap-3 mb-10">
                <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center hover:opacity-80 transition-opacity">
                  <Linkedin className="w-4 h-4" fill="currentColor" />
                </a>
                <a href="#" aria-label="X" className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center hover:opacity-80 transition-opacity">
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a href="#" aria-label="YouTube" className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center hover:opacity-80 transition-opacity">
                  <Youtube className="w-4 h-4" fill="currentColor" />
                </a>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-white shadow-[0_2px_10px_rgba(0,0,0,0.06)] flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-[#5BC8D9]" />
                  </div>
                  <div>
                    <p className="text-[15px] sm:text-[16px] font-semibold text-[#0A1A3A] mb-1">Address</p>
                    <p className="text-[14px] sm:text-[15px] text-gray-600 leading-relaxed">
                      Carbynetech India Private Ltd, 5th Floor, Wing 1B, Block A,
                      <br />Cyber Gateway, Hitech City,
                      <br />Hyderabad, India Pin code: 500081
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-white shadow-[0_2px_10px_rgba(0,0,0,0.06)] flex items-center justify-center">
                    <Mail className="w-4 h-4 text-[#5BC8D9]" />
                  </div>
                  <div>
                    <p className="text-[15px] sm:text-[16px] font-semibold text-[#0A1A3A] mb-1">Email Address</p>
                    <a href="mailto:careers@carbynetech.com" className="text-[14px] sm:text-[15px] text-gray-600 hover:text-[#0A1A3A]">
                      careers@carbynetech.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-white shadow-[0_2px_10px_rgba(0,0,0,0.06)] flex items-center justify-center">
                    <Phone className="w-4 h-4 text-[#5BC8D9]" />
                  </div>
                  <div>
                    <p className="text-[15px] sm:text-[16px] font-semibold text-[#0A1A3A] mb-1">Phone number</p>
                    <p className="text-[14px] sm:text-[15px] text-gray-600">+91 984 918 2334</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right column — form overlaps hero */}
            <ScrollReveal
              animation="fadeRight"
              duration={0.9}
              delay={0.1}
              className="bg-[#F4F5F7] rounded-2xl p-6 sm:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.08)] -mt-16 sm:-mt-24 lg:-mt-40 relative z-20 order-1 lg:order-2"
            >
              <h3 className="text-[24px] sm:text-[28px] lg:text-[30px] font-semibold text-[#0A1A3A] mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Get In Touch
              </h3>
              <p className="text-[14px] sm:text-[15px] text-gray-600 leading-relaxed mb-8 max-w-[400px]">
                Have a question or want to work with us? Send us a message and we'll respond as soon as we can.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { name: "name", label: "Full Name", type: "text" },
                  { name: "email", label: "Email", type: "email" },
                  { name: "phone", label: "Phone", type: "tel" },
                ].map((f) => (
                  <div key={f.name}>
                    <label className="block text-[14px] sm:text-[15px] font-semibold text-[#0A1A3A] mb-2">{f.label}</label>
                    <input
                      name={f.name}
                      type={f.type}
                      value={(form as Record<string, string>)[f.name]}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-gray-300 focus:border-[#0A1A3A] outline-none py-2 text-[15px] text-[#0A1A3A]"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-[14px] sm:text-[15px] font-semibold text-[#0A1A3A] mb-2">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full bg-transparent border-b border-gray-300 focus:border-[#0A1A3A] outline-none py-2 text-[15px] text-[#0A1A3A] resize-none"
                  />
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-[14px] sm:text-[15px] font-medium text-[#0A1A3A] bg-white transition-all hover:shadow-md"
                    style={{
                      backgroundImage:
                        "linear-gradient(white, white), linear-gradient(90deg, #2A3DFF 0%, #B73CC4 50%, #FF5A3C 100%)",
                      backgroundOrigin: "border-box",
                      backgroundClip: "padding-box, border-box",
                      border: "1px solid transparent",
                    }}
                  >
                    Send Message <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-white pt-16 sm:pt-20 pb-16 sm:pb-20">
        <div className="mx-auto w-full max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20">
          <ScrollReveal animation="scaleUp" duration={0.9}>
            <div className="rounded-lg overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.272334836754!2d78.37644540000002!3d17.44667470000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91b06e89344d%3A0x3566865a44615cf1!2zQ2FyYnluZXRlY2ggSW5kaWEgUHJpdmF0ZSBMaW1pdGVkLuCwleCwvuCwsOCxjeCwrOCxiOCwqOCxjSDgsJ_gsYbgsJXgsY0g4LCH4LCC4LCh4LC_4LCv4LC-IOCwquCxjeCwsOCxiOCwteCxh-Cwn-CxjSDgsLLgsL_gsK7gsL_gsJ_gsYbgsKHgsY0!5e0!3m2!1sen!2sin!4v1778498076459!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Carbynetech India Private Limited location"
                className="w-full block"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Bottom gradient text */}
      <section className="bg-white border-t border-gray-200">
        <div className="mx-auto w-full max-w-[1200px] xl:max-w-[1440px] 2xl:max-w-[1720px] [@media(min-width:1920px)]:max-w-[1840px] px-5 sm:px-8 md:px-14 lg:px-20 xl:px-32 2xl:px-20 py-16 sm:py-24">
          <ScrollReveal animation="fadeUp" duration={0.9}>
            <h2
              className="text-[36px] sm:text-[52px] md:text-[64px] leading-[1.1] font-semibold"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                background: "linear-gradient(90deg, #203FF8 0%, #F45B4A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              It's Blow Your Mind!
              <br />
              Meet Neural Networks
            </h2>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
};

export default Contact;
