"use client";

import Link from "next/link";
import { IoCheckmark } from "react-icons/io5";

const PricingSection = () => {
  return (
    <section id="pricing" className="w-full bg-[#FAF8F7] text-[#3F0909]">
      <div className="mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-20 lg:py-28">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl md:text-[40px]">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-3 text-sm text-neutral-600 sm:text-base md:text-lg">
            Choose the plan that fits your organization&apos;s needs
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:gap-8">
          {/* Enterprise */}
          <div className="relative flex flex-col justify-between border-2 border-[#3F0909] p-6 sm:p-8">
            {/* Badge */}
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#3F0909] font-medium px-4 py-1 text-xs text-white">
              Most Popular
            </span>

            <div>
              <h3 className="text-2xl font-bold">Enterprise</h3>
              <p className="mt-1 text-sm text-[#828181]">
                Tailored support + custom integrations
              </p>

              <p className="mt-6 text-4xl font-bold">Custom</p>

              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Unlimited team members",
                  "Unlimited storage",
                  "Dedicated account manager",
                  "Custom workflows",
                  "SSO & advanced security",
                  "24/7 phone support",
                  "SLA guarantee",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-sm text-[#4C4B4B]"
                  >
                    <IoCheckmark className="mt-1 text-[#3F0909]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/subscribe"
              className="mt-8 self-center inline-flex items-center justify-center border-2 border-[#3F0909] px-10 py-3 text-sm text-[#3F0909] font-medium transition hover:bg-[#3F0909] hover:text-white"
            >
              Subscribe
            </Link>
          </div>

          <div className="flex flex-col justify-between border-2 border-[#3F0909] p-6 sm:p-8">
            <div>
              <h3 className="text-2xl font-bold">Free</h3>
              <p className="mt-1 text-sm text-[#828181]">
                For individuals and small teams starting out
              </p>

              <p className="mt-6 text-4xl font-bold">
                NO{" "}
                <span className="block text-sm font-normal text-[#828181]">
                  per month
                </span>
              </p>

              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Up to 5 team members",
                  "Basic document management",
                  "Mobile & web access",
                  "Mobile & web access",
                  "Community support",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-sm text-[#4C4B4B]"
                  >
                    <IoCheckmark className="mt-1 text-[#3F0909]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/get-started"
              className="mt-8 self-center inline-flex items-center justify-center border-2 border-[#3F0909] px-10 py-3 text-sm text-[#3F0909] font-medium transition hover:bg-[#3F0909] hover:text-white"
            >
              Get started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
