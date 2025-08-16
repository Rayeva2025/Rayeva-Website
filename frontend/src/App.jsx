import BrandStandards from './components/BrandStandards'
import Goals from './components/Goals'
import CategorySlider from './components/Categories'
import './App.css'
import './index.css'

function App() {

  return (
    <>
      <h1 className="text-3xl font-bold text-red-300 bg-blue-700">Vite + React</h1>
      <Goals /> 
      <BrandStandards />
      <CategorySlider />
    </>
  )
}

export default App
