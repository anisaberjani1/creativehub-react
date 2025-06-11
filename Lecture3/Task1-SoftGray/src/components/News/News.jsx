import NewsCard from '../NewsCard/NewsCard'
import './News.css'

const News = () => {
  return (
    <div className="news-content">
        <NewsCard/>
        <NewsCard/>
        <NewsCard/>
    </div>
  )
}

export default News