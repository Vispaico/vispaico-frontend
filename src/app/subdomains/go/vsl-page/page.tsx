// src/app/subdomains/go/vsl-page/page.tsx

import React from 'react';

// A simple checkmark icon for our feature list
const CheckIcon = () => (
  <svg
    className="w-6 h-6 text-green-500 mr-3 shrink-0"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);


export default function VslPageWithCopy() {
  const ctaLink = "https://www.vispaico.com/services/3-day-website";

  return (
    // We use an off-white for the background for a softer feel
    <div className="bg-gray-50 text-gray-800 font-sans">
      <main className="mx-auto max-w-4xl px-6 py-24 sm:py-32">

        {/* Section 1: The Hero */}
        {/* Effect suggestion: Add a subtle fade-in animation to this whole section on page load. */}
        <section className="text-center mb-24">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Your Website is Being Held Hostage By Jargon.
            <br />
            <span className="text-blue-600">We&apos;re the SWAT Team.</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-gray-600 mb-8">
            Vispaico will bust in, build your entire website (writing, design, and all), and have it live in 3 days. Our extraction fee is a one-time, no-BS price of $899.
          </p>
          <a
            href={ctaLink}
            className="inline-block bg-blue-600 text-white font-bold text-lg px-10 py-4 rounded-md shadow-lg transform transition-transform duration-200 hover:scale-105 hover:bg-blue-700"
          >
            Build My Damn Website
          </a>
        </section>

        {/* Section 2: The Problem & Agitation */}
        <section className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ever Feel Like You Need a PhD Just to Get a Website?</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            You&apos;ve seen the dark side. DIY builders that promise &quot;easy&quot; but deliver a one-way ticket to a rage-aneurysm. Freelancers who vanish like ninjas. And agencies that want to charge you the price of a small car to &quot;synergize your digital narrative&quot; (whatever the hell that means). <span className="font-bold">It&apos;s a circus.</span>
          </p>
        </section>

        {/* Section 3: The Solution & Promise */}
        <section className="bg-white rounded-xl shadow-lg p-8 sm:p-12 mb-24">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">We Got Fed Up and Decided to Burn the Old Rulebook.</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Vispaico exists because we believe getting a killer website shouldn&apos;t require a therapist and a bank loan. We&apos;ve replaced the committees, the PowerPoints, and the confusing gibberish with a brutally simple process that just... works. <span className="font-semibold text-blue-600">We do the heavy lifting. You get to look awesome online.</span>
            </p>
          </div>
        </section>

        {/* Section 4: How It Works */}
        <section className="text-center mb-24">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">Our So-Easy-It-Should-Be-Illegal 3-Step Process.</h2>
          {/* Effect suggestion: Animate these steps to fade in one by one as the user scrolls. */}
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="text-blue-600 font-extrabold text-4xl mb-3">1</div>
              <h3 className="font-bold text-xl mb-2">You Give Us the Mission Brief.</h3>
              <p className="text-gray-600">Click the button and go to our checkout. There, you&apos;ll drop in your business info. Got an old, crusty website? A forgotten Facebook page? Give us the links. This is the only &quot;homework&quot; you have to do. We swear.</p>
            </div>
            {/* Step 2 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="text-blue-600 font-extrabold text-4xl mb-3">2</div>
              <h3 className="font-bold text-xl mb-2">We Unleash the Goblins.</h3>
              <p className="text-gray-600">Our team of design and writing goblins (highly-caffeinated professionals, actually) gets to work. We build the site, write words that sound like a human, and wrestle with all the techy demons. We’ll just grab your logo and go.</p>
            </div>
            {/* Step 3 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="text-blue-600 font-extrabold text-4xl mb-3">3</div>
              <h3 className="font-bold text-xl mb-2">You Say &quot;Hell Yes&quot; and We Go Live.</h3>
              <p className="text-gray-600">We&apos;ll send you a secret link to the finished site. You look it over, give us the thumbs-up, and we push the big red &quot;LAUNCH&quot; button, unleashing your new website onto the unsuspecting internet.</p>
            </div>
          </div>
        </section>

        {/* Section 5: The "Are You Kidding Me?" Package */}
        <section className="bg-gray-900 text-white rounded-xl shadow-2xl p-8 sm:p-12 mb-24">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-2">Here&apos;s All the Loot You Get.</h2>
            <p className="text-lg text-yellow-400 mb-10 font-semibold">No Hidden Chests. All for $899.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-6 max-w-4xl mx-auto">
            <div className="flex items-center text-lg"><CheckIcon /> A Kick-Ass Website (Up to 6 Pages)</div>
            <div className="flex items-center text-lg"><CheckIcon /> Words That Actually Sell</div>
            <div className="flex items-center text-lg"><CheckIcon /> The Techy Headache Stuff? We Do That.</div>
            <div className="flex items-center text-lg"><CheckIcon /> Looks Gorgeous On Any Screen</div>
            <div className="flex items-center text-lg"><CheckIcon /> A &quot;Contact Us&quot; Form That Works</div>
            <div className="flex items-center text-lg"><CheckIcon /> Secret Google-Fu (Basic SEO)</div>
            <div className="flex items-center text-lg col-span-2 md:col-span-2 justify-center"><CheckIcon /> A 3-Week &quot;Whoopsie&quot; Window for Free Revisions</div>
          </div>
        </section>

        {/* Section 6: Proof & Guarantee */}
        <section className="text-center mb-24">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">See Our Handiwork. Trust Our Pinky Swear.</h2>
          {/* TODO: Replace these placeholders with your actual portfolio images and links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-20">
            <div className="bg-white aspect-square rounded-lg border border-gray-200 flex items-center justify-center text-gray-400">Portfolio Item 1</div>
            <div className="bg-white aspect-square rounded-lg border border-gray-200 flex items-center justify-center text-gray-400">Portfolio Item 2</div>
            <div className="bg-white aspect-square rounded-lg border border-gray-200 flex items-center justify-center text-gray-400">Portfolio Item 3</div>
            <div className="bg-white aspect-square rounded-lg border border-gray-200 flex items-center justify-center text-gray-400">Portfolio Item 4</div>
            <div className="bg-white aspect-square rounded-lg border border-gray-200 flex items-center justify-center text-gray-400">Portfolio Item 5</div>
            <div className="bg-white aspect-square rounded-lg border border-gray-200 flex items-center justify-center text-gray-400">Portfolio Item 6</div>
          </div>

          <div className="bg-yellow-300 text-gray-900 rounded-lg p-8 sm:p-12 max-w-3xl mx-auto shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold">We stake our reputation on this. So much so that we offer our completely bonkers:</h3>
            <p className="text-4xl sm:text-5xl font-extrabold text-red-600 my-4">100% &quot;Sleep-Like-A-Baby&quot; Money-Back Guarantee!</p>
            <p className="text-lg font-semibold">If you hate the website we build for you, we haven&apos;t earned your money. You get a full refund. No hoops, no hassle.</p>
          </div>
        </section>
        
        {/* Section 7: Comparison Table */}
        <section className="mb-24">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">How We Stack Up Against &quot;The Old Way&quot;</h2>
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-4 font-bold">Feature</th>
                            <th className="p-4 font-bold text-gray-500">The Agency Circus</th>
                            <th className="p-4 font-bold text-blue-600">Vispaico: The Getaway Car</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-t"><td className="p-4 font-semibold">The Bill</td><td className="p-4 text-gray-600">A small fortune ($5k+)</td><td className="p-4 font-bold">$899. That&apos;s it.</td></tr>
                        <tr className="border-t"><td className="p-4 font-semibold">The Wait</td><td className="p-4 text-gray-600">An eternity (2-4 mos.)</td><td className="p-4 font-bold">3 Days. This week.</td></tr>
                        <tr className="border-t"><td className="p-4 font-semibold">The BS Level</td><td className="p-4 text-gray-600">Stratospheric jargon</td><td className="p-4 font-bold">Zero. None. Zilch.</td></tr>
                        <tr className="border-t"><td className="p-4 font-semibold">Tech Headaches</td><td className="p-4 text-gray-600">All yours, buddy!</td><td className="p-4 font-bold">Handled by our Goblins.</td></tr>
                        <tr className="border-t"><td className="p-4 font-semibold">Small Changes</td><td className="p-4 text-gray-600">&quot;That&apos;ll be $150/hr&quot;</td><td className="p-4 font-bold">3 Weeks Free, Baby!</td></tr>
                    </tbody>
                </table>
            </div>
        </section>


        {/* Section 8: FAQ */}
        <section className="max-w-3xl mx-auto mb-24">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">The &quot;Okay, What&apos;s The Catch?&quot; Section</h2>
            <div className="space-y-6">
                <div className="bg-white p-5 rounded-lg border border-gray-200">
                    <h3 className="font-bold text-lg mb-2">C&apos;mon, what are the hidden fees?</h3>
                    <p className="text-gray-700">Nope. We hate hidden fees more than you do. The only other cost is for your domain and hosting (around $15-20/mo or $120/yr). We set it all up, you just pay the provider.</p>
                </div>
                <div className="bg-white p-5 rounded-lg border border-gray-200">
                    <h3 className="font-bold text-lg mb-2">So you handle the domain/hosting stuff even if I have nothing?</h3>
                    <p className="text-gray-700">Yep. That&apos;s the whole point. Show up with just your business idea. We&apos;ll handle the rest.</p>
                </div>
                <div className="bg-white p-5 rounded-lg border border-gray-200">
                    <h3 className="font-bold text-lg mb-2">What if I need more help later, after the 3 weeks?</h3>
                    <p className="text-gray-700">We&apos;re not gonna ghost you. We have simple, cheap maintenance plans if you want us to stick around and keep things shiny.</p>
                </div>
                <div className="bg-white p-5 rounded-lg border border-gray-200">
                    <h3 className="font-bold text-lg mb-2">Is $899 for a dinky little one-page thing?</h3>
                    <p className="text-gray-700">Hell no. It&apos;s for a legit website up to 6 pages, or a seriously powerful landing page. It&apos;s the real deal for most businesses.</p>
                </div>
                <div className="bg-white p-5 rounded-lg border border-gray-200">
                    <h3 className="font-bold text-lg mb-2">What DON&apos;T you do? Like, what&apos;s the catch?</h3>
                    <p className="text-gray-700">This package isn&apos;t for building Amazon 2.0. E-commerce stores or massive corporate sites are a different beast. We can build them, but they cost more. This package is the awesome, powerful, get-it-done foundation.</p>
                </div>
            </div>
        </section>

        {/* Section 9: Final CTA */}
        <section className="text-center bg-white rounded-xl shadow-lg p-8 sm:p-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Alright, Enough Talk. Let&apos;s Build Your Website.</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-8">
              Your competitors are probably still waiting for a quote. You could have a finished website. With a 100% money-back guarantee, you have literally nothing to lose.
            </p>
            <a
              href={ctaLink}
              className="inline-block bg-blue-600 text-white font-bold text-lg px-10 py-4 rounded-md shadow-lg transform transition-transform duration-200 hover:scale-105 hover:bg-blue-700"
            >
              Start My Risk-Free Project ($899)
            </a>
        </section>

      </main>
    </div>
  );
}