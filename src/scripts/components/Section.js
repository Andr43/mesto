export class Section {
    constructor({items, renderer}, elementsContainerSelector) {
        this._items = items;
        this._renderer = renderer;
        this.elementsContainerSelector = elementsContainerSelector;
    }

    generateCard() {
        this._items.forEach((item) => {
            this.addItem(this._renderer(item));
        })
    }

    addItem(item) {
        this.elementsContainerSelector.prepend(item);
    }
}