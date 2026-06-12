import './App.css'
import { UpperComp } from './Components/UpperComp'
import { FileManager } from './Components/FileManager'
function App() {

  return (
    <>
      <div className="bg-black h-screen w-full">
        <UpperComp></UpperComp>
        <FileManager></FileManager>
      </div >
    </>
  )
}

export default App
