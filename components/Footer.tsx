import Link from "next/link";
import Image from "next/image";
import logo from "@/public/svg/dam-ng2.svg";
import { FaXTwitter } from "react-icons/fa6";
import { LuLinkedin, LuFacebook, LuInstagram } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="w-full bg-white text-(--color-text-gray)">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-6 md:py-14">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <Image
            src={logo}
            alt=""
            width={70}
            height={70}
            className="w-auto h-auto"
          />

          <div className="flex items-center gap-4">
            {[FaXTwitter, LuLinkedin, LuFacebook, LuInstagram].map(
              (Icon, index) => (
                <a
                  key={index}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded border border-(--color-border-light-2) text-primary transition hover:bg-(--color-footer-hover) hover:text-white"
                >
                  <Icon size={16} />
                </a>
              ),
            )}
          </div>
        </div>

        <div className="my-6 h-px w-full bg-(--color-border-neutral)" />

        <div className="flex flex-col items-start justify-between gap-4 text-sm text-(--color-text-gray) md:flex-row md:items-center">
          <p className="text-(--color-text-lighter)">
            © {new Date().getFullYear()} DAM.ng. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link href="/contact" className="hover:text-gray-900 transition">
              Contact Us
            </Link>
            <Link href="/terms" className="hover:text-gray-900 transition">
              Terms of Service
            </Link>
            <Link href="/privacy" className="hover:text-gray-900 transition">
              Privacy Policy
            </Link>
            <Link href="/cookies" className="hover:text-gray-900 transition">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
