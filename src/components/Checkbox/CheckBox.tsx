import { useState } from 'react';
import './CheckBox.css'

export default function CheckBox({
  name,
  legend,
  checked,
  onChange,
}: {
  name: string;
  legend: string;
  checked: boolean;
  onChange(name: string, value: boolean): void
}) {
  const [error, setError] = useState<boolean>(false);

  function handleEvent({currentTarget: { name, checked, required }, type}: React.FocusEvent<HTMLInputElement, Element> | React.ChangeEvent<HTMLInputElement>) {
    setError(required ? (checked ? false : true) : false);    
    if(type === 'change') onChange(name, checked);
  }

  return (
    <>
      <label className={`checkbox${error ? ' field_has-error' : ''}`} >
        <input 
          name={name}
          className="checkbox__item"
          type="checkbox"
          required
          onChange={handleEvent}
          onFocus={handleEvent}
          checked={checked}
        />
        <span className="checkbox__name" >{legend}</span>
      </label>
      <p className='checkbox__error form__field-error'>To submit this form, please consent to being contacted</p>
    </>
  )
}