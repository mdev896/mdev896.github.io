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
            allow="autoplay; payment; fullscreen; microphone; focus-without-user-activation *; screen-wake-lock; gamepad; clipboard-read; clipboard-write; accelerometer; gyroscope; "
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
                src="images/return.png"
                style="height: 100%; width: 100%"
        /></a>`
    );
}
let returnLink = new component("a", "onclick=\"redirect('/')\"", [
    new component("img", 'src="images/return.png" class="img"', []),
]);
let returnC = new component("div", "", [returnLink]);

let mailLink = new component("a", "href='mailto:mdev896@hotmail.com'", [
    new component("img", 'src="images/mail.png" class="img"', []),
]);
let mailText = new component("br", "", [
    new component(null, null, null, "Mail your ideas or if you found bugs"),
]);
let mail = new component("div", "style='margin-top: 10%'", [
    mailLink,
    mailText,
]);

let sandalsLink = new component("a", "onclick=\"redirect('/sandals')\"", [
    new component("img", 'src="images/sANDs.jpg" class="img"', []),
]);
let sandals = new component("div", "", [sandalsLink]);

let sandals1Link = new component("a", "onclick=\"redirect('/sandals1')\"", [
    new component("img", 'src="images/sANDs.jpg" class="img"', []),
]);
let sandals1 = new component("div", "", [sandals1Link]);
let ss1game = new component(
    null,
    null,
    null,
    gameLinkGenerator(
        "https://games.crazygames.com/en_US/swords-and-sandals-1/index.html?v=1.309",
        "/sandals"
    )
);

let sandals2Link = new component("a", "onclick=\"redirect('/sandals2')\"", [
    new component("img", 'src="images/ss2.jpg" class="img"', []),
]);
let sandals2 = new component("div", "", [sandals2Link]);
let ss2game = new component(
    null,
    null,
    null,
    gameLinkGenerator(
        "https://games.crazygames.com/en_US/swords-and-sandals-2/index.html?v=1.309",
        "/sandals"
    )
);

let sandals3Link = new component("a", "onclick=\"redirect('/sandals3')\"", [
    new component("img", 'src="images/ss3.jpg" class="img"', []),
]);
let sandals3 = new component("div", "", [sandals3Link]);
let ss3game = new component(
    null,
    null,
    null,
    gameLinkGenerator(
        "https://games.crazygames.com/en_US/swords-and-sandals-3/index.html?v=1.309",
        "/sandals"
    )
);

let gunmayhemLink = new component("a", "onclick=\"redirect('/gunmayhem')\"", [
    new component("img", 'src="images/gun_mayhem.jpg" class="img"', []),
]);
let gunmayhem = new component("div", "", [gunmayhemLink]);
let mayhem1link = new component("a", "onclick=\"redirect('/mayhem1')\"", [
    new component("img", 'src="images/gun_mayhem.jpg" class="img"', []),
]);
let mayhem1 = new component("div", "", [mayhem1link]);
let mayhem1game = new component(
    null,
    null,
    null,
    gameLinkGenerator(
        "https://games.crazygames.com/en_US/gun-mayhem/index.html?v=1.309",
        "/gunmayhem"
    )
);
let mayhem2link = new component("a", "onclick=\"redirect('/mayhem2')\"", [
    new component("img", 'src="images/gun_mayhem2.jpg" class="img"', []),
]);
let mayhem2 = new component("div", "", [mayhem2link]);
let mayhem2game = new component(
    null,
    null,
    null,
    gameLinkGenerator(
        "https://games.crazygames.com/en_US/gun-mayhem-2/index.html?v=1.309",
        "/gunmayhem"
    )
);

let aowLink = new component("a", "onclick=\"redirect('/aow')\"", [
    new component("img", 'src="images/aow.jpg" class="img"', []),
]);
let aow = new component("div", "", [aowLink]);
let aow1Link = new component("a", "onclick=\"redirect('/aow1')\"", [
    new component("img", 'src="images/aow.jpg" class="img"', []),
]);
let aow1 = new component("div", "", [aow1Link]);
let aow1game = new component(
    null,
    null,
    null,
    gameLinkGenerator(
        "https://games.crazygames.com/en_US/age-of-war/index.html?v=1.309",
        "/aow"
    )
);

let aow2Link = new component("a", "onclick=\"redirect('/aow2')\"", [
    new component("img", 'src="images/aow2.jpg" class="img"', []),
]);
let aow2 = new component("div", "", [aow2Link]);
let aow2game = new component(
    null,
    null,
    null,
    gameLinkGenerator(
        "https://games.crazygames.com/en_US/age-of-war-2/index.html?v=1.309",
        "/aow"
    )
);

let jacksmithLink = new component("a", "onclick=\"redirect('/jacksmith')\"", [
    new component("img", 'src="images/jacksmith.jpg" class="img"', []),
]);
let jacksmith = new component("div", "", [jacksmithLink]);
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
    sandals,
    gunmayhem,
    aow,
    jacksmith,
    new component("br", "", []),
    mail,
];

let sandalsComponents = [sandals1, sandals2, sandals3, returnC];
let mayhemComponents = [mayhem1, mayhem2, returnC];
let aowComponents = [aow1, aow2, returnC];

let main = new component("div", 'class="main"', mainComponents);
let url = "/";
let currentHTML = main.getText();

function redirect(newURL) {
    url = newURL;
    refresh();
}

function refresh() {
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
    main.componentText();
    currentHTML = main.getText();
    document.getElementById("root").innerHTML = currentHTML;
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("root").innerHTML = currentHTML;
});
