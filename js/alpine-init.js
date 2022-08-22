/**   Initializing Global Alpine Data & Methods */

document.addEventListener('alpine:init', () => {

    Alpine.data('globalData', () => ({
        isCatalogMenuOpen: false,
        isMobileMenuOpen: true
    }))
})