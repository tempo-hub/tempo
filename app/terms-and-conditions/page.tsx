import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | Yatra Tempo Traveller",
  description: "Terms and expressions for Yatra Tempo Traveller.",
};

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-8 sm:p-12">
        <h1 className="text-3xl font-bold text-slate-900 mb-8 border-b pb-4 border-slate-200">
          Terms and Conditions
        </h1>
        <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
          <p>
            Welcome to Yatra Tempo Traveller. Yatra Tempo Traveller operates as a part of <strong>Chiku Mobility India Private Limited</strong>.
          </p>
          <p>
            By accessing our website and utilizing our rental and tour services, you agree to be bound by our comprehensive terms of service. 
            Because we are seamlessly integrated with our parent organization, our terms of service, acceptable use, refund mechanisms, 
            and dispute resolution protocols mirror those of our corporate parent.
          </p>
          <p>
            All Terms and Conditions, Privacy Policy, Refund, and Cancellation details are uniformly governed by and strictly 
            adhere to the policies published on our parent domain.
          </p>
          <p>
            For a full view of our organizational user terms, guidelines, terms of service, and comprehensive legal disclosures, please visit:{" "}
            <a href="https://chikucab.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80 font-semibold underline">
              https://chikucab.com/
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
