<template>
	<div>
		<div class="flex items-center justify-between">
			<component :is="titleTag" class="text-base font-medium text-gray-900">
				{{title}}
			</component>
		</div>
		<RadioGroup class="mt-2">
			<div class="grid grid-cols-3 gap-3 sm:grid-cols-6">
				<RadioGroupOption
					as="template"
					v-for="(option, index) in options"
					:key="`option-${index}`"
					:value="option"
					v-slot="{ active, checked }"
				>
					<div
						:class="[
							active ? 'ring-2 ring-offset-2 ring-indigo-500' : '',
							checked
								? 'bg-indigo-600 border-transparent text-white hover:bg-indigo-700'
								: 'bg-white border-gray-200 text-gray-900 hover:bg-gray-50',
							'border rounded-md py-3 px-3 flex items-center cursor-pointer justify-center text-sm font-medium uppercase sm:flex-1',
						]"
					>
						<RadioGroupLabel as="span">{{ option }}</RadioGroupLabel>
					</div>
				</RadioGroupOption>
			</div>
		</RadioGroup>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
	name: 'BaseRadioGroup',
})
</script>

<script lang="ts" setup> 
import { RadioGroup, RadioGroupDescription, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'

defineProps({
  title: {
		type: String, required: true
	},
  titleTag: {
		type: String, required: true
	},
	options: {
		type: Array, required: true
	},
})

</script>
