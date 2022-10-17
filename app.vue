<template>
	<div class="bg-gray-50">
		<div class="px-4 pt-16 pb-24 mx-auto sm:px-6 lg:px-8 max-w-[90ch]">
			<div class="mt-10 lg:mt-0">
				<h1 class="text-2xl font-medium text-gray-900">
					Protocolo de Sustentabilidade
				</h1>

				<section
					class="flex flex-col justify-center gap-4 p-4 mt-4 bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row"
				>
					<form class="flex flex-col flex-1 gap-y-2">
						<component
							v-for="(item, index) in protocolForm"
							v-bind="whichPropsAndAttributes(item)"
							:key="index"
							:is="whichComponent(item)"
							@update:modelValue="update"
						>
							<slot v-if="item?.type !== 'indicator'">{{ item?.text }}</slot>
						</component>
					</form>
					<div class="sticky top-0 mx-auto max-w-[300px]">
						<BaseChart :indicators="indicators" :serie="answers" />
						<table class="w-full">
							<thead>
								<tr>
									<th>Não</th>
									<th>Parcial</th>
									<th>N.A</th>
									<th>Sim</th>
								</tr>
							</thead>
							<tbody>
								<tr class="text-center">
									<td v-for="item in options" :key="item">{{computeAnswers[item]}}</td>
								</tr>
							</tbody>
						</table>
					</div>
				</section>
			</div>
		</div>
	</div>
</template> 
<script setup> 
const options = ['Não', 'Parcial', 'N.A', 'Sim']

const Indicator = (text) => ({
	text,
	type: 'indicator',
	options,
	value: options[0]
})


const protocolForm = ref([
	{
		type: 'category',
		text: '1. Ambiental'
	},
	{
		type: 'sub-category',
		text: '1.1. Sustentabilidade'
	},
	Indicator('A obra possui licença ambiental?'),
	Indicator('Foi realizado estudo de impacto ambiental?'),
	Indicator('As condicionantes da licença ambiental estão sendo cumpridas?'),
	{
		type: 'sub-category',
		text: '1.2. Resíduos'
	},
	Indicator('A obra possiu PGRCC?'),
	Indicator('O PGRCC está em execução?'),
	Indicator('Os materiais passíveis de reciclágem da obra (plástico, miúdos, aço, papel e papelão) estão sendo reciclados?'),
	Indicator('De acordo com a nbr 10.004 os Resíduos de classe I considerados perigosos (tintas, solventes e óleos) e os Resíduos classe II B considerados inertes (argamassa, concreto e cimento) estão sendo acondicionados de acordo com o PGRCC?'),
	Indicator('De acordo com a nbr 10.004 os Resíduos de classe I considerados perigosos (tintas, solventes e óleos) e os Resíduos classe II B considerados inertes (argamassa, concreto e cimento) estão sendo transportados de acordo com o PGRCC?'),
	Indicator('De acordo com a nbr 10.004 os Resíduos de classe I considerados perigosos (tintas, solventes e óleos) e os Resíduos classe II B considerados inertes (argamassa, concreto e cimento) estão sendo descartados de acordo com o PGRCC?'),
	Indicator('A empresa que faz o transporte dos resíduos emite o certificado ambiental no recolhimento dos entulhos?'),
	{
		type: 'sub-category',
		text: '1.3. Água'
	},
	Indicator('A água da lavagem dos caminhões betoneiras está sendo armazenada sem contato direto com o solo?'),
	Indicator('A água da lavagem dos caminhões está sendo destinada para o tratamento de efluentes?'),
	Indicator('Existe controle do consumo de água utilizada pela obra?'),
	Indicator('Existe reaproveitamento de água?'),
	Indicator('A água da chuva está sendo captada e reaproveitada para a utilização na obra ?'),
	Indicator('Existe algum tipo de sistema de redução de Desperdícios de água?'),
	{
		type: 'sub-category',
		text: '1.4. Energia'
	},
	Indicator('Existe algum tipo de controle de gastos de energia?'),
	Indicator('Está sendo utilizada alguma energia renovável na obra?'),
	Indicator('A iluminação natural foi levada em conta na hora da execução do projeto?'),
	{
		type: 'sub-category',
		text: '1.5. Impacto na vizinhança'
	},
	Indicator('Existe controle de resíduos nas redondezas da obra e na vizinhança?'),
	Indicator('Existe monitoramento de ruído na obra?'),
	Indicator('Na aquisição de maquinários é levado em consideração a geração de ruídos?'),
	Indicator('Com o início da obra houve aumento significativo do trânsito na circunvizinhança?'),
	Indicator('Houve acidentes com terceiros até o momento?'),
	Indicator('A construtura realiza a limpeza com caminhão pipa nas ruas envolta da obra para retirar a poeira excedente ?'),
	{
		type: 'sub-category',
		text: '1.6. Solo'
	},
	Indicator('Teve adaptação a topografia local?'),
	Indicator('Existe plano de recuperação de área degradada?'),
	{
		type: 'category',
		text: '2. Social'
	},
	Indicator('A obra possui PCMAT?'),
	Indicator('O PCMAT está em execução?'),
	Indicator('A empresa possui instalações sanitárias adequadas?'),
	Indicator('A empresa oferece para os funcionários EPI para a realização dos serviços?'),
	Indicator('Os funcionários estão utilizando os EPIs de forma adequada?'),
	Indicator('Os funcionários receberam uma instrução de treinamento (I.T) e/ou cursos de capacitação?'),
	Indicator('É oferecido EPC\'s?'),
	{
		type: 'category',
		text: '3. Econômico'
	},
	Indicator('Houve um planejamento antecipado da quantidade de material que seria utilizado e o tempo que seria gasto em cada parte do desenvolvimento da obra?'),
	Indicator('O método PDCA do inglês “plan-do-check-act” - planejar,fazer,checar e agir está sendo utilizado na obra?'),
	Indicator('Os materiais disponíveis na obra estão sendo utilizados de forma racional para evitar o desperdício ?'),
]
)

const indicators = computed(() => Array.from(protocolForm.value).filter(el => el?.type === 'indicator'))

const answers = computed(() => {
	const newValue = (value) => options.findIndex(el => el === value) + 1
	return indicators.value.map(el => newValue(el.value))
})

const computeAnswers = computed(() => indicators.value.reduce((accumulator, value) => {
	return { ...accumulator, [value.value]: (accumulator[value.value] || 0) + 1 };
}, Object.fromEntries(options.map(el => [el, 0])))
)


const whichComponent = (item) => {
	if (!item) return {}
	const types = {
		'category': 'h2',
		'sub-category': 'h3',
		'indicator': resolveComponent('BaseRadioGroup'),
		'default': 'span'
	}
	return types[item.type]
}

const whichPropsAndAttributes = (item) => {
	if (!item) return {}

	const types = {
		'category': {
			class: 'text-xl font-medium text-gray-900 first:mt-0 mt-4'
		},
		'sub-category': {
			class: 'text-lg font-medium text-gray-900 first:mt-0 mt-4'
		},
		'indicator': {
			title: item.text,
			titleTag: "h4",
			options: item.options,
			option: item.value,
			class: 'last:mb-0 mb-2'
		}
	}

	return types[item.type]
}

const update = ({ indicator, option }) => {
	const index = indicators.value.findIndex(el => el.text === indicator)

	indicators.value[index].value = option
}

</script>
