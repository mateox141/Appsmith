export default {
	myVar1: [],
	myVar2: {},
	myFun1 () 
		{
			
			try{
				
				var cualitativo ="Resultado débil";
				
				if((JSObject1.myFun1.data>=(1000*0.9))){
					cualitativo = "Resultado óptimo";
				}else{
					if((JSObject1.myFun1.data>=(1000*0.9))&&(JSObject1.myFun1.data<(1000*0.8))){
						cualitativo = "Resultado aceptable";
					}else{
						if((JSObject1.myFun1.data<(1000*0.8))){
							cualitativo=="Resultado débil";
						}
					}
				}
				
				
				
				
			//	if( Api3.data[0]['Forma de cálculo'].includes('100')){
			//		 resultado = (valor1/valor2)*100;
			//		}else{
			//			if(!Api3.data[0]['Forma de cálculo'].includes('100')){
			//				 resultado = valor1;
				//		}			
			//		}
				
			}catch(error) {
			console.error("Error:", error);
		}
			
			//Text4.setText(resultado.toFixed(2).toString());
		Text5.setText(cualitativo);
		
		return(cualitativo);
		//	write code here
		//	this.myVar1 = [1,2,3]
	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
	}
}