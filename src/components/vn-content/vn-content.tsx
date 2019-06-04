import { Component } from '@stencil/core';

@Component({
  tag: 'vn-content',
  styleUrl: 'vn-content.styl',
})
export class VnContent {
  render() {
    return <slot />;
  }
}
