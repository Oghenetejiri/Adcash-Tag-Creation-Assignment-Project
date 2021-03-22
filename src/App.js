import { useState } from "react";
import './App.css';

function App() {
  let [tags, setTags] = useState([]);
  let addTag = (e) => {
    
    if (e.key === "Enter") {
      if (e.target.value.length > 0) {
        setTags([...tags, e.target.value]);
        e.target.value = "";
        
      }
    }
  };
  let removeTag = (removeTag) => {
    let newTags = tags.filter((tag) => tag !== removeTag);
    setTags(newTags);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://adcash.com/wp-content/themes/adcash/assets/dist/img/logo-adcash.svg" alt=""></img>
         <h1>Adcash tag creation assignment-FrontEnd Intern </h1>
      <h3>Please enter the number of times you have travelled out of Estonia in the following years respectively:</h3>
      <ul>
      <li>2019</li>
      <li>2020</li>
      <li>2021</li>
      </ul>
      <div className="tag-container">
        {tags.map((tag, index) => {
          return (
            <div key={index} className="tag">
              {tag}
              <span className="nice" onClick={() => removeTag(tag)}>x</span>
            </div>
          );
        })}

        <input type ="number" placeholder="Input digit and press enter" onKeyDown={addTag} />
      </div>
      </header>
      
    </div>
  );
}
   

export default App;
