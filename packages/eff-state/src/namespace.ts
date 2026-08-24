/**
 * A shared interface for declaring state-machine type namespaces
 *
 * @since 0.1.0
 * @remarks
 * With TypeScript module augmentation, you can extend an interface
 * in various modules.  It is necessary to include this file in a TypeScript
 * import or else the interface will be lacking those properties.  This
 * combines well with other type helpers that refer to this interface in order
 * to pass data around implicitly.  Eff-state uses this method to construct
 * state-machine node types that are referred to by controllers and framework
 * integrations.
 * @example
import { StateNamespace } from "@rae-hill/eff-state/namespace"

declare const Foo: unique symbol
type Foo = typeof Foo

export interface StateNamespace {
  [Foo]: {
    "a": string
    "b": number
    "c": boolean
  }
}

declare const Bar: unique symbol
type Bar = typeof Bar

export interface StateNamespace {
  [Bar]: {
    "d": Date
    "e": {
      "ea": true
      "eb": false
    }
  }
}
 *
 */
export interface StateNamespace {}

/**
 * A union of all state namespace members
 *
 * @since 0.1.0
 * @remarks
 * This will only include namespaces that are part of the TypeScript import tree for
 * a particular module.  Anything not included in an import tree will not contain namespaces
 * belonging to non-imported modules.
 */
export type Namespaces = keyof StateNamespace

/**
 * Returns the named nodes for a namespace
 *
 * @since 0.1.0
 */
export type NodesFor<NS extends Namespaces> = keyof StateNamespace[NS]

/**
 * Selects the type corresponding to a state namespace and node
 *
 * @since 0.1.0
 */
export type Node<NS extends Namespaces, NodeName extends NodesFor<NS>> = StateNamespace[NS][NodeName]
