'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, BookOpen, GraduationCap, Lightbulb } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  image?: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Supporting Diverse Learners: How We Cater to Unique Needs Across 6 Countries',
    excerpt: 'Education is not one-size-fits-all—especially in today\'s world, where learners from different backgrounds, cultures, and academic systems require personalized attention.',
    content: `At Think Hub Tutors, we believe that every student deserves tailored support that recognizes their unique learning style, cultural background, and academic goals. Our global approach ensures that whether you're in the UK, Canada, Australia, New Zealand, Ireland, or the USA, you receive education that fits your specific curriculum and learning needs.

Understanding that each country has its own educational framework, we've developed specialized tutoring programs that align with local standards. For students in the UK, we cover the National Curriculum, GCSE, and A-Levels. Canadian students benefit from provincial curricula and IB programs, while Australian learners receive support for the Australian Curriculum and NAPLAN preparation.

Our tutors are not just subject experts—they're cultural ambassadors who understand the nuances of each educational system. They adapt their teaching methods to match regional expectations, assessment styles, and learning preferences. This personalized approach has helped thousands of students achieve their academic goals while feeling understood and supported.

We also recognize that learning goes beyond textbooks. Our tutors incorporate cultural context, real-world examples, and local perspectives that make learning more relevant and engaging. Whether it's understanding British literature through a UK lens or exploring Canadian history with local insights, we ensure education feels authentic and meaningful.`,
    date: 'Nov 24, 2025',
    readTime: '5 min read',
    category: 'Education',
  },
  {
    id: 2,
    title: 'Education Without Limits: Connecting Communities Across the World Through Learning',
    excerpt: 'Education is changing faster than ever. Families today want learning that goes beyond classroom walls—something flexible, personalized, and accessible.',
    content: `At Think Hub Tutors, we believe that every learner should have the opportunity to succeed, whether they live in the UK, the USA, Ireland, Canada, Australia, or New Zealand. Our online platform breaks down geographical barriers, connecting students with expert tutors who understand their local curriculum and learning standards.

The digital revolution in education has transformed how we learn. No longer confined to physical classrooms, students can now access world-class tutoring from anywhere in the world. Our platform leverages cutting-edge technology to create immersive learning experiences that rival—and often exceed—traditional in-person sessions.

Through interactive whiteboards, real-time collaboration tools, and multimedia resources, our tutors create dynamic learning environments. Students can share screens, work on problems together, and access a vast library of educational materials instantly. This technology-enhanced approach makes learning more engaging and effective.

Flexibility is another key advantage. Students can schedule sessions that fit their busy lives, whether they're balancing school, extracurricular activities, or family commitments. Our 24/7 platform ensures that learning can happen when it's most convenient, breaking free from rigid timetables.

We've seen remarkable results: students who struggled in traditional settings thrive in our personalized online environment. The combination of expert instruction, flexible scheduling, and innovative technology creates a powerful learning experience that helps students reach their full potential.`,
    date: 'Nov 24, 2025',
    readTime: '6 min read',
    category: 'Online Learning',
  },
  {
    id: 3,
    title: 'From New Zealand to Canada: A Global Approach to Tailored Education',
    excerpt: 'As education continues to evolve, parents around the world are searching for flexible solutions that meet the individual needs of their children.',
    content: `We understand that every learner is unique—whether they are in the UK, the USA, Ireland, Canada, Australia, or New Zealand. Our personalized tutoring approach adapts to each student's learning style, pace, and academic goals, ensuring success across different educational systems.

Personalization starts with understanding each student's individual needs. During the initial assessment, our tutors identify learning preferences, strengths, and areas for improvement. Some students are visual learners who benefit from diagrams and charts, while others are auditory learners who excel through discussion and explanation.

Our adaptive curriculum adjusts in real-time based on student progress. If a student masters a concept quickly, we move forward. If they need more time, we provide additional practice and support. This flexible pacing prevents students from feeling overwhelmed or bored, keeping them engaged and motivated.

We also recognize that academic success isn't just about subject knowledge—it's about building confidence, developing critical thinking skills, and fostering a love of learning. Our tutors work on these broader goals alongside curriculum-specific content, creating well-rounded learners who are prepared for future challenges.

The results speak for themselves: students working with Think Hub Tutors show an average improvement of two grade levels within six months. More importantly, they develop confidence, curiosity, and the skills needed for lifelong learning.`,
    date: 'Nov 24, 2025',
    readTime: '4 min read',
    category: 'Global Education',
  },
  {
    id: 4,
    title: 'Top 10 Study Hacks Every Student Should Know',
    excerpt: 'Effective study techniques can transform the way students absorb and retain complex information. Active recall forces your brain to retrieve information without reference materials.',
    content: `Discover proven study strategies that help students maximize their learning potential. From active recall techniques to spaced repetition, learn how to study smarter, not harder.

1. Active Recall: Instead of passively reading notes, actively test yourself. Close your book and try to recall information from memory. This forces your brain to retrieve information, strengthening neural pathways and improving long-term retention.

2. Spaced Repetition: Review material at increasing intervals—after one day, then three days, then a week. This technique leverages the spacing effect, which shows that information is better remembered when learning is spread out over time.

3. The Pomodoro Technique: Study for 25 minutes, then take a 5-minute break. This method maintains focus and prevents burnout. After four cycles, take a longer 15-30 minute break.

4. Interleaving: Instead of studying one topic at a time, mix different subjects or types of problems. This challenges your brain to distinguish between concepts and improves problem-solving flexibility.

5. Elaborative Interrogation: Ask yourself "why" and "how" questions about the material. Explaining concepts in your own words deepens understanding and creates stronger memory connections.

6. Dual Coding: Combine verbal and visual information. Create mind maps, diagrams, or sketches alongside written notes to engage multiple parts of your brain.

7. Practice Testing: Regular self-testing is one of the most effective study methods. Use flashcards, practice exams, or create your own questions to test your knowledge.

8. Teach Someone Else: Explaining concepts to others forces you to organize your thoughts and identify gaps in your understanding. Even teaching an imaginary student works!

9. Use Mnemonics: Create memorable associations, acronyms, or stories to remember complex information. These mental shortcuts make recall easier and more reliable.

10. Optimize Your Environment: Find a quiet, well-lit space free from distractions. Keep your study area organized and dedicated solely to learning to create a mental association between the space and focused work.`,
    date: 'Mar 5, 2025',
    readTime: '8 min read',
    category: 'Study Tips',
  },
  {
    id: 5,
    title: 'How Can Students of All Grades Learn Grammar with Online Tutoring?',
    excerpt: 'Effective communication needs grammar skills as its essential fundamental base. Every student in all grades requires strong grammar knowledge to excel academically.',
    content: `Online tutoring websites offer personalized support for grammar development. Our expert tutors provide targeted grammar instruction that adapts to each student's level, from elementary basics to advanced writing skills.

Grammar is the foundation of effective communication. Whether students are writing essays, crafting professional emails, or engaging in academic discussions, strong grammar skills are essential. Our structured approach ensures students build these skills progressively.

For elementary students, we focus on the basics: sentence structure, punctuation, and common grammar rules. Interactive games and activities make learning fun and engaging, helping young learners develop a solid foundation without feeling overwhelmed.

Middle school students work on more complex concepts: verb tenses, subject-verb agreement, and sentence variety. We incorporate their interests and current coursework to make grammar relevant and practical.

High school and college students refine their skills for academic writing. We cover advanced topics like parallel structure, active vs. passive voice, and sophisticated sentence construction. Our tutors help students develop a writing style that's both clear and compelling.

The key to our success is personalization. Each student receives instruction tailored to their current level and learning style. Regular assessments ensure we're always challenging students appropriately while providing support where needed. With consistent practice and expert guidance, students of all ages can master grammar and become confident communicators.`,
    date: 'Mar 10, 2025',
    readTime: '5 min read',
    category: 'English',
  },
  {
    id: 6,
    title: 'Why Do Things Fall? Gravity Explained for Kids',
    excerpt: 'Every day, things fall. Not up. Not sideways. Down! This happens because of gravity. Gravity is a force that pulls things toward each other.',
    content: `The simple gravity explanation helps us understand our world. Learn how to explain complex scientific concepts to children in ways that spark curiosity and understanding.

Gravity is one of the fundamental forces in our universe. It's what keeps our feet on the ground, what makes objects fall when we drop them, and what keeps the moon orbiting around Earth. But how do we explain this invisible force to curious young minds?

Start with everyday observations. When children drop a toy, it falls down—never up. When they jump, they come back down. These simple experiences are the foundation for understanding gravity. We can explain that Earth is like a giant magnet, pulling everything toward its center.

Use simple analogies. Imagine Earth as a trampoline with a heavy ball in the center. The ball creates a dip, and smaller objects roll toward it. This helps children visualize how massive objects (like Earth) create a "pull" on smaller objects.

Hands-on experiments make concepts tangible. Drop different objects (a feather, a ball, a book) and observe how they fall. Discuss why they all fall at the same rate (in a vacuum) and what factors affect falling speed in the real world.

Connect to space exploration. Explain how gravity keeps astronauts in orbit—they're constantly falling toward Earth but moving forward fast enough to miss it. This fascinating concept captures children's imagination and shows gravity's role in space.

By making science accessible and engaging, we help children develop a lifelong love of learning. When complex concepts are broken down into understandable pieces, children feel empowered and curious to learn more.`,
    date: 'Mar 14, 2025',
    readTime: '4 min read',
    category: 'Science',
  },
  {
    id: 7,
    title: 'The Best Online Tutoring & E-Learning Platform in Europe',
    excerpt: 'Discover the best online tutoring & e-learning platform in Europe, offering personalized learning experiences, expert tutors, and flexible support for students of all levels.',
    content: `Think Hub Tutors provides comprehensive online tutoring services across Europe, connecting students with qualified tutors who specialize in various curricula including UK, Irish, and international programs.

Europe's diverse educational landscape requires a nuanced approach to tutoring. Each country has its own curriculum, assessment methods, and educational philosophy. We've built a platform that respects these differences while providing world-class instruction.

For UK students, we offer comprehensive support across the National Curriculum, with specialized expertise in GCSE and A-Level preparation. Our tutors understand the specific requirements of British examinations and help students develop the analytical and critical thinking skills valued in the UK system.

Irish students benefit from our expertise in the Junior Certificate and Leaving Certificate programs. We provide targeted support for both the written and oral components of Irish examinations, helping students excel in their assessments.

International students across Europe can access our IB (International Baccalaureate) and Cambridge International programs. These globally recognized qualifications require a sophisticated understanding of international education standards, which our tutors provide.

Our platform's technology ensures seamless learning experiences regardless of location. High-quality video, interactive whiteboards, and real-time collaboration tools create an immersive learning environment that rivals in-person tutoring.

We're proud to serve students across Europe, helping them achieve their academic goals while respecting the unique characteristics of each educational system. Our commitment to excellence and cultural sensitivity makes us a trusted partner for families seeking quality online education.`,
    date: 'Oct 25, 2024',
    readTime: '6 min read',
    category: 'Online Learning',
  },
  {
    id: 8,
    title: 'Mathematical Problem-Solving: Techniques and Strategies',
    excerpt: 'Master the art of mathematical problem-solving with proven techniques and strategies that help students tackle complex problems with confidence.',
    content: `Learn essential problem-solving strategies including breaking down complex problems, identifying patterns, and applying logical reasoning to find solutions.

Mathematical problem-solving is both an art and a science. It requires creativity, logical thinking, and systematic approaches. Here are proven strategies that help students tackle even the most challenging problems with confidence.

1. Understand the Problem: Before jumping to solutions, take time to fully understand what's being asked. Read the problem carefully, identify given information, and determine what needs to be found. Sometimes, restating the problem in your own words helps clarify the goal.

2. Break It Down: Complex problems often seem overwhelming. Break them into smaller, manageable parts. Solve each part step by step, building toward the complete solution. This approach makes difficult problems feel achievable.

3. Look for Patterns: Mathematics is full of patterns. Recognizing these patterns—whether in numbers, shapes, or relationships—can provide shortcuts to solutions. Practice identifying patterns in different types of problems.

4. Draw Diagrams: Visual representation helps clarify relationships and identify solution paths. Whether it's a geometric diagram, a number line, or a flowchart, visual aids make abstract concepts concrete.

5. Work Backwards: Sometimes starting from the desired outcome and working backwards reveals the solution path. This strategy is particularly useful for proof problems or when the goal is clear but the path isn't.

6. Try Different Approaches: If one method isn't working, try another. There are often multiple ways to solve a problem. Being flexible and creative in your approach is a valuable skill.

7. Check Your Work: Always verify your solution. Does it make sense? Does it satisfy all the conditions? Checking your work catches errors and builds confidence in your problem-solving abilities.

8. Learn from Mistakes: Every mistake is a learning opportunity. Analyze what went wrong and why. Understanding your errors helps prevent similar mistakes in the future.

With practice and the right strategies, mathematical problem-solving becomes less intimidating and more enjoyable. These skills extend beyond mathematics, helping students approach challenges in all areas of life with confidence and creativity.`,
    date: 'Mar 8, 2023',
    readTime: '7 min read',
    category: 'Mathematics',
  },
];

