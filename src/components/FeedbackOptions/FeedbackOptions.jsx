import css from './FeedbackOptions.module.css';


export const FeedbackOptions = ({goodCountBtn, neutralCountBtn, badCountBtn}) => {
  return (
    <>
    <h1 className={css.title}>Please leave feedback</h1>

    <div className={css.wrapperBtn}>
      <button type="button" className={css.btnReviews} onClick={goodCountBtn}>Good</button>
      <button type="button" className={css.btnReviews} onClick={neutralCountBtn}>Neutral</button>
      <button type="button" className={css.btnReviews} onClick={badCountBtn}>Bad</button>
    </div>
    </>
  )
}