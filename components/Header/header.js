class Header {

    handleOpenShoppingPage() {
        shoppingPage.render()
    }

    render(count) {
        ROOT_HEADER.innerHTML = `
            <div class="header-container">
                <div class="header-counter" onclick="headerPage.handleOpenShoppingPage()">
                        🔥 ${count}
                </div>
            </div>
        `
    }

}

const headerPage = new Header()
const productsStore = localStorageUtil.getProducts()
headerPage.render(productsStore.length)