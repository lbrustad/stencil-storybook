import { Component } from '@stencil/core';

@Component({
  tag: 'vn-secondary-header',
  styleUrl: 'vn-secondary-header.css',
  shadow: true,
})
export class VnSecondaryHeader {
  render() {
    return <div
    class="header">
      <slot />
    </div>;
  }
}
