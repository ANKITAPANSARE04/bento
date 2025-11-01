
import React from 'react';

const BentoGrid = () => {
  const gridItems = [
    {
      id: 1,
      title: "Elegant Design",
      description: "Sophisticated interfaces that captivate and engage",
      icon: "✨",
      color: "from-purple-500/20 to-pink-500/20",
      border: "border-purple-200/30",
      size: "col-span-2 row-span-1"
    },
    {
      id: 2,
      title: "Performance",
      description: "Lightning fast with optimized performance",
      icon: "⚡",
      color: "from-blue-500/20 to-cyan-500/20",
      border: "border-blue-200/30",
      size: "col-span-1 row-span-1"
    },
    {
      id: 3,
      title: "Innovation",
      description: "Cutting-edge solutions for modern challenges",
      icon: "🚀",
      color: "from-emerald-500/20 to-teal-500/20",
      border: "border-emerald-200/30",
      size: "col-span-1 row-span-2"
    },
    {
      id: 4,
      title: "Security",
      description: "Enterprise-grade security and privacy",
      icon: "🛡️",
      color: "from-orange-500/20 to-red-500/20",
      border: "border-orange-200/30",
      size: "col-span-1 row-span-1"
    },
    {
      id: 5,
      title: "Analytics",
      description: "Deep insights with comprehensive analytics",
      icon: "📊",
      color: "from-indigo-500/20 to-purple-500/20",
      border: "border-indigo-200/30",
      size: "col-span-2 row-span-1"
    },
    {
      id: 6,
      title: "Integration",
      description: "Seamless integration with your workflow",
      icon: "🔗",
      color: "from-rose-500/20 to-pink-500/20",
      border: "border-rose-200/30",
      size: "col-span-1 row-span-1"
    },
    {
      id: 4,
      title: "Security",
      description: "Enterprise-grade security and privacy",
      icon: "🛡️",
      color: "from-orange-500/20 to-red-500/20",
      border: "border-orange-200/30",
      size: "col-span-1 row-span-1"
    },
    {
      id: 2,
      title: "Performance",
      description: "Lightning fast with optimized performance",
      icon: "⚡",
      color: "from-blue-500/20 to-cyan-500/20",
      border: "border-blue-200/30",
      size: "col-span-1 row-span-1"
    },
    {
      id: 3,
      title: "Innovation",
      description: "Cutting-edge solutions for modern challenges",
      icon: "🚀",
      color: "from-emerald-500/20 to-teal-500/20",
      border: "border-emerald-200/30",
      size: "col-span-1 row-span-2"
    },
    {
      id: 4,
      title: "Security",
      description: "Enterprise-grade security and privacy",
      icon: "🛡️",
      color: "from-orange-500/20 to-red-500/20",
      border: "border-orange-200/30",
      size: "col-span-1 row-span-1"
    },
    {
      id: 5,
      title: "Analytics",
      description: "Deep insights with comprehensive analytics",
      icon: "📊",
      color: "from-indigo-500/20 to-purple-500/20",
      border: "border-indigo-200/30",
      size: "col-span-2 row-span-1"
    },
    {
      id: 6,
      title: "Integration",
      description: "Seamless integration with your workflow",
      icon: "🔗",
      color: "from-rose-500/20 to-pink-500/20",
      border: "border-rose-200/30",
      size: "col-span-1 row-span-1"
    },
    {
      id: 4,
      title: "Security",
      description: "Enterprise-grade security and privacy",
      icon: "🛡️",
      color: "from-orange-500/20 to-red-500/20",
      border: "border-orange-200/30",
      size: "col-span-1 row-span-1"
    },
    {
      id: 5,
      title: "Analytics",
      description: "Deep insights with comprehensive analytics",
      icon: "📊",
      color: "from-indigo-500/20 to-purple-500/20",
      border: "border-indigo-200/30",
      size: "col-span-2 row-span-1"
    },
    {
      id: 6,
      title: "Integration",
      description: "Seamless integration with your workflow",
      icon: "🔗",
      color: "from-rose-500/20 to-pink-500/20",
      border: "border-rose-200/30",
      size: "col-span-1 row-span-1"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
            Sophisticated Bento
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            A responsive, elegant grid layout built with modern design principles
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px]">
          {gridItems.map((item, index) => (
            <div
              key={item.id}
              className={`
                ${item.size}
                group relative overflow-hidden rounded-2xl 
                bg-gradient-to-br ${item.color}
                border ${item.border}
                glass-effect
                hover:scale-[1.02] transition-all duration-300
                animate-slide-up
                cursor-pointer
              `}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Grid Pattern Overlay */}
              <div className="absolute inset-0 bg-grid-pattern opacity-20" />
              
              {/* Content */}
              <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                <div>
                  <div className="text-3xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 animate-fade-in">
          <p className="text-gray-500">
            Crafted with precision • Responsive design • Modern aesthetics
          </p>
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;



 
// style for bento above with tailwind
/* @layer utilities {
  .bg-grid-pattern {
    background-image: 
      linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px);
    background-size: 50px 50px;
  }
  
  .glass-effect {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
} */