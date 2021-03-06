import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductItemCart } from '@core/utils/ProductItemCart';
import { Size } from '@core/utils/Size';
import { Tag } from '@core/utils/Tag';
import { TagColor } from '@core/utils/TagColor';
import { TypeColor } from '@core/utils/TypeColor';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
})
export class ShoppingCartItemComponent implements OnInit {
  @Input() productItemCart: ProductItemCart;
  @Output() removeProductItemCart: EventEmitter<ProductItemCart>;
  tagSize: Tag;
  tagPrice: Tag;
  tagColor: TagColor;
  constructor() {
    this.removeProductItemCart = new EventEmitter<ProductItemCart>();
    this.tagSize = {} as Tag;
    this.tagColor = {} as TagColor;
    this.tagPrice = {} as Tag;
    this.productItemCart = {
      id: 1,
      description: 'Product 1',
      price: 11.99,
      size: Size.S,
      color: TypeColor.White,
      quantity: 1,
      image: 'https://picsum.photos/200/300',
    };
  }
  ngOnInit(): void {
    this.tagColor = {
      typeColor: this.productItemCart.color,
      isSelected: true,
    };

    this.tagSize = {
      description: this.productItemCart.size,
      pathIcon: '/assets/icons/size.svg',
    };

    this.tagPrice = {
      description: this.productItemCart.price.toString(),
      pathIcon: '/assets/icons/price.svg',
    };
    console.log('DEBUG', 'this.productItemCart', this.productItemCart);
  }
  onRemoveProduct() {
    this.removeProductItemCart.emit(this.productItemCart);
  }
}
