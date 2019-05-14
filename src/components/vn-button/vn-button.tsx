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
  @Prop() value: string = 'Hello, World';
  @Prop() color: string = 'black';
  @Prop() boxSize: string = 'HI' ;

  hostData() {
    let colors = ['black', 'grey', 'red'];
    if (!colors.includes(this.color)) this.color = 'black';
    return {};
  }

  render() { 
    console.log(this.boxSize)
    
    return <a class={`vn-button size-` + this.boxSize + ` vn-color-` + this.color}><slot /></a>;
  }
}
