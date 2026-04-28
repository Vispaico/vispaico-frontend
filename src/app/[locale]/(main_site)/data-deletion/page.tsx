// src/app/(main_site)/data-deletion/page.tsx
import React from 'react';
import ReactMarkdown from 'react-markdown';

const dataDeletionContent = `If you have used Postiz at posting.vispaico.com and want your account data deleted, send an email to:

**spongo69@gmx.net**

Please include:

- Your account email address
- The connected platform(s) you want removed
- A brief note that you want your Postiz data deleted

After we verify the request, we will delete or anonymize the relevant account data and connected integration data within a reasonable timeframe, unless retention is required for security, legal, or abuse-prevention purposes.

You can also revoke platform access directly from your connected social platform account settings, such as Facebook, Instagram, LinkedIn, or Google.
`;

export default function DataDeletionPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-6 py-12 min-h-screen">
        <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 pb-2">
          User Data Deletion Instructions
        </h1>
        <div className="prose prose-invert max-w-none prose-p:text-white prose-li:text-white prose-strong:text-white prose-headings:text-white prose-a:text-yellow-300 hover:prose-a:text-yellow-200">
          <ReactMarkdown>{dataDeletionContent}</ReactMarkdown>
        </div>
      </div>
    </main>
  );
}
