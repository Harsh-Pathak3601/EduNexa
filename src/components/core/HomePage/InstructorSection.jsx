import React from 'react'
import CTAButton from "../../../components/core/HomePage/Button";
import { FaArrowRight } from "react-icons/fa";
import Instructor from "../../../assets/Images/Instructor.png";
import HighlightText from './HighlightText';



const InstructorSection = () => {
  return (
    <div className='mt-16'>
  <div className='flex flex-col md:flex-row gap-10 md:gap-20 items-center'>
    
    {/* Image */}
    <div className='w-full md:w-[50%]'>
     <img
  src={Instructor}
  alt="Instructor"
  className="
    w-full 
    max-w-[320px] md:max-w-none
    aspect-square md:aspect-[4/3]
    object-cover
    shadow-white shadow-[-20px_-20px_0_0]
  "
/>
    </div>

    {/* Text */}
    <div className="w-full md:w-[50%] flex gap-6 md:gap-10 flex-col">
      <h1 className="text-3xl md:text-4xl font-semibold">
        Become an <HighlightText text={"instructor"} />
      </h1>

      <p className="font-medium text-[14px] md:text-[16px] text-justify text-richblack-300">
        Instructors from around the world teach millions of students on
        StudyNotion. We provide the tools and skills to teach what you love.
      </p>

      <div className="w-fit">
        <CTAButton active={true} linkto={"/signup"}>
          <div className="flex items-center gap-3">
            Start Teaching Today
            <FaArrowRight />
          </div>
        </CTAButton>
      </div>
    </div>

  </div>
</div>
  )
}

export default InstructorSection