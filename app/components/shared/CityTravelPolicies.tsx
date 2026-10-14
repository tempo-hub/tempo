import {
  ShieldCheck,
  ReceiptText,
  Users,
  IndianRupee,
  CalendarCheck,
  ArrowUpRight,
} from "lucide-react";

interface CityTravelPoliciesProps {
  cityName?: string;
  fleet?: string[];
}

export default function CityTravelPolicies({
  cityName = "your city",
  fleet = [],
}: CityTravelPoliciesProps) {
  const fleetSeaters = [
    ...new Set(
      fleet
        .map((vehicle) => Number(vehicle))
        .filter((seater) => Number.isFinite(seater) && seater > 0),
    ),
  ].sort((a, b) => a - b);

  const seaterRange =
    fleetSeaters.length > 1
      ? `${fleetSeaters[0]}–${fleetSeaters[fleetSeaters.length - 1]} seater`
      : fleetSeaters.length === 1
        ? `${fleetSeaters[0]} seater`
        : "Multiple seating options";

  const policies = [
    {
      title: "Toll and parking charges",
      description:
        "Toll taxes, parking fees, state entry taxes and other applicable route charges are payable separately unless explicitly included in your booking quotation.",
    },
    {
      title: "Available seating options",
      description: `Tempo Traveller options in ${cityName} depend on vehicle availability. ${
        fleetSeaters.length
          ? `The seating options listed for this page range from ${seaterRange}.`
          : "Confirm the available seating capacity with our team before booking."
      } Please select a vehicle based on your group size and luggage.`,
    },
    {
      title: "Clear and transparent fares",
      description:
        "Your final quotation should specify the vehicle fare, included services, driver allowance, tolls, parking and other applicable charges. Confirm the complete amount before your journey.",
    },
    {
      title: "Booking cancellation",
      description:
        "Cancellation charges and refund eligibility depend on the terms confirmed for your booking. Please check your booking confirmation or contact our team before cancelling.",
    },
  ];

  // Inside your CityTravelPolicies component
  return (
    <section
      aria-labelledby="travel-policies-heading"
      className="my-12 sm:my-16"
    >
      <div
        className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm"
        style={{ maxWidth: "1200px", margin: "0 auto" }}
      >
        {/* Header */}
        <div className="border-b border-gray-100 bg-gradient-to-r from-orange-50 via-white to-white px-5 py-7 sm:px-8 sm:py-9">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#FE6A01]">
            <ShieldCheck size={15} />
            Before You Book
          </div>

          <h2
            id="travel-policies-heading"
            className="max-w-2xl text-2xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-3xl"
          >
            Tempo Traveller Booking Policies
            <span className="text-[#FE6A01]"> in {cityName}</span>
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
            Know your travel charges, vehicle options and booking conditions
            before planning your journey with us.
          </p>
        </div>

        {/* Policy Cards */}
        <div className="grid gap-4 p-5 sm:grid-cols-2 sm:gap-5 sm:p-8">
          {policies.map((policy, index) => {
            const icons = [ReceiptText, Users, IndianRupee, CalendarCheck];

            const Icon = icons[index % icons.length];

            return (
              <article
                key={policy.title}
                className="group rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-100/60 sm:p-6"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-orange-50 text-[#FE6A01] transition-colors duration-300 group-hover:bg-[#FE6A01] group-hover:text-white">
                    <Icon size={23} strokeWidth={1.8} />
                  </div>

                  <span className="text-sm font-bold text-gray-300">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-base font-bold text-gray-900 sm:text-lg">
                  {policy.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-gray-600">
                  {policy.description}
                </p>

                <div className="mt-4 h-1 w-10 rounded-full bg-orange-200 transition-all duration-300 group-hover:w-16 group-hover:bg-[#FE6A01]" />
              </article>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div className="mx-5 mb-5 flex items-start gap-3 rounded-xl border border-orange-100 bg-orange-50/70 p-4 sm:mx-8 sm:mb-8 sm:p-5">
          <ShieldCheck size={21} className="mt-0.5 shrink-0 text-[#FE6A01]" />

          <div>
            <h3 className="text-sm font-bold text-gray-900">
              Need clarification before booking?
            </h3>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Confirm the final fare, applicable extra charges, vehicle capacity
              and cancellation terms with our booking team before confirming
              your trip.
            </p>
          </div>

          <ArrowUpRight
            size={18}
            className="ml-auto mt-0.5 shrink-0 text-orange-500"
          />
        </div>
      </div>
    </section>
  );
}
