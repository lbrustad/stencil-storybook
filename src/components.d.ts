/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface MyArticle {}
  interface MyArticleAttributes extends StencilHTMLAttributes {}

  interface MyBuild {}
  interface MyBuildAttributes extends StencilHTMLAttributes {}

  interface MyStrammaOppArticle {}
  interface MyStrammaOppArticleAttributes extends StencilHTMLAttributes {}

  interface VnButton {
    'bold': string;
    'boxSize': string;
    /**
    * A test prop
    */
    'color': string;
    'href': string;
  }
  interface VnButtonAttributes extends StencilHTMLAttributes {
    'bold'?: string;
    'boxSize'?: string;
    /**
    * A test prop
    */
    'color'?: string;
    'href'?: string;
  }

  interface VnColorBlock {
    'bg': string;
    'p': string;
    'pl': string;
    'pt': string;
    'type': string;
  }
  interface VnColorBlockAttributes extends StencilHTMLAttributes {
    'bg'?: string;
    'p'?: string;
    'pl'?: string;
    'pt'?: string;
    'type'?: string;
  }

  interface VnContentLabel {
    'boxSize': string;
    /**
    * A test prop
    */
    'color': string;
  }
  interface VnContentLabelAttributes extends StencilHTMLAttributes {
    'boxSize'?: string;
    /**
    * A test prop
    */
    'color'?: string;
  }

  interface VnContentTitle {
    /**
    * A test prop
    */
    'test': string;
    'title': string;
  }
  interface VnContentTitleAttributes extends StencilHTMLAttributes {
    /**
    * A test prop
    */
    'test'?: string;
    'title'?: string;
  }

  interface VnContent {
    /**
    * A test prop
    */
    'test': string;
  }
  interface VnContentAttributes extends StencilHTMLAttributes {
    /**
    * A test prop
    */
    'test'?: string;
  }

  interface VnGrid {
    'nums': string;
  }
  interface VnGridAttributes extends StencilHTMLAttributes {
    'nums'?: string;
  }

  interface VnHeader {
    /**
    * A test prop
    */
    'size': string;
  }
  interface VnHeaderAttributes extends StencilHTMLAttributes {
    /**
    * A test prop
    */
    'size'?: string;
  }

  interface VnLenker {
    'hasHover': string;
    'href': string;
    /**
    * A test prop
    */
    'text': string;
  }
  interface VnLenkerAttributes extends StencilHTMLAttributes {
    'hasHover'?: string;
    'href'?: string;
    /**
    * A test prop
    */
    'text': string;
  }

  interface VnSecondaryHeader {}
  interface VnSecondaryHeaderAttributes extends StencilHTMLAttributes {}

  interface VnText {
    /**
    * A test prop
    */
    'type': string;
  }
  interface VnTextAttributes extends StencilHTMLAttributes {
    /**
    * A test prop
    */
    'type'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'MyArticle': Components.MyArticle;
    'MyBuild': Components.MyBuild;
    'MyStrammaOppArticle': Components.MyStrammaOppArticle;
    'VnButton': Components.VnButton;
    'VnColorBlock': Components.VnColorBlock;
    'VnContentLabel': Components.VnContentLabel;
    'VnContentTitle': Components.VnContentTitle;
    'VnContent': Components.VnContent;
    'VnGrid': Components.VnGrid;
    'VnHeader': Components.VnHeader;
    'VnLenker': Components.VnLenker;
    'VnSecondaryHeader': Components.VnSecondaryHeader;
    'VnText': Components.VnText;
  }

  interface StencilIntrinsicElements {
    'my-article': Components.MyArticleAttributes;
    'my-build': Components.MyBuildAttributes;
    'my-stramma-opp-article': Components.MyStrammaOppArticleAttributes;
    'vn-button': Components.VnButtonAttributes;
    'vn-color-block': Components.VnColorBlockAttributes;
    'vn-content-label': Components.VnContentLabelAttributes;
    'vn-content-title': Components.VnContentTitleAttributes;
    'vn-content': Components.VnContentAttributes;
    'vn-grid': Components.VnGridAttributes;
    'vn-header': Components.VnHeaderAttributes;
    'vn-lenker': Components.VnLenkerAttributes;
    'vn-secondary-header': Components.VnSecondaryHeaderAttributes;
    'vn-text': Components.VnTextAttributes;
  }


  interface HTMLMyArticleElement extends Components.MyArticle, HTMLStencilElement {}
  var HTMLMyArticleElement: {
    prototype: HTMLMyArticleElement;
    new (): HTMLMyArticleElement;
  };

  interface HTMLMyBuildElement extends Components.MyBuild, HTMLStencilElement {}
  var HTMLMyBuildElement: {
    prototype: HTMLMyBuildElement;
    new (): HTMLMyBuildElement;
  };

  interface HTMLMyStrammaOppArticleElement extends Components.MyStrammaOppArticle, HTMLStencilElement {}
  var HTMLMyStrammaOppArticleElement: {
    prototype: HTMLMyStrammaOppArticleElement;
    new (): HTMLMyStrammaOppArticleElement;
  };

  interface HTMLVnButtonElement extends Components.VnButton, HTMLStencilElement {}
  var HTMLVnButtonElement: {
    prototype: HTMLVnButtonElement;
    new (): HTMLVnButtonElement;
  };

  interface HTMLVnColorBlockElement extends Components.VnColorBlock, HTMLStencilElement {}
  var HTMLVnColorBlockElement: {
    prototype: HTMLVnColorBlockElement;
    new (): HTMLVnColorBlockElement;
  };

  interface HTMLVnContentLabelElement extends Components.VnContentLabel, HTMLStencilElement {}
  var HTMLVnContentLabelElement: {
    prototype: HTMLVnContentLabelElement;
    new (): HTMLVnContentLabelElement;
  };

  interface HTMLVnContentTitleElement extends Components.VnContentTitle, HTMLStencilElement {}
  var HTMLVnContentTitleElement: {
    prototype: HTMLVnContentTitleElement;
    new (): HTMLVnContentTitleElement;
  };

  interface HTMLVnContentElement extends Components.VnContent, HTMLStencilElement {}
  var HTMLVnContentElement: {
    prototype: HTMLVnContentElement;
    new (): HTMLVnContentElement;
  };

  interface HTMLVnGridElement extends Components.VnGrid, HTMLStencilElement {}
  var HTMLVnGridElement: {
    prototype: HTMLVnGridElement;
    new (): HTMLVnGridElement;
  };

  interface HTMLVnHeaderElement extends Components.VnHeader, HTMLStencilElement {}
  var HTMLVnHeaderElement: {
    prototype: HTMLVnHeaderElement;
    new (): HTMLVnHeaderElement;
  };

  interface HTMLVnLenkerElement extends Components.VnLenker, HTMLStencilElement {}
  var HTMLVnLenkerElement: {
    prototype: HTMLVnLenkerElement;
    new (): HTMLVnLenkerElement;
  };

  interface HTMLVnSecondaryHeaderElement extends Components.VnSecondaryHeader, HTMLStencilElement {}
  var HTMLVnSecondaryHeaderElement: {
    prototype: HTMLVnSecondaryHeaderElement;
    new (): HTMLVnSecondaryHeaderElement;
  };

  interface HTMLVnTextElement extends Components.VnText, HTMLStencilElement {}
  var HTMLVnTextElement: {
    prototype: HTMLVnTextElement;
    new (): HTMLVnTextElement;
  };

  interface HTMLElementTagNameMap {
    'my-article': HTMLMyArticleElement
    'my-build': HTMLMyBuildElement
    'my-stramma-opp-article': HTMLMyStrammaOppArticleElement
    'vn-button': HTMLVnButtonElement
    'vn-color-block': HTMLVnColorBlockElement
    'vn-content-label': HTMLVnContentLabelElement
    'vn-content-title': HTMLVnContentTitleElement
    'vn-content': HTMLVnContentElement
    'vn-grid': HTMLVnGridElement
    'vn-header': HTMLVnHeaderElement
    'vn-lenker': HTMLVnLenkerElement
    'vn-secondary-header': HTMLVnSecondaryHeaderElement
    'vn-text': HTMLVnTextElement
  }

  interface ElementTagNameMap {
    'my-article': HTMLMyArticleElement;
    'my-build': HTMLMyBuildElement;
    'my-stramma-opp-article': HTMLMyStrammaOppArticleElement;
    'vn-button': HTMLVnButtonElement;
    'vn-color-block': HTMLVnColorBlockElement;
    'vn-content-label': HTMLVnContentLabelElement;
    'vn-content-title': HTMLVnContentTitleElement;
    'vn-content': HTMLVnContentElement;
    'vn-grid': HTMLVnGridElement;
    'vn-header': HTMLVnHeaderElement;
    'vn-lenker': HTMLVnLenkerElement;
    'vn-secondary-header': HTMLVnSecondaryHeaderElement;
    'vn-text': HTMLVnTextElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
