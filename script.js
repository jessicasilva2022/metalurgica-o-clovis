function goToWhatsapp(form)
{
	var input = form.Email.value;
	alert(input);
	location.assign("https://wa.me/5585985243868?text=Oi,%20%0ADiga%20o%20que%20voc%C3%AA%20precisa?!"+input);
}