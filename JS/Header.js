document.getElementById('main').insertAdjacentHTML('afterbegin',
    `
    <header>
            <div class="banner">
                <div id="top-container">
                    <span id="embedded-top-container">
                        <a href="../Pages/Main.html" id="header-logo">
                            <img alt="logo" class="image header-logo-img" src="../images/shortcutIcon.png">
                            <span id="header-logo-tip">
                                <img alt="return" src="../images/return-icon.png">
                                <img alt="return" src="../images/shortcutIcon.png">
                            </span>
                        </a>
                        <span class="top-tagline"> Римская Империя</span>
                    </span>
                </div>
                <div id="top-head">
                    <div id="top-head-text"> Римская Империя</div>
                </div>
            </div>

            <noscript>
                <div style="background-color: #de4949; color: #fff; padding: 5px; text-align: center;">
                    Please enable javascript to continue.
                </div>
            </noscript>
        </header>
    `);


const headerTip = document.getElementById("header-logo-tip");

if (document.title !== 'Древний Рим')
    headerTip.style.display = "flex";