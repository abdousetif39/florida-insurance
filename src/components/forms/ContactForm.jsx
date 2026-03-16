"use client";

import React, { useState } from "react";
import { CheckCircle, AlertCircle, Send, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  
  // معرف Formspree الخاص بك
  const FORMSPREE_ID = "xpqyybgg"; 

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");
    
    // جمع البيانات من النموذج
    const formData = new FormData(event.currentTarget);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

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
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form error:", error);
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-8 text-center animate-in fade-in zoom-in duration-300">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
        <p>Thank you. Your message has been sent. We will get back to you shortly.</p>
        <button 
          type="button"
          onClick={() => setStatus("idle")} 
          className="mt-6 bg-green-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-green-700 transition"
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
          Something went wrong. Please check your internet and try again.
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            required 
            disabled={status === "loading"}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none transition bg-slate-50 disabled:opacity-50" 
            placeholder="John Doe" 
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            required 
            disabled={status === "loading"}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none transition bg-slate-50 disabled:opacity-50" 
            placeholder="john@example.com" 
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
        <input 
          type="text" 
          id="subject" 
          name="subject" 
          required 
          disabled={status === "loading"}
          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none transition bg-slate-50 disabled:opacity-50" 
          placeholder="Florida Auto Insurance Inquiry" 
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
        <textarea 
          id="message" 
          name="message" 
          rows="5" 
          required 
          disabled={status === "loading"}
          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none transition bg-slate-50 disabled:opacity-50" 
          placeholder="How can we help?"
        ></textarea>
      </div>

      <button 
        type="submit" 
        disabled={status === "loading"}
        className={`w-full text-white font-bold py-4 rounded-lg transition shadow-md flex items-center justify-center space-x-2 ${
          status === "loading" ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 active:scale-[0.98]"
        }`}
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin mr-2" />
            <span>Sending...</span>
          </>
        ) : (
          <>
            <span>Send Message</span>
            <Send className="h-5 w-5 ml-2" />
          </>
        )}
      </button>
    </form>
  );
}