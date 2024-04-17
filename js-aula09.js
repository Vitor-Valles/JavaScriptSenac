// jquary + ajax + js + jason
// $('#btnEnviar').click(function(){});
$('#btnEnviar').click((e) => {
    e.preventDefault();
    $('.msg-error').hide();


    //criar objeto com os dados do formulario
    //=> significa função
    let dataForm={
        setName:$('#nome').val(),
        setEmail:$('#email').val(),
        setFone:$('#telefone').val(),
        setWhats:$('#WhatsApp').val()
    }
    //Validar os campos do Formulário
    if(dataForm.setName.length < 2){
        $('.msg-error').text("Nome Invalido!").show();
        return false;
    }else if(dataForm.setEmail.length <7){
        $('.msg-error').text('E-mail Invalido').show();
        return false;
    }else if(dataForm.setFone.length <11){
        $('.msg-error').text('Telefone Invalido').show();
        return false;
    }else if(dataForm.setWhats.length <11){
        $('.msg-error').text('ZAP ZAP Invalido').show();
        return false;
    }

    // //Construção do AJAX
    let urlAction = "envia.html";

    $.ajax({
         url: urlAction,
         type: 'POST',
         data: dataForm,
         dataType: 'json',
         async: true

    })
    console.log(dataForm)
});
