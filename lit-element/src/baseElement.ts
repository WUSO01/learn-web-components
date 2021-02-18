import { render } from 'lit-html'
export { html, TemplateResult } from 'lit-html'

export class BaseElement extends HTMLElement {
  /**
   * 根节点
   */
  readonly renderRoot !: Element | DocumentFragment

  constructor() {
    super()
    this.initialize()
  }


  initialize () {
    (this as { renderRoot: Element | DocumentFragment }).renderRoot = this.createRenderRoot()
    this.update()
  }

  update () {
    // 获取渲染的HTML
    const templateResult = this.render()
    // 使用lit-html的render方法将HTML渲染到制定的DOM节点上
    // https://lit-html.polymer-project.org/guide/writing-templates
    render (templateResult, this.renderRoot)
  }

  /**
   * lit-element文档: https://lit-element.polymer-project.org/guide/templates#renderroot
   * MDN文档        : https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM
   */
  createRenderRoot () {
    return this.attachShadow({ mode: 'open' })
  }

  protected render (): unknown {
    return 
  }
}
