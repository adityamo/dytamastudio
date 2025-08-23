import React from "react";
import Container from "@/components/container";
import Image from "next/image";

const ContactPage = () => {
  return (
    <section className="mt-14  lg:-mt-17 relative w-full ">
      <div className="bg-gradient-to-bl from-indigo-300 to-indigo-800 bg-blend-multiply">
        <Container className="px-4 py-36 gap-5 md:px-8 flex flex-col justify-center text-center items-center">
          <h1 className="font-semibold text-white text-6xl lg:max-w-2xl">
            Kami senang mendengar dari Anda
          </h1>
          <p className="pt-2 text-white font-normal text-sm">
            Hubungi kami untuk pertanyaan, masukan, atau peluang kerja sama
          </p>
        </Container>
      </div>
      <div className="bg-white dark:bg-slate-800 pt-10 lg:pt-15">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10">
            <div className="relative w-full">
              <h1 className="text-4xl font-semibold text-black dark:text-white max-w-lg">
                Ada pertanyaan atau mau kolaborasi dengan kami?
              </h1>
              <p className="pt-2 lg:pt-4 text-sm font-normal text-gray-600 dark:text-neutral-200">
                kami dengan senang hati menjawab apapun pertanyaan anda seputar
                layanan yang bisa kami berikan
              </p>
              <div className="grid grid-cols-2 gap-5 pt-10">
                <div className="flex flex-col space-y-1">
                  <label
                    htmlFor=""
                    className="text-xs font-normal text-gray-600 dark:text-secondary"
                  >
                    Email
                  </label>
                  <h6 className="text-black dark:text-white font-semibold text-lg">
                    risingadityahalim18@gmail.com
                  </h6>
                </div>
                <div className="flex flex-col space-y-1">
                  <label
                    htmlFor=""
                    className="text-xs font-normal text-gray-600 dark:text-secondary"
                  >
                    Phone
                  </label>
                  <h6 className="text-black dark:text-white font-semibold text-lg">
                    (+62) 8788 8362 186
                  </h6>
                </div>
                <div className="flex flex-col space-y-1">
                  <label
                    htmlFor=""
                    className="text-xs font-normal text-gray-600 dark:text-secondary"
                  >
                    Location
                  </label>
                  <h6 className="text-black dark:text-white font-semibold text-lg">
                    Depok, Jawa Barat, Indonesia
                  </h6>
                </div>
                <div className="flex flex-col space-y-1">
                  <label
                    htmlFor=""
                    className="text-xs font-normal text-gray-600 dark:text-secondary"
                  >
                    Ikuti saya
                  </label>
                  <ul className="mt-8 flex gap-6">
                    <li>
                      <a
                        href="#"
                        rel="noreferrer"
                        target="_blank"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        <span className="sr-only">Facebook</span>

                        <svg
                          className="size-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        rel="noreferrer"
                        target="_blank"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        <span className="sr-only">Instagram</span>

                        <svg
                          className="size-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        rel="noreferrer"
                        target="_blank"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        <span className="sr-only">Twitter</span>

                        <svg
                          className="size-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        rel="noreferrer"
                        target="_blank"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        <span className="sr-only">GitHub</span>

                        <svg
                          className="size-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        rel="noreferrer"
                        target="_blank"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        <span className="sr-only">Dribbble</span>

                        <svg
                          className="size-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex w-full pt-5 lg:pt-10">
                <Image
                  width={400}
                  height={440}
                  src={"/assets/img/illustration/contact-us-ill.svg"}
                  alt="aditya-septama-contact"
                />
              </div>
            </div>
            <div className="relative">
              <div className="flex flex-col border border-gray-200 rounded-xl p-4 sm:p-6 lg:py-5 px-10 dark:border-neutral-700">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-neutral-200">
                  Silahkan Lengkapi form dibawah ini
                </h2>

                <form>
                  <div className="mt-6 grid gap-4 lg:gap-6">
                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                      <div>
                        <label
                          htmlFor="hs-firstname-hire-us-1"
                          className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                        >
                          Nama Depan
                        </label>
                        <input
                          type="text"
                          name="hs-firstname-hire-us-1"
                          id="hs-firstname-hire-us-1"
                          className="py-2.5 sm:py-3 px-4 block w-full border border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="hs-lastname-hire-us-1"
                          className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                        >
                          Nama Belakang
                        </label>
                        <input
                          type="text"
                          name="hs-lastname-hire-us-1"
                          id="hs-lastname-hire-us-1"
                          className="py-2.5 sm:py-3 px-4 block w-full border border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                        />
                      </div>
                    </div>
                    {/* End Grid */}

                    <div>
                      <label
                        htmlFor="hs-work-email-hire-us-1"
                        className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="hs-work-email-hire-us-1"
                        id="hs-work-email-hire-us-1"
                        className="py-2.5 sm:py-3 px-4 block w-full border border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="hs-work-email-hire-us-1"
                        className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                      >
                        Judul
                      </label>
                      <input
                        type="email"
                        name="hs-work-email-hire-us-1"
                        id="hs-work-email-hire-us-1"
                        className="py-2.5 sm:py-3 px-4 block w-full border border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="hs-about-hire-us-1"
                        className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                      >
                        Detail
                      </label>
                      <textarea
                        id="hs-about-hire-us-1"
                        name="hs-about-hire-us-1"
                        className="py-2.5 sm:py-3 px-4 block w-full border border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                      ></textarea>
                    </div>
                  </div>
                </form>
                {/* End Grid */}

                {/* Checkbox */}
                <div className="mt-3 flex">
                  <div className="flex">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="shrink-0 mt-1.5 border-gray-200 rounded-sm text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    />
                  </div>
                  <div className="ms-3">
                    <label
                      htmlFor="remember-me"
                      className="text-sm text-gray-600 dark:text-neutral-400"
                    >
                      By submitting this form I have read and acknowledged the{" "}
                      <a
                        className="text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium dark:text-blue-500"
                        href="#"
                      >
                        Privacy policy
                      </a>
                    </label>
                  </div>
                </div>
                {/* End Checkbox */}

                <div className="mt-6 grid">
                  <button
                    type="submit"
                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-primary text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    Kirim pertanyaan
                  </button>
                </div>

                <div className="mt-3 text-center">
                  <p className="text-sm text-gray-500 dark:text-neutral-500">
                    We&apos;ll get back to you in 1-2 business days.
                  </p>
                </div>
              </div>
              {/* End Card */}
            </div>
            {/* End Col */}
          </div>
        </Container>
      </div>
    </section>
  );
};

export default ContactPage;
