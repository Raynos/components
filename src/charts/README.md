# Chart
An example component that uses [chart.js][0] `2.8.0`.

<tonic-chart
  type="horizontalBar"
  width="300px"
  height="150px"
  src="/chartdata.json">
</tonic-chart>

## Code

#### HTML
Options is optional and contains any valid chartjs configuration options.

```js
const opts = {
  tooltips: {
    enabled: false
  },
  legend: {
    display: false
  },
  drawTicks: true,
  drawBorder: true
}
```

```html
<tonic-chart
  type="horizontalBar"
  width="300"
  height="150px"
  options=${opts}
  src="/chartdata.json">
</tonic-chart>
```

#### JSON

```json
{
  "labels": ["Foo", "Bar", "Bazz"],
  "datasets": [{
    "label": "Quxx (millions)",
    "backgroundColor": ["#c3c3c3", "#f06653", "#8f8f8f"],
    "data": [278, 467, 34]
  }]
}
```

## Api

### Properties

| Property | Type | Description | Default |
| :--- | :--- | :--- | :--- |
| `title` | *string* | The title of the chart. | |
| `type` | *string* | The type of the bar chart. | |
| `src` | *object* or *string* | The data for the chart. A url or an object. | |
| `tooltip` | *bool* | Show or don't show the tooltip. | |
| `width` | *string* | Width of the chart (include the unit, `%`, `px` etc). | |
| `height` | *string* | Height of the chart (include the unit, `%`, `px`, etc). | |

### Instance Methods & Members

| Method | Description |
| :--- | :--- |
| `draw(Object, Object)` | Draws (or re-draws) the chart. The first parameter is the data and the second is options. |

[0]:https://www.chartjs.org/
