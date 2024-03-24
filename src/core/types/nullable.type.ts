/**
 * @category Generics
 *
 * @description
 * Represents a type that can be null or a specific type.
 * This generic type is used to define a variable that can either hold a value of type T or be null.
 * 
 * @type {TNullable<T>} Generic type
 * 
 * @template T - The type that can be assigned or null.
 */
export type TNullable<T> = null | T;