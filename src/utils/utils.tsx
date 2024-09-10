import { hasError } from './const'

export function filterInvalid({ elements }: HTMLFieldSetElement) {
  return Array.from(elements).some(e => e instanceof HTMLInputElement && !e.validity.valid)
}

export function checkValidity({currentTarget: target}: React.FocusEvent<HTMLFieldSetElement, Element>) {
  filterInvalid(target) ?
    target.classList.add(hasError) :
    target.classList.remove(hasError)
}
