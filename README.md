## (v1) Basic routing

`Route` component watches path on the address bar and conditional renders its children.\
\
`Header` component contains `Link` components which only serves to provide convenience for user to navigate between pages.

## (v2.1) Partial CSR

Client-side routing (CSR) \
By default, the browser handles navigation - when user clicks on a link, browser will send a new request to the server, receive a new html file and reload all required scripts. With CSR, we want to take over the handling of navigation. We can do so programmatically because of some APIs that the browser exposes. We want the following behaviour - when user clicks on a link, a new path is displayed, and `Route` components get alerted to check if their path matches the new displayed path and render their children correspondingly.
\
\
First, since we are using `<a>` tags for our `Link` components, we have to prevent its default `onClick` behaviour.
\
\
Second, we can display new paths using `window.history.pushState`
\
\
Third, we need our `Route` components to be listening to url changes. This turns out to be rather challenging. In this version, `Route` components only listen for `popstate` event which occurs only when url changes due to user using the forward/backward buttons.

## (v2.2) Complete CSR

In this version, `Route` components can get notified whenever url changes. This is due to `Link` components dispatching `navEvent`

## (v3.1) react-router-dom@6

`BrowserRouter` wraps all react-router-dom components
\
\
`Routes` wraps all `Route`s
\
\
`Route` accomplishes the same thing as in v2 - check path and conditionally renders its children (called element in rr6)
\
\
`Link` accomplishes the same thing as in v2 - changes url without default behaviour when clicked

## (v3.2) Nested routes

No longer using `<Route exact>`
\
\
After wrapping `Route` component, remember to add `Outlet` component to parent component. Think of it as parent having an outlet when it receives a path with a prefix that matches its path.
