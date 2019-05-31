import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'vn-icons',
  styleUrl: 'vn-icons.styl',
})
export class VnIcons {
  /**
   * A test prop
   */
  @Prop() test: string = 'Hello World';

  render() {
    return <div class="vn-icons">{this.test}</div>;
  }
}
