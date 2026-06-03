import { useState } from "react";
import BookingModal from "./BookingModal";

interface Props {
  fromCity: string;
  toCity: string;
  fare: number;
}

export default function PerKmFareSection({ fromCity, toCity, fare }: Props) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="bg-white border border-gray-200 rounded-3xl shadow-sm p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Tempo Traveller Per k.m Fare from {fromCity} to {toCity}
          </h2>

          <p className="text-gray-700 leading-7 mb-8">
            Book affordable tempo traveller service from {fromCity} to {toCity}{" "}
            at just ₹{fare}/k.m. Clean vehicles, experienced drivers, and
            comfortable seating available for all trips.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Fare Card */}
            <div className="bg-gradient-to-br from-red-50 to-white border border-red-100 rounded-3xl p-6 shadow-sm">
              <p className="text-sm font-medium text-primary mb-2">
                Starting Fare
              </p>

              <h3 className="text-4xl font-bold text-gray-900">
                ₹{fare}
                <span className="text-lg font-medium text-gray-600">/K.m</span>
              </h3>

              <p className="text-gray-600 mt-3 leading-7">
                Affordable tempo traveller pricing from {fromCity} to {toCity}{" "}
                with professional drivers and comfortable seating.
              </p>
            </div>

            {/* Features Card */}
            <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-5">
                Included Features
              </h3>

              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-green-600">✔</span>
                  Driver Included
                </li>

                <li className="flex items-center gap-2">
                  <span className="text-green-600">✔</span>
                  Neat & Clean Vehicle
                </li>

                <li className="flex items-center gap-2">
                  <span className="text-green-600">✔</span>
                  24x7 Customer Support
                </li>

                <li className="flex items-center gap-2">
                  <span className="text-green-600">✔</span>
                  Outstation Trip Available
                </li>

                <li className="flex items-center gap-2">
                  <span className="text-green-600">✔</span>
                  Experienced Drivers
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <button
              onClick={() => setIsBookingOpen(true)}
              className="inline-block bg-primary text-white font-semibold px-6 py-3 rounded-xl transition hover:bg-primary/90 cursor-pointer"
            >
              Book Tempo Traveller
            </button>
          </div>
        </div>
      </section>

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </>
  );
}
