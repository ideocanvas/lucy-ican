import React, { useEffect } from "react";

const GradientText = ({ children }: { children: React.ReactNode }) => (
  <span className="bg-gradient-to-r from-gradient-start to-gradient-end bg-clip-text text-transparent">
    {children}
  </span>
);

export default function HomePage() {
  useEffect(() => {
    // Initialize AdSense ads after component mounts
    if (typeof window !== 'undefined' && (window as any).adsbygoogle) {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    }
  }, []);

  return (
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
            Join Waitlist
          </a>
        </div>
      </header>

      <main>
        {/* --- Hero Section --- */}
        <section className="container mx-auto max-w-6xl px-4 py-24 text-center sm:py-32">
          <div className="mb-6 inline-block rounded-full bg-violet-100 px-4 py-1.5 text-sm font-semibold text-violet-700 dark:bg-violet-900/50 dark:text-violet-300">
            The Future of Collaboration is Coming
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            Where Great Ideas <br />
            <GradientText>Find Their Team.</GradientText>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-400">
            Lucy Ideocanvas is the community-driven platform for innovators and creators. Share your vision, get feedback, find skilled collaborators, and bring your projects to life.
          </p>
          <div id="waitlist" className="mt-10 flex items-center justify-center gap-x-4">
            <a href="#" className="rounded-lg bg-gradient-to-r from-gradient-start to-gradient-end px-6 py-3 text-base font-semibold text-white shadow-lg transition-transform hover:scale-105">
              Join the Waitlist
            </a>
            <div className="rounded-lg bg-gradient-to-r from-gradient-start to-gradient-end p-0.5 transition-transform hover:scale-105">
              <a href="#features" className="block rounded-md bg-white px-6 py-2.5 text-base font-semibold text-gray-800 dark:bg-gray-950 dark:text-gray-200">
                Learn More
              </a>
            </div>
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-xs text-gray-500 dark:text-gray-400">
            By joining, you agree to receive a notification upon launch and future updates, which you can opt-out of anytime.
          </p>
        </section>

        {/* --- Features Section --- */}
        <section id="features" className="py-24 sm:py-32">
          <div className="container mx-auto max-w-6xl px-4">
            {/* Google AdSense Ad Placement */}
            <div className="mb-16 flex justify-center">
              <ins
                className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-2207805704631015"
                data-ad-slot="1234567890"
                data-ad-format="auto"
                data-full-width-responsive="true"
              ></ins>
            </div>

            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                The Ultimate Toolkit for Innovation
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                Everything you need to go from a spark of an idea to a fully-realized project.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
              <div className="flex flex-col items-center text-center">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-100 to-blue-100 shadow-md dark:from-purple-900/50 dark:to-blue-900/50">
                  <span className="text-4xl" role="img" aria-label="Lightbulb">{'\u{1F4A1}'}</span>
                </div>
                <h3 className="text-xl font-semibold">Idea Incubator</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  A dedicated space to post your creative concepts and get instant, constructive feedback from a community of experts and enthusiasts.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-100 to-blue-100 shadow-md dark:from-purple-900/50 dark:to-blue-900/50">
                  <span className="text-4xl" role="img" aria-label="Handshake">{'\u{1F91D}'}</span>
                </div>
                <h3 className="text-xl font-semibold">Collaborator Matching</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Find like-minded people with complementary skills—from developers to designers—to help bring your vision to life.
                </p>
              </div>
              {/* --- THIS IS THE UPDATED BLOCK --- */}
              <div className="flex flex-col items-center text-center">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-100 to-blue-100 shadow-md dark:from-purple-900/50 dark:to-blue-900/50">
                  <span className="text-4xl" role="img" aria-label="Robot">{'\u{1F916}'}</span>
                </div>
                <h3 className="text-xl font-semibold">Free AI-Powered Guidance</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Get instant feedback and refine your concepts with our AI assistant, accessible on the web and soon via WhatsApp for on-the-go support. Our WhatsApp number will be provided at launch.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-100 to-blue-100 shadow-md dark:from-purple-900/50 dark:to-blue-900/50">
                  <span className="text-4xl" role="img" aria-label="Toolbox">{'\u{1F9F0}'}</span>
                </div>
                <h3 className="text-xl font-semibold">Collaborative Workspaces</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Take your collaboration to the next level. Once you&apos;ve formed a team, create a private workspace to organize tasks, share files, and track progress, turning your idea into a tangible plan.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- Launching Soon / Contact Section --- */}
        <section id="contact" className="py-24 sm:py-32">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              We&apos;re Launching Soon!
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

        {/* --- Terms and Privacy Sections --- */}
        <section id="terms" className="py-16 sm:py-24 border-t border-gray-200/50 dark:border-gray-800/50">
          <div className="container mx-auto max-w-4xl px-4">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">Terms of Service</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              By using our website and signing up for our waitlist, you agree to these Terms of Service. These terms are a placeholder and will be updated upon our official launch. The service is provided on an &#34;as is&#34; and &#34;as available&#34; basis. We reserve the right to modify or discontinue the service at any time.
            </p>
          </div>
        </section>

        <section id="privacy" className="py-16 sm:py-24 border-t border-gray-200/50 dark:border-gray-800/50">
          <div className="container mx-auto max-w-4xl px-4">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">Privacy Policy</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Your privacy is important to us. This policy explains what information we collect and how we use it.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-600 dark:text-gray-400">
              <li><strong>Information We Collect:</strong> We collect your email address when you sign up for our waitlist.</li>
              <li><strong>How We Use Information:</strong> We use your email to send you a notification when our service launches and potentially for future updates. We will not sell or share your personal information with third parties.</li>
              <li><strong>Opt-Out:</strong> You can opt-out of our communications at any time by contacting us at <a href="mailto:webmaster@ideocanvas.com" className="underline">webmaster@ideocanvas.com</a>.</li>
            </ul>
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
            <a href="#terms" className="hover:text-black dark:hover:text-white">Terms</a>
            <a href="#privacy" className="hover:text-black dark:hover:text-white">Privacy</a>
            <a href="#contact" className="hover:text-black dark:hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}