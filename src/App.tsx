import './App.scss'
import Header from './components/HeaderComponent'
import Footer from './components/FooterComponent'
import MainContent from './components/MainContentComponent'
import ButtonComponent from './components/ButtonComponent'

function App() {

  return (
    <>
      <Header />
      <MainContent />
      <ButtonComponent text={"메일"} color={"red"} />
      <ButtonComponent text={"카페"} color={"blue"} />
      <ButtonComponent text={"블로그"} color={"green"} >
        <div>블로그 칠드런</div>  
      </ButtonComponent>
      <Footer />
    </>
  )
}

export default App

