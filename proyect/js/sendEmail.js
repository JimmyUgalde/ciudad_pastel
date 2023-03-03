const sendMail= document.getElementById('mailA')
$('#sendemail').click(function(){
    const clientName = $('#Cname').val();
    const clientTel = $('#Ctel').val();
    const clientemail = $('#Cemail').val();
    const clientDesc = $('#Cdesc').val();
    sendMail.setAttribute('href','mailTo:laraoscar2310@gmail.com?subject=Interes Cliente '+ clientName +'&body=Nombre: '+ clientName +'%0ACelular: ' + clientTel + '%0ACorreo: '+ clientemail + '%0A' + clientDesc.textContent)
    sendMail.click()
})

$('.btn-course').click(function() {
    $(".modal").modal('show');
});
