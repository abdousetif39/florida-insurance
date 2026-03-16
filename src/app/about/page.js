export const metadata = {
  title: "About Us",
  description: "Learn more about AutoInsuranceCompaniesFlorida.com and our mission to help Florida drivers save on their car insurance.",
};

export default function AboutUs() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-slate-900 mb-8">About Us</h1>
      <div className="prose prose-blue max-w-none text-slate-700 space-y-6">
        <p className="text-lg">Welcome to AutoInsuranceCompaniesFlorida.com, your number one source for comparing auto insurance rates in the Sunshine State.</p>
        
        <h2 className="text-2xl font-bold text-slate-900 mt-8">Our Mission</h2>
        <p>Florida drivers face some of the highest insurance premiums in the country due to severe weather, high rates of uninsured drivers, and complex PIP laws. Our mission is simple: to provide a transparent, easy-to-use platform that connects you with top-rated insurance providers so you can find the best coverage at the lowest possible price.</p>

        <h2 className="text-2xl font-bold text-slate-900 mt-8">How We Work</h2>
        <p>We partner with leading insurance networks (via affiliate programs) to bring you reliable quotes. When you use our comparison tools, you are directly connected to established insurance carriers. We provide the educational guides and resources, completely free of charge, to help you make an informed decision.</p>
      </div>
    </main>
  );
}