const categories = ['All', 'Education', 'Online Learning', 'Study Tips', 'Science', 'Mathematics', 'English', 'Global Education'];

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [heroImageLoaded, setHeroImageLoaded] = useState(false);
  const [blogOpenImageLoaded, setBlogOpenImageLoaded] = useState(false);

  useEffect(() => {
    const heroImg = new Image();
    heroImg.src = '/images/blog.jpg';
    heroImg.onload = () => setHeroImageLoaded(true);

    const blogOpenImg = new Image();
    blogOpenImg.src = '/images/blogOpen.jpg';
    blogOpenImg.onload = () => setBlogOpenImageLoaded(true);
  }, []);

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Education':
      case 'Global Education':
        return <GraduationCap className="w-4 h-4" />;
      case 'Online Learning':
        return <BookOpen className="w-4 h-4" />;
      case 'Study Tips':
        return <Lightbulb className="w-4 h-4" />;
      default:
        return <BookOpen className="w-4 h-4" />;
    }
  };

  if (selectedPost) {
    return (
      <main className="bg-white text-gray-800 min-h-screen">
        {/* Hero Section with Image */}
        <section className="relative h-[500px] pt-28 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0 h-[500px]">
            {/* Loading Skeleton */}
            {!blogOpenImageLoaded && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200 h-full"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{
                  backgroundSize: '200% 100%',
                }}
              />
            )}
            {/* Actual Image */}
            <motion.div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat h-full"
              style={{
                backgroundImage: 'url(/images/blogOpen.jpg)',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: blogOpenImageLoaded ? 1 : 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
            </motion.div>
            <div className="absolute inset-0 bg-blue-900/70 h-full"></div>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto h-full flex flex-col justify-center px-6 sm:px-10 lg:px-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="text-4xl sm:text-5xl font-bold text-white mb-6"
            >
              {selectedPost.title}
            </motion.h1>
          </div>
        </section>

        {/* Blog Content */}
        <article className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 py-12">
          <motion.button
            onClick={() => setSelectedPost(null)}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 font-medium"
            whileHover={{ x: -4 }}
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to Blog
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6 flex-wrap">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium flex items-center gap-2">
                {getCategoryIcon(selectedPost.category)}
                {selectedPost.category}
              </span>
              <span className="text-gray-500 text-sm flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {selectedPost.date}
              </span>
              <span className="text-gray-500 text-sm flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {selectedPost.readTime}
              </span>
            </div>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">{selectedPost.excerpt}</p>
            
            <div className="space-y-8">
              {selectedPost.content.split('\n\n').map((paragraph, index) => {
                const trimmed = paragraph.trim();
                if (!trimmed) return null;
                
                // Check if paragraph starts with a number (like "1.", "2.", etc.) for numbered items
                if (/^\d+\.\s+[A-Z]/.test(trimmed)) {
                  const match = trimmed.match(/^(\d+)\.\s+(.+?):\s*(.+)/s);
                  if (match) {
                    const [, num, title, content] = match;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100 shadow-sm"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                            {num}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-blue-900 mb-3">{title}</h3>
                            <p className="text-gray-700 leading-relaxed">{content.trim()}</p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  }
                  
                  // Simple numbered list item
                  const simpleMatch = trimmed.match(/^(\d+)\.\s+(.+)/);
                  if (simpleMatch) {
                    const [, num, content] = simpleMatch;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white rounded-lg p-5 border border-gray-200 shadow-sm"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-semibold">
                            {num}
                          </div>
                          <p className="text-gray-700 leading-relaxed flex-1">{content.trim()}</p>
                        </div>
                      </motion.div>
                    );
                  }
                }
                
                // Check if it's a short line that could be a heading
                if (trimmed.length < 80 && !trimmed.includes('.') && !trimmed.includes(',')) {
                  return (
                    <motion.h2
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="text-2xl font-bold text-blue-900 mt-8 mb-4"
                    >
                      {trimmed}
                    </motion.h2>
                  );
                }
                
                // Regular paragraph
                return (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-gray-700 leading-relaxed text-lg"
                  >
                    {trimmed}
                  </motion.p>
                );
              })}
            </div>
          </motion.div>
        </article>
      </main>
    );
  }

  return (
    <main className="bg-white text-gray-800 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] pt-28 pb-16 px-6 sm:px-10 lg:px-16 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 h-[600px]">
          {/* Loading Skeleton */}
          {!heroImageLoaded && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200 h-full"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                backgroundSize: '200% 100%',
              }}
            />
          )}
          {/* Actual Image */}
          <motion.div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat h-full"
            style={{
              backgroundImage: 'url(/images/blog.jpg)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: heroImageLoaded ? 1 : 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
          </motion.div>
          <div className="absolute inset-0 bg-blue-900/70 h-full"></div>
        </div>
        <div className="relative z-10 max-w-6xl mx-auto text-center h-full flex flex-col justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl font-bold mb-6"
          >
            Our Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            Insights, tips, and stories about education, learning, and student success
          </motion.p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 px-6 sm:px-10 lg:px-16">
        <div className="max-w-6xl mx-auto">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-3 mb-12 justify-center"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 cursor-pointer group"
                onClick={() => setSelectedPost(post)}
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium flex items-center gap-1">
                      {getCategoryIcon(post.category)}
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-blue-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No posts found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 sm:px-10 lg:px-16 bg-blue-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-6">Ready to Start Learning?</h2>
          <p className="text-gray-700 mb-8">Join thousands of students achieving academic success with Think Hub Tutors.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/register" className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md">
                Get Started
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact" className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-md border border-blue-200">
                Contact Us
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default Blog;

