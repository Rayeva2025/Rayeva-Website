import React from 'react'
import Header from '../components/landing/header';
import Footer from '../components/contact/footer';
import ContactForm from '../components/contact/contact_form';

const Contact = () => {
  return (
    <div className="relative bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen w-full">
      <Header />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Contact