import { HookForm1 } from "./hook-forms/HookForm1"
import { Route, Routes} from "react-router-dom";
import { HookForm2 } from "./hook-forms/HookForm2/HookForm2";
import { HookForm3 } from "./hook-forms/HookForm3/HookForm3";
function App() {

  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<HookForm1 />} />
        <Route path="/hook-form-2" element={<HookForm2 />} />
        <Route path="/hook-form-3" element={<HookForm3 />} />
      </Routes>
    </div>
  )
}

export default App
