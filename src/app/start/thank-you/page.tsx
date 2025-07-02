
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thank You | Vispaico',
};

const ThankYouPage = () => {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-5xl font-bold">Got it. Thanks!</h1>
      <h3 className="text-2xl mt-4">We&apos;ve received your project information.</h3>
      <p className="mt-8 max-w-2xl mx-auto">
        You&apos;ve taken the first step, and the hard part is already over. We&apos;re looking over your details right now to make sure we have everything we need.
      </p>
      <h4 className="text-xl font-bold mt-8">What&apos;s next?</h4>
      <p className="mt-4 max-w-2xl mx-auto">
        Expect a personal email from our team within the next few business hours. That email will include confirmation of your project goal and the next steps, including the payment link to officially kick things off.
      </p>
      <p className="mt-4 max-w-2xl mx-auto">
        No stress, no hurdles. We&apos;ll be in touch shortly!
      </p>
    </div>
  );
};

export default ThankYouPage;
