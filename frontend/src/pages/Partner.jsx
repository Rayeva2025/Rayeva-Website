import React from "react";
import Header from "../components/landing/header";
import Footer from "../components/contact/footer";
import PartnerUs from "../components/partner/partnerus";

const Partner = () => {
  return (
    <div className="relative bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen w-full">
      <Header />
      <PartnerUs />
      <Footer />
    </div>
  );
};

export default Partner;
