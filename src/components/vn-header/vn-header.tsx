import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'vn-header',
  styleUrl: 'vn-header.styl',
  shadow: true,
})
export class VnHeader {
  @Prop() size: string;

  render() {
    switch (parseInt(this.size)) {
      case 1: return <h1><slot /></h1>;
      case 2: return <h2><slot /></h2>;
      case 3: return <h3><slot /></h3>;
      case 4: return <h4><slot /></h4>;
      case 5: return <h5><slot /></h5>;
      default: return <h6><slot /></h6>;
    }
  }
}
