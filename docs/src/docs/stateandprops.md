# 4. State and Props

## Managing state and props

Tonic adds the `.reRender()` and `.setState()` methods to your components. They
can receive either an object or a function as an argument. For example...

```js
//
// Update a component's properties
//
myComponent.reRender(props => ({
  ...props,
  color: 'red'
}))

//
// Reset a component's properties
//
myComponent.reRender({ color: 'red' })

//
// Re-render a component with its existing properties
//
myComponent.reRender()
```

The value received by `.reRender()` should represent the properties of the
component (those properties should generally be considered immutable and
provided by the top-most parent component).

`.setState()` receives a value that describes the state of the component, under
the hood this is a plain old javascript object. Its values may be used by the
component's render function. It should only contain primative values. State will
only be persisted across re-renders for components that have an `id` property.

`.setState()` will not cause a re-render. The reasoning behind this is that
`state` can be updated independently, as needed and rendering happens only when
changes to the representation of the component are required.

## Passing data as properties

There is no templating language in Tonic. It's pure HTML. So the rules of HTML
will be applied. A prop named `fooBar='30'` will become lowercased (as per the
HTML spec). If you want the property name to be camelcased when added to the
props object, use `foo-bar='30'`, and you will get `this.props.fooBar`.

Native HTML only understands strings. So if you want to pass non-string values
to a child component, you can use `this.html` and your values will be forwarded
properly.

```html
class MyComponent extends Tonic {
  render () {

    const data = [
      { foo: 'hello, world' }
    ]

    return this.html`
      <child
        id="y"
        data=${data}
        number=${42.42}
        foo=${() => 'hello, world'}>
      </child>
    `
  }
}
```

When needed, it is also possible to call the `reRender(...)` method on an
element directly.

```js
document.getElementById('parent').reRender({ data: [1,2,3, ...9999] })
```
