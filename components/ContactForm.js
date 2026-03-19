export default function ContactForm() {
  return (
    <form className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
          <input type="text" className="w-full rounded-lg border-slate-300 border p-3 focus:ring-2 focus:ring-blue-600 outline-none" placeholder="John" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
          <input type="email" className="w-full rounded-lg border-slate-300 border p-3 focus:ring-2 focus:ring-blue-600 outline-none" placeholder="john@example.com" />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
        <textarea rows="5" className="w-full rounded-lg border-slate-300 border p-3 focus:ring-2 focus:ring-blue-600 outline-none" placeholder="How can we help you?"></textarea>
      </div>
      <button type="button" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition shadow-md">
        Send Message
      </button>
    </form>
  );
}