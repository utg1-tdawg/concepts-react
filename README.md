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
