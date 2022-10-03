<template>
	<div class="bg-gray-50">
		<div
			class="mx-auto max-w-2xl px-4 pt-16 pb-24 sm:px-6 lg:max-w-7xl lg:px-8"
		>
			<div class="mt-10 lg:mt-0">
				<h1 class="text-2xl font-medium text-gray-900">
					Protocolo de Sustentabilidade
				</h1>

				<form class="mt-4 rounded-lg border border-gray-200 bg-white shadow-sm p-4 flex flex-col gap-y-2">
          <h2 class="text-xl font-medium text-gray-900"> 1. Ambiental </h2>
          <h3 class="text-lg font-medium text-gray-900"> 1.1 Sustentabilidade </h3>
          <BaseRadioGroup title="A obra possui licença ambiental?" title-tag="h4" :options="options"/>
          <BaseRadioGroup title="Foi realizado estudo de impacto ambiental?" title-tag="h4" :options="options"/>
          <BaseRadioGroup title="As condicionantes da licença ambiental estão sendo cumpridas?" title-tag="h4" :options="options"/>

          <h3 class="text-lg font-medium text-gray-900"> 1.2 Resíduos </h3>
					<BaseRadioGroup title="A obra possiu PGRCC?" title-tag="h4" :options="options"/>
          <BaseRadioGroup title="O PGRCC está em execução?" title-tag="h4" :options="options"/>
          <BaseRadioGroup title="Os materiais passíveis de reciclágem da obra (plástico, miúdos, aço, papel e papelão) estão sendo reciclados?" title-tag="h4" :options="options"/>
          <BaseRadioGroup title="De acordo com a nbr 10.004 os Resíduos de classe I considerados perigosos (tintas, solventes e óleos) e os Resíduos classe II B considerados inertes (argamassa, concreto e cimento) estão sendo acondicionados de acordo com o PGRCC?" title-tag="h4" :options="options"/>
          <BaseRadioGroup title="De acordo com a nbr 10.004 os Resíduos de classe I considerados perigosos (tintas, solventes e óleos) e os Resíduos classe II B considerados inertes (argamassa, concreto e cimento) estão sendo transportados de acordo com o PGRCC?" title-tag="h4" :options="options"/>
          <BaseRadioGroup title="De acordo com a nbr 10.004 os Resíduos de classe I considerados perigosos (tintas, solventes e óleos) e os Resíduos classe II B considerados inertes (argamassa, concreto e cimento) estão sendo descartados de acordo com o PGRCC?" title-tag="h4" :options="options"/>
					<BaseRadioGroup title="A empresa que faz o transporte dos resíduos emite o certificado ambiental no recolhimento dos entulhos?" title-tag="h4" :options="options"/>

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
