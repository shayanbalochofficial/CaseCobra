// src/components/Footer.tsx
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Heart, Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-green-50 via-green-50 to-green-50 h-28 md:h-24">
      {/* Animated wavy top border */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-6 md:h-8 animate-wave"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C300,60 900,60 1200,0 L1200,120 L0,120 Z"
            className="fill-white"
          />
        </svg>
      </div>

      <MaxWidthWrapper className="relative z-10">
        <div className="h-full flex flex-col md:flex-row md:justify-between justify-center items-center px-4 pt-6 md:pt-4">
          {/* Made by with heart */}
          <div className="text-center md:text-left pb-3 md:pb-0">
            <p className="text-sm font-medium text-green-600 flex items-center justify-center md:justify-start gap-1">
              <span className="inline-flex items-center">
                &copy; {new Date().getFullYear()} Made with
                <Heart className="w-4 h-4 mx-1 text-green-500 fill-green-500 animate-pulse" />
                by
              </span>
              <Link
                href="#"
                className="ml-1 font-semibold text-green-700 hover:text-green-600 transition-all duration-300 hover:scale-110 inline-block"
              >
                Shayan Baloch
              </Link>
              {/* <Sparkles className="w-4 h-4 ml-1 text-yellow-500 animate-spin-slow" /> */}
            </p>
          </div>

          {/* Policy Links */}
          <div className="flex items-center justify-center gap-6 md:gap-8">
            {["Terms", "Privacy Policy", "Cookie Policy"].map((item) => (
              <Link
                key={item}
                href="#"
                className="group relative text-sm font-medium text-green-600 hover:text-green-700 transition-all duration-300 transform hover:-translate-y-1"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-green-900 rounded-full transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>
        </div>

        {/* Floating cute orb */}
        <div className="absolute -bottom-4 -right-4 opacity-20 animate-bounce-slow">
          <div className="w-16 h-16 bg-gradient-to-br from-green-300 to-green-300 rounded-full blur-xl"></div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
