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
    name: "",
    phone: "",
    pickupPoint: "",
    notes: "",
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
      { value: formData.from, label: "From City" },
      { value: formData.to, label: "To City" },
      { value: formData.travelDate, label: "Travel Date" },
      { value: formData.pickupTime, label: "Pickup Time" },
      { value: formData.name, label: "Name" },
      { value: formData.phone, label: "Phone Number" },
      { value: formData.pickupPoint, label: "Pickup Point" },
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
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Pickup Point:* ${formData.pickupPoint || "To be confirmed"}
*Notes:* ${formData.notes || "None"}

_Sent via YatraTempoTraveller.com booking form_
`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=916280820037&text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/60 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl w-full max-w-2xl p-6 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Tempo Traveller Booking</h2>

          <button onClick={onClose} className="text-xl font-bold">
            ✕
          </button>
        </div>

        <div className="flex flex-wrap gap-2 mt-4 mb-6">
          <span className="bg-green-50 text-green-700 text-xs font-medium px-3 py-1 rounded-full">
            ✓ Instant WhatsApp Quote
          </span>

          <span className="bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">
            ✓ Professional Drivers
          </span>

          <span className="bg-orange-50 text-orange-700 text-xs font-medium px-3 py-1 rounded-full">
            ✓ No Hidden Charges
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {/* From City */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Pickup City <span className="text-red-500">*</span>
            </label>
            <input
              name="from"
              placeholder="e.g. Delhi"
              className="w-full border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-100 p-3 rounded-lg outline-none"
              onChange={handleChange}
            />
          </div>

          {/* To City */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Destination City <span className="text-red-500">*</span>
            </label>
            <input
              name="to"
              placeholder="e.g. Manali"
              className="w-full border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-100 p-3 rounded-lg outline-none"
              onChange={handleChange}
            />
          </div>

          {/* Trip Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Trip Type
            </label>
            <select
              name="tripType"
              className="w-full border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-100 p-3 rounded-lg outline-none"
              onChange={handleChange}
            >
              <option>One Way</option>
              <option>Round Trip</option>
            </select>
          </div>

          {/* Tempo Size */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tempo Traveller Size
            </label>
            <select
              name="tempoSize"
              value={formData.tempoSize}
              className="w-full border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-100 p-3 rounded-lg outline-none"
              onChange={handleChange}
            >
              <option>9-Seater</option>
              <option>12-Seater</option>
              <option>15-Seater</option>
              <option>16-Seater</option>
              <option>20-Seater</option>
              <option>26-Seater</option>
            </select>
          </div>

          {/* Travel Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Travel Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="travelDate"
              className="w-full border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-100 p-3 rounded-lg outline-none"
              onChange={handleChange}
            />
          </div>

          {/* Pickup Time */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Preferred Pickup Time <span className="text-red-500">*</span>
            </label>

            <select
              name="pickupTime"
              value={formData.pickupTime}
              onChange={handleChange}
              className="w-full border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-100 p-3 rounded-lg outline-none"
            >
              <option value="">Select Pickup Time</option>

              {timeOptions.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              name="name"
              placeholder="Enter your full name"
              className="w-full border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-100 p-3 rounded-lg outline-none"
              onChange={handleChange}
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              maxLength={10}
              name="phone"
              placeholder="10-digit mobile number"
              className="w-full border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-100 p-3 rounded-lg outline-none"
              onChange={handleChange}
            />
          </div>

          {/* Pickup Point */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Exact Pickup Location <span className="text-red-500">*</span>
            </label>
            <input
              name="pickupPoint"
              placeholder="Hotel, Airport, Railway Station, etc."
              className="w-full border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-100 p-3 rounded-lg outline-none"
              onChange={handleChange}
            />
          </div>

          {/* Notes */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Additional Requirements
            </label>
            <textarea
              name="notes"
              rows={4}
              placeholder="Any special requirement, luggage details, sightseeing plan, etc."
              className="w-full border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-100 p-3 rounded-lg outline-none"
              onChange={handleChange}
            />
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded"
        >
          Continue on WhatsApp
        </button>
      </div>
    </div>
  );
}
