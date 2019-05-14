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
  @Prop() color: string = 'black';
  @Prop() boxSize: string = '1' ;

  hostData() {
    let colors = ['black', 'grey', 'red'];
    if (!colors.includes(this.color)) this.color = 'black';
    return {};
  }

  render() {
    let boxSize = parseInt(this.boxSize);
    let sizes = ['small', 'medium', 'big', 'giant'];
    return (
      <a class={`vn-button vn-color-` + this.color}>
        <span class={`vn-button size-` + sizes[boxSize - 1]}>
          <slot />
        </span>
      </a>
    );
  }
}
