<template>
  <InputSwitch
    v-model="checked"
    :pt="{
      root: ({ props }) => ({
        class: [
          'inline-block relative',
          'w-full h-4',
          {
            'opacity-60 select-none pointer-events-none cursor-default':
              props.disabled,
          },
        ],
      }),
      slider: ({ props }) => ({
        class: [
          'absolute cursor-pointer top-0 left-0 right-0 bottom-0 border border-transparent rounded-2xl',
          `before:absolute before:content-[''] before:top-[50%] before:translate-y-[-50%] before:bg-white
           before:dark:bg-gray-900 before:w-3 before:h-3 before:left-1 before:rounded-full before:transition-duration-200`,
          'transition-colors duration-200 rounded-2xl',
          {
            'bg-gray-200 dark:bg-white hover:bg-gray-300 hover:dark:bg-gray-400':
              !props.modelValue,
            'bg-green-600 before:transform before:translate-x-[100%] before:dark:bg-slate-200':
              props.modelValue,
          },
        ],
      }),
    }"
  />
</template>

<script setup>
import InputSwitch from "primevue/inputswitch";
const checked = ref(true);
</script>
