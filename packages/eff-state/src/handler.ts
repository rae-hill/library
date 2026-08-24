import type * as Dec from "./declaration.js"
import type * as NS from "./namespace.js"
import type * as Utils from "./type-utils.js"

/**
 * A handler that provides methods for a particular node
 *
 * @since 0.1.0
 */
export abstract class StateHandler<Node extends Dec.AnyNodeDeclaration> {
  readonly [DeclarationSymbol]!: Node

  abstract readonly name: Dec.NodeNameOf<Node>
}

/**
 * All possible StateHandlers.  Only intended for use in "extends" statements.
 *
 * @since 0.1.0
 */
export type AnyStateHandler = StateHandler<Dec.AnyNodeDeclaration>

/**
 * Return type for a method that defines transition between states
 *
 * @since 0.1.0
 */
export type To<Self extends AnyStateHandler, Next extends AnyStateHandler> = Utils.WithMessage<
  Utils.StructurallyEquivalent<
    NamespaceOf<Self>,
    NamespaceOf<Next>
  >,
  NS.Node<NamespaceOf<Next>, NodeNameOf<Next>>,
  "State transitions must occur within members of the same namespace"
>

/**
 * Extracts the Namespace for a state handler
 *
 * @since 0.1.0
 */
export type NamespaceOf<Handler extends StateHandler<Dec.AnyNodeDeclaration>> = Dec.NamespaceOf<
  Handler[DeclarationSymbol]
>

/**
 * Extracts the NodeName for a state handler
 *
 * @since 0.1.0
 */
export type NodeNameOf<Handler extends StateHandler<Dec.AnyNodeDeclaration>> = Dec.NodeNameOf<
  Handler[DeclarationSymbol]
>

/**
 * Do not use directly; prefer NamespaceOf or NodeNameOf
 *
 * @since 0.1.0
 */
export declare const DeclarationSymbol: unique symbol
export type DeclarationSymbol = typeof DeclarationSymbol
