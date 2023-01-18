import './styles/global.css';

import { Habit } from "./components/Habit"

function App() {

  return (
    <div>
      <Habit completed={4} />
      <Habit completed={12} />
      <Habit completed={15} />
      <Habit completed={21} />
    </div>
  )
}

export default App
