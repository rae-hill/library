import type * as NS from "./namespace.js"

/**
 * Used to declare a namespaced state-node
 *
 * @since 0.1.0
 */
export abstract class NodeDeclaration<NS extends NS.Namespaces, NodeName extends NS.NodesFor<NS>> {
  readonly [NamespaceSymbol]!: NS
  readonly [NodeNameSymbol]!: NodeName
}

/**
 * All possible NodeDeclarations.  Only intended for use in "extends" statements.
 *
 * @since 0.1.0
 */
export type AnyNodeDeclaration = NodeDeclaration<NS.Namespaces, NS.NodesFor<NS.Namespaces>>

/**
 * Extracts the NameSpace for a node
 *
 * @since 0.1.0
 */
export type NamespaceOf<Node extends AnyNodeDeclaration> = Node[NamepsaceSymbol]

/**
 * Extracts the NameSpace for a node
 *
 * @since 0.1.0
 */
export type NodeNameOf<Node extends AnyNodeDeclaration> = Node[NodeNameSymbol]

/**
 * Do not use directly; prefer NamespaceOf helper
 *
 * @since 0.1.0
 */
export declare const NamespaceSymbol: unique symbol
export type NamepsaceSymbol = typeof NamespaceSymbol

/**
 * Do not use directly; prefer NodeNameOf
 *
 * @since 0.1.0
 */
export declare const NodeNameSymbol: unique symbol
export type NodeNameSymbol = typeof NodeNameSymbol
