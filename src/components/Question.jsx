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
                <h3 className='col-span-11 font-workSans font-bold'>{question.question}</h3>
                <button className='col-span-1 place-self-center' >
                    {
                        isShowingFaq ? <img src={minus} alt="" /> : <img src={plus} alt="" />
                    }
                </button>
            </div>
            {isShowingFaq && <p className='font-workSans font-normal'>{question.answer}</p>}
        </article>
    );
};

export default Question;
