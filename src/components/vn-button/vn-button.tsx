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
  @Prop() color: string = 'p2';
  @Prop() boxSize: string = 'medium' ;
  @Prop() href: string = '#' ;

  hostData() {
    let colors = ['p1', 'p2', 'p3'];
    if (!colors.includes(this.color)) this.color = 'black';
    return {};
  }

  render() {
 
    return ([
      <a href={this.href} 
      class={`btn color-` + this.color + ` size-` + this.boxSize}>
          <slot />
        
      </a>
    ]);
  }
}
