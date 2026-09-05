"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Mic,
  MicOff,
  Video as VideoIcon,
  VideoOff,
  PhoneOff,
  MessageSquare,
  FileText,
  Send,
  Shield,
  Clock,
  Maximize2
} from "lucide-react";

export default function VideoConsultationPage({ params }) {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [sidebarTab, setSidebarTab] = useState("chat"); // 'chat' | 'notes'
  const [messages, setMessages] = useState([
    { sender: "Dr. Sarah Williams", time: "09:01 AM", text: "Hello Amina, I am reviewing your blood pressure logs now." },
    { sender: "You", time: "09:02 AM", text: "Thank you Dr. Williams, my readings have been around 130/85 this week." }
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    setMessages((prev) => [
      ...prev,
      { sender: "You", time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), text: newMessage }
    ]);
    setNewMessage("");
  };

  return (
    <div className="h-screen w-screen bg-slate-950 text-white flex flex-col font-sans overflow-hidden">
      
      {/* Top Bar */}
      <header className="h-16 border-b border-slate-800 px-6 flex items-center justify-between bg-slate-900 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <div>
            <h1 className="text-sm font-bold text-white">Consultation with Dr. Sarah Williams</h1>
            <p className="text-[11px] text-slate-400">Cardiology — Video Appointment</p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs font-semibold text-slate-300">
          <div className="flex items-center gap-1.5 bg-slate-800 px-3 py-1.5 rounded-md">
            <Clock className="w-3.5 h-3.5 text-teal-400" />
            <span>14:32</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-emerald-400 bg-emerald-950/50 border border-emerald-800/40 px-2.5 py-1 rounded">
            <Shield className="w-3.5 h-3.5" />
            <span>Encrypted</span>
          </div>
        </div>
      </header>

      {/* Main Workspace */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Video Area */}
        <div className="flex-1 relative bg-slate-900 p-4 flex flex-col justify-between">
          
          {/* Primary Doctor Video View */}
          <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-800 border border-slate-700/50 flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=1200"
              alt="Dr. Sarah Williams"
              className="w-full h-full object-cover"
            />
            
            {/* Overlay Name Tag */}
            <div className="absolute bottom-4 left-4 bg-slate-900/80 backdrop-blur-md border border-slate-700 px-3 py-1.5 rounded-lg text-xs font-medium text-white flex items-center gap-2">
              <span>Dr. Sarah Williams</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            </div>

            {/* PIP Patient Camera Preview */}
            <div className="absolute top-4 right-4 w-36 sm:w-48 h-24 sm:h-32 rounded-xl bg-slate-950 border border-slate-700/80 shadow-2xl overflow-hidden">
              {isVideoOff ? (
                <div className="w-full h-full flex flex-col items-center justify-center bg-slate-900 text-slate-400">
                  <VideoOff className="w-6 h-6 mb-1" />
                  <span className="text-[10px]">Camera off</span>
                </div>
              ) : (
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400"
                  alt="You"
                  className="w-full h-full object-cover"
                />
              )}
              <div className="absolute bottom-2 left-2 bg-slate-900/70 text-[10px] px-1.5 py-0.5 rounded text-slate-200">
                You
              </div>
            </div>
          </div>

          {/* Floating Call Action Controls Bar */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-slate-900/90 backdrop-blur-md border border-slate-700 p-2.5 rounded-2xl shadow-2xl">
            {/* Audio Toggle */}
            <button
              onClick={() => setIsMuted(!isMuted)}
              className={`p-3 rounded-xl transition-colors ${
                isMuted ? "bg-rose-600 text-white" : "bg-slate-800 hover:bg-slate-700 text-slate-200"
              }`}
            >
              {isMuted ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
            </button>

            {/* Video Toggle */}
            <button
              onClick={() => setIsVideoOff(!isVideoOff)}
              className={`p-3 rounded-xl transition-colors ${
                isVideoOff ? "bg-rose-600 text-white" : "bg-slate-800 hover:bg-slate-700 text-slate-200"
              }`}
            >
              {isVideoOff ? <VideoOff className="w-5 h-5" /> : <VideoIcon className="w-5 h-5" />}
            </button>

            {/* End Call Button */}
            <Link
              href="/dashboard"
              className="p-3 bg-rose-600 hover:bg-rose-700 text-white rounded-xl transition-colors px-6 flex items-center gap-2 font-semibold text-xs"
            >
              <PhoneOff className="w-5 h-5" />
              <span>End Call</span>
            </Link>
          </div>

        </div>

        {/* Right Sidebar: Chat & Notes */}
        <aside className="w-80 lg:w-96 border-l border-slate-800 bg-slate-900 flex flex-col h-full">
          
          {/* Sidebar Tabs */}
          <div className="flex border-b border-slate-800">
            <button
              onClick={() => setSidebarTab("chat")}
              className={`flex-1 py-3 text-xs font-semibold flex items-center justify-center gap-2 border-b-2 transition-colors ${
                sidebarTab === "chat"
                  ? "border-teal-500 text-teal-400 bg-slate-800/40"
                  : "border-transparent text-slate-400 hover:text-slate-200"
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              <span>Live Chat</span>
            </button>
            <button
              onClick={() => setSidebarTab("notes")}
              className={`flex-1 py-3 text-xs font-semibold flex items-center justify-center gap-2 border-b-2 transition-colors ${
                sidebarTab === "notes"
                  ? "border-teal-500 text-teal-400 bg-slate-800/40"
                  : "border-transparent text-slate-400 hover:text-slate-200"
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Doctor Notes</span>
            </button>
          </div>

          {/* Chat Content */}
          {sidebarTab === "chat" ? (
            <div className="flex-1 flex flex-col justify-between overflow-hidden">
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {messages.map((m, i) => (
                  <div key={i} className={`flex flex-col ${m.sender === "You" ? "items-end" : "items-start"}`}>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-semibold text-slate-400">{m.sender}</span>
                      <span className="text-[9px] text-slate-500">{m.time}</span>
                    </div>
                    <div className={`p-3 rounded-xl text-xs leading-relaxed max-w-[85%] ${
                      m.sender === "You" ? "bg-teal-600 text-white rounded-br-none" : "bg-slate-800 text-slate-200 rounded-bl-none"
                    }`}>
                      {m.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Input Form */}
              <form onSubmit={handleSendMessage} className="p-3 border-t border-slate-800 flex gap-2">
                <input
                  type="text"
                  placeholder="Type a message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="flex-1 bg-slate-800 text-xs text-white placeholder-slate-500 px-3 py-2.5 rounded-lg border border-slate-700 focus:outline-none focus:border-teal-500"
                />
                <button type="submit" className="bg-teal-600 hover:bg-teal-700 text-white p-2.5 rounded-lg transition-colors">
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          ) : (
            /* Consultation Notes Tab */
            <div className="p-4 space-y-4 flex-1 overflow-y-auto text-xs text-slate-300">
              <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700">
                <h4 className="font-semibold text-teal-400 mb-1">Diagnosis & Observations</h4>
                <p className="text-slate-400">Primary hypertension management under evaluation. Blood pressure stable.</p>
              </div>
              <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700">
                <h4 className="font-semibold text-teal-400 mb-1">Prescribed Medication</h4>
                <p className="text-slate-400">Continue Amlodipine 5mg daily. Added low-sodium dietary guidance.</p>
              </div>
            </div>
          )}

        </aside>

      </div>
    </div>
  );
}
