## Passing props without context

App needs to communicate `count` to `Display` components. To do so, it passes `count` to `DisplayContainer` which then passes `count` to both `Display`s. In this situation, `DisplayContainer` carries the `count` prop solely for the purpose of handling it off to `Display`s.

## Passing props with context

### Using CountContext.Provider and CountContext.Consumer

Each `CountContext.Provider` instance creates a new "pipe" for `count` to flow.
\
\
`CountContext.Consumer`'s child is a function that has `CountContext.Provider`'s `value` as its argument.

### Using CountContext.Provider and useContext hook

Alternate way for `Display`s to receive `count` from "pipe"
