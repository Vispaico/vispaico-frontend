import type { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';

import { Link } from '@/i18n/navigation';
import { getStoryContext, storiesBasePath } from '@/data/stories';
import { resolveLocale } from '@/i18n/locale-utils';

const ROUTE_SEGMENT = 'conversion-optimization-turning-website-visitors-into-customers';

export async function generateMetadata({ params }: { params: Promise<{ locale:string }> }): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const { story } = getStoryContext(ROUTE_SEGMENT, resolvedLocale);
  return {
    title: story.metadataTitle,
    description: story.metadataDescription
  };
}

export default async function ConversionOptimizationStory({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const { story, relatedStories } = getStoryContext(ROUTE_SEGMENT, resolvedLocale);
  const publishDateFormatter = new Intl.DateTimeFormat(resolvedLocale, {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  const formattedDate = publishDateFormatter.format(new Date(story.publishDate));
  const articleMarkdown = String.raw`![A website visitor following a clear, well-lit path to a "Buy Now" button, while other visitors are lost in a confusing maze of pop-ups and confusing navigation. The successful visitor is high-fiving a friendly robot labeled "CRO".](https://images.unsplash.com/photo-1642142785011-4a00c34c4a36?w=900&auto=jpg&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI3fHx8ZW58MHx8fHx8)

Getting traffic to your website is great. It's a sign that people are interested in what you have to offer. But traffic doesn't pay the bills.

Customers do.

And the process of turning a casual website visitor into a paying customer is where the real magic happens. It's a science and an art known as **conversion optimization**. It's the difference between a website that's a pretty-looking brochure and a website that's a 24/7 sales machine, tirelessly working to turn interest into income.

### What is Conversion Optimization, Anyway? (It's Not About Black Magic, It's About Understanding People)

**Conversion optimization** (or CRO) is the systematic process of improving your website to increase the percentage of visitors who complete a desired action. This "desired action," often called a conversion, isn't always a direct sale. It could be:

*   Making a purchase
*   Filling out a contact form (generating a lead)
*   Signing up for a newsletter (building an audience)
*   Downloading a whitepaper or e-book (capturing valuable information)
*   Starting a free trial (product engagement)
*   Calling your business (direct customer interaction)
*   Engaging with a chatbot
*   Watching a key video
*   Any other action that's valuable to your business and moves a potential customer further down your sales funnel.

In essence, CRO is about understanding your website visitors' behavior, motivations, and pain points, and then optimizing your site to make it as easy and compelling as possible for them to take that next step. It's about turning "window shoppers" into paying customers, and "browsers" into loyal brand advocates.

### The Leaky Bucket Problem (And How to Plug the Holes Before Your Profits Drain Away)

Imagine your website is a bucket. And the water you're constantly pouring into it is your hard-earned website traffic – from SEO, paid ads, social media, referrals, and all your other marketing efforts.

If your bucket has a bunch of holes in it, it doesn't matter how much water you pour in; it's just going to leak out. You can spend a fortune on advertising to get more traffic, but if your website is a leaky bucket, you're just throwing money away. You're essentially paying to have customers visit your site, only to leave in frustration or confusion.

Those holes are the friction points in your user experience. The confusing navigation, the slow load times, the complicated checkout process, the overwhelming amount of text, broken links, unclear calls to action, or even just a design that looks unprofessional. Each one of these is a reason for a potential customer to leave.

**Conversion optimization** is the process of finding and plugging those leaks. It's about systematically identifying what's causing visitors to abandon your site and then implementing solutions to keep them engaged and guide them towards your desired action. It's about turning your leaky bucket into a watertight conversion machine that retains every valuable drop of traffic.

### How to Start Optimizing Your Website for Conversions (A Simple, Scientific Framework)

CRO is not guesswork. It's a scientific, iterative process. Here's a simple, 6-step framework to get you started:

1.  **Define your goals (What's Your North Star?):** Before you change anything, you need to know what you're trying to achieve. What is the most important action a user can take on your website? Is it a sale, a lead, a signup? If you don't know what success looks like, you can't measure whether you're successful. Be specific. Instead of "get more sales," aim for "increase e-commerce checkout completion rate by 5%."
2.  **Gather data (Become a Digital Detective):** You can't fix what you don't understand. Use a combination of quantitative and qualitative tools to see how users are interacting with your website.
    *   **Quantitative Data (The "What"):** Tools like Google Analytics, Adobe Analytics, or Mixpanel tell you *what* is happening. Where are people coming from? What pages do they visit? How long do they stay? Where do they drop off?
    *   **Qualitative Data (The "Why"):** Tools like Hotjar, user session recordings, heatmaps, and customer surveys tell you *why* it's happening. What are users looking at? Where are they getting stuck? What questions do they have? Why aren't they converting?
3.  **Formulate a hypothesis (Your Educated Guess):** Based on the data you've gathered, make an educated guess about what you can do to improve your **conversion rate**. Your hypothesis should be specific, measurable, achievable, relevant, and time-bound (SMART). For example: "I believe that changing the color of my 'Buy Now' button from blue to orange will increase clicks by 10% within 30 days because orange is a more eye-catching color and aligns better with our brand's urgency messaging."
4.  **Test your hypothesis (The Experiment):** This is where **A/B testing** (also known as split testing) comes in. You create two (or more) versions of your page—an "A" version (the original) and a "B" version (your variation). Then, you show each version to an equal percentage of your visitors and see which one performs better. It's like a science experiment, but with your website visitors as the test subjects. You can test headlines, images, calls to action, layout, form fields, and more.
5.  **Analyze the results (Learn from Your Data):** Did the orange button get more clicks and conversions? Great. You've just improved your conversion rate. Did it make things worse? No problem. You've just learned something valuable about your audience. You've learned that your customers hate orange buttons, or perhaps that blue was already performing optimally. This knowledge is invaluable for informing your future design and marketing decisions.
6.  **Repeat (The Never-Ending Cycle):** Conversion optimization is not a one-time fix. It's an ongoing process of testing, learning, and improving. It's a journey, not a destination. You should always be testing, always be learning, and always be improving. The market changes, your customers change, and your website should evolve with them.

### The Low-Hanging Fruit of Conversion Optimization (The Easy Wins You Can Implement Today)

Want to see some quick wins? Here are some common areas where businesses often find significant CRO improvements:

*   **Improve your website speed.** As we've discussed before, a faster website is a higher-converting website. Google research indicates that even a 100ms delay can hurt conversion rates by 7%. It's the easiest and most effective thing you can do to improve your conversion rate.
*   **Simplify your forms.** The fewer fields a user has to fill out, the more likely they are to complete the form. Do you really need their fax number? (Hint: probably not). Only ask for essential information.
*   **Add social proof.** Testimonials, case studies, customer reviews, trust badges, and security seals are powerful tools for building trust and credibility. People are more likely to buy from you if they see that other people have had a positive experience.
*   **Create clear and compelling calls to action (CTAs).** Tell your visitors exactly what you want them to do, and make it easy for them to do it. Use action-oriented language ("Get Your Free Quote," "Download Now," "Start Your Trial") and make your buttons big, bold, and visually distinct.
*   **Optimize for mobile.** More than half of all web traffic now comes from mobile devices. If your website isn't optimized for mobile—meaning it's responsive, fast, and easy to use on a small screen—you're leaving a lot of money on the table.
*   **Use high-quality images and videos.** People are visual creatures. High-quality images and videos can help you to showcase your products and services in the best possible light, tell a story, and build emotional connections.
*   **Write compelling copy.** Your website's copy should be clear, concise, and persuasive. It should speak directly to your target audience, address their pain points, and highlight the benefits of your solution. Avoid jargon.
*   **Improve navigation and site structure.** Make it easy for users to find what they're looking for. A logical and intuitive site structure reduces frustration and keeps users on your site longer.
*   **Minimize distractions.** Pop-ups, intrusive ads, or too many competing CTAs can overwhelm users and lead them to abandon your site. Keep your pages focused on a single primary goal.

### The Vispaico Advantage: Data-Driven Design That Gets Results

At Vispaico, we believe that web design should be more than just pretty pictures. It should be a data-driven process of continuous improvement, aimed squarely at your business goals.

That's why we offer **[Conversion Optimization services](/services)** to help you turn your website into a well-oiled conversion machine. We'll help you to understand your users, identify the friction points in your user experience, and systematically improve your website to drive more conversions.

We'll use a combination of quantitative data (from tools like Google Analytics) and qualitative data (from user testing, heatmaps, session recordings, and customer surveys) to get a complete picture of how your users are interacting with your website. Then, we'll use that data to create a roadmap for ongoing optimization, ensuring every change is purposeful and data-backed.

Ready to stop guessing and start converting? Check out our **[Case Studies](/case-studies)** to see how we've helped other businesses like yours achieve their conversion goals. Or, learn more about our **[Conversion Optimization service](/services)** and how we can help you turn your website into a powerful tool for growth. It's time to stop leaving money on the table and start building a website that works as hard as you do.`;

  return (
    <>
      <header className="space-y-4">
        <p className="text-xs font-semibold tracking-[0.35em] uppercase text-blue-500">Growth Playbook</p>
        <h1 className="text-4xl font-semibold text-slate-950 sm:text-5xl">{story.title}</h1>
        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
          <span>{formattedDate}</span>
          <span className="h-1 w-1 rounded-full bg-slate-400" />
          <span>{story.readLength}</span>
        </div>
      </header>

      <div className="space-y-10 text-lg leading-relaxed text-slate-700">
        <div className="prose prose-slate max-w-none">
          <ReactMarkdown>{articleMarkdown}</ReactMarkdown>
        </div>

        <section aria-labelledby="related-stories" className="space-y-6">
          <div className="h-px w-full bg-slate-200" />
          <div className="space-y-2">
            <p className="text-xs font-semibold tracking-[0.35em] uppercase text-blue-500">Keep exploring</p>
            <h2 id="related-stories" className="text-2xl font-semibold text-slate-950">
              Stories from the passing Scene
            </h2>
            <p className="text-slate-600">Further notes of thoughts that passed our mind.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {relatedStories.map((related) => (
              <Link
                key={related.routeSegment}
                href={`${storiesBasePath}/${related.routeSegment}`}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-300 hover:shadow-md"
              >
                <p className="text-xs uppercase tracking-[0.35em] text-blue-500">
                  {publishDateFormatter.format(new Date(related.publishDate))}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-slate-900 group-hover:text-blue-500">{related.title}</h3>
                <p className="mt-3 text-sm text-slate-600 line-clamp-3">{related.excerpt}</p>
                <span className="mt-4 inline-flex items-center text-sm font-semibold text-blue-500">
                  Read this story
                  <svg
                    aria-hidden
                    className="ml-2 h-4 w-4 transition group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>

          <div className="flex justify-center pt-4">
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-400 hover:text-blue-500"
            >
              Back to all articles
              <svg aria-hidden className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16m-7-7 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}