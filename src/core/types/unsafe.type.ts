import type { TNullable } from './nullable.type';



/**
 * @category Generics
 *
 * @description
 * Represents a type that can be undefined, null, or a specific type.
 * This generic type extends the concept of TNullable by also allowing the variable to be undefined, providing flexibility for optional values.
 * 
 * @type {TUnsafe<T>} Generic type
 * 
 * @template T - The type that the variable can hold, besides being null or undefined.
 */
export type TUnsafe<T> = undefined | TNullable<T>;