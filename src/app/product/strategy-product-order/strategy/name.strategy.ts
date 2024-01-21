import { Product } from "src/app/models/product";
import { SortingStrategy } from "../sorting.strategy";



export class NameStrategy implements SortingStrategy {
    sort(products: Product[]): Product[] {
        return products.slice().sort((a, b) => {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        });
    }

}