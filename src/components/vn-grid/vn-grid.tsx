import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'vn-grid',
  styleUrl: 'vn-grid.styl',
})
export class VnGrid {
  @Prop() nums: string;

  // private getNumberArray() {
  //   if (/ /.test(this.nums)) return
  // }
  render() {
    return (
      <div class="grid">
        <slot />
      </div>
    );
  }
}
