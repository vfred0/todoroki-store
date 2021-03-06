import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() styles: string = '';
  @Input() description: string = 'Ver productos';
  @Input() isContact: boolean = false;
  isDefault(): boolean {
    return !this.isContact;
  }
}
