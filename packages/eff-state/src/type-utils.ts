/**
 * Determines if two types are bidirectionally extensive
 *
 * @since 0.1.0
 */
export type StructurallyEquivalent<A, B> = A extends B ? B extends A ? true : false : false

/**
 * Adds a message to a type error when a type doesn't
 * meet parameter conditions.
 *
 * @since 0.1.0
 */
export type WithMessage<Predicate extends boolean, OnTrue, Message extends string> = Predicate extends true ? OnTrue
  : TypeMismatch<Message>

/**
 * Used to indicate when a type parameter doesn't line up with
 * an expected condition
 */
export interface TypeMismatch<Message extends string> {
  message: Message
  [TypeErrorSymbol]: "TypeMismatch"
}

/**
 * Used to prevent unintentional structural overlap
 * between an error message and an expected type
 *
 * @since 0.1.0
 */
export declare const TypeErrorSymbol: unique symbol
