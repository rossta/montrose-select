import MontroseSelect from '../dist/montrose-select'

// Workaround for 'ReferenceError: SVGElement not defined'
// in jsdom context
// https://github.com/developit/preact/pull/423
global.SVGElement = function() {}

const click = (element) => {
  const evt = new MouseEvent("click");
  element.dispatchEvent(evt)
}

const $ = (selector) => {
  return document.querySelector(selector)
}

describe('MontroseSelect', () => {
  let element, montroseSelect
  const container = document.querySelector('.container')

  beforeEach(() => {
    document.body.innerHTML =
      `<form>
         <label>Repeats...</label>
         <input type="hidden" />
       </form>`
  })

  test("it renders in place of target", () => {
    new MontroseSelect({
      target: document.querySelector('label')
    })

    element = document.querySelector('label')

    expect(element.innerHTML).toEqual("<div class=\"montrose-root\">"+
      "<label><input type=\"checkbox\">Repeats...</label></div>")
  })
})
