// INPUT TEXT COMPONENT
//@ts-check

import noMiddleware from "../../middleware.js";

const InputTextComponent = class InputText {
  constructor(element) {
    this.regexInput = /<inputTextComponent><\/inputTextComponent>/g;
    this.updatedFormHTML = this.#updateFormHTML();
    this.element = element;
    //
    // We have to wait for the updatedFormHTML to be resolved before we can render the new form
    //
    Promise.all([this.updatedFormHTML]).then((res) => {
      this.newFormHTML = res[0];
      this.#render();
    });
  }

  #updateFormHTML = async () => {
    //
    // FETCH ALL THE INPUT.HTML CONTENT AS STRING
    //
    const inputStr = await this.#getInputTemplate();
    //
    // FETCH ALL THE FORM.HTML CONTENT AS STRING
    //
    const formStr = await this.#getFormHTML();
    //
    // REPLACE <inputTextComponent></inputTextComponent> WITH THE INPUT.HTML CONTENT
    //
    return formStr.replace(this.regexInput, inputStr);
  };

  #getFormHTML = async () => {
    const htmlStr = await fetch("./src/FormComponent/form.html").then(
      (htmlStr) => htmlStr.text()
    );
    return noMiddleware(htmlStr);
  };

  #getInputTemplate = async () => {
    const htmlStr = await fetch(
      "./src/FormComponent/TextComponent/input.html"
    ).then((htmlStr) => htmlStr.text());
    return noMiddleware(htmlStr);
  };

  #render() {
    this.element.innerHTML = this.newFormHTML;
  }
};

export default InputTextComponent;
