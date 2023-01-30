export class Section {
    constructor({items, renderer}, elementsContainerSelector) {
        this._items = items;
        this._renderer = renderer;
        this.elementsContainer = document.querySelector(elementsContainerSelector);
    }

    generateCard() {
        this._items.forEach((item) => {
            this.addItem(this._renderer(item.name, item.link));
        })
    }

    addItem(item) {
        this.elementsContainer.prepend(item);
    }
}