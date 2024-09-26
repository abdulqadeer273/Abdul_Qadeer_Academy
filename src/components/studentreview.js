import React, { useRef } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';

const Studentreview = ({themeColor}) => {
  const x = useMotionValue(0);
  const containerRef = useRef(null);

  const handleDragEnd = () => {
    const currentX = x.get();
    const containerWidth = containerRef.current.offsetWidth;
    const itemWidth = containerWidth / 2; // 2 items visible at a time
    const maxDrag = -itemWidth * (reviews.length - 2);
    
    let snapPoint = Math.round(currentX / itemWidth) * itemWidth;
    snapPoint = Math.max(maxDrag, Math.min(0, snapPoint));

    animate(x, snapPoint, {
      type: "spring",
      stiffness: 300,
      damping: 30
    });
  };

  // Sample review data
  const reviews = [
    { id: 1, text: "Great course! I learned so much and it really helped me advance my skills.", author: "John D." },
    { id: 2, text: "The instructors are very knowledgeable and explain complex concepts clearly.", author: "Sarah M." },
    { id: 3, text: "Highly recommend for beginners. The pace is perfect and the content is comprehensive.", author: "Mike R." },
    { id: 4, text: "Excellent content and structure. I feel much more confident in my abilities now.", author: "Emily L." },
    { id: 5, text: "This course exceeded my expectations. It's well worth the investment.", author: "Chris P." },
    { id: 6, text: "Very practical and applicable. I've already started using what I've learned in my job.", author: "Lisa K." },
  ];

  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-8">Students Reviews About Us</h2>
        <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-8 mb-12">
          {/* YouTube video 1 */}
          <div className="w-full md:w-1/3 aspect-[9/16] max-w-sm">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/VIDEO_ID_1"
              title="Student Review 1"
              allowFullScreen
            ></iframe>
          </div>
          {/* YouTube video 2 */}
          <div className="w-full md:w-1/3 aspect-[9/16] max-w-sm">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/VIDEO_ID_2"
              title="Student Review 2"
              allowFullScreen
            ></iframe>
          </div>
          {/* YouTube video 3 */}
          <div className="w-full md:w-1/3 aspect-[9/16] max-w-sm">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/VIDEO_ID_3"
              title="Student Review 3"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      
      {/* Statistics Banner */}
      <div className="w-full py-16" style={{ backgroundColor: themeColor }}>
        <div className="flex flex-wrap justify-around items-center text-white text-center">
          <div className="w-1/2 sm:w-1/4 mb-8 sm:mb-0">
            <div className="text-5xl font-bold mb-2">4000+</div>
            <div className="text-xl">Students</div>
          </div>
          <div className="w-1/2 sm:w-1/4 mb-8 sm:mb-0">
            <div className="text-5xl font-bold mb-2">5</div>
            <div className="text-xl">Star Rating</div>
          </div>
          <div className="w-1/2 sm:w-1/4 mb-8 sm:mb-0">
            <div className="text-5xl font-bold mb-2">97.5%</div>
            <div className="text-xl">Satisfaction Rate</div>
          </div>
          <div className="w-1/2 sm:w-1/4">
            <div className="text-5xl font-bold mb-2">50k+</div>
            <div className="text-xl">Followers</div>
          </div>
        </div>
      </div>
      
      {/* Draggable Reviews Section */}
      <div className="bg-gray-100 w-full">
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-center mb-12">What Students Are Saying?</h2>
          <div ref={containerRef} className="overflow-hidden">
            <motion.div 
              className="flex"
              drag="x"
              dragConstraints={{ left: -((reviews.length - 2) / 2) * 100 + '%', right: 0 }}
              style={{ x }}
              onDragEnd={handleDragEnd}
            >
              {reviews.map((review, index) => (
                <motion.div
                  key={review.id}
                  className="w-1/2 flex-shrink-0 px-4"
                >
                  <div className="bg-white shadow-lg rounded-lg p-6 border-2 border-red-500 h-64 flex flex-col justify-between">
                    <p className="text-gray-600 text-lg overflow-y-auto flex-grow">{review.text}</p>
                    <p className="text-gray-800 text-base font-semibold mt-4">- {review.author}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Studentreview;
