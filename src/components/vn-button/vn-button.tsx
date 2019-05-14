import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'vn-button',
  styleUrl: 'vn-button.css',
  shadow: true,
})
export class VnButton {
  /**
   * A test prop
   */
  @Prop() test: string = 'Hello World';
  @Prop() boxSize: string = 'HI' ;


  render() { 
    console.log(this.boxSize)
    
    return <a class={`vn-button size-` + this.boxSize}><slot /></a>;
  }
  
  
}
