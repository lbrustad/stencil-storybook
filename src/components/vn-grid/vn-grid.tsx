import { Component } from '@stencil/core';

@Component({
  tag: 'vn-grid',
  styleUrl: 'vn-grid.styl',
})
export class VnGrid {
  render() {
    return (
      <div class='grid'>
        <slot />
      </div>
    );
  }
}
