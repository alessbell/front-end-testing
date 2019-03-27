# Outline:

- paired down example of RTL in Kent C. Dodds' gist https://gist.github.com/kentcdodds/7a9bed9639cb8900d0bce9f0c513c8c9

* react-testing-library

  - benefits?
    - https://twitter.com/housecor/status/1047150875502960641
    - comparison blog post https://medium.com/homeaway-tech-blog/integration-testing-in-react-21f92a55a894
  - events: https://github.com/kentcdodds/dom-testing-library/blob/master/src/events.js
  - snapshot testing?

* social proof (Guillermo Rauch, Kent C. Dodds, Jamie Builds)

  - https://twitter.com/jamiebuilds/status/1070062304518004736
  - https://twitter.com/housecor/status/1074319158362415106
  - Gatsby: https://www.gatsbyjs.org/docs/testing-react-components/
  - react-redux uses RTL: https://github.com/reduxjs/react-redux/blob/v6.0.0/test/components/connect.spec.js
  - testing a component that uses Context https://egghead.io/lessons/react-test-a-component-that-uses-a-react-context-consumer

* best practices:

  - make tests resilient! Shouldn't break when strings change E.g. https://twitter.com/kyleshevlin/status/921169512140914688?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E921169512140914688&ref_url=https%3A%2F%2Fblog.kentcdodds.com%2Fmedia%2F1cc146ae6727f5cfd6012f47f2f80aa1%3FpostId%3Dd37a6ee37269
    - data-testid and babel plugin to remove in prod

- EXAMPLES:
  - Kent C Dodds react-redux example from RTL repo https://github.com/kentcdodds/react-testing-library/blob/master/examples/__tests__/react-redux.js
  - Kent C Dodds react-router example https://github.com/kentcdodds/react-testing-library/blob/master/examples/__tests__/react-router.js
  - react-testing-examples https://react-testing-examples.com/jest-enzyme/
