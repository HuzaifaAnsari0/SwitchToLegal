import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
const TermsAndCondition = () => (
    <>
    <Navbar />
  <div className="max-w-3xl mx-auto px-4 py-12 pt-24">
    <h1 className="text-3xl font-bold mb-6 text-center">Terms &amp; Conditions</h1>
    <p className="text-gray-600 mb-4">Effective Date: [Insert Date]</p>
    <p className="mb-6">
      Welcome to Switch to Legal. By accessing or using our website (<a href="https://www.switchtolegal.com" className="text-blue-600 underline">https://www.switchtolegal.com</a>) and our services, you agree to be bound by the following terms and conditions. Please read them carefully.
    </p>

    <ol className="list-decimal pl-6 space-y-4 text-gray-800">
      <li>
        <strong>Services</strong><br />
        Switch to Legal provides professional services including, but not limited to, tax filing, legal compliance, and business advisory services. Our role as an Authorized e-Return Intermediary ensures accurate and lawful submission of client tax data to the Income Tax Department.
      </li>
      <li>
        <strong>Eligibility</strong><br />
        By using our services, you confirm that:
        <ul className="list-disc pl-6 mt-2">
          <li>You are at least 18 years old;</li>
          <li>You have the authority to enter into this agreement;</li>
          <li>Your use of our services complies with applicable laws and regulations in India.</li>
        </ul>
      </li>
      <li>
        <strong>Intellectual Property</strong><br />
        All content on this website, including text, graphics, logos, and software, is the property of Switch to Legal or its partners and is protected under intellectual property laws. Reproduction or redistribution without prior written consent is strictly prohibited.
      </li>
      <li>
        <strong>Use of Website</strong><br />
        You agree not to use the website for:
        <ul className="list-disc pl-6 mt-2">
          <li>Any fraudulent activity or unlawful purpose;</li>
          <li>Transmitting malware, viruses, or any harmful content;</li>
          <li>Attempting unauthorized access to our systems or disrupting our services.</li>
        </ul>
      </li>
      <li>
        <strong>Disclaimer</strong><br />
        While we strive for accuracy and timeliness, we do not guarantee that the website content is error-free or current. Legal and tax information is subject to change, and we advise users to consult our experts for personalized advice.
      </li>
      <li>
        <strong>Limitation of Liability</strong><br />
        Switch to Legal shall not be liable for any indirect, incidental, special, or consequential damages resulting from your use or inability to use the website or services.
      </li>
      <li>
        <strong>Third-party Services</strong><br />
        We may integrate or refer to services provided by our technology partner, Telsys Web Infotech Pvt. Ltd. While we trust our partners, we are not responsible for the performance of third-party tools or platforms.
      </li>
      <li>
        <strong>Termination</strong><br />
        We reserve the right to suspend or terminate access to the website or services at our discretion, with or without notice, for any reason including violation of these terms.
      </li>
      <li>
        <strong>Governing Law</strong><br />
        These Terms shall be governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in [City, e.g., Mumbai/Delhi].
      </li>
      <li>
        <strong>Contact</strong><br />
        For questions or concerns regarding these terms, please email us at [Insert contact email].
      </li>
    </ol>
  </div>
    <Footer />
    </>
);

export default TermsAndCondition;