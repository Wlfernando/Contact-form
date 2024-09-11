import { useRef } from "react";
import './TextArea.css'
import { checkValidity } from "../../utils/utils";

export default function TextArea({
  name,
  value,
  onChange,
}: {
  name: string;
  value: string;
  onChange(name: string, value: string): void;
}) {
  const textAreaRef = useRef<null | HTMLTextAreaElement>(null);

  return (
    <>
      <fieldset name={name} className="text-field" onBlur={checkValidity} >
        <label className="text-field__name" htmlFor={name} >{name}</label>
        <textarea 
          className="text-field__item"
          name={name}
          id={name}
          ref={textAreaRef}
          required
          value={value}
          onChange={({currentTarget: {name, value}}) => onChange(name, value)}
        />
        <p className="text-field__error form__field-error">{textAreaRef.current?.validationMessage}</p>
      </fieldset>
    </>
  )
}