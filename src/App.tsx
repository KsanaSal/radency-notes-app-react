import "./App.css";
import ActiveNotes from "./notes/ActiveNotes";
import ArchivedNotes from "./notes/ArchivedNotes";
import SummeryNotes from "./notes/SummeryNotes";

function App() {

    return (
        <div className="flex flex-col gap-8 w-full">
            <ActiveNotes />
            <SummeryNotes />
            <ArchivedNotes />
        </div>
    );
}

export default App;
