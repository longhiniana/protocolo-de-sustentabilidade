<template>
	<div class="bg-gray-50">
		<div class="mx-auto max-w-2xl px-4 pt-16 pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
			<div class="mt-10 lg:mt-0">
				<h1 class="text-2xl font-medium text-gray-900">
					Protocolo de Sustentabilidade
				</h1>

				<form class="mt-4 rounded-lg border border-gray-200 bg-white shadow-sm p-4 flex flex-col gap-y-2">
					<h2 class="text-xl font-medium text-gray-900"> 1. Ambiental </h2>
					<h3 class="text-lg font-medium text-gray-900"> 1.1 Sustentabilidade </h3>
					<BaseRadioGroup title="A obra possui licença ambiental?" title-tag="h4" :options="options" />
					<BaseRadioGroup title="Foi realizado estudo de impacto ambiental?" title-tag="h4"
						:options="options" />
					<BaseRadioGroup title="As condicionantes da licença ambiental estão sendo cumpridas?" title-tag="h4"
						:options="options" />

					<h3 class="text-lg font-medium text-gray-900"> 1.2 Resíduos </h3>
					<BaseRadioGroup title="A obra possiu PGRCC?" title-tag="h4" :options="options" />
					<BaseRadioGroup title="O PGRCC está em execução?" title-tag="h4" :options="options" />
					<BaseRadioGroup
						title="Os materiais passíveis de reciclágem da obra (plástico, miúdos, aço, papel e papelão) estão sendo reciclados?"
						title-tag="h4" :options="options" />
					<BaseRadioGroup
						title="De acordo com a nbr 10.004 os Resíduos de classe I considerados perigosos (tintas, solventes e óleos) e os Resíduos classe II B considerados inertes (argamassa, concreto e cimento) estão sendo acondicionados de acordo com o PGRCC?"
						title-tag="h4" :options="options" />
					<BaseRadioGroup
						title="De acordo com a nbr 10.004 os Resíduos de classe I considerados perigosos (tintas, solventes e óleos) e os Resíduos classe II B considerados inertes (argamassa, concreto e cimento) estão sendo transportados de acordo com o PGRCC?"
						title-tag="h4" :options="options" />
					<BaseRadioGroup
						title="De acordo com a nbr 10.004 os Resíduos de classe I considerados perigosos (tintas, solventes e óleos) e os Resíduos classe II B considerados inertes (argamassa, concreto e cimento) estão sendo descartados de acordo com o PGRCC?"
						title-tag="h4" :options="options" />
					<BaseRadioGroup
						title="A empresa que faz o transporte dos resíduos emite o certificado ambiental no recolhimento dos entulhos?"
						title-tag="h4" :options="options" />
					<h3 class="text-lg font-medium text-gray-900"> 1.3 Água </h3>
					<BaseRadioGroup
						title="A água da lavagem dos caminhões betoneiras está sendo armazenada sem contato direto com o solo ?"
						title-tag="h4" :options="options" />
					<BaseRadioGroup
						title="A água da lavagem dos caminhões está sendo destinada para o tratamento de efluentes ?"
						title-tag="h4" :options="options" />
					<BaseRadioGroup title="Existe controle do consumo de água utilizada pela obra?" title-tag="h4"
						:options="options" />
					<BaseRadioGroup title="Existe reaproveitamento de água?" title-tag="h4" :options="options" />
					<BaseRadioGroup
						title="A água da chuva está sendo captada e reaproveitada para a utilização na obra ?"
						title-tag="h4" :options="options" />
					<BaseRadioGroup title="Existe algum tipo de sistema de redução de Desperdícios de água?"
						title-tag="h4" :options="options" />
					<h3 class="text-lg font-medium text-gray-900"> 1.4 Energia </h3>
					<BaseRadioGroup title="Existe algum tipo de controle de gastos de energia?" title-tag="h4"
						:options="options" />
					<BaseRadioGroup title="Está sendo utilizada alguma energia renovável na obra?" title-tag="h4"
						:options="options" />
					<BaseRadioGroup title="A iluminação natural foi levada em conta na hora da execução do projeto?"
						title-tag="h4" :options="options" />
					<h3 class="text-lg font-medium text-gray-900"> 1.5 Impacto na vizinhança </h3>
					<BaseRadioGroup title="Existe controle de resíduos nas redondezas da obra e na vizinhança?"
						title-tag="h4" :options="options" />
					<BaseRadioGroup title="Existe monitoramento de ruído na obra? " title-tag="h4" :options="options" />
					<BaseRadioGroup title="Na aquisição de maquinários é levado em consideração a geração de ruídos? "
						title-tag="h4" :options="options" />
					<BaseRadioGroup
						title="Com o início da obra houve aumento significativo do trânsito na circunvizinhança?"
						title-tag="h4" :options="options" />
					<BaseRadioGroup title="Houve acidentes com terceiros até o momento? " title-tag="h4"
						:options="options" />
					<BaseRadioGroup
						title="A construtura realiza a limpeza com caminhão pipa nas ruas envolta da obra para retirar a poeira excedente ?"
						title-tag="h4" :options="options" />
					<h3 class="text-lg font-medium text-gray-900"> 1.6 Solo </h3>
					<BaseRadioGroup title="Teve adaptação a topografia local? " title-tag="h4" :options="options" />
					<BaseRadioGroup title="Existe plano de recuperação de área degradada?   " title-tag="h4"
						:options="options" />
					<h2 class="text-xl font-medium text-gray-900"> 2. Social </h2>
					<BaseRadioGroup title="A obra possui PCMAT ? " title-tag="h4" :options="options" />
					<BaseRadioGroup title="O PCMAT está em execução ? " title-tag="h4" :options="options" />
					<BaseRadioGroup title="A empresa possui instalações sanitárias adequadas ? " title-tag="h4"
						:options="options" />
					<BaseRadioGroup title="A empresa oferece para os funcionários EPI para a realização dos serviços?"
						title-tag="h4" :options="options" />
					<BaseRadioGroup title="Os funcionários estão utilizando os EPIs de forma adequada? " title-tag="h4"
						:options="options" />
					<BaseRadioGroup
						title="Os funcionários receberam uma instrução de treinamento (I.T) e/ou cursos de capacitação ?"
						title-tag="h4" :options="options" />
					<BaseRadioGroup title="É oferecido EPC's? " title-tag="h4" :options="options" />
					<h2 class="text-xl font-medium text-gray-900"> 3. Econômico </h2>
					<BaseRadioGroup
						title="Houve um planejamento antecipado da quantidade de material que seria utilizado e o tempo que seria gasto em cada parte do desenvolvimento da obra?"
						title-tag="h4" :options="options" />
					<BaseRadioGroup
						title="O método PDCA do inglês “plan-do-check-act” - planejar,fazer,checar e agir está sendo utilizado na obra? "
						title-tag="h4" :options="options" />
					<BaseRadioGroup
						title="Os materiais disponíveis na obra estão sendo utilizados de forma racional para evitar o desperdício ?"
						title-tag="h4" :options="options" />
					<div class="border-t border-gray-200 mt-4 py-6 px-4 sm:px-6">
						<BaseButton>Calcular resultados</BaseButton>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>
<script setup>
const options = ['Não', 'Parcial', 'N.A', 'Sim']
</script>
