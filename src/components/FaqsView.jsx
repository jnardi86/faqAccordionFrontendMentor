import patternMobile from '../assets/images/background-pattern-mobile.svg'
import patternDesktop from '../assets/images/background-pattern-desktop.svg'
import iconStar from '../assets/images/icon-star.svg'
import { questionFaq } from './questionFaq.js'
import Question from './Question.jsx'


const FaqsView = () => {

  
 
  return (
    <section className="bg-Light-pink w-screen h-screen max-w-[375px] sm:max-w-[1440px] mx-auto relative"> 
    <picture>
        <source media='(max-width:639px)' srcSet={patternMobile} />
        <source media='(min-width:640px)' srcSet={patternDesktop}/>
        <img src={patternMobile} alt="Services Image" />
    </picture>
    <div className='bg-White absolute rounded-md w-80 left-0 right-0 mx-auto top-36 px-4'>
        <div className='flex gap-7 my-5 items-center'>
            <img className=' w-5 h-5' src={iconStar} alt="Star" />
            <h2 className='font-workSans font-bold text-3xl'>FAQs</h2>
        </div>
        <div>
            {
               questionFaq.map((question, index) =>(
                 <Question
                   question={question}
                   key={index}
                 />   
               )) 
            }
        </div>
    </div>

    </section>
  )
}

export default FaqsView