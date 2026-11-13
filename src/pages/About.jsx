import React from "react"

import FoundingStory from "../assets/Images/FoundingStory.png"
import BannerImage1 from "../assets/Images/aboutus1.webp"
import BannerImage2 from "../assets/Images/aboutus2.webp"
import BannerImage3 from "../assets/Images/aboutus3.webp"
import Footer from "../components/common/Footer"
import ReviewSlider from "../components/common/ReviewSlider"
import ContactFormSection from "../components/core/AboutPage/ContactFormSection"
import LearningGrid from "../components/core/AboutPage/LearningGrid"
import Quote from "../components/core/AboutPage/Quote"
import StatsComponenet from "../components/core/AboutPage/Stats"
import HighlightText from "../components/core/HomePage/HighlightText"

const About = () => {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Section 1: Hero Banner */}
      <section className="bg-richblack-700">
        <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white">
          <header className="mx-auto pt-14 pb-8 sm:py-20 text-2xl sm:text-3xl lg:text-4xl font-semibold lg:w-[70%]">
            <p className="font-dancing text-2xl sm:text-3xl text-yellow-50 font-bold mb-3 tracking-wide">
              Pioneering the Next Era of Learning
            </p>
            Driving Innovation in Online Education for a{" "}
            <HighlightText text={"Brighter Future"} />
            <p className="mx-auto mt-3 text-center text-sm sm:text-base font-medium text-richblack-300 lg:w-[95%]">
              Edunexa is at the forefront of driving innovation in online
              education. We're passionate about creating a brighter future by
              offering cutting-edge courses, leveraging emerging technologies,
              and nurturing a vibrant learning community.
            </p>
          </header>

          {/* Spacer to push section bottom down so images don't clip */}
          <div className="h-[40px] sm:h-[90px] lg:h-[160px]"></div>

          {/* Floating Banner Images */}
          <div className="absolute bottom-0 left-[50%] grid w-full translate-x-[-50%] translate-y-[30%] grid-cols-3 gap-2 sm:gap-4 lg:gap-6 px-1 sm:px-0">
            <img
              src={BannerImage1}
              alt="EduNexa Learning 1"
              className="h-[90px] sm:h-[180px] lg:h-[20rem] w-full object-cover rounded-md shadow-[0_0_20px_0_rgba(0,0,0,0.4)]"
            />
            <img
              src={BannerImage2}
              alt="EduNexa Learning 2"
              className="h-[90px] sm:h-[180px] lg:h-[20rem] w-full object-cover rounded-md shadow-[0_0_20px_0_rgba(0,0,0,0.4)]"
            />
            <img
              src={BannerImage3}
              alt="EduNexa Learning 3"
              className="h-[90px] sm:h-[180px] lg:h-[20rem] w-full object-cover rounded-md shadow-[0_0_20px_0_rgba(0,0,0,0.4)]"
            />
          </div>
        </div>
      </section>

      {/* Section 2: Quote */}
      <section className="border-b border-richblack-700">
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="h-[45px] sm:h-[90px] lg:h-[140px]"></div>
          <Quote />
        </div>
      </section>

      {/* Section 3: Founding Story, Vision & Mission */}
      <section>
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          {/* Founding Story */}
          <div className="flex flex-col items-center gap-8 sm:gap-10 lg:flex-row justify-between">
            <div className="my-8 sm:my-16 lg:my-24 flex w-full lg:w-[50%] flex-col gap-6 lg:gap-10">
              <div>
                <p className="font-satisfy text-xl text-yellow-50 mb-1">Our Journey</p>
                <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-3xl sm:text-4xl font-semibold text-transparent lg:w-[70%]">
                  Our Founding Story
                </h1>
              </div>
              <p className="text-sm sm:text-base font-medium text-richblack-300 lg:w-[95%]">
                Our e-learning platform was born out of a shared vision and
                passion for transforming education. It all began with a group of
                educators, technologists, and lifelong learners who recognized
                the need for accessible, flexible, and high-quality learning
                opportunities in a rapidly evolving digital world.
              </p>
              <p className="text-sm sm:text-base font-medium text-richblack-300 lg:w-[95%]">
                As experienced educators ourselves, we witnessed firsthand the
                limitations and challenges of traditional education systems. We
                believed that education should not be confined to the walls of a
                classroom or restricted by geographical boundaries. We
                envisioned a platform that could bridge these gaps and empower
                individuals from all walks of life to unlock their full
                potential.
              </p>
            </div>

            <div className="w-full max-w-[460px] lg:w-[45%] flex justify-center pb-6 lg:pb-0">
              <img
                src={FoundingStory}
                alt="Founding Story"
                className="w-full h-auto max-h-[400px] object-cover rounded-md shadow-[0_0_20px_0] shadow-[#FC6767]/40"
              />
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="flex flex-col items-center gap-8 lg:gap-16 lg:flex-row justify-between pb-10 sm:pb-16">
            <div className="flex w-full lg:w-[45%] flex-col gap-4 sm:gap-6">
              <div>
                <p className="font-kaushan text-base text-yellow-50 mb-1">Vision for Tomorrow</p>
                <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-3xl sm:text-4xl font-semibold text-transparent">
                  Our Vision
                </h1>
              </div>
              <p className="text-sm sm:text-base font-medium text-richblack-300 leading-relaxed">
                With this vision in mind, we set out on a journey to create an
                e-learning platform that would revolutionize the way people
                learn. Our team of dedicated experts worked tirelessly to
                develop a robust and intuitive platform that combines
                cutting-edge technology with engaging content, fostering a
                dynamic and interactive learning experience.
              </p>
            </div>
            <div className="flex w-full lg:w-[45%] flex-col gap-4 sm:gap-6">
              <div>
                <p className="font-dancing text-xl text-caribbeangreen-100 font-bold mb-1">Our Core Commitment</p>
                <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-3xl sm:text-4xl font-semibold">
                  Our Mission
                </h1>
              </div>
              <p className="text-sm sm:text-base font-medium text-richblack-300 leading-relaxed">
                Our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Stats */}
      <StatsComponenet />

      {/* Section 5: Learning Grid & Contact Us */}
      <section className="mx-auto mt-12 sm:mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-12 text-white">
        <LearningGrid />
        <ContactFormSection />
      </section>

      {/* Section 6: Reviews Slider */}
      <div className="relative mx-auto my-12 sm:my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        <h1 className="text-center text-3xl sm:text-4xl font-semibold mt-4 sm:mt-8">
          Reviews from other learners
        </h1>
        <ReviewSlider />
      </div>

      <Footer />
    </div>
  )
}

export default About
