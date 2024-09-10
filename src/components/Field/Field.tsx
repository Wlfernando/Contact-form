import { useRef } from 'react';
import './Field.css'

export default function Field({
  name,
  type = 'text',
  value,
  onChange: handleChange,
}: {
  name: string;
  type?: string;
  value: string;
  onChange(name: string, value: string): void;
}) {
  const inputRef = useRef<null | HTMLInputElement>(null);

  function onChange({currentTarget: {name, value}}: React.ChangeEvent<HTMLInputElement>) {
    handleChange(name, value)
  }

  return (
    <>
      <label className="field">
        <span className='field__name' >{name}</span>
        <input {...{
          name,
          type,
          value,
          onChange,
          }}
          className='field__item'
          required
          autoComplete="off"
          ref={inputRef}
        />
        <span className='field__error'>{inputRef.current?.validationMessage}</span>
      </label>
    </>
  )
}