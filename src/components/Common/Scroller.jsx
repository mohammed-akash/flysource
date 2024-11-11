import React, { useRef } from 'react';

const CustomScroller = ({ data }) => {
    const scrollRef = useRef(null);
    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft -= 300; // Adjust scroll distance as needed
        }
    };
    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft += 300; // Adjust scroll distance as needed
        }
    };
    return (
        <div className="w-full flex flex-col items-center justify-center mt-10 space-y-4">
            <div className="w-[93vw] flex overflow-hidden scroll-smooth gap-4" ref={scrollRef}>
                {(data ?? [])?.map((item, index) => (
                    <div
                        className="flex flex-col md:min-w-[450px] min-w-[300px] border rounded-md p-4 bg-[#f4f8ff92] shadow"
                        key={item?.id}
                    >
                        <img className="h-20 w-20 rounded-md" src={item?.imgSrc} alt="" />
                        <h2 className="mt-4 text-xl font-medium">{item?.title}</h2>
                        <p className="font-extralight mt-3">{item?.desc}</p>
                    </div>
                ))}
            </div>

            {/* Buttons to scroll left and right */}
            <div className="w-full flex items-center md:justify-end justify-center mt-10 md:translate-y-10">
                <div className="flex space-x-4">
                    <button onClick={scrollLeft} className="h-12 w-12 border border-[#cecece7c] rounded-full bg-none transition-all hover:bg-gray-100">
                        ←
                    </button>
                    <button onClick={scrollRight} className="h-12 w-12  border border-[#cecece7c] bg-none rounded-full transition-all hover:bg-gray-100">
                        →
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CustomScroller;
