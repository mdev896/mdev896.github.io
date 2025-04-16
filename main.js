class component {
    constructor(tag, properties, components, plaintext) {
        if (plaintext == undefined) {
            this.tag = tag;
            this.properties = properties;
            this.components = components;
            this.componentText();
        } else {
            this.text = plaintext;
        }
    }
    componentText() {
        this.text = "<" + this.tag + " " + this.properties + ">";
        for (let i = 0; i < this.components.length; i++) {
            this.text += this.components[i].text + " ";
        }
        this.text += "</" + this.tag + ">";
    }
    getText() {
        return this.text;
    }
}
function gameLinkGenerator(gametext, redirect) {
    return (
        `<iframe
            id="game-iframe"
            src="` +
        gametext +
        `"
            title="game"
            scrolling="no"
            allow="fullscreen; screen-wake-lock; gamepad; clipboard-read"
            allowfullscreen=""
            sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-presentation allow-scripts allow-same-origin allow-downloads  allow-popups allow-popups-to-escape-sandbox"
            loading="eager"
            importance="high"
            data-hj-allow-iframe="true"
            style="
                border: 0px;
                margin: 0px;
                padding: 0px;
                width: 100%;
                height: 90%;
                position: absolute;
                top: 0px;
                left: 0px;
            "
        ></iframe>
        <br /><a
            onclick=redirect('` +
        redirect +
        `')
            style="
                position: absolute;
                top: 90%;
                bottom: 0;
                left: 48%;
                right: 48%;
            "
            ><img
                src="images/return2.png"
                style="height: 100%; width: 100%"
        /></a>`
    );
}
function finalGenerator(link = null, image = null) {
    let imgComponent = new component(
        "img",
        'src="' + image + '" class="img"',
        []
    );
    let divLink = new component("a", link, [imgComponent]);
    let divComponent = new component("div", "", [divLink]);
    return divComponent;
}

let returnComponent = finalGenerator(
    "onclick=\"redirect('/')\"",
    "images/return.png"
);

let sandalsComponent = finalGenerator(
    "onclick=\"redirect('/sandals')\"",
    "images/sANDs.jpg"
);

let sandals1Component = finalGenerator(
    "onclick=\"redirect('/sandals1')\"",
    "images/sANDs.jpg"
);

let ss1game = new component(
    null,
    null,
    null,
    gameLinkGenerator(
        "https://games.crazygames.com/en_US/swords-and-sandals-1/index.html?v=1.309",
        "/sandals"
    )
);

let sandals2Component = finalGenerator(
    "onclick=\"redirect('/sandals2')\"",
    "images/ss2.jpg"
);

let ss2game = new component(
    null,
    null,
    null,
    gameLinkGenerator(
        "https://games.crazygames.com/en_US/swords-and-sandals-2/index.html?v=1.309",
        "/sandals"
    )
);

let sandals3Component = finalGenerator(
    "onclick=\"redirect('/sandals3')\"",
    "images/ss3.jpg"
);

let ss3game = new component(
    null,
    null,
    null,
    gameLinkGenerator(
        "https://games.crazygames.com/en_US/swords-and-sandals-3/index.html?v=1.309",
        "/sandals"
    )
);

let gunmayhemComponent = finalGenerator(
    "onclick=\"redirect('/gunmayhem')\"",
    "images/gun_mayhem.jpg"
);

let mayhem1Component = finalGenerator(
    "onclick=\"redirect('/mayhem1')\"",
    "images/gun_mayhem.jpg"
);

let mayhem1game = new component(
    null,
    null,
    null,
    gameLinkGenerator(
        "https://games.crazygames.com/en_US/gun-mayhem/index.html?v=1.309",
        "/gunmayhem"
    )
);

let mayhem2Component = finalGenerator(
    "onclick=\"redirect('/mayhem2')\"",
    "images/gun_mayhem2.jpg"
);

let mayhem2game = new component(
    null,
    null,
    null,
    gameLinkGenerator(
        "https://games.crazygames.com/en_US/gun-mayhem-2/index.html?v=1.309",
        "/gunmayhem"
    )
);

let aowComponent = finalGenerator(
    "onclick=\"redirect('/aow')\"",
    "images/aow.jpg"
);

let aow1Component = finalGenerator(
    "onclick=\"redirect('/aow1')\"",
    "images/aow.jpg"
);

let aow1game = new component(
    null,
    null,
    null,
    gameLinkGenerator(
        "https://games.crazygames.com/en_US/age-of-war/index.html?v=1.309",
        "/aow"
    )
);

let aow2Component = finalGenerator(
    "onclick=\"redirect('/aow2')\"",
    "images/aow2.jpg"
);

let aow2game = new component(
    null,
    null,
    null,
    gameLinkGenerator(
        "https://games.crazygames.com/en_US/age-of-war-2/index.html?v=1.309",
        "/aow"
    )
);

let jacksmithComponent = finalGenerator(
    "onclick=\"redirect('/jacksmith')\"",
    "images/jacksmith.jpg"
);

let jacksmithGame = new component(
    null,
    null,
    null,
    gameLinkGenerator(
        "https://games.crazygames.com/en_US/jacksmith/index.html?v=1.309",
        "/"
    )
);

let mainComponents = [
    sandalsComponent,
    gunmayhemComponent,
    aowComponent,
    jacksmithComponent,
];

let sandalsComponents = [
    sandals1Component,
    sandals2Component,
    sandals3Component,
    returnComponent,
];
let mayhemComponents = [mayhem1Component, mayhem2Component, returnComponent];
let aowComponents = [aow1Component, aow2Component, returnComponent];

let main = new component("div", 'class="main"', mainComponents);
let url = "/";
let currentHTML = main.getText();

function redirect(newURL) {
    url = newURL;
    refresh();
}

function setPage() {
    main.componentText();
    currentHTML = main.getText();
    document.getElementById("root").innerHTML = currentHTML;
}

function refresh(newPage) {
    switch (url) {
        case "/":
            main.components = mainComponents;
            break;
        case "/gunmayhem":
            main.components = mayhemComponents;
            break;
        case "/mayhem1":
            main.components = [mayhem1game];
            break;
        case "/mayhem2":
            main.components = [mayhem2game];
            break;
        case "/aow":
            main.components = aowComponents;
            break;
        case "/aow1":
            main.components = [aow1game];
            break;
        case "/aow2":
            main.components = [aow2game];
            break;
        case "/sandals":
            main.components = sandalsComponents;
            break;
        case "/sandals1":
            main.components = [ss1game];
            break;
        case "/sandals2":
            main.components = [ss2game];
            break;
        case "/sandals3":
            main.components = [ss3game];
            break;
        case "/jacksmith":
            main.components = [jacksmithGame];
            break;
    }
    let urlState = { url: url };
    if (!newPage) history.pushState(urlState, "");
    setPage();
}

document.addEventListener("DOMContentLoaded", () => {
    refresh();
});

window.onpopstate = function (e) {
    url = e.state.url;
    refresh(true);
};
