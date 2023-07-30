import Link from "next/link";
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <>
      <div>
        <section  class="relative banner_section bg-cover bg-center bg-no-repeat">
          <div class="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

          <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
            <div class="max-w-xl  ltr:sm:text-left rtl:sm:text-right">
              <h1 class="text-3xl text-white font-extrabold sm:text-5xl">
                Unleash Your Power
                <strong class="block font-extrabold text-rose-700">
                  Build Your Ultimate PC
                </strong>
              </h1>

              <p class="mt-4 max-w-lg sm:text-xl/relaxed text-white">
              Build your dream PC today. Customize components for ultimate performance. Unleash your computing potential.
              </p>

              <div class="mt-8 flex flex-wrap gap-4 text-center">
                <Link
                  href="/pc-builder"
                  class="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                >
                  Get Started
                </Link>

               
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Header;
