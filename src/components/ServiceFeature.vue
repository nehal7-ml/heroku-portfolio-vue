<template>
  <div class="container px-4 py-5" id="hanging-icons">
    <h1 class="pb-2 border-bottom">Our Services</h1>
    <p>
      We, through our refined process, provide excellent services in the field of IT. We dwell in
      most challenging verticals.
    </p>
    <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div class="col d-flex align-items-start">
        <div
          class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3"
        >
          <svg class="bi" width="1em" height="1em"><use xlink:href="#toggles2" /></svg>
        </div>
        <div>
          <h3 class="fs-5 text-body-emphasis">IT Consultancy</h3>
          <p>
            Through our highly experienced account managers and analysts, provide accurate and
            impactful IT consultancy.
          </p>
          <a href="#" class="btn btn-primary"> Primary button </a>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <div
          class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3"
        >
          <svg class="bi" width="1em" height="1em"><use xlink:href="#cpu-fill" /></svg>
        </div>
        <div>
          <h3 class="fs-5 text-body-emphasis">Web Development</h3>
          <p>
            We provide bespoke application development pertaining to special needs of clients e.g.
            CRMs, blogs, dashboards, etc,.
          </p>
          <a href="#" class="btn btn-primary"> Primary button </a>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <div
          class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3"
        >
          <svg class="bi" width="1em" height="1em"><use xlink:href="#tools" /></svg>
        </div>
        <div>
          <h3 class="fs-5 text-body-emphasis">Digital Marketing</h3>
          <p>
            Through our team of highly motivated and experienced marketing experts, you can be rest
            assured that your campaigns will yield you growth.
          </p>
          <a href="#" class="btn btn-primary"> Primary button </a>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <div
          class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3"
        >
          <svg class="bi" width="1em" height="1em"><use xlink:href="#tools" /></svg>
        </div>
        <div>
          <h3 class="fs-5 text-body-emphasis">Mobile App Development</h3>
          <p>Our experienced staff provides feature rich apps in Android/iOS platforms.</p>
          <a href="#" class="btn btn-primary"> Primary button </a>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <div
          class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3"
        >
          <svg class="bi" width="1em" height="1em"><use xlink:href="#tools" /></svg>
        </div>
        <div>
          <h3 class="fs-5 text-body-emphasis">Internet of Things</h3>
          <p>
            Connecting your home/office through IoT automation. We provide full ecosystem using
            mobile app, web login and more.
          </p>
          <a href="#" class="btn btn-primary"> Primary button </a>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <div
          class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3"
        >
          <svg class="bi" width="1em" height="1em"><use xlink:href="#tools" /></svg>
        </div>
        <div>
          <h3 class="fs-5 text-body-emphasis">Realtime Solutions</h3>
          <p>
            Providing realtime solutions for contact centers, directory managed calls, DID,
            USA/Canada numbers, etc,.
          </p>
          <a href="#" class="btn btn-primary"> Primary button </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.feature-icon {
  width: 4rem;
  height: 4rem;
  border-radius: 0.75rem;
}

.icon-square {
  width: 3rem;
  height: 3rem;
  border-radius: 0.75rem;
}

.text-shadow-1 {
  text-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.25);
}
.text-shadow-2 {
  text-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.25);
}
.text-shadow-3 {
  text-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.25);
}

.card-cover {
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}

.feature-icon-small {
  width: 3rem;
  height: 3rem;
}

/* page */

.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

.b-example-divider {
  width: 100%;
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow:
    inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
    inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}

.b-example-vr {
  flex-shrink: 0;
  width: 1.5rem;
  height: 100vh;
}

.bi {
  vertical-align: -0.125em;
  fill: currentColor;
}

.nav-scroller {
  position: relative;
  z-index: 2;
  height: 2.75rem;
  overflow-y: hidden;
}

.nav-scroller .nav {
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 1rem;
  margin-top: -1px;
  overflow-x: auto;
  text-align: center;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}

.btn-bd-primary {
  --bd-violet-bg: #712cf9;
  --bd-violet-rgb: 112.520718, 44.062154, 249.437846;

  --bs-btn-font-weight: 600;
  --bs-btn-color: var(--bs-white);
  --bs-btn-bg: var(--bd-violet-bg);
  --bs-btn-border-color: var(--bd-violet-bg);
  --bs-btn-hover-color: var(--bs-white);
  --bs-btn-hover-bg: #6528e0;
  --bs-btn-hover-border-color: #6528e0;
  --bs-btn-focus-shadow-rgb: var(--bd-violet-rgb);
  --bs-btn-active-color: var(--bs-btn-hover-color);
  --bs-btn-active-bg: #5a23c8;
  --bs-btn-active-border-color: #5a23c8;
}

.bd-mode-toggle {
  z-index: 1500;
}

.bd-mode-toggle .dropdown-menu .active .bi {
  display: block !important;
}
</style>
