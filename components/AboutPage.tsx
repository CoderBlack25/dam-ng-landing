"use client";

import { useState, useEffect, ReactNode } from "react";
import {
  FiPackage,
  FiZap,
  FiShield,
  FiUsers,
  FiMail,
  FiMapPin,
  FiGlobe,
  FiChevronDown,
  FiFileText,
} from "react-icons/fi";
import { MdOutlineCopyright } from "react-icons/md";
import { PiTrademarkRegisteredBold } from "react-icons/pi";
import Link from "next/link";

interface IconWrapperProps {
  children: ReactNode;
}

const IconWrapper = ({ children }: IconWrapperProps) => (
  <div className="w-10 h-10 rounded-lg bg-rose-50 flex items-center justify-center text-(--color-accent-maroon) mb-4">
    {children}
  </div>
);

const AboutPage = () => {
  const [activeSection, setActiveSection] = useState("product");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-10% 0px -80% 0px" },
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const navItems = [
    { id: "product", label: "Product" },
    { id: "company", label: "Company" },
    { id: "legal", label: "Legal" },
    { id: "copyright", label: "Copyright" },
  ];

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-12 md:py-20">
        <div className="mt-40 md:mt-18">
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-primary leading-[1.1] tracking-tight mb-3">
            Information & Policies
          </h1>

          <p className="text-(--color-text-muted) font-inter text-base md:text-lg">
            Everything you need to know about DAM.ng — our product, company,
            legal terms, and policies.
          </p>
        </div>

        <div className="bg-border h-px my-18" />

        <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
          <aside className="hidden md:block md:w-48 shrink-0">
            <nav className="sticky top-20 flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-4 md:pb-0 bg-(--color-bg-light) md:bg-transparent z-10 border-b md:border-b-0 border-gray-200">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left px-4 py-2 text-lg font-medium font-lora transition-all whitespace-nowrap ${
                    activeSection === item.id
                      ? "text-accent border-b-2 md:border-b-0 md:border-l-4 border-accent"
                      : "text-(--color-text-light) hover:text-gray-900 border-b-2 md:border-b-0 md:border-l-2 border-transparent"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </aside>

          <div className="md:hidden fixed top-14 left-0 right-0 w-full z-50 bg-(--color-bg-light) border-b border-gray-200">
            <nav className="flex gap-2 overflow-x-auto px-4 py-3 scrollbar-none">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`shrink-0 px-4 py-2 text-sm font-medium font-lora rounded-full transition-all ${
                    activeSection === item.id
                      ? "bg-accent text-white"
                      : "text-(--color-text-light) bg-gray-100"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          <main className="flex-1 space-y-12 max-w-4xl">
            <section
              id="product"
              className="mt-0 md:mt-0 scroll-mt-32 md:scroll-mt-20"
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium text-text mb-6">
                Product
              </h1>
              <p className="text-(--color-text-secondary) mb-10 text-base md:text-lg font-inter leading-relaxed">
                DAM.ng is a comprehensive digital asset management platform
                designed for modern teams. We help organizations of all sizes
                organize, manage, and distribute their digital content with
                unprecedented ease and efficiency.
              </p>

              <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-text mb-4">
                Overview
              </h2>
              <p className="text-(--color-text-secondary) mb-12 text-sm md:text-base font-inter leading-relaxed">
                In today&apos;s digital-first world, managing your brand&apos;s
                visual and creative assets shouldn&apos;t be a challenge. DAM.ng
                eliminates the chaos of scattered files, version confusion, and
                inefficient workflows. Our platform brings clarity, control, and
                speed to your digital asset management process.
              </p>

              <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-text mb-6">
                Powerful Features
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-2xl border border-border shadow-sm">
                  <IconWrapper>
                    <FiPackage size={20} />
                  </IconWrapper>
                  <h3 className="font-medium text-[#2B2B2B] text-lg md:text-xl mb-2">
                    Centralized Asset Library
                  </h3>
                  <p className="text-sm md:text-base font-inter text-[#4A5565] leading-relaxed">
                    Store all your digital assets in one secure, organized
                    location. Access files instantly with powerful search and
                    filtering capabilities.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-border shadow-sm">
                  <IconWrapper>
                    <FiZap size={20} />
                  </IconWrapper>
                  <h3 className="font-medium text-text text-lg md:text-xl mb-2">
                    Lightning-Fast Performance
                  </h3>
                  <p className="text-sm md:text-base font-inter text-(--color-text-muted) leading-relaxed">
                    Experience blazing-fast upload, download, and preview
                    speeds. Our optimized infrastructure ensures your team never
                    waits.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-border shadow-sm">
                  <IconWrapper>
                    <FiShield size={20} />
                  </IconWrapper>
                  <h3 className="font-medium text-text text-lg md:text-xl mb-2">
                    Enterprise Security
                  </h3>
                  <p className="text-sm md:text-base font-inter text-(--color-text-muted) leading-relaxed">
                    Bank-level encryption, granular permissions, and complete
                    audit trails keep your assets protected at all times.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-border shadow-sm">
                  <IconWrapper>
                    <FiUsers size={20} />
                  </IconWrapper>
                  <h3 className="font-medium text-text text-lg md:text-xl mb-2">
                    Team Collaboration
                  </h3>
                  <p className="text-sm md:text-base font-inter text-(--color-text-muted) leading-relaxed">
                    Seamlessly collaborate with internal teams and external
                    stakeholders. Share, review, and approve assets with ease.
                  </p>
                </div>
              </div>
            </section>

            <div className="bg-border h-px mt-18" />

            <section id="company" className="scroll-mt-32 md:scroll-mt-20">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium text-text mb-6">
                Company
              </h1>
              <p className="text-(--color-text-secondary) mb-10 text-base md:text-lg font-inter leading-relaxed">
                DAM.ng was born from a simple observation: managing digital
                assets shouldn&apos;t be complicated. We&apos;re building the
                future of digital asset management, one feature at a time.
              </p>

              <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-text mb-4">
                About Us
              </h2>

              <p className="text-(--color-text-secondary) mb-6 text-sm md:text-base font-inter leading-relaxed">
                Founded in Lagos, Nigeria, DAM.ng emerged from the
                founders&apos; frustration with existing asset management
                solutions that were either too complex, too expensive, or poorly
                designed for modern workflows. We set out to build something
                different — a platform that combines enterprise-grade
                capabilities with consumer-grade simplicity.
              </p>

              <p className="text-(--color-text-secondary) mb-12 text-sm md:text-base font-inter leading-relaxed">
                Today, we serve hundreds of organizations across Africa and
                beyond, from nimble startups to established enterprises. Our
                team is distributed across Nigeria, Ghana, and Kenya, bringing
                together diverse perspectives and deep expertise in technology,
                design, and customer success.
              </p>

              <div className="bg-white p-8 rounded-2xl border border-border shadow-sm mb-10">
                <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-text mb-6">
                  Mission & Vision
                </h2>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-accent font-medium text-sm sm:text-base md:text-lg mb-3">
                      Our Mission
                    </h3>
                    <p className="text-sm md:text-base text-(--color-text-secondary) font-inter">
                      To empower organizations with intuitive tools that make
                      digital asset management effortless, enabling teams to
                      focus on creativity and growth rather than file
                      management.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-accent font-medium text-sm sm:text-base md:text-lg mb-3">
                      Our Vision
                    </h3>
                    <p className="text-sm md:text-base text-(--color-text-secondary) font-inter">
                      To become the most trusted digital asset management
                      platform globally, known for our commitment to simplicity,
                      reliability, and exceptional user experience.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-border shadow-sm">
                <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-text mb-6">
                  Contact Us
                </h2>
                <div className="grid sm:grid-cols-3 gap-6">
                  <div className="flex items-start gap-3">
                    <IconWrapper>
                      <FiMail size={16} />
                    </IconWrapper>
                    <div>
                      <p className="text-sm text-(--color-text-light) font-inter">
                        Email
                      </p>
                      <Link
                        href=""
                        className="text-accent font-inter hover:underline"
                      >
                        hello@dam.ng
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <IconWrapper>
                      <FiMapPin size={16} />
                    </IconWrapper>
                    <div>
                      <p className="text-sm text-(--color-text-light) font-inter">
                        Location
                      </p>
                      <p className="text-(--color-text-secondary) font-inter">
                        Abuja, Nigeria
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <IconWrapper>
                      <FiGlobe size={16} />
                    </IconWrapper>
                    <div>
                      <p className="text-sm text-(--color-text-light) font-inter">
                        Website
                      </p>
                      <Link
                        href=""
                        className="text-accent font-inter hover:underline"
                      >
                        www.dam.ng
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="legal" className="scroll-mt-32 md:scroll-mt-20">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium text-text mb-6">
                Legal
              </h1>

              <p className="text-(--color-text-secondary) mb-10 text-base md:text-lg font-inter leading-relaxed">
                Our commitment to transparency means keeping you informed about
                how we operate, protect your data, and uphold our
                responsibilities.
              </p>

              <div className="space-y-3">
                {[
                  "Terms of Service",
                  "Privacy Policy",
                  "Data Protection & GDPR",
                  "Compliance & Certifications",
                ].map((item, idx) => (
                  <button
                    key={idx}
                    className="w-full flex items-center justify-between bg-white p-4 rounded-lg border border-gray-100 shadow-sm"
                  >
                    <span className="text-base sm:text-lg md:text-xl font-medium text-text">
                      {item}
                    </span>
                    <FiChevronDown size={16} className="text-[#717182]" />
                  </button>
                ))}
              </div>
            </section>

            <section id="copyright" className="scroll-mt-32 md:scroll-mt-20">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium text-text mb-6">
                Copyright
              </h1>
              <p className="text-(--color-text-secondary) mb-10 text-base md:text-lg font-inter leading-relaxed">
                Information regarding the intellectual property, usage
                permissions, and trademark guidelines for DAM.ng and our
                services.
              </p>

              <div className="space-y-6">
                <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <IconWrapper>
                      <MdOutlineCopyright size={18} />
                    </IconWrapper>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-text -mt-4">
                      Copyright Notice
                    </h2>
                  </div>
                  <p className="text-sm md:text-base font-inter text-(--color-text-secondary) mb-3">
                    © 2026 DAM.ng. All rights reserved.
                  </p>
                  <p className="text-sm md:text-base font-inter text-[#364153] leading-relaxed mb-4">
                    All content, features, and functionality of the DAM.ng
                    platform, including but not limited to text, graphics,
                    logos, icons, images, audio clips, video clips, data
                    compilations, and software, are the exclusive property of
                    DAM.ng or its content suppliers and are protected by
                    international copyright, trademark, patent, trade secret,
                    and other intellectual property or proprietary rights laws.
                  </p>
                  <p className="text-sm md:text-base font-inter text-(--color-text-secondary) leading-relaxed">
                    The compilation of all content on this platform is the
                    exclusive property of DAM.ng and is protected by
                    international copyright laws. All software used on this
                    platform is the property of DAM.ng or its software suppliers
                    and is protected by international copyright laws.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <IconWrapper>
                      <FiFileText size={18} />
                    </IconWrapper>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-text -mt-4">
                      Usage Rights & Permissions
                    </h2>
                  </div>
                  <div className="space-y-4 text-sm md:text-base font-inter text-(--color-text-secondary) leading-relaxed">
                    <p>
                      <strong className="text-text">Personal Use:</strong> You
                      may access and use the platform for your personal or
                      internal business purposes. You may not modify, copy,
                      distribute, transmit, display, reproduce, publish,
                      license, create derivative works from, transfer, or sell
                      any information or content obtained from the platform
                      without our prior written consent.
                    </p>
                    <p>
                      <strong className="text-[#2B2B2B]">
                        Commercial Use:
                      </strong>{" "}
                      Any commercial use of the platform or its content,
                      including but not limited to reproduction, modification,
                      distribution, or republication, without prior written
                      permission from DAM.ng is strictly prohibited.
                    </p>
                    <p>
                      <strong className="text-[#2B2B2B]">
                        User-Generated Content:
                      </strong>{" "}
                      You retain all ownership rights to content you upload to
                      DAM.ng. By uploading content, you grant us a limited
                      license to store, process, and display your content solely
                      for the purpose of providing our services to you.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <IconWrapper>
                      <PiTrademarkRegisteredBold size={18} />
                    </IconWrapper>
                    <h2 className="text-lg font-medium text-gray-900 -mt-4">
                      Trademark Information
                    </h2>
                  </div>
                  <p className="text-sm md:text-base font-inter text-[#364153] leading-relaxed mb-4">
                    DAM.ng, the DAM.ng logo, and other DAM.ng trademarks,
                    service marks, graphics, and logos used in connection with
                    our services are trademarks or registered trademarks of
                    DAM.ng in Nigeria and other countries. Other trademarks,
                    service marks, graphics, and logos used in connection with
                    the platform may be the trademarks of their respective
                    owners.
                  </p>

                  <p className="text-sm md:text-base font-inter text-[#364153]">
                    <strong className="text-[#2B2B2B]">
                      Trademark Usage Guidelines:
                    </strong>{" "}
                    You may not use DAM.ng trademarks without our prior written
                    permission. Any authorized use of DAM.ng trademarks must
                    comply with our trademark usage guidelines, available upon
                    request at legal@dam.ng.
                  </p>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
