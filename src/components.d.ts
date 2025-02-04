/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AboutPage {
    }
    interface AddQuiz {
    }
    interface AppRoot {
    }
    interface HomePage {
    }
    interface MainComponent {
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLAboutPageElement extends Components.AboutPage, HTMLStencilElement {
    }
    var HTMLAboutPageElement: {
        prototype: HTMLAboutPageElement;
        new (): HTMLAboutPageElement;
    };
    interface HTMLAddQuizElement extends Components.AddQuiz, HTMLStencilElement {
    }
    var HTMLAddQuizElement: {
        prototype: HTMLAddQuizElement;
        new (): HTMLAddQuizElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLHomePageElement extends Components.HomePage, HTMLStencilElement {
    }
    var HTMLHomePageElement: {
        prototype: HTMLHomePageElement;
        new (): HTMLHomePageElement;
    };
    interface HTMLMainComponentElement extends Components.MainComponent, HTMLStencilElement {
    }
    var HTMLMainComponentElement: {
        prototype: HTMLMainComponentElement;
        new (): HTMLMainComponentElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "about-page": HTMLAboutPageElement;
        "add-quiz": HTMLAddQuizElement;
        "app-root": HTMLAppRootElement;
        "home-page": HTMLHomePageElement;
        "main-component": HTMLMainComponentElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface AboutPage {
    }
    interface AddQuiz {
    }
    interface AppRoot {
    }
    interface HomePage {
    }
    interface MainComponent {
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "about-page": AboutPage;
        "add-quiz": AddQuiz;
        "app-root": AppRoot;
        "home-page": HomePage;
        "main-component": MainComponent;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "about-page": LocalJSX.AboutPage & JSXBase.HTMLAttributes<HTMLAboutPageElement>;
            "add-quiz": LocalJSX.AddQuiz & JSXBase.HTMLAttributes<HTMLAddQuizElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "home-page": LocalJSX.HomePage & JSXBase.HTMLAttributes<HTMLHomePageElement>;
            "main-component": LocalJSX.MainComponent & JSXBase.HTMLAttributes<HTMLMainComponentElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
