import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt='' className='about-img'/>
            <img src={play_icon} alt='' className='play-icon'/>
        </div>
        <div className="about-right">
            <h3>ABOUT CAREER GOAL ACADEMY </h3>
            <h2>Nurturing Tomorrow's Leaders Today </h2>
            <p>At CAREER GOAL ACADEMY, we believe that true education goes beyond textbooks. Our mission is to empower students with knowledge, skills, and confidence to achieve academic excellence and succeed in every aspect of life.</p>

            <p>With a team of experienced faculty, well-structured study material, and a student-focused approach, we provide a supportive learning environment where every learner gets the attention they deserve. From personalized doubt-solving sessions to regular assessments, we ensure that each student understands concepts thoroughly and improves consistently.</p>

            <p>Over the years, we have helped hundreds of students excel in Competitive Exams/Board Exams, guiding them step by step towards their goals. Our commitment lies not only in teaching but also in mentoring students, instilling in them discipline, curiosity, and a positive mindset.</p>

        </div>

    </div>
  )
}

export default About