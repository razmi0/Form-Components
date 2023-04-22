//---------Form Component----------------//


import { getHTMLFile } from "@Utils/utils";
import InputTextComponent from "@TextComponents/input";




const FormComponent = class Form {
  path : string;
  HTMLEl : HTMLElement;
  constructor(element : string = "#form") {
    this.path = "./src/FormComponent/form.html";
    const HTMLAnchor = document.querySelector(element);
    this.HTMLEl = HTMLAnchor as HTMLElement;
    new InputTextComponent(this.HTMLEl);
  }
  

  render = async() => {
    this.HTMLEl.innerHTML = await getHTMLFile(this.path);
  }

};

export default FormComponent;
