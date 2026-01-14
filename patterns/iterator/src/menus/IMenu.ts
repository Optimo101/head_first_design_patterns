import { MenuIterator } from "../iterators/IMenuIterator";
import { MenuItem } from "./MenuItem";

export interface Menu {
   createIterator(): MenuIterator<MenuItem>;
}