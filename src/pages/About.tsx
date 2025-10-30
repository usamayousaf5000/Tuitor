import React from 'react';
import { FaGraduationCap, FaUsers, FaChartLine, FaAward,} from 'react-icons/fa';

const About: React.FC = () => {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-6 sm:px-10 lg:px-16 bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">About Tuitor</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We are passionate educators dedicated to transforming online learning through personalized tutoring, innovative teaching methods, and a commitment to student success.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 sm:px-10 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {key: 'Years Experience', value: '15+', icon: <FaGraduationCap className="w-10 h-10 text-blue-600" />},
              {key: 'Students Taught', value: '5,000+', icon: <FaUsers className="w-10 h-10 text-blue-600" />},
              {key: 'Avg. Grade Improvement', value: '+2 grades', icon: <FaChartLine className="w-10 h-10 text-blue-600" />},
              {key: 'Expert Tutors', value: '100+', icon: <FaAward className="w-10 h-10 text-blue-600" />},
            ].map((stat) => (
              <div key={stat.key} className="text-center p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-center mb-5">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-blue-900 mb-3">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.key}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-6 sm:px-10 lg:px-16 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Story</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">Transforming online education with personalized learning experiences</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Tuitor was founded in 2010 by a team of dedicated educators and technology experts who recognized the need for personalized, accessible online tutoring. What began as a small initiative has evolved into a comprehensive educational platform serving students worldwide.
              </p>
              <p className="text-gray-700 mb-4">
                Our mission has always been to provide accessible, high-quality education that adapts to each student's unique learning style and needs. We believe that every student has the potential to excel with the right guidance and support.
              </p>
              <p className="text-gray-700">
                Today, we continue to innovate and expand our services, incorporating the latest educational research and technology to deliver exceptional learning experiences that help students achieve their academic goals.
              </p>
            </div>
            <div className="bg-blue-100 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Our Core Values</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="bg-blue-600 rounded-full p-1 mr-3 mt-1"></span>
                  <span><strong className="text-blue-900">Excellence:</strong> We strive for the highest standards in everything we do</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 rounded-full p-1 mr-3 mt-1"></span>
                  <span><strong className="text-blue-900">Personalization:</strong> We tailor our approach to each student's unique needs</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 rounded-full p-1 mr-3 mt-1"></span>
                  <span><strong className="text-blue-900">Innovation:</strong> We continuously improve our methods and technology</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 rounded-full p-1 mr-3 mt-1"></span>
                  <span><strong className="text-blue-900">Accessibility:</strong> We make quality education available to all</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-600 rounded-full p-1 mr-3 mt-1"></span>
                  <span><strong className="text-blue-900">Integrity:</strong> We operate with honesty and transparency</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 sm:px-10 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Leadership Team</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Meet the educators and experts behind Think Hub Tutors</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {name: 'Dr. Sarah Johnson', role: 'Founder & CEO', bio: 'Former university professor with 15+ years in education technology'},
              {name: 'Michael Chen', role: 'Chief Academic Officer', bio: 'Curriculum development expert with background in personalized learning'},
              {name: 'Emma Williams', role: 'Head of Tutor Success', bio: 'Experienced educator focused on professional development and quality assurance'},
            ].map((member) => (
              <div key={member.name} className="text-center p-6 rounded-lg shadow-md border border-gray-100">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <FaUsers className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-blue-900">{member.name}</h3>
                <p className="text-blue-600 mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 sm:px-10 lg:px-16 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Ready to Experience the Think Hub Difference?</h2>
          <p className="text-gray-700 mb-8">Join thousands of students who have transformed their academic journey with our personalized tutoring approach.</p>
          <a href="#contact" className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors shadow-md inline-block">
            Get Started Today
          </a>
        </div>
      </section>
    </main>
  );
};

export default About;


