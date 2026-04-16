import Link from "next/link";
import Image from "next/image";
import heroImage from "@/public/png/hero-image.png";
import frame from "@/public/png/ai-frame.png";
import { HiArrowRight } from "react-icons/hi";

const HeroSection = () => {
  return (
    <section className="w-full bg-linear-to-r from-white via-[#fceded] to-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 items-center px-6 py-12 md:py-24 lg:py-50">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-[#3F0909] leading-[1.1] tracking-tight">
            Work Smart.
            <br />
            Stay Organized.
            <br />
            Move Faster.
          </h1>

          <p className="text-lg md:text-xl text-[#4C4B4B] max-w-lg leading-relaxed">
            DAM.ng brings your documents, memos, teams, and workflows into one
            clean, powerful workspace built for real company operations.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href=""
              className="bg-[#3F0909] text-white px-6 py-3 font-medium flex items-center gap-2 hover:bg-[#2D0909] transition-all"
            >
              Get Started Free <HiArrowRight className="text-lg" />
            </Link>
            <Link
              href=""
              className="border-2 border-[#3F0909] text-[#3F0909] px-6 py-3 font-medium hover:bg-[#F8F2F2] transition-all"
            >
              Book a Demo
            </Link>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-[linear-gradient(to_bottom,#841919,#3F0909)] border-2 border-white"
                />
              ))}
            </div>
            <p className="text-[#828181] text-sm">
              Trusted by teams across Nigeria
            </p>
          </div>
        </div>

        <div className="relative">
          <Image
            src={heroImage}
            alt=""
            className="w-auto"
            priority
            quality={75}
          />

          <Image
            src={frame}
            alt=""
            className="absolute w-65 -bottom-10 -left-10"
            priority
            quality={75}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
