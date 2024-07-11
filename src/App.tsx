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
      <ButtonComponent text="버튼1" />
      <ButtonComponent text="버튼2" />
      <ButtonComponent text="버튼3" />
      <Footer />
    </>
  )
}

export default App

