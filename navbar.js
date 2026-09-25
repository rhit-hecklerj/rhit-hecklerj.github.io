const navbarHTML = `
<nav class="navbar">
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="resume.html"> Resume</a></li>
                <li><a href="portfolio.html">Portfolio</a></li>
            </ul>
        </nav>
        `;

document.getElementById("nav-placeholder").innerHTML = navbarHTML;

//source = https://www.w3tutorials.net/blog/make-header-and-footer-files-to-be-included-in-multiple-html-pages/?utm_source=chatgpt.com and https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML