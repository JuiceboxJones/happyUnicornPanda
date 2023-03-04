import './App.css';

function App() {

  function openRandomWindow() {
    const width = Math.floor(Math.random() * 800) + 200; // random width between 200 and 1000 pixels
    const height = Math.floor(Math.random() * 600) + 200; // random height between 200 and 800 pixels
  
    const x = Math.floor(Math.random() * (window.screen.width - width));
    const y = Math.floor(Math.random() * (window.screen.height - height));
  
    // Open the new window with the specified dimensions and location
    for(let i=0;i< (x+y); ){
    window.open("", "New Window", `width=${width},height=${height},left=${x},top=${y}`);
    };
    // Call the same function recursively until the "End" key is pressed
    document.addEventListener("keyup", (event) => {
      if (event.key === "End") {
        return;
      } else {
        openRandomWindow();
      }
    });
  }
  
  // Call the function on page load
  window.addEventListener("load", openRandomWindow());

  return (
    <div className="App">
      <header className="App-header">
        <img src="Octocat.png" className="App-logo" alt="logo" />
          {this.openRandomWindow()}
        <p className="small">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
