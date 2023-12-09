import './App.css';
import btnImg from './assets/images/btn-img.png';
import { useState } from 'react';

function App() {
  const [adviceId, setAdviceId] = useState(117);
  const [advice, setAdvice] = useState('“It is easy to sit up and take notice, what\'s difficult is getting up and taking action.”');

  const newAdvice = async () => {
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setAdviceId(result.slip.id);
      setAdvice(result.slip.advice);
    } catch (error) {

    }
  }


  return (
    <div className='main'>
      <div className='card'>

        <div className='title'>ADVICE #{adviceId}</div>

        <div className='content'>{advice}</div>

        <div className='divider'>
          <div className='divider-line'></div>
          <div className='divider-par'>
            <div className='line'></div>
            <div className='line'></div>
          </div>
          <div className='divider-line'></div>
        </div>

        <div className='btn' onClick={newAdvice}>
          <img className='btn-img' alt='btn-img' src={btnImg}/>
        </div>
      </div>
    </div>
  );
}

export default App;
