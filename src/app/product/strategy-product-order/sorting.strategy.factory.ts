import { SortingStrategy } from "./sorting.strategy";
import { NameStrategy } from "./strategy/name.strategy";
import { PriceHighLowStrategy } from "./strategy/price-high.low..strategy";
import { PriceLowHighStrategy } from "./strategy/price-low.high.strategy";



export class SortingStrategyFactory {
    createStrategy(sortValue: string): SortingStrategy  {
      switch (sortValue) {
        case "priceLowHigh":
          return new PriceLowHighStrategy();
        case "priceHighLow":
          return new PriceHighLowStrategy();
        default:
          return  new NameStrategy(); 
      }
    }
  }