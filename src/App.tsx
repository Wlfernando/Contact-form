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
    </>
  )
}

export default App
