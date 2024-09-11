import { useState } from "react";
import Field from "../Field/Field";
import Form from "../Form/Form";
import Radio from "../Radio/Radio";
import TextArea from "../TextArea/TextArea";
import './ContactUs.css'
import CheckBox from "../Checkbox/CheckBox";

const fields = ['First Name', 'Last Name', 'Email Address', 'Query Type', 'Message', 'contact'] as const;
const [fName, lName, email, qType, message, contact] = fields;
const queryOptions = ['General Enquiry', 'Support Request'] as const;

interface ContactUsForm {
  [fName]: string;
  [lName]: string;
  [email]: string;
  [qType]: typeof queryOptions[number] | '';
  [message]: string;
  [contact]: boolean;
}

const emptyFields = fields.slice(0, 5).map(f => [f, ''])
const emptyForm: ContactUsForm = Object.assign(Object.fromEntries(emptyFields), {[contact]: false})

export default function ContactUs({
  reset,
  send,
}: {
  reset: Function;
  send: Function;
}) {
  const [form, setForm] = useState(emptyForm);

  function retrieveValue(name: string, value: string | boolean) {
    setForm(form => ({...form, [name]: value}))
  }

  function onsubmit() {
    send()
    reset()
  }

  return (
    <>
      <Form className="contact-us" onSubmit={onsubmit}>
        <h1 className="contact-us__title">Contact Us</h1>
        <Field name={fName} value={form[fName]} onChange={retrieveValue} />
        <Field name={lName} value={form[lName]} onChange={retrieveValue} />
        <Field name={email} value={form[email]} type="email" onChange={retrieveValue} />
        <Radio name={qType} options={queryOptions} onChange={retrieveValue} value={form[qType]} />
        <TextArea name={message} value={form[message]} onChange={retrieveValue} />
        <CheckBox name={contact} legend={'I consent to being contacted by the team'} checked={form[contact]} onChange={retrieveValue} />
        <button className="contact-us__button">Submit</button>
      </Form>
    </>
  )
}
