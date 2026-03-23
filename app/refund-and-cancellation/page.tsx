import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund and Cancellation Policy | Yatra Tempo Traveller",
  description: "Refund and cancellation policy for Yatra Tempo Traveller.",
};

export default function RefundAndCancellation() {
  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-8 sm:p-12">
        <h1 className="text-3xl font-bold text-slate-900 mb-8 border-b pb-4 border-slate-200">
          Refund and Cancellation Policy
        </h1>
        <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
          <p>
            Yatra Tempo Traveller operates as a part of <strong>Chiku Mobility India Private Limited</strong>.
          </p>
          <p>
            Any bookings, trips, or reservations made through Yatra Tempo Traveller are subject to the comprehensive refund and cancellation policies outlined by our parent company. We ensure that our customers experience transparent and fair procedures concerning cancellations, date changes, and refund processing.
          </p>
          <p>
            All Terms and Conditions, Privacy Policy, Refund, and Cancellation details are strictly followed and governed by policies published on our parent domain. Because our systems are deeply integrated, you will find the most accurate and up-to-date cancellation fees, timely refund structures, and eligibility requirements there.
          </p>
          <p>
            For a full view of our organizational refund policies and cancellation guidelines, please visit:{" "}
            <a href="https://chikucab.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 font-semibold underline">
              https://chikucab.com/
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
