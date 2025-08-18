import React from "react";

const GradientText = ({ children }: { children: React.ReactNode }) => (
  <span className="bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent">
    {children}
  </span>
);

export default function HomePage() {
  return (
    // CHANGE IS HERE: We apply the solid background color AND our new starry pattern class.
    <div className="min-h-screen w-full bg-background bg-starry">
      {/* --- Navigation Bar --- */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200/50 bg-background/80 backdrop-blur-sm dark:border-gray-800/50 dark:bg-background/80">
        <div className="container mx-auto flex h-16 max-w-6xl items-center justify-start gap-8 px-4">
          <a href="#" className="text-xl font-bold">
            <GradientText>Lucy Ideocanvas</GradientText>
          </a>
          <nav className="ml-auto hidden items-center space-x-8 text-sm font-semibold text-gray-600 dark:text-gray-300 md:flex">
            <a href="#features" className="transition-colors hover:text-black dark:hover:text-white">Features</a>
            <a href="#contact" className="transition-colors hover:text-black dark:hover:text-white">Contact</a>
          </nav>
          <a href="#waitlist" className="rounded-lg bg-gradient-to-r from-gradient-start to-gradient-end px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105">
            Get Notified
          </a>
        </div>
      </header>

      <main>
        {/* --- Hero Section --- */}
        <section className="container mx-auto max-w-6xl px-4 py-24 text-center sm:py-32">
          <div className="mb-6 inline-block rounded-full bg-violet-100 px-4 py-1.5 text-sm font-semibold text-violet-700 dark:bg-violet-900/50 dark:text-violet-300">
            Coming Soon
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            Share Ideas. <br />
            <GradientText>Spark Innovation.</GradientText>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-400">
            Our platform for creative collaboration is currently under construction. Be the first to know when we launch and start turning dreams into reality!
          </p>
          <div id="waitlist" className="mt-10 flex items-center justify-center gap-x-4">
            <a href="#" className="rounded-lg bg-gradient-to-r from-gradient-start to-gradient-end px-6 py-3 text-base font-semibold text-white shadow-lg transition-transform hover:scale-105">
              Notify Me on Launch
            </a>
            <div className="rounded-lg bg-gradient-to-r from-gradient-start to-gradient-end p-0.5 transition-transform hover:scale-105">
              <a href="#features" className="block rounded-md bg-white px-6 py-2.5 text-base font-semibold text-gray-800 dark:bg-gray-950 dark:text-gray-200">
                Learn More
              </a>
            </div>
          </div>
        </section>

        {/* --- Features Section --- */}
        <section id="features" className="py-24 sm:py-32">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                What's Coming to Lucy Ideocanvas?
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                Everything you'll need to bring your ideas to life.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-100 to-blue-100 shadow-md dark:from-purple-900/50 dark:to-blue-900/50">
                  <span className="text-4xl" role="img" aria-label="Lightbulb">💡</span>
                </div>
                <h3 className="text-xl font-semibold">Share Your Ideas</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  A dedicated space to post your creative concepts and get instant, constructive feedback.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-100 to-blue-100 shadow-md dark:from-purple-900/50 dark:to-blue-900/50">
                  <span className="text-4xl" role="img" aria-label="Handshake">🤝</span>
                </div>
                <h3 className="text-xl font-semibold">Collaborate Together</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Find like-minded people with complementary skills to help bring your future vision to life.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-100 to-blue-100 shadow-md dark:from-purple-900/50 dark:to-blue-900/50">
                  <span className="text-4xl" role="img" aria-label="Rocket">🚀</span>
                </div>
                <h3 className="text-xl font-semibold">Launch Your Project</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Turn your polished concepts into real-world projects with community support and resources.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- Launching Soon / Contact Section --- */}
        <section id="contact" className="py-24 sm:py-32">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              We're Launching Soon!
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
              We are working hard to bring Lucy Ideocanvas to you. For partnership inquiries or to be notified when we go live, please contact us.
            </p>
            <div className="mt-8">
              <a href="mailto:webmaster@ideocanvas.com" className="inline-block rounded-lg bg-gradient-to-r from-gradient-start to-gradient-end px-8 py-4 text-base font-semibold text-white shadow-lg transition-transform hover:scale-105">
                Email Us
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* --- Footer --- */}
      <footer className="border-t border-gray-200/50 dark:border-gray-800/50">
        <div className="container mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-gray-500 dark:text-gray-400 sm:flex-row">
          <div className="font-bold">
            <GradientText>Lucy Ideocanvas</GradientText>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-black dark:hover:text-white">Terms (Coming Soon)</a>
            <a href="#" className="hover:text-black dark:hover:text-white">Privacy (Coming Soon)</a>
            <a href="#contact" className="hover:text-black dark:hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}