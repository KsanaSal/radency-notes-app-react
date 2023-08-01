// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import ActiveNotes from "./components/ActiveNotes";
import ArchivedNotes from "./components/ArchivedNotes";
import SummeryNotes from "./components/SummeryNotes";

function App() {
    // const [count, setCount] = useState(0)

    return (
        <div>
            <ActiveNotes />
            <SummeryNotes />
            <ArchivedNotes />
        </div>
    );
}

export default App;
