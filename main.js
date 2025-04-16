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
        url: link,
    };
    return obj;
}

let ss1 = objectGenerator("/sandals1", "sANDs.jpg", "swords-and-sandals-1");

let ss2 = objectGenerator("/sandals2", "ss2.jpg", "swords-and-sandals-2");

let ss3 = objectGenerator("/sandals3", "ss3.jpg", "swords-and-sandals-3");

let mayhem1 = objectGenerator("/mayhem1", "gun_mayhem.jpg", "gun-mayhem");

let mayhem2 = objectGenerator("/mayhem2", "gun_mayhem2.jpg", "gun-mayhem-2");

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

let evowarsio = objectGenerator("/evowarsio", "evowarsio.png", "evowarsio");

let sap = objectGenerator(
    "/super-auto-pets",
    "super-auto-pets.png",
    "super-auto-pets"
);

let stick_war = objectGenerator("/stick-war", "stick-war.png", "stick-war");

let hobo = objectGenerator("/hobo", "hobo.png", "hobo");

let games = [
    mayhem1,
    mayhem2,
    aow1,
    aow2,
    ss1,
    ss2,
    ss3,
    jacksmith,
    murder,
    bar,
    ragdoll,
    sr,
    madness,
    btd4,
    evowarsio,
    sap,
    stick_war,
    hobo,
];

let mainComponents = [];
games.forEach((e) => {
    mainComponents.push(e.component);
});

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
    if (url == "/") main.components = mainComponents;
    else
        games.forEach((e) => {
            if (url == e.url) {
                main.components = [e.game];
            }
        });
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
