# Problem

Whenever button is clicked, `count` is increased and component re-renders. Inner functions are then re-defined and therefore are able to reference the updated `count`
\
\
However, only the first defined `logCount` (which has `count` of 0) is attached to `window`.
