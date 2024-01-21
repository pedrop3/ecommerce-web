import { Product } from "src/app/models/product";

export interface SortingStrategy {
    sort(products: Product[]): Product[];
  }
  