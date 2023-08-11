import css from './FeedbackOptions.module.css';



export const Section = ({title, children}) => {
  return (
    <>
      {title && <h1 className={css.title}>{title}</h1>}
      {children}
    </>
  )
}

export const FeedbackOptions = ({options}) => {
  return (
    <>
    <ul className={css.wrapperBtn}>

    {options.map((option, index) => (
      
      <li className={css.btnItem} key={index}>
        <button className={css.btnReviews}>{option}</button>
      </li>

    ))}
      
    </ul>
    </>
  )
}






