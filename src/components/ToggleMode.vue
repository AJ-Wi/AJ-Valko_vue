<template>
  <label class="togglemode">
    <input type="checkbox" checked />
    <span></span>
  </label>
</template>

<style>
.togglemode {
  width: 42px;
  height: 1rem;
  background-color: var(--bg-toggle);
  border-radius: 1rem;
  cursor: pointer;
  position: relative;
}

.togglemode input {
  opacity: 0;
}

.togglemode span {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--bg-toggle-slider) url(~@/assets/sun.svg) no-repeat 50%;
  position: absolute;
  cursor: inherit;
  box-sizing: content-box;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: left var(0.25s), transform var(0.25s);
  border: 1px solid var(--bg-toggle);
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%);
}
</style>
