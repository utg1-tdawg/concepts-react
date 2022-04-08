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
