import { useState } from 'react';
import './App.css'
import ContactUs from './components/Contact-Us/ContactUs'
import Notification from './components/Notification/Notification';

function App() {
  const [reset, setReset] = useState(1);
  const [notification, setNotification] = useState<boolean>(false);

  return (
    <>
      <main className='main'>
        <ContactUs
          reset={() => setReset(1 + reset)}
          key={reset}
          send={() => setNotification(true)}
        />
        {notification && <Notification remove={() => setNotification(false)} />}
      </main>
      <footer className='footer'>
        <p className='footer__text'>Sound Effect from <a href="https://pixabay.com/sound-effects/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=6346">Pixabay</a></p>
        <p className='footer__text'>&copy; 2024. Fernando A. Malfavón</p>
      </footer>
    </>
  )
}

export default App
