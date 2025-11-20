
import type { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';

import { Link } from '@/i18n/navigation';
import { getStoryContext, storiesBasePath } from '@/data/stories';
import { resolveLocale } from '@/i18n/locale-utils';

const ROUTE_SEGMENT = 'website-launch-checklist-48-hours-to-go-live';

export async function generateMetadata({ params }: { params: Promise<{ locale:string }> }): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const { story } = getStoryContext(ROUTE_SEGMENT, resolvedLocale);
  return {
    title: story.metadataTitle,
    description: story.metadataDescription
  };
}

export default async function WebsiteLaunchChecklistStory({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const { story, relatedStories } = getStoryContext(ROUTE_SEGMENT, resolvedLocale);
  const publishDateFormatter = new Intl.DateTimeFormat(resolvedLocale, {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  const formattedDate = publishDateFormatter.format(new Date(story.publishDate));
  const articleMarkdown = String.raw`![Boosters of a rocket ready for tke off.](https://images.unsplash.com/photo-1641236546535-9f9412bc172f?w=900&auto=jpg&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGNoZWNrbGlzdCUyMHJvY2tldHN8ZW58MHx8MHx8fDI%3D)

You've made it. After weeks, or maybe even months, of hard work, your new website is finally ready to see the light of day. The code is written, the design is polished, and the content is (mostly) typo-free. You're in the final stretch, the last 48 hours before you unleash your creation upon the world.

This is not the time to relax. This is the time to channel your inner astronaut, because you're about to go through a pre-flight checklist that would make NASA proud.

The final 48 hours before a **website deployment** are a minefield of potential disasters. One wrong move, one missed step, and your glorious launch could turn into a fiery explosion of 404 errors, broken images, and unhappy customers.

But don't panic! We're here to guide you through the **pre-launch website** danger zone with our comprehensive **website launch checklist**. Follow these steps, and you'll be well on your way to a smooth, stress-free launch. So grab a coffee (or something stronger), put on your favorite "get stuff done" playlist, and let's get this rocket off the ground.

### 48 Hours to Go: The Final Content and Design Review (The "Are We Sure About This?" Phase)

The clock is ticking. It's time to put on your most detail-oriented hat and give your website one last, thorough review. This is not the time for "good enough." This is the time for "as close to perfect as humanly possible."

*   **Proofread everything. Again.** Read every single word on every single page. Then, have someone else read it. Then, have your grammar-nerd friend read it. Then, read it out loud to your dog. You'll be amazed at the typos you find. A simple typo can make your business look unprofessional, and it's a completely avoidable mistake.
*   **Check all your links.** Click on every single link on your website. Internal links, external links, menu links, footer links, all of them. A broken link is a dead end for your users and a red flag for Google. It's the digital equivalent of a "Bridge Out" sign on a highway.
*   **Test your forms.** Fill out every single form on your website. Your contact form, your newsletter signup, your checkout process. Does the form submit correctly? Do you get a confirmation message? Does the data go where it's supposed to go? A broken form is a black hole for your leads.
*   **Review your images.** Are all your images loading correctly? Are they optimized for the web? (Hint: if your homepage takes more than 3 seconds to load, the answer is probably "no.") Do they have descriptive alt text? Alt text is not just for SEO; it's for accessibility. It's what screen readers use to describe your images to visually impaired users.
*   **Check your responsive design.** Look at your website on as many different devices as you can get your hands on. Your phone, your tablet, your laptop, your grandma's ancient desktop computer. Does it look good and work well on all of them? Your customers are not all using the same device, and your website needs to be ready for all of them.

### 24 Hours to Go: The Technical Nitty-Gritty (The "Don't Touch That!" Phase)

It's time to get your hands dirty with the technical side of things. If you're not a developer, this is the part where you buy your developer a really nice coffee (or a beer, depending on the time of day) and then stay out of their way.

*   **Set up your domain and DNS.** Your domain name should be pointing to your web host. This can take some time to propagate, so it's a good idea to do it at least 24 hours before you want to go live. It's like telling the post office your new address.
*   **Install your SSL certificate.** This is what gives you the little padlock in the address bar and the "https" in your URL. It's essential for security and for SEO. Most modern web hosts make this easy, but it's still something you need to double-check. A website without an SSL certificate is like a store without a lock on the door.
*   **Set up your analytics.** You can't improve what you don't measure. Make sure you have Google Analytics (or your analytics tool of choice) installed and configured correctly. You want to be able to track your traffic, your conversions, and your user behavior from day one.
*   **Submit your sitemap to Google Search Console.** This is like giving Google a roadmap to your website. It helps them find and index all your pages. You want to make it as easy as possible for Google to understand what your website is about.
*   **Set up 301 redirects.** If you're launching a new version of an existing website, you need to make sure that all your old URLs redirect to the new ones. This is crucial for preserving your SEO. If you don't do this, you're basically throwing away all the hard work you've put into building your search engine rankings.
*   **Take a full backup of your old site.** Just in case. You never know when you might need it. It's like having a spare tire in your car.

### T-Minus 1 Hour: The Final Countdown (The "Deep Breaths" Phase)

You're almost there. The finish line is in sight. But don't pop the champagne just yet. There are a few last-minute checks you need to do.

*   **Take a deep breath.** You've got this. You've done the work, you've checked all the boxes, and you're ready for launch.
*   **Do one last, quick review of the live site.** Make sure everything looks and works as expected. This is your final sanity check.
*   **Announce your launch!** Tell the world about your new website. Share it on social media, send an email to your list, and shout it from the rooftops. You've earned it.

### You've Launched! Now What? (The "Oh Crap, What Now?" Phase)

Congratulations! You've successfully launched your new website. You've made it through the danger zone. But your work is not done. In fact, it's just beginning.

*   **Monitor your analytics.** Keep a close eye on your traffic, your conversion rates, and your user behavior. Are people finding your site? Are they sticking around? Are they doing what you want them to do?
*   **Listen to feedback.** Your customers will be the first to tell you what's working and what's not. Make it easy for them to give you feedback, and then actually listen to what they have to say.
*   **Start iterating.** Use the data and feedback you're collecting to make your website better and better over time. A website is not a static object; it's a living, breathing part of your business. It needs to be constantly evolving to meet the changing needs of your customers.

Launching a website can be a stressful experience, but with a solid plan and a comprehensive checklist, you can minimize the risks and set yourself up for success.

**Ready to launch?** If you're feeling overwhelmed, don't worry. We've launched hundreds of websites, and we've got the process down to a science. Check out our **[Growth Website page](/vispaico-growth-website)** to see how we can get you live in 72 hours, without the stress. And if you have more questions, our **[FAQ page](/faq)** is a great place to start. We're here to help you navigate the final frontier of website deployment.
`;

  return (
    <>
      <header className="space-y-4">
        <p className="text-xs font-semibold tracking-[0.35em] uppercase text-blue-500">And Access for All</p>
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
