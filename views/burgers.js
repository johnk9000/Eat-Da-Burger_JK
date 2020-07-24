module.exports = function(menu) {
    return `
    <h2>Create a Plan</h2>
    <form id="add-burger" class="button-size">
      <textarea type="text" name="burger"></textarea>
      <button type="submit">Save Burger!</button>
    </form>

    <h2>Burgers to be Devoured</h2>

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