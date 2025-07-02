
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Get a Website or Landing Page in 3 Days | Vispaico',
};

const ThreeDayWebsitePage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <section className="text-center">
        <h1 className="text-5xl font-bold">Go Live in 3 Days.</h1>
        <h3 className="text-2xl mt-4">Get a professional Website or Landing Page, built and launched for a simple, flat rate.</h3>
        <p className="text-4xl font-bold mt-4">$899 | Delivered in 3 Days</p>
      </section>

      <section className="mt-16">
        <h2 className="text-4xl font-bold text-center">One Simple Service for a Fast Launch.</h2>
        <p className="mt-4 max-w-3xl mx-auto text-center">
          You need to be online, but you don&apos;t have time for jargon, confusing prices, or a complicated process. We get it.
        </p>
        <p className="mt-4 max-w-3xl mx-auto text-center">
          That&apos;s why we offer one straightforward service: we take your basic info and turn it into a professional online presence in just three days. Whether you need a few pages to showcase your whole business or one powerful page to capture leads, the price and the promise are the same. We handle all the tech stuff so you can focus on your business.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-4xl font-bold text-center">What You Get for $899</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-8 text-center">
          <div>
            <h3 className="text-xl font-bold">Your Choice of Format</h3>
            <p>A multi-page website (up to 5 pages) OR a high-impact single landing page.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Custom Design</h3>
            <p>A clean, professional design that reflects your brand.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Mobile-First</h3>
            <p>Looks perfect and is easy to use on phones, tablets, and desktops.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">SEO-Ready</h3>
            <p>Built from the ground up to be found on search engines like Google.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">We Do the Heavy Lifting</h3>
            <p>All we need is some basic information to get started.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Guaranteed 3-Day Delivery</h3>
            <p>We mean it. You&apos;ll be ready to launch in 72 hours.</p>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-4xl font-bold text-center">Our Simple 3-Step Process</h2>
        <div className="flex justify-center mt-8">
          <ol className="list-decimal list-inside">
            <li className="text-xl">Tell Us What You Need
              <p className="text-base">Click the &quot;Get Started&quot; button and fill out a quick form with some basic details about your business and your goal.</p>
            </li>
            <li className="text-xl mt-4">We Get to Work
              <p className="text-base">We review your info, confirm the details with you, and then start building your site right away.</p>
            </li>
            <li className="text-xl mt-4">Launch!
              <p className="text-base">Within 3 days, we&apos;ll hand over your brand new, ready-to-launch website or landing page.</p>
            </li>
          </ol>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-4xl font-bold text-center">Quick Questions</h2>
        <div className="max-w-3xl mx-auto mt-8">
          <h3 className="text-xl font-bold">Should I choose a website or a landing page?</h3>
          <p className="mt-2">
            A website is usually best if you want to showcase multiple services, have an &quot;About Us&quot; section, and a contact page. A landing page is perfect if you have one main goal, like selling a specific product or getting sign-ups for a newsletter.
          </p>
          <p className="mt-2">
            <strong>Don&apos;t worry if you&apos;re not sure!</strong> We can help you figure out what&apos;s best for your goal after you get in touch.
          </p>
          <h3 className="text-xl font-bold mt-8">What information do you need from me?</h3>
          <p className="mt-2">
            All we need to start is your business name, what you do, and any text or images you want to include. Even if you just have a few sentences, we can build from there.
          </p>
        </div>
      </section>

      <section className="mt-16 text-center">
        <h2 className="text-4xl font-bold">Ready to Launch Your Project?</h2>
        <p className="mt-4">Let&apos;s get your business online. The first step takes less than a minute.</p>
        <Link href="/start" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8 inline-block">
          Get Your 3-Day Website
        </Link>
      </section>
    </div>
  );
};

export default ThreeDayWebsitePage;
