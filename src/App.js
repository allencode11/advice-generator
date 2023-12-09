import './App.css';
import btnImg from './assets/images/btn-img.png';

function App() {
  return (
    <div className='main'>
      <div className='card'>

        <div className='title'>ADVICE #117</div>

        <div className='content'>“It is easy to sit up and take notice, what's difficult is getting up and taking action.”</div>

        <div className='divider'>
          <div className='divider-line'></div>
          <div className='divider-par'>
            <div className='line'></div>
            <div className='line'></div>
          </div>
          <div className='divider-line'></div>
        </div>

        <div className='btn'>
          <img className='btn-img' alt='btn-img' src={btnImg}/>
        </div>
      </div>
    </div>
  );
}

export default App;
