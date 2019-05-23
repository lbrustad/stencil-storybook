import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'vn-content',
  styleUrl: 'vn-content.styl',
  shadow: true,
})
export class VnContent {
  /**
   * A test prop
   */
  @Prop() test: string = 'Hello World';

  render() {
    return (
      <div class="content">
        <slot />
      </div>
    );
  }
}
