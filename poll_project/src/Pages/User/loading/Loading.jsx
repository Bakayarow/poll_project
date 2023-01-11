import './style.css';

function Loading() {
  return (
    <div className="App-loading">
      <div className="loading">
        <div className='loading-infos'>
          <h2>Veuillez patienter.</h2>
          <p>En attente des autres<br></br>participants...</p>
        </div>
      </div>
    </div>
    
  );
}

export default Loading;
