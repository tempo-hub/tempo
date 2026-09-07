/**
 * Opens WhatsApp with a predefined message from the website
 * @param customMessage Optional custom message to append to the default message
 */
export const openWhatsAppChat = (customMessage?: string) => {
  const phoneNumber = "919818022327";
  
  const baseMessage = "Hi, I want to book a Tempo Traveller through Yatra Tempo Traveller powered by Chikucab.";
  
  const fullMessage = customMessage 
    ? `${baseMessage}\n\n${customMessage}`
    : baseMessage;

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullMessage)}`;
  
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
};

/**
 * Opens WhatsApp with a detailed booking inquiry message
 */
export const openWhatsAppBooking = (details?: {
  from?: string;
  to?: string;
  tempoSize?: string;
  travelDate?: string;
  pickupTime?: string;
  phone?: string;
}) => {
  let message = "Hi YatraTempoTraveller,\n\n*New Tempo Traveller Booking Request from Website*\n──────────────────────";
  
  if (details) {
    if (details.from) message += `\n*Pickup:* ${details.from}`;
    if (details.to) message += `\n*Destination:* ${details.to}`;
    if (details.tempoSize) message += `\n*Tempo Size:* ${details.tempoSize}`;
    if (details.travelDate) message += `\n*Travel Date:* ${details.travelDate}`;
    if (details.pickupTime) message += `\n*Pickup Time:* ${details.pickupTime}`;
    if (details.phone) message += `\n*Phone:* ${details.phone}`;
  }
  
  message += "\n\n_Sent from YatraTempoTraveller.com_";
  
  openWhatsAppChat(message);
};
