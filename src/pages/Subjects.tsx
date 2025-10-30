import React from 'react';
import SubjectsGrid from '../components/Subjects';

const Subjects: React.FC = () => {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-6 sm:px-10 lg:px-16 bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Academic Subjects</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Explore our comprehensive range of subjects taught by expert tutors who are passionate about helping students succeed.
          </p>
        </div>
      </section>
      
      {/* Subjects Grid */}
      <SubjectsGrid />
    </main>
  );
};

export default Subjects;


