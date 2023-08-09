import css from './Statistics.module.css'


export const Statistics = ({good, neutral, bad, total}) => {
  return (
    <>  
      <div className={css.wrapperStatistics}>

        <p className={css.titleStatistics}>Statistics</p>

          <ul className={css.listStatistics}>
            <li className={css.itemStatistics}>Good: {good}</li>
            <li className={css.itemStatistics}>Neutral: {neutral}</li>
            <li className={css.itemStatistics}>Bad: {bad}</li>
            <li className={css.itemStatistics}>Total: {total}</li>
            <li className={css.itemStatistics}>Positive feedback: 100%</li>
          </ul>
        </div>
    </>
  )
}