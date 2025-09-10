<script setup lang="ts">
import { computed } from "vue";
import { safeRandomUUID, tw, useInheritAttrs } from "@bynd/core";
import type { ButtonProps } from "~ui/schemas";

defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(defineProps<ButtonProps>(), {
  disabled: false,
  type: "button",
  color: "primary",
  fill: "solid",
  size: "48",
});

const emit = defineEmits<{
  click: [event: MouseEvent];
  change: [event: Event];
}>();

const { inheritClass, restAttrs } = useInheritAttrs();
const id = safeRandomUUID();
const buttonRef = useTemplateRef<HTMLButtonElement>("button");

const buttonType = computed(() => {
  if (props.type === "file") {
    return "button";
  }
  return props.type;
});

const sizeClass = computed(() => {
  switch (props.size) {
    case "none":
      return "h-auto px-0 py-0";
    case "32":
      return "h-8 typo-body-14-R px-2";
    case "40":
      return "h-10 typo-body-16-R min-w-22 px-4";
    case "48": // default
      return "h-12 typo-body-16-SB min-w-22 px-4";
    case "52":
      return "h-14 typo-body-16-SB min-w-22 px-4";
    case "56":
      return "h-16 typo-body-16-SB min-w-22 px-4";
    default:
      return "h-12 typo-body-16-SB min-w-22 px-4";
  }
});

//  버튼 스타일(fill) + 색상(color)에 따른 클래스 반환
const fillClass = computed(() => {
  const color = props.color || "primary";

  switch (props.fill) {
    case "solid": // default
      return solidClass(color);
    case "outline":
      return outlineClass(color);
    case "clear":
      return clearClass(color);
    default:
      return solidClass(color);
  }
});

// solid 버튼 스타일 (배경이 채워진 형태)
const solidClass = (color: string) => {
  switch (color) {
    case "primary":
      return `bg-primary-80 text-text-white border border-primary-80 focus-visible:bg-primary-90 hover:bg-primary-90 active:bg-primary-95`;
    case "point":
      return `bg-point text-text-white border border-point focus-visible:bg-point-90 hover:bg-point-90 active:bg-point-95`;
    default:
      return `bg-primary-80 text-text-white border border-primary-80 focus-visible:bg-primary-90 hover:bg-primary-90 active:bg-primary-95`;
  }
};

// outline 버튼 스타일 (테두리만 있고 배경은 투명)
const outlineClass = (color: string) => {
  switch (color) {
    case "primary":
      return `bg-transparent text-primary border border-border-base focus-visible:border-primary-80 hover:bg-bg-sub1 active:bg-bg-sub2`;
    case "point":
      return `bg-transparent text-point border border-point focus-visible:border-primary-80 hover:bg-bg-sub1 active:bg-bg-sub2`;
    default:
      return `bg-transparent text-primary border border-border-base focus-visible:border-primary-80 hover:bg-bg-sub1 active:bg-bg-sub2`;
  }
};

// clear 버튼 스타일 (테두리/배경 없이 투명)
const clearClass = (color: string) => {
  switch (color) {
    case "primary":
      return `bg-transparent text-primary-80 focus-visible:border-primary-80 hover:bg-bg-sub1 active:bg-bg-sub2`;
    default:
      return `bg-transparent text-primary-80 focus-visible:border-primary-80 hover:bg-bg-sub1 active:bg-bg-sub2`;
  }
};

defineExpose({
  get el() {
    return buttonRef.value;
  },
});
</script>

<template>
  <button
    ref="button"
    aria-label="ui button"
    class="comp__ui-button"
    :class="
      tw(
        'relative flex cursor-pointer items-center justify-center rounded-lg disabled:pointer-events-none',
        sizeClass,
        fillClass,
        inheritClass,
      )
    "
    v-bind="restAttrs"
    :disabled="disabled"
    :type="buttonType"
    :form="form"
    @click="emit('click', $event)"
  >
    <slot />
    <label
      v-if="type === 'file'"
      :for="id"
      aria-label="button label"
      class="absolute top-0 left-0 h-full w-full cursor-pointer"
    >
      <input :id="id" type="file" class="hidden" :accept="accept" @change="emit('change', $event)" />
    </label>
  </button>
</template>
