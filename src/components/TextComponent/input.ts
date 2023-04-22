// INPUT TEXT COMPONENT


import { getHTMLFile } from "@Utils/utils";


const InputTextComponent = class InputText {

  regexInput : RegExp = /<inputTextComponent><\/inputTextComponent>/g;
  updatedFormHTML : Promise<string>;
  element : HTMLElement | string;
  newFormHTML : string = "";

  constructor(element : HTMLElement | string) {
    this.updatedFormHTML = this.#updateFormHTML();
    this.element = element;

    Promise.all([this.updatedFormHTML]).then((res) => {
      this.newFormHTML = res[0];
      this.#render();
    });
  }

  #updateFormHTML = async () => {

    const inputStr = await getHTMLFile("./src/TextComponent/input.html");
    const formStr = await getHTMLFile("./src/FormComponent/form.html");
    return formStr.replace(this.regexInput, inputStr);
  };

  #render() {
    if(typeof this.element === "string") {
      throw new Error("Element is type string");
    }
    this.element.innerHTML = this.newFormHTML;
  }
};

export default InputTextComponent;
