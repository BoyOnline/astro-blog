<template>
  <MdPreview editorId="preview-only" :modelValue="content" />
</template>

<script setup lang="ts">
import { MdPreview } from "md-editor-v3";
import "md-editor-v3/lib/preview.css";

interface Props {
  content: string;
}

const props = defineProps<Props>();
</script>

<style lang="css">
.md-editor-preview-wrapper {
  padding: 0 !important;
}

.md-editor-preview-wrapper > *:first-child {
  margin-top: -20px !important;
}
</style>
