import React from 'react';

const TestElevenPlus: React.FC = () => {
  return (
    <main className="pt-28 pb-16 px-6 sm:px-10 lg:px-16 bg-white">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16 px-6 rounded-xl mb-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">11+ Test Preparation (UK)</h1>
            <p className="text-xl text-blue-100 mb-8">Specialized 11+ tutoring covering verbal reasoning, non-verbal reasoning, English, and maths for grammar school entrance.</p>
            <a href="/pricing" className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors text-lg shadow-md">
              Book Free Lesson
            </a>
          </div>
          <form className="rounded-xl p-6 bg-white/10 backdrop-blur-sm ring-1 ring-white/20 grid grid-cols-2 gap-4">
            <input className="col-span-2 sm:col-span-1 input bg-white/20 text-white placeholder-white/70 border-white/30" placeholder="Name" />
            <input className="col-span-2 sm:col-span-1 input bg-white/20 text-white placeholder-white/70 border-white/30" placeholder="Phone" />
            <input className="col-span-2 input bg-white/20 text-white placeholder-white/70 border-white/30" placeholder="Email" />
            <textarea className="col-span-2 textarea bg-white/20 text-white placeholder-white/70 border-white/30" rows={3} placeholder="Message" />
            <button className="col-span-2 justify-self-end bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition-colors">Submit</button>
          </form>
        </div>
      </section>

      <section className="mt-12 grid md:grid-cols-3 gap-6">
        {[{t:'Ready to Learn',d:'Live online lessons'}, {t:'Affordable Rates',d:'Great value plans'}, {t:'Superior Quality Tutoring',d:'Experienced specialists'}].map((c)=> (
          <div key={c.t} className="rounded-2xl p-6 bg-slate-900/40 ring-1 ring-white/10">
            <div className="text-indigo-300 font-semibold">{c.t}</div>
            <p className="mt-2 text-slate-300/90 text-sm">{c.d}</p>
          </div>
        ))}
      </section>

      {/* Content Sections */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-12">
        <div className="rounded-xl p-6 bg-blue-50 border border-blue-100">
          <h2 className="text-blue-900 font-semibold mb-3 text-lg">11+ Exam Structure</h2>
          <ul className="list-disc pl-5 text-blue-800 text-sm space-y-2">
            <li>Verbal Reasoning</li>
            <li>Non-Verbal Reasoning</li>
            <li>Mathematics</li>
            <li>English</li>
          </ul>
        </div>
        <div className="rounded-xl p-6 bg-blue-50 border border-blue-100">
          <h2 className="text-blue-900 font-semibold mb-3 text-lg">Exam Boards</h2>
          <ul className="list-disc pl-5 text-blue-800 text-sm space-y-2">
            <li>GL Assessment</li>
            <li>CEM</li>
            <li>ISEB</li>
            <li>Local variations</li>
          </ul>
        </div>
        <div className="rounded-xl p-6 bg-blue-50 border border-blue-100">
          <h2 className="text-blue-900 font-semibold mb-3 text-lg">Benefits of our 11+ Tuition</h2>
          <ul className="list-disc pl-5 text-blue-800 text-sm space-y-2">
            <li>Flexible timetables</li>
            <li>Affordable plans</li>
            <li>Experienced UK tutors</li>
            <li>Proven success rate</li>
          </ul>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-12">
        <div className="rounded-2xl p-8 bg-blue-900 text-white">
          <h3 className="font-semibold text-xl mb-4">Why Choose MathMakesSmart for 11+?</h3>
          <p className="text-blue-100">Purpose-built prep plans aligned to UK grammar-school standards, with regular check-ins and high-yield practice to build confidence.</p>
        </div>
        <div className="rounded-2xl p-8 bg-blue-50 border border-blue-100">
          <h3 className="text-blue-900 font-semibold mb-4 text-xl">How to get an Online 11+ Tutor Near You?</h3>
          <p className="text-blue-800 mb-6">Share your goals; we'll match you with an expert and start with a no-obligation free trial.</p>
          <a href="/pricing" className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors">
            Get free trial lesson
          </a>
        </div>
      </section>
    </main>
  );
};

export default TestElevenPlus;

