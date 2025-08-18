import { Carousel } from "../ui/Carousel";

export default function ContentsSection() {
  const slides = [
    {
      src: "/images/campaign-ocean.jpg",
      title: "Ocean Cleanup Campaign",
      button: "Read More",
    },
    {
      src: "/images/campaign-plastic-free.jpg",
      title: "Plastic-Free July Success Stories",
      button: "Read More",
    },
    {
      src: "/images/campaign-refill.jpg",
      title: "Our Refill Revolution",
      button: "Read More",
    },
    {
      src: "/images/campaign-partners.jpg",
      title: "Meet Our Sustainability Partners",
      button: "Read More",
    },
  ];

  return (
    <section
      id="contents"
      className="relative py-20 text-center"
    >
      {/* Section Header */}
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#084189]">
          Insights
        </h2>
        <p className="mt-4 text-lg text-[#2C6BAA]">
          Dive into our sustainability initiatives, inspiring stories, and
          eco-education content — designed to empower you to live greener.
        </p>
      </div>

      {/* Carousel */}
      <div className="mt-16 flex justify-center">
        <Carousel slides={slides} />
      </div>

      {/* Decorative Gradient Blur */}
      {/* <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#3BB372]/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-[#2EB5D0]/30 rounded-full blur-3xl" />
      </div> */}
    </section>
  );
}
