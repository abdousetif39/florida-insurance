import ContactForm from "../../components/forms/ContactForm";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with AutoInsuranceCompaniesFlorida.com for inquiries, partnerships, or questions about our services.",
};

export default function Contact() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Contact Us</h1>
        <p className="text-lg text-slate-600">
          Have a question about Florida auto insurance or want to partner with us? Fill out the form below.
        </p>
      </div>
      
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
        {/* استدعاء المكون التفاعلي الذي برمجناه سابقاً */}
        <ContactForm />
      </div>
    </main>
  );
}