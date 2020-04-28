import React from "react";
import Card from './Card';
import emojipedia from '../emojipedia';



function createCard(emo) {
  return (
    <Card
      key={emo.id}
      emoji={emo.emoji}
      name={emo.name}
      description={emo.meaning}
    />
  );
}


function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createCard)}</dl>
    </div>
  );
}

export default App;
