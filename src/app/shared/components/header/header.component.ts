import { Component } from '@angular/core';
import { TypeButton } from '@core/models/TypeButton';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  activeModalToggle: string = '';
  activeModalSearch: string = '';
  activeModalShop: string = '';
  typeButton: TypeButton = TypeButton.Default;

  constructor() {}

  onToggle(event: any): void {
    event.preventDefault();
    if (this.activeModalToggle === 'is-active') {
      this.activeModalToggle = '';
    } else {
      this.activeModalToggle = 'is-active';
    }
  }
  onSearch(event: any): void {
    event.preventDefault();
    if (this.activeModalSearch === 'is-active') {
      this.activeModalSearch = '';
    } else {
      this.activeModalSearch = 'is-active';
    }
  }
  onShop(event: any): void {
    event.preventDefault();
    if (this.activeModalShop === 'is-active') {
      this.activeModalShop = '';
    } else {
      this.activeModalShop = 'is-active';
    }
  }
}
