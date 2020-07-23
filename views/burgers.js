module.exports = function(menu) {
    return `
    <h1>Burgers to be Devoured: </h1>

    <ul>
        ${ menu.map(burger => {
            return `
            <li> <p> ${ burger.id } | ${ burger.burger } </p>
            <button data-id="${ burger.id }" class="devour"> Devour It! </button?
            </li>
            `
        }).join("\n") }
    </ul>
    `
}