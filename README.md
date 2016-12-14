# montrose-select

A javascript menu for setting event recurrence, like Google Calendar events

Built to integrate with the [`montrose`](https://github.com/rossta/montrose) ruby gem
through the [`montrose-rails`](https://github.com/rossta/montrose-rails) Rails
engine for handling event recurrences on the backend. Flexible enough to be used
in other contexts.

![](screenshot.png)

## Installation

Via NPM

```ruby
npm install montrose-select
```

Or in the browser

```javascript
<script src="https://unpkg.com/montrose-select"></script>
```

## Usage

Given a form:

```html
<form>
  <label data-recurrence="label">Repeats on</label>
  <input data-recurrence="input" type="hidden" name="recurrence">
</form>
```

```javascript
import MontroseSelect from 'montrose-select'

new MontroseSelect({
  // Replaces targeted DOM element
  target: document.querySelector('[data-recurrence="label"]'),

  // initial recurrence value
  recurrence: null,

  // Callback when recurrence changes
  onChange: (recurrence) => {
    console.log('Recurrence changed', recurrence)
  },

  // Callback when recurrence editing is "done"
  onFinish: (recurrence) => {
    document.querySelector('[data-recurrence="input"]').value = JSON.stringify(recurrence)
  },
})
```

The recurrence is a JavaScript object with the following properties:

```javascript
{
  // specifies units; 'day' | 'week' | 'month' | 'year';
  // required
  frequency: 'day',

  // specify unit count; any integer; defaults to 1;
  // optional
  interval: 2,

  // when recurrence starts; an ISO-string or Date object;
  // optional
  starts: '2016-12-01',

  // when recurrence ends by date; same as 'starts';
  // optional
  until: '2016-12-31',

  // when recurrence ends by count; instead of 'until';
  // optional
  total: 10,

  // specify day of week for weekly recurrence;
  // [0-6] for Sunday-Saturday; optional
  day: [0, 3, 6],
}
```

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/rossta/montrose-select. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).

