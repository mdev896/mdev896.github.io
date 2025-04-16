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
}
function gameComponentGenerator(gameUrl) {
    return new component(null, null, null, gameFrameGenerator(gameUrl));
}
function gameFrameGenerator(gameUrl) {
    return (
        '<iframe src="' +
        gameUrl +
        '" style="width: 100%; height: 100%; position: absolute; top: 0; left: 0" frameborder="0" allow="gamepad *;"></iframe>'
    );
}
function finalGenerator(link, image) {
    let imgComponent = new component(
        "img",
        'src="' + image + '" class="img"',
        []
    );
    let divLink = new component("a", link, [imgComponent]);
    let divComponent = new component("div", "", [divLink]);
    return divComponent;
}
function objectGenerator(link, image, game) {
    let obj = {
        component: finalGenerator(
            "onclick=\"redirect('" + link + "')\"",
            "images/" + image
        ),
        game: gameComponentGenerator(
            "https://www.crazygames.com/embed/" + game
        ),
    };
    return obj;
}

let sandalsComponent = finalGenerator(
    "onclick=\"redirect('/sandals')\"",
    "images/sANDs.jpg"
);

let ss1 = objectGenerator("/sandals1", "sANDs.jpg", "swords-and-sandals-1");

let ss2 = objectGenerator("/sandals2", "ss2.jpg", "swords-and-sandals-2");

let ss3 = objectGenerator("/sandals3", "ss3.jpg", "swords-and-sandals-3");

let gunmayhemComponent = finalGenerator(
    "onclick=\"redirect('/gunmayhem')\"",
    "images/gun_mayhem.jpg"
);

let mayhem1 = objectGenerator("/mayhem1", "gun_mayhem.jpg", "gun-mayhem");

let mayhem2 = objectGenerator("/mayhem2", "gun_mayhem2.jpg", "gun-mayhem-2");

let aowComponent = finalGenerator(
    "onclick=\"redirect('/aow')\"",
    "images/aow.jpg"
);

let aow1 = objectGenerator("/aow1", "aow.jpg", "age-of-war");

let aow2 = objectGenerator("/aow2", "aow2.jpg", "age-of-war-2");

let jacksmith = objectGenerator("/jacksmith", "jacksmith.jpg", "jacksmith");

let murder = objectGenerator("/murder", "murder.png", "murder");

let bar = objectGenerator("/bar", "bar.png", "bartender-the-right-mix");

let ragdoll = objectGenerator("/ragdoll", "ragdoll.png", "ragdoll-archers");

let sr = objectGenerator("/sr", "sr.png", "soccer-random");

let madness = objectGenerator("/mdns", "mdns.png", "madness-project-nexus");

let btd4 = objectGenerator(
    "/btd4",
    "btd4.png",
    "bloons-tower-defense-4-expansion"
);

let mainComponents = [
    sandalsComponent,
    gunmayhemComponent,
    aowComponent,
    jacksmith.component,
    murder.component,
    bar.component,
    ragdoll.component,
    sr.component,
    madness.component,
    btd4.component,
];

let sandalsComponents = [ss1.component, ss2.component, ss3.component];
let mayhemComponents = [mayhem1.component, mayhem2.component];
let aowComponents = [aow1.component, aow2.component];

let main = new component("div", 'class="main"', mainComponents);
let url = "/";
let currentHTML = main.text;

function redirect(newURL) {
    url = newURL;
    refresh();
}

function setPage() {
    main.componentText();
    currentHTML = main.text;
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
            main.components = [mayhem1.game];
            break;
        case "/mayhem2":
            main.components = [mayhem2.game];
            break;
        case "/aow":
            main.components = aowComponents;
            break;
        case "/aow1":
            main.components = [aow1.game];
            break;
        case "/aow2":
            main.components = [aow2.game];
            break;
        case "/sandals":
            main.components = sandalsComponents;
            break;
        case "/sandals1":
            main.components = [ss1.game];
            break;
        case "/sandals2":
            main.components = [ss2.game];
            break;
        case "/sandals3":
            main.components = [ss3.game];
            break;
        case "/jacksmith":
            main.components = [jacksmith.game];
            break;
        case "/murder":
            main.components = [murder.game];
            break;
        case "/bar":
            main.components = [bar.game];
            break;
        case "/ragdoll":
            main.components = [ragdoll.game];
            break;
        case "/sr":
            main.components = [sr.game];
            break;
        case "/mdns":
            main.components = [madness.game];
            break;
        case "/btd4":
            main.components = [btd4.game];
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
