function gameFrameGen(gameUrl) {
    return (
        '<iframe src="' +
        gameUrl +
        '" style="width: 100%; height: 100%; position: absolute; top: 0; left: 0" frameborder="0" allow="gamepad *;"></iframe>'
    );
}

function objectGen(localURL, photo) {
    let imgStr = '<img src="images/' + photo + '.avif">';
    return (
        "<div><a onclick=\"redirect('" +
        localURL +
        "')\">" +
        imgStr +
        "</a></div>"
    );
}

function gameCard(localURL, photo, game) {
    return {
        game: gameFrameGen("https://www.crazygames.com/embed/" + game),
        url: localURL,
        obj: objectGen(localURL, photo),
    };
}

function setDefaultMain() {
    let tmp = '<div class="main">';
    games.forEach((game) => {
        tmp += game.obj;
    });
    tmp += "</div";
    return tmp;
}

let games = [
    gameCard("/mayhem1", "gun_mayhem", "gun-mayhem"),
    gameCard("/mayhem2", "gun_mayhem2", "gun-mayhem-2"),
    gameCard("/aow1", "aow", "age-of-war"),
    gameCard("/aow2", "aow2", "age-of-war-2"),
    gameCard("/sandals1", "sANDs", "swords-and-sandals-1"),
    gameCard("/sandals2", "ss2", "swords-and-sandals-2"),
    gameCard("/sandals3", "ss3", "swords-and-sandals-3"),
    gameCard("/jacksmith", "jacksmith", "jacksmith"),
    gameCard("/murder", "murder", "murder"),
    gameCard("/bar", "bar", "bartender-the-right-mix"),
    gameCard("/ragdoll", "ragdoll", "ragdoll-archers"),
    gameCard("/sr", "sr", "soccer-random"),
    gameCard("/mdns", "mdns", "madness-project-nexus"),
    gameCard("/btd4", "btd4", "bloons-tower-defense-4-expansion"),
    gameCard("/evowarsio", "evowarsio", "evowarsio"),
    gameCard("/sap", "sap", "super-auto-pets"),
    gameCard("/stick-war", "stick-war", "stick-war"),
    gameCard("/hobo", "hobo", "hobo"),
];

let main = "";
let url = "/";

function redirect(newURL) {
    url = newURL;
    refresh();
}

function setPage() {
    document.getElementById("root").innerHTML = main;
}

function refresh(newPage) {
    if (url != "/")
        games.forEach((game) => {
            if (url == game.url) {
                main = game.game;
            }
        });
    else main = setDefaultMain();
    if (!newPage) history.pushState({ url: url }, "");
    setPage();
}

document.addEventListener("DOMContentLoaded", () => {
    refresh();
});

window.onpopstate = function (e) {
    url = e.state.url;
    refresh(true);
};
