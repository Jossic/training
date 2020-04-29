import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
    return (
        <div>
            <Header />
            {notes.map(not => (
                < Note
                    key={not.key}
                    title={not.title}
                    content={not.content}
                />
            ))}
            <Footer />
        </div>
    );
}



export default App;