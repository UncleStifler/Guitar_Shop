class Products {
    constructor() {
        this.classNameActive = "products-elements__btn_active"
        this.labelAdd = "Add to basket"
        this.labelRemove = "Delete from basket"
    }

    handleSetLocationStorage(element, id) {
        const {pushProducts, products} = localStorageUtil.putProducts(id)

        if (pushProducts) {
            element.classList.add(this.classNameActive)
            element.innerHTML = this.labelRemove
        } else {
            element.classList.remove(this.classNameActive)
            element.innerHTML = this.labelAdd
        }
        headerPage.render(products.length)
    }

    render() {
        const productsStore = localStorageUtil.getProducts()
        let htmCatalog = "";

        CATALOG.forEach(({id, name, price, img}) => {
            let activeClass = "";
            let activeText = "";

            if (productsStore.indexOf(id) === -1) {
                activeText = this.labelAdd
            } else {
                activeClass = ` ${this.classNameActive}`
                activeText = this.labelRemove
            }

            htmCatalog += `
                <li class="products-elements">
                    <span class="products-elements__name">${name}</span>
                    <img class="products-elements__img" src="${img}"
                    <span class="products-elements__price">
                    🌟 ${price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "1 ")} €
                    </span>
                    <button 
                        
                        class="products-elements__btn${activeClass}"
                        onclick="productsPage.handleSetLocationStorage(this, '${id}')">
                        ${activeText}
                   </button>
                </li>
      `;
        });

        const html = `
    <ul class="products-container">
        ${htmCatalog}
    </ul>
    `;

        ROOT_PRODUCTS.innerHTML = html;
    }
}

const productsPage = new Products();
productsPage.render();
