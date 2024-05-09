<template>
  <div class="about">
    <h1>This is an about page</h1>

    <button class="btn btn-primary" data-bs-target="#collapseTarget" data-bs-toggle="collapse">
      Bootstrap collapse
    </button>
    <div class="collapse py-2" id="collapseTarget">This is the toggle-able content!</div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
