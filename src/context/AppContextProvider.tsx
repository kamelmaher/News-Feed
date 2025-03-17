import { ReactNode, useEffect, useState } from "react"
import { AppContext } from "../hooks/useData"
import { NewType } from "../types/NewType"
type AppContextProvider = {
    children: ReactNode
}
const AppContextProvider = ({ children }: AppContextProvider) => {
    const [articles, setArticles] = useState<NewType[]>([])
    const [searchTerm, setSearchTerm] = useState("")
    const [topic, setTopic] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [pageNumber, setPageNumber] = useState(1)
    const handleSearchTerm = (e: string) => {
        setSearchTerm(e)
    }
    const handleChangeTopic = (e: string) => {
        setTopic(e)
    }
    const handleChangePageNumbaer = (page: number) => {
        setPageNumber(page)
    }
    useEffect(() => {
        setIsLoading(true)
        fetch(`https://newsapi.org/v2/top-headlines?page=${pageNumber}&pageSize=10&${searchTerm && `q=${searchTerm}&`}category=${topic ? topic : "general"}&apiKey=4bffcaea9f6e47d5b4b4b39cee19dc8f`).then(response => response.json()).then((data: { articles: NewType[] }) => {
            setArticles(data.articles)
        }).catch(err => { throw new Error(err.message) })
            .finally(() => { setIsLoading(false) })

    }, [searchTerm, topic, pageNumber])
    return (
        <AppContext.Provider value={{ searchTerm, handleSearchTerm, topic, handleChangeTopic, articles, isLoading, pageNumber, handleChangePageNumbaer }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider
