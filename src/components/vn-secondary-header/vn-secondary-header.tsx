import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'vn-secondary-header',
  styleUrl: 'vn-secondary-header.css',
  shadow: true,
})
export class VnSecondaryHeader {
 
  @Prop() color: string = "p2";
  @Prop() test: string = 'Hello World';
  @Prop() header!: string ;

  render() {
    return <div 
    class="header">{this.header}

    <slot />
    </div>;
  }
}
