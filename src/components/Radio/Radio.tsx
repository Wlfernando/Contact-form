import { useRef } from 'react';
import './Radio.css'
import { hasError } from '../../utils/const';
import { filterInvalid, checkValidity } from '../../utils/utils'

export default function Radio({
  name,
  options,
  onChange,
  value,
}:{
  name: string;
  options: readonly string[];
  onChange: Function;
  value: string;
}) {
  const radioRef = useRef<null | HTMLInputElement>(null);  

  return (
    <>
      <fieldset className="radio" name={name} onBlur={checkValidity} onClick={({ currentTarget }) => {!filterInvalid(currentTarget) && currentTarget.classList.remove(hasError)}} >
        <legend className='radio__name'>{name}</legend>
        {options.map(option => 
          <label className='radio__label' key={option} >
            <input 
              className='radio__input'
              type="radio" 
              value={option} 
              name={name} 
              onChange={({ currentTarget: { name, value }}) => onChange(name, value)}
              required
              checked={value === option}
              ref={radioRef}
            />
            <span>{option}</span>
          </label>
        )}
        <p className='radio__error form__field-error'>{radioRef.current?.validationMessage}</p>
      </fieldset>
    </>
  )
}
