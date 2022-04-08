# Problem

Whenever button is clicked, `count` is increased and component re-renders. Inner functions are then re-defined and therefore are able to reference the updated `count`
\
\
However, only the first defined `logCount` (which has `count` of 0) is attached to `window`.

## Solution 1 - amend dependency array

By adding `count` to the dependency array, a new `logCount` is attached to `window` upon each re-render.
\
\
However, this will eventually cause `window` to have multiple eventhandlers which isn't ideal.

## Solution 2 - useRef

Only the first defined `logCount` is attached to `window`. However, all `logCount` instances now point at the same variable `count` and therefore, can reflect updated `count` values.
\
\
Note that `dummy` is included only to force the component to re-render.
