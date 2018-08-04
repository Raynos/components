const Tonic = typeof require === 'function'
  ? require('tonic') : window.Tonic

class NotificationBadge extends Tonic {
  constructor () {
    super()
    this.stylesheet = `
      * {
        box-sizing: border-box;
      }
      .notifications {
        background-color: var(--secondary);
        width: 40px;
        height: 40px;
        padding: 10px;
        border-radius: 8px;
      }
      .notifications span {
        color: var(--window);
        font: 15px var(--subheader);
        letter-spacing: 1px;
        text-align: center;
        position: relative;
      }
      .notifications span:after {
        content: '';
        width: 8px;
        height: 8px;
        display: block;
        position: absolute;
        top: -3px;
        right: -6px;
        border-radius: 50%;
        background-color: var(--notification);
        border: 2px solid var(--secondary);
      }
      `

    this.defaults = {
    }
  }

  render () {
    let {
      count
    } = { ...this.defaults, ...this.props }

    count = '23'

    return `
      <div class="notifications">
        <span>${count}</span>
      </div>
    `
  }
}

Tonic.add(NotificationBadge, { shadow: true })
