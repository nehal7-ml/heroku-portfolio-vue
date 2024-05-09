<script setup lang="ts">
import { ref, onMounted } from 'vue'

// lifecycle hooks
onMounted(() => {
  console.log('HomeView mounted')
})
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Offcanvas navbar large">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">Owera</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar2"
        aria-controls="offcanvasNavbar2"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="offcanvas offcanvas-end text-bg-dark"
        tabindex="-1"
        id="offcanvasNavbar2"
        aria-labelledby="offcanvasNavbar2Label"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbar2Label">Owera</h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
              <a href="/" class="nav-link active" aria-current="page">Home</a>
            </li>
            <li class="nav-item dropdown">
              <a
                href="/services"
                class="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a href="/services" class="dropdown-item">Browse all services</a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a href="/services/it-consultancy" class="dropdown-item">IT Consultancy</a>
                </li>
                <li>
                  <a href="/services/web-development" class="dropdown-item">Web Development</a>
                </li>
                <li>
                  <a href="/services/digital-marketing" class="dropdown-item">Digital Marketing</a>
                </li>
                <li>
                  <a href="/services/mobile-app-development" class="dropdown-item"
                    >Mobile App Development</a
                  >
                </li>
                <li>
                  <a href="/services/internet-of-things" class="dropdown-item"
                    >Internet of Things</a
                  >
                </li>
                <li>
                  <a href="/services/realtime-solutions" class="dropdown-item"
                    >Realtime Solutions</a
                  >
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">Contact</a>
            </li>
          </ul>
          <form class="d-flex mt-3 mt-lg-0" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </div>
  </nav>
</template>
