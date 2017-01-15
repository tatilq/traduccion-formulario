//funcion que traduce al español
function traslateSpanish()
{
	document.querySelector('p').innerHTML="Selecciona un Idioma";
	document.getElementById('english').innerHTML="Ingles";
	document.getElementById('spanish').innerHTML="Español";
	document.getElementById('form-signin-heading').innerHTML="Por favor inicia sesión";
	document.getElementById('inputEmail').placeholder="Ingresa correo clectronico";
	document.getElementById('inputPassword').placeholder="Contraseña";
	document.querySelector('span').innerHTML="Recordar datos";
	document.querySelector('button').innerHTML="Iniciar Sesión";
}
//funcion que traduce al ingles
function traslateEnglish()
{
	document.querySelector('p').innerHTML="Select a language";
	document.getElementById('english').innerHTML="English";
	document.getElementById('spanish').innerHTML="Spanish";
	document.getElementById('form-signin-heading').innerHTML="Please sign in";
	document.getElementById('inputEmail').placeholder="Please enter your email";
	document.getElementById('inputPassword').placeholder="Password";
	document.querySelector('span').innerHTML="Remember me";
	document.querySelector('button').innerHTML="Sign in";
}
