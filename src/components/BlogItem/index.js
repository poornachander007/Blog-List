// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {details} = props
  const {id, title, description, publishedDate} = details

  return (
    <li className="li_container">
      <div className="titleAndTime_container">
        <h1 className="title">{title}</h1>
        <p className="publishedDate">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
    </li>
  )
}

export default BlogItem
