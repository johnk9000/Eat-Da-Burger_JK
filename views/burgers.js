module.exports = function(data) {
        //console.log(data) //DEL
    return `
    <div class="container">
        <h2>Add a Burger</h2>
        <form id="add-burger" class="button-size">
        <textarea type="text" name="burger"></textarea>
        <br>
        <button type="submit">Save Burger!</button>
        </form>

        <h2>Burgers to be Devoured</h2>

        
            ${ data.burger.map(burger => {
                return `
                <card><h2> ${ burger.id } | ${ burger.burger } </h2>
                <button data-id="${ burger.id }" class="devour" href="/api/burger"> <img src="https://img.icons8.com/bubbles/50/000000/hamburger.png"/>Devour It! </button>
                </card>
                `
            }).join("\n") }
   
    </div>
    <a href="https://icons8.com/icon/123621/hamburger">Hamburger icon by Icons8</a>
    `
}