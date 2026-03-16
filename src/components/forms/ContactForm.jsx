"use client";

import { useState } from "react";
import { CheckCircle, AlertCircle, Send } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); 
  
  // معرف Formspree الخاص بك
  const FORMSPREE_ID = "xpqyybgg"; 

  async function handleFormSubmit(event) {
    event.preventDefault();
    setStatus("loading");
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        event.target.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-8 text-center animate-in fade-in zoom-in duration-300">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
        <p>Thank you. Your message has been sent to our team. We will get back to you shortly.</p>
        <button 
          onClick={() => setStatus("idle")} 
          className="mt-6 bg-green-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-green-700 transition shadow-md"
        >
          Send New Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleFormSubmit} className="space-y-6">
      {status === "error" && (
        <div className="bg-red-50 text-red-700 p-4 rounded-lg flex items-center border border-red-100">
          <AlertCircle className="h-5 w-5 mr-2" />
          There was an error. Please try again.
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
          <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none transition bg-slate-50" placeholder="John Doe" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
          <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none transition bg-slate-50" placeholder="john@example.com" />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
        <input type="text" id="subject" name="subject" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none transition bg-slate-50" placeholder="Florida Auto Insurance Inquiry" />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
        <textarea id="message" name="message" rows="5" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none transition bg-slate-50" placeholder="How can we help?"></textarea>
      </div>

      <button 
        type="submit" 
        disabled={status === "loading"}
        className={`w-full text-white font-bold py-4 rounded-lg transition shadow-md flex items-center justify-center space-x-2 ${
          status === "loading" ? "bg-slate-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 active:scale-[0.98]"
        }`}
      >
        {status === "loading" ? "Sending..." : (
          <>
            <span>Send Message</span>
            <Send className="h-5 w-5 ml-2" />
          </>
        )}
      </button>
    </form>
  );
}