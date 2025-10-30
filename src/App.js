import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 h-16 bg-black/90 backdrop-blur-lg border-b border-white/10 z-50 flex items-center px-6 sm:px-8">
        <div className="flex items-center">
          <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent tracking-tight">
            thinkhubtutors
          </span>
        </div>
      </div>
      
      {/* Main Container */}
      <div className="flex justify-center items-center min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
        <div className="relative w-full max-w-4xl">
          {/* Content Frame */}
          <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 sm:p-12 lg:p-16 border-2 border-transparent bg-clip-padding shadow-2xl">
            {/* Gradient Border */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl -z-10"></div>
            
            {/* Background Pattern */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              {/* Geometric Shape 1 */}
              <div className="absolute w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-2xl top-[10%] left-[10%] opacity-10 animate-float transform rotate-45"></div>
              
              {/* Geometric Shape 2 */}
              <div className="absolute w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-pink-400 to-red-400 rounded-full top-[20%] right-[15%] opacity-10 animate-float-delay-1"></div>
              
              {/* Geometric Shape 3 */}
              <div className="absolute w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-400 to-blue-400 top-[60%] left-[20%] opacity-10 animate-float-delay-2" 
                   style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}></div>
              
              {/* Geometric Shape 4 */}
              <div className="absolute w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-green-400 to-teal-400 rounded-3xl bottom-[10%] right-[10%] opacity-10 animate-float-delay-3 transform rotate-30"></div>
              
              {/* Geometric Shape 5 */}
              <div className="absolute w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-lg top-1/2 left-[5%] opacity-10 animate-float-delay-4 transform rotate-60"></div>
            </div>
            
            {/* Content */}
            <div className="relative z-10 text-center text-white">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent tracking-wider leading-tight">
                WEBSITE COMING SOON
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl font-normal mb-6 sm:mb-8 text-gray-300 tracking-wide">
                We are building something amazing
              </p>
              
              <div className="flex justify-center items-center gap-2 sm:gap-4 mb-6 sm:mb-8 flex-wrap">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent px-4 sm:px-6 py-2 sm:py-3 rounded-xl bg-indigo-400/10 border border-indigo-400/30">
                  15
                </span>
                <span className="text-indigo-400 font-light text-xl sm:text-2xl lg:text-3xl">:</span>
                <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent px-4 sm:px-6 py-2 sm:py-3 rounded-xl bg-indigo-400/10 border border-indigo-400/30">
                  Mar
                </span>
                <span className="text-indigo-400 font-light text-xl sm:text-2xl lg:text-3xl">:</span>
                <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent px-4 sm:px-6 py-2 sm:py-3 rounded-xl bg-indigo-400/10 border border-indigo-400/30">
                  2025
                </span>
              </div>
              
              <p className="text-base sm:text-lg lg:text-xl font-normal mb-8 sm:mb-10 text-gray-300 tracking-wide">
                Get notified when we launch our platform
              </p>
              
              <button className="relative bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/40 tracking-wide overflow-hidden group">
                <span className="relative z-10">Notify Me</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
