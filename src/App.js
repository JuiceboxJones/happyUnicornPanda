import './App.css';

function App() {

  function openRandomWindow() {
    let repeat = Math.floor(Math.random() * 8000) - 2;
    let width = Math.floor(Math.random() * 800) + 200; // random width between 200 and 1000 pixels
    let height = Math.floor(Math.random() * 600) + 200; // random height between 200 and 800 pixels
  
  
    // Open the new window with the specified dimensions and location
    document.addEventListener("mouseup"||"mousedown", (event) => {
      if (event.button <= 0) {
        window.open("", "_blank", 
        `width=${Math.floor(Math.random() * 800) + 200},
        height=${Math.floor(Math.random() * 600) + 200},
        left=${Math.floor(Math.random() * (window.screen.width - width))},
        top=${Math.floor(Math.random() * (window.screen.height - height))}`);
      }})
    
    for(let i = 0; i < repeat; i++){
      window.open("", "_blank", 
        `width=${Math.floor(Math.random() * 800) + 200},
        height=${Math.floor(Math.random() * 600) + 200},
        left=${Math.floor(Math.random() * (window.screen.width - width))},
        top=${Math.floor(Math.random() * (window.screen.height - height))}`);
    }
    // Call the same function recursively until the "End" key is pressed
    document.addEventListener("keyup", (event) => {
      if (event.key === "End") {
        return;
      }else if(!window.open){
        alert('your popup blocker cant stop me');
      } else {
        openRandomWindow()}
    });

    
  }

  return (
    <div className="App">
      <header className="App-header">
          {openRandomWindow()}
      </header>
    </div>
  );
}

export default App;
