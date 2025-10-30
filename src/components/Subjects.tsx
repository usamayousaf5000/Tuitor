import React from 'react';
import { FaCalculator, FaFlask, FaBook, FaLaptopCode, FaGraduationCap, FaUniversity } from 'react-icons/fa';

const subjects = [
  { 
    name: 'Mathematics', 
    icon: <FaCalculator className="w-8 h-8 text-blue-600" />,
    description: 'Master mathematical concepts from basic arithmetic to advanced calculus with our expert tutors.',
    tags: ['K-12', 'Algebra', 'Calculus', 'SAT/ACT'],
    popular: true
  },
  { 
    name: 'Science', 
    icon: <FaFlask className="w-8 h-8 text-blue-600" />,
    description: 'Explore the natural world through physics, chemistry, and biology with hands-on learning approaches.',
    tags: ['Physics', 'Chemistry', 'Biology'],
    popular: false
  },
  { 
    name: 'English', 
    icon: <FaBook className="w-8 h-8 text-blue-600" />,
    description: 'Develop strong reading comprehension and writing skills for academic and professional success.',
    tags: ['Reading', 'Writing', 'ESL'],
    popular: true
  },
  { 
    name: 'Computer Science', 
    icon: <FaLaptopCode className="w-8 h-8 text-blue-600" />,
    description: 'Learn programming languages and computational thinking with project-based instruction.',
    tags: ['Python', 'JavaScript', 'AP CS'],
    popular: false
  },
  { 
    name: 'Test Prep', 
    icon: <FaGraduationCap className="w-8 h-8 text-blue-600" />,
    description: 'Prepare for standardized tests with proven strategies and personalized study plans.',
    tags: ['SAT', 'ACT', 'AP Exams'],
    popular: true
  },
  { 
    name: 'University Support', 
    icon: <FaUniversity className="w-8 h-8 text-blue-600" />,
    description: 'Get assistance with university-level coursework, research papers, and complex projects.',
    tags: ['Assignments', 'Labs', 'Projects'],
    popular: false
  },
];

const Subjects: React.FC = () => {
  return (
    <section id="subjects" className="py-16 px-6 sm:px-10 lg:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">Subjects & Programs</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our expert tutors provide comprehensive support across a wide range of academic subjects and standardized test preparation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subjects.map((subject) => (
            <div key={subject.name} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="p-8">
                <div className="flex items-center mb-5">
                  <div className="mr-4 bg-blue-100 p-3 rounded-full">
                    {subject.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900">{subject.name}</h3>
                </div>
                
                <p className="text-gray-600 mb-6 text-lg">{subject.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-5">
                  {subject.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                {subject.popular && (
                  <div className="inline-block px-4 py-2 bg-green-100 text-green-800 text-sm font-semibold rounded-full mb-5">
                    Popular Subject
                  </div>
                )}
                
                <div className="mt-6">
                  <a href={`/subjects/${subject.name.toLowerCase()}`} className="text-blue-600 hover:text-blue-800 font-semibold text-lg flex items-center">
                    Learn more 
                    <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center bg-blue-50 p-10 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">Don't see the subject you're looking for?</h3>
          <p className="text-gray-600 mb-6 text-lg max-w-2xl mx-auto">We offer tutoring in many more subjects. Contact us to discuss your specific learning needs.</p>
          <a 
            href="/contact" 
            className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors text-lg shadow-md"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Subjects;
