import { FaLeaf, FaUsers, FaGlobe, FaLightbulb, FaHandshake, FaRecycle } from "react-icons/fa";
import { BentoCard, BentoGrid } from "../ui/bento-grid";

// Custom grid positions for bento layout
const impacts = [
  {
    Icon: FaLeaf,
    name: "Sustainability",
    description: "Driving eco-friendly initiatives for a greener future.",
    href: "/sustainability",
    cta: "Learn more",
    background: (
      <img
        src="/images/imp-sustainability.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-100 pointer-events-none select-none"
      />
    ),
    className: "lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-2",
  },
  {
    Icon: FaUsers,
    name: "Community",
    description: "Empowering people through collaboration and support.",
    href: "/community",
    cta: "Join us",
    background: (
      <img
        src="/images/imp-community.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-100 pointer-events-none select-none"
      />
    ),
    className: "lg:row-start-1 lg:row-end-2 lg:col-start-2 lg:col-end-4",
  },
  {
    Icon: FaGlobe,
    name: "Global Reach",
    description: "Connecting ideas and people across continents.",
    href: "/global",
    cta: "Explore",
    background: (
      <img
        src="/images/imp-global.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-100 pointer-events-none select-none"
      />
    ),
    className: "lg:row-start-2 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: FaLightbulb,
    name: "Innovation",
    description: "Pioneering solutions for tomorrow’s challenges.",
    href: "/innovation",
    cta: "Discover",
    background: (
      <img
        src="/images/imp-innovation.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-100 pointer-events-none select-none"
      />
    ),
    className: "lg:row-start-2 lg:row-end-3 lg:col-start-3 lg:col-end-4",
  },
  {
    Icon: FaHandshake,
    name: "Partnerships",
    description: "Building strong alliances for lasting impact.",
    href: "/partnerships",
    cta: "Partner with us",
    background: (
      <img
        src="/images/imp-partner.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-100 pointer-events-none select-none"
      />
    ),
    className: "lg:row-start-3 lg:row-end-4 lg:col-start-1 lg:col-end-2",
  },
  {
    Icon: FaRecycle,
    name: "Circular Economy",
    description: "Promoting reuse, recycling, and responsible consumption in e-commerce.",
    href: "/circular-economy",
    cta: "See how",
    background: (
      <img
        src="/images/imp-circular-economy.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-100 pointer-events-none select-none"
      />
    ),
    className: "lg:row-start-3 lg:row-end-4 lg:col-start-3 lg:col-end-4",
  },
];

export default function Impact() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Our Impact
      </h2>
      <BentoGrid className="lg:grid-rows-3 lg:grid-cols-3 gap-4">
        {impacts.map((impact) => (
          <BentoCard key={impact.name} {...impact} />
        ))}
      </BentoGrid>
    </section>
  );
}
