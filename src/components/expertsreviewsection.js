import React from 'react'

const Expertsreviewsection = ({themeColor}) => {
  return (
    <div className="text-center py-16 px-4">
      <h2 className="text-4xl font-extrabold mb-12">What Experts Are Saying?</h2>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mb-12">
        <div className="w-full lg:w-1/3 max-w-sm">
          <iframe
            className="w-full aspect-[9/16]"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Expert Review 1"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full lg:w-1/3 max-w-sm">
          <iframe
            className="w-full aspect-[9/16]"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Expert Review 2"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full lg:w-1/3 max-w-sm">
          <iframe
            className="w-full aspect-[9/16]"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Expert Review 3"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <button 
        className="hover:opacity-90 text-white font-semibold py-4 px-8 rounded-lg transition duration-300"
        style={{ backgroundColor: themeColor}} 
      >
        Get Started Today
      </button>
    </div>
  )
}

export default Expertsreviewsection
