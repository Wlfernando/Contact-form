import audioSuccess from '../../assets/short-success-sound-glockenspiel-treasure-video-game-6346.mp3'
import check from '../../assets/icon-success-check.svg'
import './Notification.css'
import { useEffect, useRef } from 'react'

export default function Notification({
  remove,
}: {
  remove: Function;
}) {
  const popupRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    const popup = popupRef.current!
    const listen = () => remove()

    popup.addEventListener('animationend', listen, {once: true})
  }, [])

  return (
    <>
      <aside className='notification' ref={popupRef} >
        <audio src={audioSuccess} autoPlay />
        <hgroup className='notification__hgroup' >
          <img src={check} alt="check" />
          <h3 className='notification__tittle'>Message Send!</h3>
        </hgroup>
        <p className='notification__mssg' >Thanks for completing the form. We'll be in touch soon!</p>
      </aside>
    </>
  )
}
