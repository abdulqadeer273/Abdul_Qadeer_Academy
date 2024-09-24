import React from "react";

const Mainsection = ({ themeColor }) => {
  return (
    <section
      className={`${
        themeColor === "#FFFFFF" ? "text-black" : "text-white"
      } p-8 mt-16`}
      style={{ backgroundColor: themeColor }}
    >
      <h2 className="text-3xl font-bold mb-10 text-center">
        Join Our Master Course
      </h2>
      <div className="flex flex-col md:flex-row gap-12 max-w-5xl mx-auto">
        <div className="flex-1">
          <p className="mb-6">
            This meticulously crafted course offers a structured and in-depth
            approach to learning Web development, ensuring that you build a
            strong foundation.
          </p>
          <form className="space-y-4 max-w-md">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-2 border rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border rounded"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-2 border rounded"
            />
            <button
              type="submit"
              className="w-full font-bold py-2 px-4 rounded transition duration-300"
              style={{
                backgroundColor: "white",
                color: themeColor,
                border: `2px solid ${themeColor}`,
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "black";
                e.target.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "white";
                e.target.style.color = themeColor;
              }}
            >
              Enroll
            </button>
          </form>
        </div>
        <div className="flex-1 flex items-stretch">
          <div className="w-full">
            <iframe
              src="https://www.youtube.com/embed/VIDEO_ID"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mainsection;
