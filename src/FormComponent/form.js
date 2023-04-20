//---------Form Component----------------//
//@ts-check

import noMiddleware from "../middleware.js";
import InputTextComponent from "./TextComponent/input.js";



/**
 * @class FormComponent
 * @param {HTMLElement} element 
 */

const FormComponent = class Form {
  constructor(element) {
    this.element = document.querySelector(element);
    new InputTextComponent(this.element);

  }

  #getTemplate = async() => {
    const resp = await fetch("./src/FormComponent/form.html")
    .then((resp) => resp.text());
    return noMiddleware(resp);
  }
  render = async() => {
    this.element.innerHTML = await this.#getTemplate();
  }
};

export default FormComponent;
