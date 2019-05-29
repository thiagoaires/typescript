export abstract class View<T> {
  private _element: Element;
  private _escape: boolean;

  constructor(selector: string, escape: boolean = false) {
    this._element = document.querySelector(selector);
    this._escape = escape;
  }

  update(model: T): void {
    let template = this.template(model);

    if (this._escape) {
      template = template.replace(/<script>[\s\S]*?<\/script>/g, "");
    }

    this._element.innerHTML = this.template(model);
  }

  abstract template(model: T): string;
}
