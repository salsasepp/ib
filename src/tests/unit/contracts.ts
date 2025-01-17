/**
 * This file describe sample contracts to be used in various tests code.
 */
import {
  Bond,
  Contract,
  Future,
  Index,
  Option,
  OptionType,
  Stock,
} from "../..";

export const sample_stock: Contract = new Stock("AAPL");
export const sample_etf: Contract = new Stock("SPY");
export const sample_future: Contract = new Future(
  "ES",
  "ESH4",
  "202403",
  "CME",
  50,
);
export const sample_option: Contract = new Option(
  "AAPL",
  "20251219",
  200,
  OptionType.Put,
);
export const sample_bond: Contract = new Bond("912828C57");
export const sample_index: Contract = new Index("ES", "USD");
export const sample_dax_index: Contract = new Index("DAX", "EUR", "EUREX");
