import React from 'react';
import ReactMarkdown from 'react-markdown';

const privacyContent = `for Vispaico.com

**Last Updated: June 30, 2025**

At Vispaico ("Company," "we," "us," or "our"), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website, vispaico.com ("Website"), or use our services. By using the Website, you consent to the practices described in this Privacy Policy.

## 1. Information We Collect

We may collect the following types of information:

### 1.1 Personal Information
Personal information is data that can be used to identify you, such as:
- Name
- Email address
- Phone number
- Mailing address
- Payment information (if applicable)
- Account login credentials (if you create an account)

### 1.2 Non-Personal Information
We may also collect non-personal information that does not directly identify you, such as:
- Browser type and version
- IP address
- Device type
- Operating system
- Pages visited and time spent on the Website
- Referring website URLs

### 1.3 Cookies and Tracking Technologies
We use cookies and similar technologies (e.g., web beacons, pixels) to enhance your experience on the Website. Cookies are small data files stored on your device that help us:
- Remember your preferences
- Analyze Website performance
- Deliver personalized content
You can manage your cookie preferences through your browser settings, but disabling cookies may affect the Website’s functionality.

## 2. How We Use Your Information

We may use your information for the following purposes:
- To provide, operate, and maintain the Website and its services.
- To process transactions and fulfill orders (if applicable).
- To communicate with you, including responding to inquiries and sending updates or promotional materials.
- To improve the Website’s content, functionality, and user experience.
- To analyze usage trends and Website performance.
- To comply with legal obligations and protect our rights.

## 3. How We Share Your Information

We do not sell or rent your personal information to third parties. We may share your information in the following circumstances:
- **Service Providers**: We may share your information with third-party vendors who perform services on our behalf, such as hosting, payment processing, or analytics.
- **Legal Compliance**: We may disclose your information to comply with applicable laws, regulations, or legal processes, or to respond to lawful requests from authorities.
- **Business Transfers**: In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.
- **With Your Consent**: We may share your information with third parties if you provide explicit consent.

## 4. Data Security

We implement reasonable technical and organizational measures to protect your personal information from unauthorized access, loss, or misuse. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.

## 5. Your Choices

You have the following rights regarding your personal information:
- **Access and Update**: You may access or update your personal information by logging into your account or contacting us.
- **Opt-Out**: You may opt out of receiving promotional emails by following the unsubscribe instructions in those emails.
- **Cookies**: You can disable cookies through your browser settings, though this may impact your experience on the Website.

## 6. Third-Party Links

The Website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to review their privacy policies before providing any personal information.

## 7. Children’s Privacy

The Website is not intended for individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it.

## 8. International Users

The Website is operated from the United States. If you are accessing the Website from outside the United States, your information may be transferred to and processed in the United States, where data protection laws may differ from those in your country. By using the Website, you consent to this transfer and processing.

## 9. Changes to This Privacy Policy

We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last Updated" date. Your continued use of the Website after such changes constitutes your acceptance of the updated Privacy Policy.

## 10. Contact Information

If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
- Email: privacy@vispaico.com
- Address: [Insert Company Address]

Thank you for trusting Vispaico with your information!`;

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-6 py-12 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Privacy Policy</h1>
      <div className="prose dark:prose-invert max-w-none">
        <ReactMarkdown>{privacyContent}</ReactMarkdown>
      </div>
    </div>
  );
}
