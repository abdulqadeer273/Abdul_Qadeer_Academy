import React from 'react'

const Coursedetailsection = ({themeColor}) => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h2 className="font-bold text-3xl mb-4">What You&apos;ll Learn</h2>
          <p className="text-lg mb-4">Duration: 3-4 months (3 Parts)</p>
          <p className="max-w-3xl mx-auto text-gray-700">
            Objective: This web development course equips students with skills to create modern websites, covering HTML, CSS, JavaScript, React, and backend technologies. Students will learn to build responsive, interactive web applications and gain understanding of development principles and best practices.
          </p>
        </div>
        
        {/* Part 1: HTML/CSS */}
        <div className="flex mb-16">
          <div className="w-1/2 pr-12">
            <h3 className="font-semibold text-2xl mb-4">Part 1: HTML and CSS Fundamentals (1 month)</h3>
            <ul className="list-disc pl-6 space-y-3 mb-8 text-gray-700">
              <li>Introduction to HTML5 structure and semantics</li>
              <li>CSS3 styling, layouts, and responsive design</li>
              <li>Building and styling static web pages</li>
              <li>Introduction to web accessibility principles</li>
              <li>Weekly coding challenges and projects</li>
              <li>Bi-weekly progress reports and live Q&A sessions</li>
              <li>Digital certificate upon completion of Part 1</li>
            </ul>
            <p className="font-semibold text-lg">Course Resources: &quot;HTML5 and CSS3 Essentials&quot; e-book and online materials</p>
          </div>
          <div className="w-1/2">
            <div className="bg-gray-200 h-64 rounded-lg shadow-md flex items-center justify-center">
              <p className="text-gray-500">HTML/CSS Image</p>
            </div>
          </div>
        </div>

        {/* Part 2: JavaScript */}
        <div className="flex mb-16">
          <div className="w-1/2 pr-12">
            <div className="bg-gray-200 h-64 rounded-lg shadow-md flex items-center justify-center">
              <p className="text-gray-500">JavaScript Image</p>
            </div>
          </div>
          <div className="w-1/2">
            <h3 className="font-semibold text-2xl mb-4">Part 2: JavaScript Programming (1 month)</h3>
            <ul className="list-disc pl-6 space-y-3 mb-8 text-gray-700">
              <li>JavaScript fundamentals and ES6+ features</li>
              <li>DOM manipulation and event handling</li>
              <li>Asynchronous JavaScript and AJAX</li>
              <li>Introduction to functional programming concepts</li>
              <li>Building interactive web applications</li>
              <li>Weekly coding challenges and projects</li>
              <li>Bi-weekly progress reports and live Q&A sessions</li>
            </ul>
            <p className="font-semibold text-lg">Course Resources: &quot;Modern JavaScript&quot; e-book and online coding environment</p>
          </div>
        </div>

        {/* Part 3: React.js */}
        <div className="flex mb-16">
          <div className="w-1/2 pr-12">
            <h3 className="font-semibold text-2xl mb-4">Part 3: React.js Development (1-2 months)</h3>
            <ul className="list-disc pl-6 space-y-3 mb-8 text-gray-700">
              <li>Introduction to React.js and its core concepts</li>
              <li>Component-based architecture and JSX</li>
              <li>State management with hooks and context API</li>
              <li>Routing in React applications</li>
              <li>Integrating APIs and handling data in React</li>
              <li>Building a full-fledged React application</li>
              <li>Deployment and best practices</li>
            </ul>
            <p className="font-semibold text-lg">Course Resources: &quot;React.js Mastery&quot; e-book and project starter files</p>
          </div>
          <div className="w-1/2">
            <div className="bg-gray-200 h-64 rounded-lg shadow-md flex items-center justify-center">
              <p className="text-gray-500">React.js Image</p>
            </div>
          </div>
        </div>

        {/* Course Features and Requirements */}
        <div className="flex mt-16 mb-16">
          <div className="w-1/2 pr-12">
            <h3 className="font-semibold text-2xl mb-4">Course Features:</h3>
            <ul className="list-disc pl-6 space-y-3 mb-8 text-gray-700">
              <li>In-person, hands-on coding sessions</li>
              <li>Comprehensive course materials and handouts</li>
              <li>Access to computer lab with necessary software</li>
              <li>Live demonstrations and interactive exercises</li>
              <li>One-on-one support from experienced instructors</li>
            </ul>
          </div>
          <div className="w-1/2">
            <h3 className="font-semibold text-2xl mb-4">Requirements:</h3>
            <ul className="list-disc pl-6 space-y-3 mb-8 text-gray-700">
              <li>Regular attendance at scheduled class sessions</li>
              <li>Personal laptop (recommended, not required)</li>
              <li>Notebook for taking notes during lessons</li>
              <li>Basic computer literacy</li>
              <li>Enthusiasm to learn and collaborate in a classroom setting</li>
            </ul>
          </div>
        </div>

        {/* Conclusion */}
        <div className="mt-12">
          <p className="max-w-4xl text-gray-700 text-lg leading-relaxed">
            This structured web development course ensures a comprehensive understanding of modern web technologies, emphasizing their practical application in building responsive and interactive websites. Students benefit from hands-on, in-person learning experiences, supported by experienced instructors and access to state-of-the-art computer labs. The course provides a solid foundation in HTML, CSS, JavaScript, and React.js, preparing students for real-world web development challenges.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Coursedetailsection
