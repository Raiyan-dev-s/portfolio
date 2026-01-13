'use client';

export default function PurpleBackground() {
  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden bg-black/10">
      <style>{`
        @keyframes pb_float1 {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes pb_float2 {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-30px, 50px) scale(1.2); }
          66% { transform: translate(20px, -30px) scale(0.8); }
          100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes pb_float3 {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(50px, 50px) scale(0.9); }
          66% { transform: translate(-50px, -50px) scale(1.1); }
          100% { transform: translate(0, 0) scale(1); }
        }
      `}</style>

      {/* Deep purple gradient base */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#2e1065_0%,transparent_70%)] opacity-40"></div>
      
      {/* Floating Blobs */}
      <div 
        className="absolute top-[10%] left-[20%] h-96 w-96 rounded-full bg-purple-600/30 blur-[100px]"
        style={{ animation: 'pb_float1 20s infinite ease-in-out' }}
      />
      <div 
        className="absolute bottom-[20%] right-[10%] h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[120px]"
        style={{ animation: 'pb_float2 25s infinite ease-in-out reverse' }}
      />
      <div 
        className="absolute top-[40%] left-[50%] h-72 w-72 rounded-full bg-indigo-500/25 blur-[90px]"
        style={{ animation: 'pb_float3 22s infinite ease-in-out 1s' }}
      />
      
      {/* Overlay gradient for depth */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent"></div>
    </div>
  );
}



