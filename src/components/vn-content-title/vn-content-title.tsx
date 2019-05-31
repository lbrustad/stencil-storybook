import { Component } from '@stencil/core';

@Component({
  tag: 'vn-content-title',
  styleUrl: 'vn-content-title.styl',
})
export class VnContentTitle {
  render() {
    return <div class="title">
          <slot />
    </div>;
  }
}
