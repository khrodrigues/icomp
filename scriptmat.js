function conteudo(){
	conteud.style="display:block";
	ativ.style="display:none";
	cha.style="display:none";
	not.style="display:none";
	}
	function atividades(){
	ativ.style="display:block";
	conteud.style="display:none";
	cha.style="display:none";
	not.style="display:none";
	}
	function notas(){
	not.style="display:block";
	ativ.style="display:none";
	conteud.style="display:none";
	cha.style="display:none";
	}
	function chat(){
	cha.style="display:block";
	ativ.style="display:none";
	not.style="display:none";
	conteud.style="display:none";
	}
	function aovivo(){
	alert("Solicitação executada com sucesso, aguarde contato por telefone");
	}
	function mudarLink() {
  var baixar = document.getElementById('baixar');
  baixar.href = "http://cdn.sstatic.net/img/share-sprite-new.svg?v=24e64812c790";
  baixar.innerHTML = "Baixar imagem Stack Exchange";
}