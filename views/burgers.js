module.exports = function(data) {
        //console.log(data) //DEL
    return `
    <div class="container">
        <h2>Add a Burger</h2>
        <form id="add-form">
        <input type="text" name="burger" id="add-burger"></input>
        <br>
        <button type="submit" class="add-btn">Save Burger!</button>
        </form>

        <h2>Burgers to be Devoured</h2>
        
            ${ data.burger.map(burger => {
                if(!burger.eaten) {
                return `
                <card data-eaten="${ burger.eaten }"><p>  ${ burger.burger } </p>
                <button data-id="${ burger.id }" class="devour"> <img src="https://img.icons8.com/bubbles/50/000000/hamburger.png"/>Devour It! </button>
                </card>
                `}
            }).join("\n") }
   
    </div>
    <a href="https://icons8.com/icon/123621/hamburger">Hamburger icon by Icons8</a>
    `
}