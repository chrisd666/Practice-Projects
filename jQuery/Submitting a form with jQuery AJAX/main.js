$('form.ajax').on('submit', function () {
    let url = $(this).attr('action');
    let type = $(this).attr('method');
    let data = {};

    $(this).find('[name]').each(function (index, value) {
        let name = $('this').attr('name');
        let value = $('this').val();

        data[name] = value;
    });

    $.ajax({
        url: url,
        type: type,
        data: data,
        success: function (response) {
            console.log(response);
        }
    })

    return false;
})