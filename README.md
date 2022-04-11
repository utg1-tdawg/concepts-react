## Passing props without context

App needs to communicate `count` to `Display` components. To do so, it passes `count` to `DisplayContainer` which then passes `count` to both `Display`s. In this situation, `DisplayContainer` carries the `count` prop solely for the purpose of handling it off to `Display`s.
