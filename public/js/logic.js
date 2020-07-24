$(function() {
    $('#add-form').on("submit", e => {
        
        e.preventDefault()
        console.log('clicked add button')
        if($('#add-burger') !== ""){
            var newBurger = {
                burger: $('#add-burger').val().trim(),
                eaten: 0
            }
                console.log(newBurger) // DEL
            $.ajax("/api/burger", {type: "POST", data: newBurger})
            .then(function() {
                console.log('added new burger')
                location.reload()
            })
        }
    })

    $('.devour').on("click", function() {
        console.log('clicked eat button')
        //e.preventDefault()
        var id = $(this).data("id")
        console.log(this, id)
        $.ajax("/api/burger/" + id, {type: "POST"})
            .then( 
            function() {
        console.log('eating burger...')
        location.reload();
        })
    })
})