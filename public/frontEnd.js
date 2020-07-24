$.get("/api/burger", (data) => {

    console.log(data)

    if(data.length) {

        data.forEach(entry => {
            var cardGen = $('<card>')
            cardGen.attr('data-id', entry.id)
            cardGen.text(entry.burger)
            $('.burger-list').append(cardGen)
        });

    }

})