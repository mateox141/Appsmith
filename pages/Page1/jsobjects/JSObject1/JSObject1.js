export default {
	myVar1: [],
	myVar2: {},
	myFun1 () 
		{
			
			try{
				var valor1 = parseFloat(Input1.text) ;
				var valor2 = parseFloat(Input2.text);
				var resultado = 0
				if( Api3.data[0]['Forma de cálculo'].includes('100')){
					 resultado = (valor1/valor2)*100;
					}else{
						if(!Api3.data[0]['Forma de cálculo'].includes('100')){
							 resultado = valor1;
						}else{
							 resultado = valor1;
						}
							
					}
				
			}catch(error) {
			console.error("Error:", error);
		}
			
			Text4.setText(resultado.toFixed(2).toString());
		
		return(resultado);
		//	write code here
		//	this.myVar1 = [1,2,3]
	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}