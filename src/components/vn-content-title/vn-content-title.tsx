import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'vn-content-title',
  styleUrl: 'vn-content-title.styl',
  shadow: true,
})
export class VnContentTitle {
  /**
   * A test prop
   */
  @Prop() test: string = 'Hello World';
  @Prop() title: string = "" ;

  render() {
    return <div class="title">
    
    
          <slot />
    </div>;

  
    
  }
}
