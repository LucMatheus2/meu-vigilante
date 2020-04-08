//Função Principal
		function validarCPF(CPF){
			var JS_CPF = CPF
			var intCPF = JS_CPF

			preencherCPF(JS_CPF)
			intCPF = converterCPF(JS_CPF)
			
			if(intCPF.length == 11) {
				return validarOsDigitos(intCPF)
			}

		}

		//Funções Auxiliares
		function preencherCPF(CPF){
			var conteudoCPF = CPF.value
			var tamCPF = conteudoCPF.length

			if (tamCPF == 3 || tamCPF == 7){
				CPF.value += "."
			}
			else if (tamCPF == 11) {
				CPF.value += "-"
			}
		}

		function converterCPF(cpf){
			cpf = cpf.value
			cpf = cpf.replace(".","")
			cpf = cpf.replace(".","")
			cpf = cpf.replace("-","")
			
			if (isNaN(cpf)){
				return false
			} else {
				Number.parseInt(cpf)
				return cpf
			}
		}

		function validarOsDigitos(CPF){
			var PrimeiroDigito = Number(String(CPF).slice(-2,-1))
			var SegundoDigito = Number(String(CPF).slice(-1))
			var CPFString = String(CPF)
			
			var i = 0
			var j = 0
			var soma = 0

			let resto = 0
			let validacao = 0

			//Verificando o primeiro digito
			for (j=10;j>=2;j--){
				soma += (Number.parseInt(CPFString[i]) * j)
				i++
			}
			resto = (soma*10)%11

			if (resto == PrimeiroDigito) {
				validacao++
			}

			//Verificando o segundoDigito
			i = 0
			for (j=11;j>=2;j--){
				soma += (Number.parseInt(CPFString[i]) * j)
				i++
			}
			resto = (soma*10)%11

			if (resto == SegundoDigito) {
				validacao++
			}

			//Validação final
			if (validacao == 2) {
				return true
			} else {
				return false
			}
		}