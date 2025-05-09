document.addEventListener("DOMContentLoaded", () => {
    // Menu data
    
    const navMainData = [
        { name: "Home", url: "index.html" },
        { name: "Introduction", url: "introduction.html" },
        { name: "Contract", url: "Contract.html" },
        { name: "About", url: "about.html" },
        { name: "Website Evaluations", url: "website_evaluations.html" },
        { name: "Tables", url: "tables.html" },
        { name: "Forms", url: "forms.html" },
        /*{ name: "Project Overview", url: "project_overview.html" },*/
        { name: "Peer Review 1", url: "peerreview1.html" },
        { name: "Peer Review 2", url: "peerreview2.html" },
       /* { name: "First Scripts", url: "firstscripts.html" },*/
        { name: "BYO", url: "byo_intro.html" },
        { name: "Slideshow", url: "slideshow.html" },
        { name: "Drawing", url: "drawing.html" },
        { name: "CRAPPY", url: "stuff/Crappy.html" },
        { name: "Hobby", url: "hobby/index.html" },
        { name: "Client Project", url: "client_project/index.html" }
    ];

    const navFooterData = [
        { name: "CLT Web", url: "https://webpages.uncc.edu/malikha1/" },
        { name: "Github Page", url: "https://github.com/MujtabaK49er/MujtabaK49er.github.io/" },
        { name: "Github Course Page", url: "https://github.com/MujtabaK49er/MujtabaK49er.github.io/tree/main/itis3135" },
        { name: "Github", url: "https://github.com/MujtabaK49er/" },
        { name: "Freecode Camp", url: "https://www.freecodecamp.org/MujtabaKhan49er" },
        { name: "CodeAcademy", url: "https://www.codecademy.com/profiles/MujtabaKhan49er" },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/mujtaba-ali-khan-607b2928a/overlay/contact-info/" }
    ];

    // Helper function to create menu links and prevent duplication
    const createMenuLinks = (data, containerId) => {
        const container = document.getElementById(containerId);
        if (!container) return;

        // Prevent duplication if links are already added
        data.forEach((item, idx) => {
            if (![...container.getElementsByTagName('a')].some((link) => link.href === item.url)) {
                const link = document.createElement("a");
                link.textContent = item.name;
                link.href = item.url;
                link.target = item.url.startsWith("http") ? "_blank" : "_self";

                container.appendChild(link);

                if (idx < data.length - 1) {
                    container.appendChild(document.createTextNode(" | "));
                }
            }
        });
    };

    // Populate menus
    createMenuLinks(navMainData, "menu-main");
    createMenuLinks(navFooterData, "menu-footer");

    // Footer additional content
    const footerContainer = document.getElementById("footer-container");
    if (footerContainer) {
        footerContainer.innerHTML += `
            <p>
                Pages built by
                <a href="MujtabaKhanStudios.com.html">Midnight Aero Kingfisher Co.</a> © 2025
            </p>
            <p>
                <a href="https://www.freecodecamp.org/certification/MujtabaKhan49er/responsive-web-design" target="_blank">
                    Certified in Responsive Web Design
                </a>,
                <a href="https://www.freecodecamp.org/certification/MujtabaKhan49er/javascript-algorithms-and-data-structures-v8" target="_blank">
                    Certified in JS
                </a>
            </p>
            <a id="validation-link-html" href="">
                <img src="https://mytienhoang.github.io/itis3135/z_archives/html_validation.png" alt="HTML Validation">
            </a>
            <a id="validation-link-css" href="">
                <img src="https://jigsaw.w3.org/css-validator/images/vcss" alt="CSS Validation">
            </a>
        `;
    }

    // jQuery AJAX to fetch and populate menu data (optional)
    $(document).ready(() => {
        if ($("#menu-main").children().length === 0) {
            $.ajax({
                url: "json/menuData.json", // Path to your JSON file
                method: "GET",
                dataType: "json",
                success: (data) => {
                    // Populate the main menu
                    data.mainMenu.forEach((item) => {
                        if (!$("#menu-main a[href='" + item.url + "']").length) {
                            const link = $("<a>").text(item.name).attr("href", item.url);
                            $("#menu-main").append(link).append(" | ");
                        }
                    });

                    // Populate the footer menu
                    data.footerMenu.forEach((item) => {
                        if (!$("#menu-footer a[href='" + item.url + "']").length) {
                            const link = $("<a>").text(item.name).attr("href", item.url);
                            $("#menu-footer").append(link).append(" | ");
                        }
                    });
                },
                error: (err) => {
                    console.error("Error fetching menu data:", err);
                }
            });
        }
    });
});
