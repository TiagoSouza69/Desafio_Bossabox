//Comandos aplicados por Tiago S.Souza em resposta ao desafio frontend da BossaBox 
// feito nos primeiros dias de Abril de 2021

function adicionar(){
    
	alert("Ferramenta adicionada com sucesso!");
    
	var title = document.getElementById("title");
	var link = document.getElementById("link");
	var desc = document.getElementById("desc")
	var tgs = document.getElementById("tgs");
	var dados = JSON.parse(localStorage.getItem("dadosferramentas"));
	
	if (dados == null){
		localStorage.setItem("dadosferramentas", "[]" );
		dados = [];
	}  
	var cadastro = {
		title  : title.value,
		link : link.value,
		desc : desc.value,
		tags : tgs.value
		
	}
  dados.push(cadastro);
  dados.forEach(function (tools){
   document.body.innerHTML += "<div>"+tools.title+"</div>" ;
   document.body.innerHTML += "<div>"+tools.link+"</div>" ;
   document.body.innerHTML += "<div>"+tools.desc+"</div>" ;
   document.body.innerHTML += "<div>"+tools.tgs+"</div>" ;
  });
   
  console.log(dados);
  document.getElementById("ferramenta4").innerHTML= dados;
      
   function remove(){
		var id = document.getElementById("id");  
		var dados = JSON.parse(localStorage.getItem("dadosferramentas"));
        var cadastro = {
			id  : id.value,
			title  : title.value,
			link : link.value,
			desc : desc.value,
			tags : tgs.value
			
		}
		dados.delete(cadastro.id);
		dados.forEach(function (tools){
		 document.body.innerHTML += "<div>"+tools.title+"</div>" ;
		 document.body.innerHTML += "<div>"+tools.link+"</div>" ;
		 document.body.innerHTML += "<div>"+tools.desc+"</div>" ;
		 document.body.innerHTML += "<div>"+tools.tgs+"</div>" ;
		})
	}

}
function rt1() {
    fetch('http://localhost:3000/tools?q=Notion', {method:'DELETE'})
    .then(alert("Ferramenta retirada com sucesso!"))
    .then(response => response.json())
           .then(json => {
             const div = document.getElementById("ferramenta1");
             div.innerHTML = JSON.stringify(json);
           } ) 
  }

  function rt2() {
    fetch('http://localhost:3000/tools?q=json-server', {method:'DELETE'})
    .then(alert("Ferramenta retirada com sucesso!"))
    .then(response => response.json())
           .then(json => {
             const div = document.getElementById("ferramenta2");
             div.innerHTML = JSON.stringify(json);
           } ) 
  }
  function rt3() {
    fetch('http://localhost:3000/tools?q=fastify', {method:'DELETE'})
    .then(alert("Ferramenta retirada com sucesso!"))
    .then(response => response.json())
           .then(json => {
             const div = document.getElementById("ferramenta3");
             div.innerHTML = JSON.stringify(json);
           } ) 
  }
  fetch('http://localhost:3000/tools?q=Notion')
  .then(response => response.json())
  .then(json => {
	const div = document.getElementById("ferramenta1");
	div.innerHTML = JSON.stringify(json);
  } )
  fetch('http://localhost:3000/tools?q=json-server')
           .then(response => response.json())
           .then(json => {
             const div = document.getElementById("ferramenta2");
             div.innerHTML = JSON.stringify(json);
           } )
		   fetch('http://localhost:3000/tools?q=fastify')
           .then(response => response.json())
           .then(json => {
             const div = document.getElementById("ferramenta3");
             div.innerHTML = JSON.stringify(json);
           } )