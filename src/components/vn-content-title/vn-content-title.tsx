import { Component } from '@stencil/core';

@Component({
  tag: 'vn-content-title',
  styleUrl: 'vn-content-title.styl',
})

export class VnContentTitle {
  render() {
    return <vn-header class="title" size="1"><slot /></vn-header>
     
  }
}
