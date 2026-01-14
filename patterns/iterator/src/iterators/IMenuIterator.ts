export interface MenuIterator<T> {
   hasNext(): boolean;
   next(): T;
}