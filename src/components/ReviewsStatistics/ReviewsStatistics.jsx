import React, {Component} from "react";
import css from './ReviewsStatistics.module.css';

class ReviewsStatistics extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  render () {
    return (
      <>
      <h1 className={css.title}>Please leave feedback</h1>

      <div className={css.wrapperBtn}>
        <button type="button" className={css.btnReviews}>Good</button>
        <button type="button" className={css.btnReviews}>Neutral</button>
        <button type="button" className={css.btnReviews}>Bad</button>
      </div>

      <div className={css.wrapperStatistics}>

      <p className={css.titleStatistics}>Statistics</p>

        <ul className={css.listStatistics}>
          <li className={css.itemStatistics}>Good: </li>
          <li className={css.itemStatistics}>Neutral: </li>
          <li className={css.itemStatistics}>Bad: </li>
        </ul>
      </div>

      </>
    )
  }
}

export default ReviewsStatistics;