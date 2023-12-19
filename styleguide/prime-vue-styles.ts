// Function below is just for class sorting tailwind
const tw = (strings: string, ...values: any) =>
  String.raw({ raw: strings }, ...values);

export const primeVueDropdownStyled = {
  root: ({ props }: any) => ({
    class: [
      "w-full",
      tw("relative inline-flex cursor-pointer select-none"),
      tw("rounded-md border-2 border-blue-200 bg-white"),
      tw("dark:border-gray-600 dark:bg-gray-700"),
      {
        [tw("pointer-events-none cursor-default select-none opacity-60")]:
          props.disabled,
      },
    ],
  }),
  input: ({ props }: any) => ({
    class: [
      tw(
        "relative block flex flex-auto cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap",
      ),
      tw("border-0 bg-transparent text-gray-800"),
      tw("text-sm dark:text-white"),
      tw(
        "appearance-none rounded bg-transparent p-[10px] font-sans text-base transition duration-200",
      ),
      tw("focus:border-blue-500"),
      { "pr-7": props.showClear },
    ],
  }),
};

export const primeVueInputNumberStyled = {
  root: "w-full inline-flex",
  input: {
    root: {
      class: [
        "mb-4 block !w-full rounded-lg border-2 !border-blue-200 p-[10px] text-sm text-gray-900 shadow-sm",
        "focus:!border-blue-500 focus:shadow-none focus:outline-none focus:outline-0",
        "dark:!border-gray-600 dark:!bg-gray-700",
        "dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:shadow-none",
      ],
    },
  },
};

export const primeVueMultiSelectStyled = (isOpen: globalThis.Ref<boolean>) => {
  return {
    root: ({ props }: any) => {
      return {
        class: [
          "inline-flex w-full cursor-pointer select-none rounded-md border-2 bg-white text-sm shadow-sm dark:bg-gray-700",
          "mb-4 active:!border-blue-500",
          {
            "pointer-events-none cursor-pointer select-none opacity-60":
              props?.disabled,
          },
          { [tw("border-blue-500 dark:border-blue-500")]: isOpen?.value },
          { [tw("border-blue-200 dark:border-gray-600")]: !isOpen?.value },
        ],
      };
    },

    label: { class: "p-2.5 dark:text-white" },
    item: ({ context }: any) => ({
      class: [
        "relative cursor-pointer overflow-hidden whitespace-nowrap font-normal",
        "m-0 rounded-none border-0  p-3 transition-shadow duration-200",
        {
          "text-white-700 hover:bg-gray-200 hover:text-gray-400 dark:text-white dark:hover:bg-gray-800":
            !context.focused && !context.selected,

          "bg-gray-300 text-gray-700 hover:bg-gray-200 hover:text-gray-700 dark:bg-gray-800/90 dark:text-white dark:text-white dark:hover:bg-gray-800":
            context.focused && !context.selected,

          "bg-blue-100 text-blue-700 dark:bg-gray-600 dark:text-white":
            context.focused && context.selected,
          "text-white-700 bg-blue-50 dark:bg-gray-600 dark:text-white":
            !context.focused && context.selected,
        },
      ],
    }),

    checkbox: ({ context }: any) => ({
      class: [
        "flex items-center justify-center",
        "h-6 w-6 rounded-lg border-2 text-gray-600 transition-colors duration-200 dark:text-white",
        "hover:border-green-500 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] focus:outline-none focus:outline-offset-0 dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]",

        {
          "border-gray-300 bg-white  dark:border-blue-900/40 dark:bg-gray-900":
            !context?.selected,
          "border-green-500 bg-green-500": context?.selected,
        },
      ],
    }),
  };
};

export const primeVueSwitchStyled = {
  root: ({ props }: any) => ({
    class: [
      "inline-block relative",
      "w-full h-4",
      {
        "opacity-60 select-none pointer-events-none cursor-default":
          props.disabled,
      },
    ],
  }),
  slider: ({ props }: any) => ({
    class: [
      "absolute cursor-pointer top-0 left-0 right-0 bottom-0 border border-transparent rounded-2xl",
      `before:absolute before:content-[''] before:top-[50%] before:translate-y-[-50%] before:bg-white
           before:dark:bg-gray-900 before:w-3 before:h-3 before:left-1 before:rounded-full before:transition-duration-200`,
      "transition-colors duration-200 rounded-2xl",
      {
        "bg-gray-200 dark:bg-white hover:bg-gray-300 hover:dark:bg-gray-400":
          !props.modelValue,
        "bg-green-600 before:transform before:translate-x-[100%] before:dark:bg-slate-200":
          props.modelValue,
      },
    ],
  }),
};
