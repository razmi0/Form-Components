declare const InputTextComponent: {
    new (element: HTMLElement | string): {
        regexInput: RegExp;
        updatedFormHTML: Promise<string>;
        element: HTMLElement | string;
        newFormHTML: string;
        "__#1@#updateFormHTML": () => Promise<string>;
        "__#1@#render"(): void;
    };
};
export default InputTextComponent;
