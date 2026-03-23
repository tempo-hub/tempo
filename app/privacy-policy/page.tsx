import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Yatra Tempo Traveller",
  description: "Privacy policy for Yatra Tempo Traveller.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-8 sm:p-12">
        <h1 className="text-3xl font-bold text-slate-900 mb-8 border-b pb-4 border-slate-200">
          Privacy Policy
        </h1>
        <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
          <p>
            Yatra Tempo Traveller is a part of <strong>Chiku Mobility India Private Limited</strong>.
          </p>
          <p>
            This operational website serves primarily as an informational and booking channel for tempo traveller services. 
            All our privacy practices, data collection, usage, sharing, refund and cancellation policies are governed entirely by our parent organization, 
            Chiku Mobility India Private Limited, and are explicitly outlined on our primary domain portal.
          </p>
          <p>
            For comprehensive details on how we protect your personal information, handle data compliance, manage cookies, 
            and details relating to reservations, refunds, and cancellations, please refer directly to the primary policies 
            located at our parent website.
          </p>
          <p>
            All Terms and Conditions, Privacy Policy, Refund, and Cancellation details are followed by and subject to:{" "}
            <a href="https://chikucab.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 font-semibold underline">
              https://chikucab.com/
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
