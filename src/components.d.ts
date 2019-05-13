/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface MyComponent {
    /**
    * The first name
    */
    'first': string;
    /**
    * The last name
    */
    'last': string;
    /**
    * The middle name
    */
    'middle': string;
  }
  interface MyComponentAttributes extends StencilHTMLAttributes {
    /**
    * The first name
    */
    'first'?: string;
    /**
    * The last name
    */
    'last'?: string;
    /**
    * The middle name
    */
    'middle'?: string;
  }

  interface TestButton {
    /**
    * A test prop
    */
    'test': string;
  }
  interface TestButtonAttributes extends StencilHTMLAttributes {
    /**
    * A test prop
    */
    'test'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'MyComponent': Components.MyComponent;
    'TestButton': Components.TestButton;
  }

  interface StencilIntrinsicElements {
    'my-component': Components.MyComponentAttributes;
    'test-button': Components.TestButtonAttributes;
  }


  interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };

  interface HTMLTestButtonElement extends Components.TestButton, HTMLStencilElement {}
  var HTMLTestButtonElement: {
    prototype: HTMLTestButtonElement;
    new (): HTMLTestButtonElement;
  };

  interface HTMLElementTagNameMap {
    'my-component': HTMLMyComponentElement
    'test-button': HTMLTestButtonElement
  }

  interface ElementTagNameMap {
    'my-component': HTMLMyComponentElement;
    'test-button': HTMLTestButtonElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
