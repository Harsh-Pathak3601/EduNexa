import React from 'react'
import HighlightText from '../HomePage/HighlightText'

const Quote = () => {
  return (
    <div className="font-serif italic text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal mx-auto py-4 sm:py-6 pb-12 sm:pb-20 text-center text-richblack-5 leading-relaxed tracking-wide">
        "We are passionate about revolutionizing the way we learn. Our
        innovative platform <HighlightText text={"combines technology"} />,{" "}
        <span className="bg-gradient-to-b from-[#FF512F] to-[#F09819] text-transparent bg-clip-text font-bold font-inter not-italic">
            expertise
        </span>
        , and community to create an{" "}
        <span className="bg-gradient-to-b from-[#E65C00] to-[#F9D423] text-transparent bg-clip-text font-bold font-inter not-italic">
            unparalleled educational experience.
        </span>"
    </div>
  )
}

export default Quote
