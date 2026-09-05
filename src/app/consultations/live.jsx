"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Mic,
  MicOff,
  Video,
  VideoOff,
  Share2,
  MessageSquare,
  PhoneOff,
  Send,
  User,
  Clock,
  Calendar,
  X,
  FileText,
  Paperclip,
} from "lucide-react";

export default function LiveConsultationPage() {
  // Audio & Video Controls State
  const [isMicOn, setIsMicOn] = useState(true);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(true);

  // Chat State
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "Dr. Sarah Williams",
      text: "Hello John! I'm reviewing your latest lipid profile test. How are you feeling today?",
      time: "4:01 PM",
      isDoctor: true,
    },
    {
      id: 2,
      sender: "You",
      text: "Hi Doctor, I've been feeling much better, but I had a mild headache this morning.",
      time: "4:02 PM",
      isDoctor: false,
    },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const consultation = {
    doctor: "Dr. Sarah Williams",
    specialty: "Consultant Cardiologist",
    appointmentId: "#APT-88204",
    duration: "14:22", // Active timer mock
    doctorAvatar:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300",
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        sender: "You",
        text: newMessage,
        time: "4:03 PM",
        isDoctor: false,
      },
    ]);
    setNewMessage("");
  };

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100 flex flex-col justify-between p-3 sm:p-6 space-y-4">
      
      {/* Top Bar: Room Title & Live Badge */}
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
          <div>
            <h1 className="text-sm sm:text-base font-extrabold text-white">
              Consultation Room
            </h1>
            <p className="text-[11px] text-slate-400">
              Encrypted end-to-end video consultation
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="lg:hidden p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white"
        >
          <MessageSquare className="w-5 h-5" />
        </button>
      </div>

      {/* Main Studio View (Video Feed & Side Panel) */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-4 gap-4 min-h-[500px]">
        
        {/* Main Area: Video Display */}
        <div className="lg:col-span-3 bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden relative flex items-center justify-center shadow-2xl">
          
          {/* Doctor Stream Video Mock */}
          {isVideoOn ? (
            <img
              src={consultation.doctorAvatar}
              alt={consultation.doctor}
              className="w-full h-full object-cover opacity-90"
            />
          ) : (
            <div className="flex flex-col items-center justify-center space-y-3">
              <div className="w-20 h-20 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center">
                <User className="w-10 h-10 text-slate-500" />
              </div>
              <p className="text-xs font-semibold text-slate-400">
                Doctor's camera is off
              </p>
            </div>
          )}

          {/* Self Feed Overlay Thumbnail */}
          <div className="absolute bottom-4 right-4 w-32 h-24 sm:w-44 sm:h-32 bg-slate-950 rounded-xl border border-slate-700/80 overflow-hidden shadow-lg flex items-center justify-center">
            {isMicOn && (
              <span className="absolute top-2 left-2 bg-emerald-500/80 backdrop-blur-sm p-1 rounded-full">
                <Mic className="w-2.5 h-2.5 text-slate-950" />
              </span>
            )}
            <div className="text-center p-2">
              <User className="w-6 h-6 text-slate-500 mx-auto" />
              <span className="text-[10px] text-slate-400 mt-1 block">You</span>
            </div>
          </div>

          {/* Live Overlay Badge */}
          <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md border border-slate-700/60 px-3 py-1.5 rounded-xl flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs font-bold text-slate-200">
              {consultation.duration}
            </span>
          </div>

        </div>

        {/* Side Panel: Consultation Info & Live Chat */}
        <div
          className={`${
            isChatOpen ? "flex" : "hidden lg:flex"
          } flex-col justify-between bg-slate-900 rounded-2xl border border-slate-800 p-4 space-y-4`}
        >
          
          {/* Consultation Information */}
          <div className="space-y-3 border-b border-slate-800 pb-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
                Consultation Info
              </h2>
              <button
                type="button"
                onClick={() => setIsChatOpen(false)}
                className="lg:hidden text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2 text-xs">
              <div>
                <span className="text-[10px] text-slate-500 uppercase block font-bold">
                  Doctor
                </span>
                <p className="font-extrabold text-white">{consultation.doctor}</p>
                <p className="text-[11px] text-teal-400">{consultation.specialty}</p>
              </div>

              <div className="flex items-center justify-between pt-1">
                <div>
                  <span className="text-[10px] text-slate-500 uppercase block font-bold">
                    Appointment ID
                  </span>
                  <p className="font-bold text-slate-300">{consultation.appointmentId}</p>
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 uppercase block font-bold">
                    Duration
                  </span>
                  <p className="font-bold text-amber-400">{consultation.duration}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Stream Area */}
          <div className="flex-1 flex flex-col justify-between space-y-3 min-h-[220px]">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-teal-500" /> Live Chat
            </h3>

            {/* Messages Scroll Box */}
            <div className="flex-1 overflow-y-auto space-y-2.5 pr-1 max-h-[260px] text-xs">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${
                    msg.isDoctor ? "items-start" : "items-end"
                  }`}
                >
                  <span className="text-[9px] text-slate-500 font-semibold mb-0.5">
                    {msg.sender} • {msg.time}
                  </span>
                  <div
                    className={`p-2.5 rounded-xl max-w-[85%] leading-relaxed ${
                      msg.isDoctor
                        ? "bg-slate-800 text-slate-200 border border-slate-700"
                        : "bg-teal-600 text-white"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Send Message Input */}
            <form onSubmit={handleSendMessage} className="flex items-center gap-1.5 pt-2">
              <input
                type="text"
                placeholder="Send a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
              />
              <button
                type="submit"
                className="p-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>

        </div>

      </div>

      {/* Control Bar Dock */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-3 flex items-center justify-between max-w-2xl mx-auto w-full shadow-lg">
        
        <div className="flex items-center gap-2 sm:gap-3 mx-auto">
          
          {/* Microphone Toggle */}
          <button
            type="button"
            onClick={() => setIsMicOn(!isMicOn)}
            className={`p-3 rounded-xl transition-colors ${
              isMicOn
                ? "bg-slate-800 text-white hover:bg-slate-700"
                : "bg-rose-600 text-white hover:bg-rose-500"
            }`}
            title="Microphone"
          >
            {isMicOn ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
          </button>

          {/* Camera Toggle */}
          <button
            type="button"
            onClick={() => setIsVideoOn(!isVideoOn)}
            className={`p-3 rounded-xl transition-colors ${
              isVideoOn
                ? "bg-slate-800 text-white hover:bg-slate-700"
                : "bg-rose-600 text-white hover:bg-rose-500"
            }`}
            title="Camera"
          >
            {isVideoOn ? <Video className="w-5 h-5" /> : <VideoOff className="w-5 h-5" />}
          </button>

          {/* Screen / File Sharing */}
          <button
            type="button"
            onClick={() => alert("Screen or document sharing initiated.")}
            className="p-3 rounded-xl bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors"
            title="Screen / File sharing"
          >
            <Share2 className="w-5 h-5" />
          </button>

          {/* Toggle Chat Mobile */}
          <button
            type="button"
            onClick={() => setIsChatOpen(!isChatOpen)}
            className="p-3 rounded-xl bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors"
            title="Chat Panel"
          >
            <MessageSquare className="w-5 h-5" />
          </button>

          {/* End Consultation Button */}
          <Link
            href="/patient/dashboard"
            className="p-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold transition-colors flex items-center gap-2 px-5 ml-2"
            title="End consultation"
          >
            <PhoneOff className="w-5 h-5" />
            <span className="hidden sm:inline text-xs">End Call</span>
          </Link>

        </div>

      </div>

    </div>
  );
}