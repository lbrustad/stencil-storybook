import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'vn-text',
  styleUrl: 'vn-text.styl',
})
export class VnText {
  /**
   * A test prop
   */
  @Prop() type: string = 'body-en';

  render() {
    return <div class={this.type}><slot /></div>;
  }
}
