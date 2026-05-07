"use client";

import { useContactModal } from '@/context/ContactModalContext';

type ContactCTAButtonProps = {
  text: string;
  className?: string;
};

const ContactCTAButton = ({ text, className }: ContactCTAButtonProps) => {
  const { openModal } = useContactModal();

  return (
    <button
      type="button"
      onClick={openModal}
      className={className}
    >
      {text}
    </button>
  );
};

export default ContactCTAButton;
