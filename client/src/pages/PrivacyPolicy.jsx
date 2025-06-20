import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
const PrivacyPolicy = () => (
    <>
    <Navbar />
  <div className="max-w-3xl mx-auto px-4 py-12 pt-24">
    <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>
    <p className="text-gray-600 mb-4">Effective Date: 06/01/2025</p>
    <p className="mb-6">
      At Switch to Legal, we are committed to protecting your privacy and handling your data with transparency and care. This Privacy Policy explains how we collect, use, and safeguard your personal information.
    </p>

    <ol className="list-decimal pl-6 space-y-4 text-gray-800">
      <li>
        <strong>Information We Collect</strong><br />
        <span className="block mt-2">
          <strong>Personal Information:</strong> Name, email, phone number, PAN, Aadhaar, and financial data required for legal or tax-related services.
        </span>
        <span className="block mt-2">
          <strong>Technical Information:</strong> IP address, browser type, device identifiers, and usage data.
        </span>
        <span className="block mt-2">
          <strong>Communication Data:</strong> Records of conversations, emails, and documents you upload to our platform.
        </span>
      </li>
      <li>
        <strong>How We Use Your Information</strong>
        <ul className="list-disc pl-6 mt-2">
          <li>To provide and manage our legal, tax, and compliance services;</li>
          <li>To securely file tax returns and submit documents on your behalf;</li>
          <li>To improve our website and services;</li>
          <li>To communicate with you regarding updates, deadlines, or legal changes;</li>
          <li>To fulfill any legal or regulatory requirements.</li>
        </ul>
      </li>
      <li>
        <strong>Data Sharing</strong>
        <ul className="list-disc pl-6 mt-2">
          <li>Government authorities (such as the Income Tax Department) for compliance purposes;</li>
          <li>Our trusted tech partner, Telsys Web Infotech Pvt. Ltd., for secure infrastructure and software operations;</li>
          <li>Legal advisors, auditors, or other partners under strict confidentiality agreements.</li>
        </ul>
      </li>
      <li>
        <strong>Data Security</strong><br />
        We implement robust security measures including encryption, secure data storage, and regular audits to protect your data. All transmissions are encrypted using SSL.
      </li>
      <li>
        <strong>Data Retention</strong><br />
        We retain your data as long as necessary for legal, tax, or operational purposes, or as required under Indian law.
      </li>
      <li>
        <strong>Your Rights</strong>
        <ul className="list-disc pl-6 mt-2">
          <li>Access and correct your personal data;</li>
          <li>Withdraw consent for non-essential communication;</li>
          <li>Request deletion of your data (subject to legal requirements).</li>
        </ul>
      </li>
      <li>
        <strong>Cookies</strong><br />
        We may use cookies to enhance user experience and analyze website traffic. You can choose to disable cookies through your browser settings.
      </li>
      <li>
        <strong>Changes to This Policy</strong><br />
        We may update this Privacy Policy periodically. The revised version will be posted on this page with an updated “Effective Date.”
      </li>
      <li>
        <strong>Contact</strong><br />
        For questions about this policy or your data rights, contact us at [Insert contact email].
      </li>
    </ol>
  </div>
    <Footer /></>
);

export default PrivacyPolicy;