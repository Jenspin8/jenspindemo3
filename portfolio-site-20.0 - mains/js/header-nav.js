class Myheader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
         <nav>
        <a class="logo" href="index.html"><img src="img/icons/Kitty logo.png" alt="jenspin-logo"></a>
        <input type="checkbox" id="sidebar-active">
        <label for="sidebar-active" class="open-sidebar-button">
            <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#F3F3F3"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
        </label>

        <label id="overlay" for="sidebar-active"></label>
        <div class="links-container">
            <label for="sidebar-active" class="close-sidebar-button">
                <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#F3F3F3"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
            </label>

            <a target="_blank" class="home-link" href="index.html">HOME</a>
            <a target="_blank" href="portfolio.html">PORTFOLIO</a>
            <a href="#">PROJECTS</a>
            <a target="_blank" href="contact.html">CONTACT</a>
        </div>
    </nav>
    `
    }
}

customElements.define('my-header', Myheader)