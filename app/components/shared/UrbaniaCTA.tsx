"use client";

import { useState } from "react";
import BookingModal from "./BookingModal";
import { MessageCircle } from "lucide-react";

type Props = {
  buttonText: string;
  className?: string;
};

export default function UrbaniaCTA({
  buttonText,
  className,
}: Props) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpenModal(true)}
        className={className}
      >
        {buttonText === "WhatsApp" && <MessageCircle size={20} />}
        {buttonText}
      </button>

      <BookingModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        vehicleType="Force Urbania"
      />
    </>
  );
}