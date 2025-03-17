import { NewType } from "../types/NewType"
type SingleNewProps = {
    article: NewType
}
const SingleNew = ({ article }: SingleNewProps) => {
    return (
        <a href={article.url} target="_blank" className="p-2 d-md-flex d-block border mb-2">
            <div style={{ minWidth: "150px", maxWidth: "200px", maxHeight: "150px" }} className="m-auto mb-3 mb-md-0 ">
                <img src={article.urlToImage} alt="" loading="lazy" />
            </div>
            <div className="ps-2 d-flex flex-column justify-content-around">
                <div>
                    <p className="mb-2 text-heading">{article.title}</p>
                </div>
                <div style={{ fontSize: "14px" }}>
                    <p>{article.author && `Author: ${article.author}`}</p>
                    <p>Date: {article.publishedAt.split("T")[0]}</p>
                </div>
            </div>
        </a>
    )
}

export default SingleNew
