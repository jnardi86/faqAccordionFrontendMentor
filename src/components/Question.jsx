import plus from '../assets/images/icon-plus.svg';
import minus from '../assets/images/icon-minus.svg';
import { useState } from 'react'

const Question = ({ question }) => {

    const [isShowingFaq, setIsShowingFaq] = useState(false);

    const toggleShow = () => {
        setIsShowingFaq(!isShowingFaq);

    }

    return (
        <article onClick={toggleShow}>
            <div className='grid grid-cols-12'>
                <h3 className='col-span-11 font-workSans font-bold py-5 text-lg cursor-pointer hover:text-Grayish-purple'>{question.question}</h3>
                <button className='col-span-1 place-self-center' >
                    {
                        isShowingFaq ? <img src={minus} alt="minus-icon" /> : <img src={plus} alt="plus-icon" />
                    }
                </button>
            </div>
            {isShowingFaq && <p className='font-workSans font-normal text-sm text-left lg:text-lg'>{question.answer}</p>}
        </article>
    );
};

export default Question;
