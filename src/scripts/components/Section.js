export class Section {
    constructor({items, renderer}, elementsContainer) {
        this._items = items;
        this._renderer = renderer;
        this.elementsContainer = elementsContainer;
    }

    generateCard() {
        this._items.forEach((item) => {
            this.addItem(this._renderer(item));
        })
    }

    addItem(item) {
        this.elementsContainer.append(item);
    }
}