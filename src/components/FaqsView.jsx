import patternMobile from '../assets/images/background-pattern-mobile.svg'
import patternDesktop from '../assets/images/background-pattern-desktop.svg'
import iconStar from '../assets/images/icon-star.svg'
import { questionFaq } from './questionFaq.js'
import Question from './Question.jsx'
import Attribution from './Attribution.jsx'


const FaqsView = () => {


  return (
    <section className='min-h-screen relative bg-Light-pink'>
      <div>
        <picture>
          <source srcset={patternDesktop} media="(min-width: 600px)" />
          <img src={patternMobile} alt="Pattern Mobile" className='w-full min-w-full' />
        </picture>
      </div>
      <div className=' faq-container bg-White rounded-md shadow-2xl mx-5 p-5 relative -mt-32 z-50  tablet:max-w-[600px] tablet:mx-auto'>
        <div className='flex gap-7 my-5 items-center lg:gap-4'>
          <img className='w-5 h-5 lg:w-10 lg:h-10' src={iconStar} alt="Star" />
          <h2 className='font-workSans font-bold text-3xl lg:text-5xl'>FAQs</h2>
        </div>
        <div>
          {
            questionFaq.map((question, index) => (
              <Question
                question={question}
                key={index}
              />
            ))
          }
        </div>
      </div>

        <Attribution />

    </section>
  )
}

export default FaqsView