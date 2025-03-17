import SingleNew from "./SingleNew"
import { useData } from "../hooks/useData"
import Loading from "./Loading"
import PaginationComponent from "./Paginiation"

const NewsList = () => {
    const { articles, isLoading } = useData()
    return (
        <div className=" article">
            {
                !isLoading ?
                    articles &&
                    <>
                        {
                            articles.length > 0 ?
                                <>
                                    {
                                        articles.map((article, i) => <SingleNew key={i} article={article} />)
                                    }
                                </>
                                : <h3 className="feed-back">There is No Data</h3>
                        }
                        <PaginationComponent />
                    </>
                    : <Loading />
            }
        </div>
    )
}

export default NewsList
