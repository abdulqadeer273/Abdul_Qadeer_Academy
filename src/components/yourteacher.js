import React, { useState } from 'react'
import Image from 'next/image'

const Yourteacher = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqs = [
    {
      question: "What technologies will I learn in this course?",
      answer: "In this comprehensive course, you'll master a powerful full-stack technology suite. On the front-end, you'll dive deep into React.js and Next.js, learning to build dynamic and performant user interfaces. For the back-end, you'll explore Django, a high-level Python web framework. You'll also gain expertise in GraphQL for efficient data querying. Additionally, you'll learn to leverage AWS services, including AppSync for real-time data synchronization and Lambda for serverless computing. This combination of technologies will equip you with the skills to build modern, scalable web applications."
    },
    {
      question: "Is this course suitable for beginners?",
      answer: "While this course covers advanced topics, it's structured to accommodate learners at various skill levels. We start with fundamentals and progressively move to more complex concepts. Absolute beginners might find some sections challenging, but with dedication and use of our support resources, they can succeed. That said, having basic knowledge of HTML, CSS, and JavaScript will make your learning journey smoother. If you're new to programming, we recommend taking introductory courses in these areas before starting this one."
    },
    {
      question: "How long does the course take to complete?",
      answer: "The course is self-paced, allowing you to learn according to your schedule. On average, students complete the course in 3-6 months when dedicating 10-15 hours per week. Fast learners or those with prior experience might finish sooner, while those juggling other commitments might take longer. Remember, the goal is thorough understanding and practical application, not just quick completion. You'll have lifetime access to the course, so you can take as long as you need to master the material."
    },
    {
      question: "What kind of projects will I build during the course?",
      answer: "You'll work on several hands-on projects that simulate real-world scenarios. These include: 1) A full-stack social media application using React, Next.js, and Django, 2) A serverless e-commerce platform leveraging AWS Lambda and AppSync, 3) A real-time dashboard with GraphQL subscriptions, 4) A task management system with authentication and authorization. Each project is designed to reinforce your learning and contribute to a robust portfolio that showcases your full-stack capabilities to potential employers."
    },
    {
      question: "Are there any prerequisites for this course?",
      answer: "While we accommodate various skill levels, having the following will be beneficial: 1) Basic proficiency in HTML, CSS, and JavaScript, 2) Familiarity with any programming language (Python would be a plus), 3) Understanding of basic web development concepts, 4) Comfort with using command-line interfaces. Don't worry if you're not an expert in these areas; we'll review key concepts as needed. However, having this foundation will help you grasp the more advanced topics more quickly."
    },
    {
      question: "How much time should I dedicate per week?",
      answer: "For optimal progress, we recommend dedicating at least 10-15 hours per week to the course. This includes watching video lectures, completing coding exercises, working on projects, and participating in the community. However, the beauty of our self-paced format is that you can adjust your time commitment based on your schedule and learning speed. Some weeks you might invest more time, others less. Consistency is key – regular engagement with the material, even if it's just a few hours, will lead to better retention and skill development."
    },
    {
      question: "Is there support available if I get stuck?",
      answer: "Absolutely! We offer a robust support system to ensure your success. This includes: 1) A vibrant community forum where you can ask questions and share insights with fellow learners, 2) Weekly live Q&A sessions with the instructor, 3) Teaching assistants available to help with technical queries via chat and email, 4) Peer-to-peer support through study groups and pair programming sessions, 5) Detailed documentation and troubleshooting guides for common issues. We're committed to providing you with the help you need to overcome any obstacles in your learning journey."
    },
    {
      question: "Will this course prepare me for a career in full-stack development?",
      answer: "Yes, this course is specifically designed to prepare you for a career in full-stack development. You'll learn technologies and practices that are in high demand in the industry. Beyond just coding, you'll gain skills in system design, debugging, testing, and deployment – all crucial for a successful development career. The projects you build will form a strong portfolio to showcase to potential employers. Additionally, we cover soft skills like technical communication and problem-solving, which are highly valued in the workplace. Many of our graduates have successfully transitioned into full-stack roles or advanced their existing careers."
    },
    {
      question: "Are there any certifications upon completion?",
      answer: "Upon successfully completing the course and its projects, you'll receive a certificate of completion from our institution. While this isn't an official industry certification like those offered by AWS or Microsoft, it does verify your proficiency in the covered technologies and your ability to build full-stack applications. This certificate, combined with your project portfolio, can be a valuable asset in your job search or career advancement. Some students have also used the knowledge gained in this course to pursue official certifications from AWS or other platforms, further boosting their credentials."
    },
    {
      question: "Can I access the course materials after completion?",
      answer: "Yes, you'll have lifetime access to all course materials after completion. This includes video lectures, coding exercises, project specifications, and any supplementary resources. We also regularly update our content to reflect new versions of the technologies covered or industry trends. As an alumnus, you'll have access to these updates at no additional cost. This ensures that your skills remain current long after you've completed the course. Many students find it valuable to revisit certain modules as they apply their skills in real-world scenarios or prepare for job interviews."
    },
  ];

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-12 p-8">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full text-left p-4 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 rounded-lg focus:outline-none"
                onClick={() => toggleQuestion(index)}
              >
                <span className="font-semibold">{faq.question}</span>
                <span className="float-right">{openQuestion === index ? '−' : '+'}</span>
              </button>
              {openQuestion === index && (
                <div className="p-4 bg-white border border-gray-200 rounded-b-lg mt-1">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="lg:w-1/2">
          <Image
            src=""
            alt="Your Instructor"
            width={500}
            height={300}
            className="w-full max-w-md mx-auto rounded-lg shadow-lg mb-8"
          />
          <h2 className="text-3xl font-bold mb-6">Your Instructor</h2>
          <div className="space-y-4">
            <p>
              Meet Dr. Alex Thompson, your expert guide in the world of full-stack development. With over a decade of industry experience and a Ph.D. in Computer Science, Alex brings a wealth of knowledge and practical insights to this comprehensive course.
            </p>
            <p>
              Specializing in React.js, Next.js, AWS AppSync, Lambda functions, Django, and GraphQL, Alex has led development teams at several tech startups and Fortune 500 companies. Their expertise spans from crafting responsive front-end interfaces to designing scalable back-end architectures.
            </p>
            <p>
              As a certified AWS Solutions Architect and a contributor to open-source projects, Alex stays at the forefront of technology trends. They have a passion for teaching and have mentored numerous developers throughout their career.
            </p>
            <p>
              In this course, Alex will share not just the technical skills, but also industry best practices, architectural patterns, and problem-solving strategies that are crucial for success in the field of full-stack development.
            </p>
            <p>
              With Alex as your instructor, you&apos;ll gain more than just coding skills. You&apos;ll learn how to think like a full-stack developer, approach complex problems, and build robust, scalable applications that stand out in today&apos;s competitive tech landscape.
            </p>
          </div>
        </div>
      </div>
      
      <div className="w-full mt-8">
        <h2 className="text-3xl font-bold mb-8">Our Guarantees</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 bg-gray-100 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">7 Days Money Back Guarantee</h3>
            <p className="text-lg">No questions asked 7 Days Money Back Guarantee. If you are unhappy with our product, you can get your money back.</p>
          </div>
          <div className="flex-1 bg-gray-100 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Secure Payment</h3>
            <p className="text-lg">All orders are processed through a very secure network. Your credit card information is never shared in any way. We respect your privacy.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Yourteacher;
