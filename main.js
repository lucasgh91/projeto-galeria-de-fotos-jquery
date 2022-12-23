$(document).ready(() => {
    $('header button').click(() => {
        $('form').slideDown()
    })

    $('#botao-cancelar').click(() => {
        $('form').slideUp()
    })

    $('form').on('submit', (e) => {
        e.preventDefault()
        const enderecoImagem = $('#endereco-imagem-nova').val()
        const novoItem = $('<li style="display: none;"></li>')
        $(`<img src="${enderecoImagem}">`).appendTo(novoItem)
        $(`<div class="overlay-imagem-link"><a href="${enderecoImagem}" target="_blank" title="Ver imagem em tamanho real">Ver imagem em tamanho real</a></div>`).appendTo(novoItem)
        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn(1000)
        $('#endereco-imagem-nova').val('')
    })
})