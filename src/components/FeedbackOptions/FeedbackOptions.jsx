import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
  return (
    <>
    <ul className={css.wrapperBtn}>

    {options.map((option, index) => (
      
      <li className={css.btnItem} key={index}>
        <button id={option} onClick={onLeaveFeedback} className={css.btnReviews}>{option}</button>
      </li>

    ))}
      
    </ul>
    </>
  )
}






