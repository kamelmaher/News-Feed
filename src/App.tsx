import "./App.css"
import Nav from "./components/Nav"
import NewsList from "./components/NewsList"
import AppContextProvider from "./context/AppContextProvider"

const App = () => {
  // top headlines Api  https://newsapi.org/v2/top-headliness?apiKey=4bffcaea9f6e47d5b4b4b39cee19dc8f
  // categories business entertainment general health science sports technology
  return (
    <AppContextProvider>
      <div className="container">
        <Nav />
        <NewsList />
      </div>
    </AppContextProvider>
  )
}

export default App
