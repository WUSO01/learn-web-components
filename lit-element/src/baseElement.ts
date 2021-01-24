import { render } from 'lit-html'
export { html, TemplateResult } from 'lit-html'

export class BaseElement extends HTMLElement {
  readonly renderRoot !: Element | DocumentFragment

  constructor() {
    super()
    this.initialize()
  }


  initialize () {
    (this as
      { renderRoot: Element | DocumentFragment
    }).renderRoot = this.createRenderRoot()
    this.update()
  }

  update () {
    const templateResult = this.render()
    render (templateResult, this.renderRoot)
  }

  createRenderRoot () {
    return this.attachShadow({ mode: 'open' })
  }

  protected render (): unknown {
    return 
  }
}
