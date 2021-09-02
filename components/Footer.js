class Footer {
    create() {
        this.element = document.createElement('footer')
        this.element.classList.add('footer')

        this.element.innerHTML = `
        <div class="container_footer">
        <div class = "container_footer__logo">
        <a href="/">
            <img src ="images/logo1.png">
              </a>
        </div>
        <div class="container_footer__info">
            <span> Адрес: г. Минск, ул. Есенина 2</span>
            <span> Тел.:<a href="#" type="tel"> +375 44 111-11-11</a></span>
            <span>Email: <a href="#" type="email">info@site.by</a></span>
        </div>
        
        </div>
        `
        return this.element

    }
    init() {

        return this.create()
    }
}
const footer = new Footer().init()
export default footer