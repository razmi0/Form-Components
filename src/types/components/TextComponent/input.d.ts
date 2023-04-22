declare const InputTextComponent: {
    new (element: HTMLElement | string): {
        regexInput: RegExp;
        updatedFormHTML: Promise<string>;
        element: HTMLElement | string;
        newFormHTML: string;
        "__#24735@#updateFormHTML": () => Promise<string>;
        "__#24735@#render"(): void;
    };
};
export default InputTextComponent;
//# sourceMappingURL=input.d.ts.map