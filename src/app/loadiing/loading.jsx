export default function Loading() {
  return (
    <div className="min-h-[70vh] w-full flex flex-col items-center justify-center p-6 bg-slate-50/50">
      <div className="flex flex-col items-center space-y-4 text-center max-w-sm">
        
        {/* Animated Pulse & Spinner Logo */}
        <div className="relative flex items-center justify-center">
          {/* Outer Pulsing Aura */}
          <div className="absolute w-16 h-16 rounded-full bg-blue-500/20 animate-ping" />
          
          {/* Middle Rotating Ring */}
          <div className="w-12 h-12 rounded-full border-3 border-blue-100 border-t-blue-600 animate-spin" />
          
          {/* Center Heartbeat Icon */}
          <div className="absolute text-blue-600">
            <svg
              className="w-5 h-5 animate-pulse"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
        </div>

        {/* Text Details */}
        <div className="space-y-1">
          <h3 className="text-sm font-black text-slate-900 tracking-tight">
            Fetching Health Care Details
          </h3>
          <p className="text-xs text-slate-500 font-medium">
            Please wait while we securely load your information...
          </p>
        </div>

        {/* Skeleton Progress Bar */}
        <div className="w-48 h-1.5 bg-slate-200 rounded-full overflow-hidden relative">
          <div className="h-full bg-blue-600 rounded-full animate-[loading_1.5s_ease-in-out_infinite]" />
        </div>

      </div>
    </div>
  );
}