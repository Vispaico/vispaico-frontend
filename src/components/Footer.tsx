// src/components/Footer.tsx

interface FooterProps {
    siteTitle?: string;
  }
  
  const Footer: React.FC<FooterProps> = ({ siteTitle = "VispaiCo" }) => {
    return (
      <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-6 py-4 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} {siteTitle}. All Rights Reserved.</p>
          {/* Add social links or other footer content later */}
        </div>
      </footer>
    );
  };
  
  export default Footer;