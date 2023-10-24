import { useState } from "react";
import { Magnetic } from "./components/ui";
import { Youtube } from "lucide-react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Magnetic>
          <Youtube className="w-10 h-10" />
      </Magnetic>
    </div>
  );
}

export default App;
