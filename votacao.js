var rodada=1;
var contAux=1;
var contAuxExc=0;
var carros = [ 
   {
     nome: "AUDI",
     img:"images/audi.jfif"
},
{
     nome: "CADILLAC",
     img:"images/cadillac.jfif"
},
{
     nome: "FERRARI",
     img:"images/ferrari.jfif"
},
{
     nome: "JIPE",
     img:"images/jipe.jfif"
},
{
     nome: "FUSCA",
     img:"images/fusca.jpg"
},
{
     nome: "CAMARO",
     img:"images/camaro.jfif"
},
{
     nome: "LIMOUSINE",
     img:"images/limousine.jfif"
},
{
     nome: "OPALA",
     img:"images/opala.jpg"
}
]


//var imgs=["audi.jfif", "cadillac.jfif", "ferrari.jfif", "jipe.jfif", "fusca.jpg", "camaro.jfif","limousine.jfif","opala.jpg"];
var firstImg=true;

function verifyRadios(){
	
	if(rodada == 9){ //vencedor
	  gameFinal();
		
	}
	
	else{
		
	if(document.getElementById('radioImg1').checked) {
		firstImg=true;
		removeArray(firstImg);
		loadImage();
				
	}else if(document.getElementById('radioImg3').checked) {
		firstImg=false;
		removeArray(firstImg);
		loadImage();
						
	}
	}
	
}



function loadImage(){
	if (rodada==4){
		contAux=0; 
		contAuxExc=0;		
		document.getElementById("img1").src =carros[contAux].img;//  //carrega imagem do array com o indice do contAux
		document.getElementById("labelImg1").innerHTML =carros[contAux].nome;
		document.getElementById("img3").src =carros[contAux+1].img; //carrega imagem do array com o indice do contAux
		document.getElementById("labelImg3").innerHTML =carros[contAux+1].nome;
		rodada++;
		loadImage();
	}
	else if (rodada==7){
		contAux=0; 
		contAuxExc=0;
		document.getElementById("img1").src =carros[contAux].img;//  //carrega imagem do array com o indice do contAux
		document.getElementById("labelImg1").innerHTML =carros[contAux].nome;
		document.getElementById("img3").src =carros[contAux+1].img; //carrega imagem do array com o indice do contAux
		document.getElementById("labelImg3").innerHTML =carros[contAux+1].nome;
		rodada++;
		loadImage();
	}
	else{
		document.getElementById("img1").src =carros[contAux].img;//  //carrega imagem do array com o indice do contAux
		document.getElementById("labelImg1").innerHTML =carros[contAux].nome;
		document.getElementById("img3").src =carros[contAux+1].img; //carrega imagem do array com o indice do contAux
		document.getElementById("labelImg3").innerHTML =carros[contAux+1].nome;
	 	rodada++;
	 	contAux++;
	}
 }
 
 
function removeArray(firstImg){

	if (firstImg){//exclui imagem do objeto correspondente ao primeiro radio button
		carros.splice((contAuxExc+1), 1);
		contAuxExc++;		
	}
	else{//exclui imagem do objeto correspondente ao segundo radio button
		carros.splice(contAuxExc, 1);
		contAuxExc++;		
	}	
}

function gameFinal(){
	document.getElementById("titulo").innerHTML = 'VENCEDOR';
	document.getElementById("buttonProx").disabled=true;
	document.getElementById("buttonProx").style.visibility = 'hidden';
	document.getElementById("dv2").style.visibility = 'hidden';
	
	
	if(document.getElementById('radioImg1').checked) {
		document.getElementById("dv3").style.visibility = 'hidden'
		document.getElementById("img1").src =carros[0].img;	
	
	}else if(document.getElementById('radioImg3').checked) {
		document.getElementById("dv1").style.visibility = 'hidden';
		document.getElementById("img3").src =carros[1].img;
	}
}
