export class Section {
    constructor({renderer}, elementsContainerSelector) {
        this._renderer = renderer;
        this.elementsContainer = document.querySelector(elementsContainerSelector);
    }

    generateCard(items) {
        items.reverse().forEach((item) => {
          this.addItem(item);
        })
    }

    addItem(item) {
        this.elementsContainer.prepend(this._renderer(item));
    }
}