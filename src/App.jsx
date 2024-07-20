import { Main, Navigator, Sidebar } from "./layout/index"
import { useGlobalContext } from "./context/context"
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Men from "./layout/Men"
function App() {
  const { state } = useGlobalContext()

  return (
    <BrowserRouter>
    <div className="App">
      <Navigator />
        <Sidebar isShowing={state.showSidebar} />
      
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/men" element={<Men/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
