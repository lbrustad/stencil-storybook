import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'vn-content-label',
  styleUrl: 'vn-content-label.styl',
})
export class VnContentLabel {
  /**
   * A test prop
   */
  @Prop() color: string = "p2";
  @Prop() boxSize: string = "medium";

  render() {
    return <span
      class={
        `inp` +
        ` size-${this.boxSize}` +
        ` color-${this.color}`
      }
    >
      <slot />
    </span>;
  }
}
