"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { useEffect } from "react";


type BookingModalProps = {
  isOpen: boolean;
  onClose: () => void;
  vehicleType?: string;
};

export default function BookingModal({
  isOpen,
  onClose,
  vehicleType,
}: BookingModalProps) {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    tripType: "One Way",
    tempoSize: vehicleType || "9-Seater",
    travelDate: "",
    pickupTime: "",
    phone: "",
  });

  useEffect(() => {
    if (vehicleType) {
      setFormData((prev) => ({
        ...prev,
        tempoSize: vehicleType,
      }));
    }
  }, [vehicleType]);

  const timeOptions = [];

  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 15) {
      const period = hour >= 12 ? "PM" : "AM";
      const displayHour = hour % 12 || 12;

      timeOptions.push(
        `${displayHour}:${minute.toString().padStart(2, "0")} ${period}`,
      );
    }
  }

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const requiredFields = [
      { value: formData.from, label: "Pickup City" },
      { value: formData.to, label: "Destination City" },
      { value: formData.tripType, label: "Trip Type" },
      { value: formData.tempoSize, label: "Tempo Size" },
      { value: formData.travelDate, label: "Travel Date" },
      { value: formData.pickupTime, label: "Pickup Time" },
      { value: formData.phone, label: "Phone Number" },
    ];

    const missingField = requiredFields.find((field) => !field.value.trim());

    if (missingField) {
      toast.error(`${missingField.label} is required.`);
      return;
    }

    if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      toast.error("Please enter a valid 10-digit mobile number.");
      return;
    }

    const message = `
Hi YatraTempoTraveller,

*New Tempo Traveller Booking Request*
──────────────────────
*Route:* ${formData.from} → ${formData.to}
*Trip Type:* ${formData.tripType}
*Tempo Size:* ${formData.tempoSize}
*Travel Date:* ${formData.travelDate}
*Pickup Time:* ${formData.pickupTime}
*Phone:* ${formData.phone}

_Sent via YatraTempoTraveller.com booking form_
`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=916280820037&text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/60 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-2xl p-6 max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header with Branding */}
        <div className="flex justify-between items-center mb-6 pb-2 border-b border-gray-100">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Book Your Tempo Traveller
            </h2>
            <p className="text-xs text-gray-500 mt-0.5">
              Varanasi&apos;s most trusted group transport
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors h-8 w-8 flex items-center justify-center rounded-full hover:bg-gray-100"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {/* From City - Varanasi focused */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              Pickup City <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                name="from"
                placeholder="e.g. Varanasi, Ayodhya"
                className="w-full h-11 px-4 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:bg-white focus:border-[#FE6A01] focus:ring-2 focus:ring-[#FE6A01]/20 focus:outline-none transition-all duration-200 placeholder:text-gray-400 hover:border-gray-400"
                onChange={handleChange}
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">
                Home city
              </span>
            </div>
          </div>

          {/* To City */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              Destination City <span className="text-red-500">*</span>
            </label>
            <input
              name="to"
              placeholder="e.g. Prayagraj, Ayodhya, Chitrakoot"
              className="w-full h-11 px-4 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:bg-white focus:border-[#FE6A01] focus:ring-2 focus:ring-[#FE6A01]/20 focus:outline-none transition-all duration-200 placeholder:text-gray-400 hover:border-gray-400"
              onChange={handleChange}
            />
          </div>

          {/* Trip Type */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              Trip Type
            </label>
            <select
              name="tripType"
              className="w-full h-11 px-4 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:bg-white focus:border-[#FE6A01] focus:ring-2 focus:ring-[#FE6A01]/20 focus:outline-none transition-all duration-200 hover:border-gray-400"
              onChange={handleChange}
            >
              <option>One Way</option>
              <option>Round Trip</option>
              <option>Local Sightseeing (Varanasi)</option>
              <option>Wedding/Baraat Package</option>
              <option>Multi-Day Pilgrimage Tour</option>
            </select>
          </div>

          {/* Tempo Size with recommendations */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              Tempo Traveller Size
            </label>
            <select
              name="tempoSize"
              value={formData.tempoSize}
              className="w-full h-11 px-4 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:bg-white focus:border-[#FE6A01] focus:ring-2 focus:ring-[#FE6A01]/20 focus:outline-none transition-all duration-200 hover:border-gray-400"
              onChange={handleChange}
            >
              <option>9-Seater (Best for families)</option>
              <option>12-Seater (Popular for pilgrimages)</option>
              <option>13-Seater (Popular for pilgrimages)</option>
              <option>15-Seater (Comfortable group)</option>
              <option>16-Seater</option>
              <option>17-Seater</option>
              <option>20-Seater (Large groups)</option>
              <option>21-Seater (Large groups)</option>
              <option>24-Seater (Large groups)</option>
              <option>26-Seater (Wedding/Baraat special)</option>
              <option>12-Seater Urbania</option>
              <option>17-Seater Urbania</option>
              <option>Minibus</option>
            </select>
            <p className="text-xs text-gray-500 mt-1">
              Maharaja luxury available for VIP travel
            </p>
          </div>

          {/* Travel Date */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              Travel Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="travelDate"
              className="w-full h-11 px-4 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:bg-white focus:border-[#FE6A01] focus:ring-2 focus:ring-[#FE6A01]/20 focus:outline-none transition-all duration-200 hover:border-gray-400"
              onChange={handleChange}
            />
            <p className="text-xs text-gray-500 mt-1">
              Book 3-7 days in advance for best fare
            </p>
          </div>

          {/* Pickup Time */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              Preferred Pickup Time <span className="text-red-500">*</span>
            </label>
            <select
              name="pickupTime"
              value={formData.pickupTime}
              onChange={handleChange}
              className="w-full h-11 px-4 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:bg-white focus:border-[#FE6A01] focus:ring-2 focus:ring-[#FE6A01]/20 focus:outline-none transition-all duration-200 hover:border-gray-400"
            >
              <option value="">Select Pickup Time</option>
              {timeOptions.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>

          {/* Phone with local hint */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              maxLength={10}
              name="phone"
              placeholder="10-digit mobile number"
              className="w-full h-11 px-4 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:bg-white focus:border-[#FE6A01] focus:ring-2 focus:ring-[#FE6A01]/20 focus:outline-none transition-all duration-200 placeholder:text-gray-400 hover:border-gray-400"
              onChange={handleChange}
            />
            <p className="text-xs text-gray-500 mt-1">
              You&apos;ll receive confirmation on WhatsApp
            </p>
          </div>
        </div>

        {/* Price Estimate & CTA */}
        <div className="mt-6 pt-4 border-t border-gray-100">
          <div className="bg-orange-50 rounded-lg p-3 mb-4 flex justify-between items-center border border-orange-100">
            <div>
              <p className="text-xs text-[#FE6A01] font-medium">
                Estimated Fare (starting from)
              </p>
              <p className="text-xl font-bold text-[#FE6A01]">₹18/km</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-[#FE6A01]">
                Fixed price • No hidden charges
              </p>
              <p className="text-xs text-[#FE6A01]">Driver charges included</p>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
          >
            <span>📱</span>
            Continue on WhatsApp (60s Booking)
            <span>→</span>
          </button>
          <p className="text-center text-xs text-gray-500 mt-3">
            No spam calls. Our team will confirm within 4 hours.
          </p>
        </div>
      </div>
    </div>
  );
}
