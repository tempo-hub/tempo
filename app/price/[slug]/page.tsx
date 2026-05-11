import ServiceTemplate from "@/app/components/templates/ServiceTemplate";
import { parsePerKmFareRoute } from "@/lib/parsePerKmFareRoute";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const route =
    parsePerKmFareRoute(slug);

  return (
    <ServiceTemplate
      route={route}
    />
  );
}
