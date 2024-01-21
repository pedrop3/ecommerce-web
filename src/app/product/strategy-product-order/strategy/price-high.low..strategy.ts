import { Product } from "src/app/models/product";
import { SortingStrategy } from 'src/app/product/strategy-product-order/sorting.strategy';


export class PriceHighLowStrategy implements SortingStrategy {
  sort(products: Product[]): Product[] {
    return products.slice().sort((a, b) => b.price - a.price);
  }
}
