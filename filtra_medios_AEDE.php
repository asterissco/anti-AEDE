<?php
	
	/**
	 *  author: 		asterissco
	 *  license: 		Creative Commons Reconocimiento-NoComercial-CompartirIgual 3.0 Unported License.
	 *  require:		php-cli 5+
	 *  
	 *  description:
	 * 
	 * 		Filtra los medios de AEDE de la web de AEDE para tener un mejor control de que medios pertenece 
	 *  	o no a este asociación. La salida es una cadena embedida en una expresión regular para ser agregada
	 * 		al script JS https://github.com/FabianPastor/anti-AEDE
	 * 
	 * 		asterissco odia la expresiones regulares, por eso se complica tanto la vida.
	 * 
	 * */

	//cojo el contenido
	$file="http://aede.es/publica/Periodicos_Asociados.asp";
	$handle=@fopen($file,"r");
	
	if($handle){
	
		//lo recorro linea a liena
		while(($line=fgets($handle,4096))!==false){

			//hay un enlace en la cadena
			if(strpos($line,"href") and (!strpos($line,"td") and !strpos($line,"css") and !strpos($line,"java"))){
			
				//cojo la cadena desde el href=""
				$base 	= strpos($line,'"',strpos($line,"href"));
				$offset = strpos($line,'"',$base+1);
				$url=substr($line,$base,$offset-($base)+1);			
				$url=str_ireplace('"','',$url);

				//ya tengo una URL
				
				//quito el protocolo capa 5 de existir
				if(substr($url,0,8)=="https://"){
					$url=substr($url,5,strlen($url));
				}
					
				if(substr($url,0,7)=="http://"){
					$url=substr($url,7,strlen($url));
				}
				
				//en este contexto slash y punto son caracteres fiables
				//filtra el FQDN 
				$arrSDL	= explode('/',$url);
				$FQDN   = $arrSDL[0];
				
				//filtro el SDL
				if(count(explode(".",$FQDN))>2){
					$arrDomainName = explode(".",$FQDN);
					$url=$arrDomainName[count($arrDomainName)-2].".".$arrDomainName[count($arrDomainName)-1];
				}
				
				//el SDL lo concateno con el resto
				for($n=1;$n<count($arrSDL);$n++){
					$url.="/".$arrSDL[$n];
				}
				
				//tengo la URL formalizada, le agrego expresión regular
				$url	= str_ireplace(".",'\.',$url);
				$url	= str_ireplace("/",'\/',$url);
				
				echo '/(^|(^[^\/]*\.)|(^http(s?):\/\/)|(^http(s?):\/\/)[^\/]*\.)'.$url.'(\/|$)/,'."\n";
					
			}
		
		}
		
	}else{
	
		echo "No hay acceso al medio\n";
		
	}
	
?>
