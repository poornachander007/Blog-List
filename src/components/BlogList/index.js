// Write your JS code here
import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props
  return (
    <ul className="ul_container">
      {blogsList.map(eachBlogItem => (
        <BlogItem key={eachBlogItem.id} details={eachBlogItem} />
      ))}
    </ul>
  )
}

export default BlogList
