import { Product } from "src/app/models/product";
import { SortingStrategy } from "./sorting.strategy";



export class ProductSorter {
    private strategy: SortingStrategy;
  
    constructor(strategy: SortingStrategy) {
      this.strategy = strategy;
    }
  
    setStrategy(strategy: SortingStrategy) {
      this.strategy = strategy;
    }
  
    sort(products: Product[]): Product[] {
      return this.strategy.sort(products);
    }
  }