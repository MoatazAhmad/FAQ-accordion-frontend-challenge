<script setup>
const props = defineProps({
  faq: String,
  acc1: String,
  acc2: String,
  acc3: String,
  acc4: String
});
</script>

<template lang="pug">
.parent(class="w-100 position-relative")
  .card(class="position-absolute top-50 start-50")
    .card-body
      h4.card-title
        svg(xmlns="http://www.w3.org/2000/svg" width="40" height="41" fill="none" viewBox="0 0 40 41")
          path(fill="#AD28EB" d="M37.5 20.5a2.467 2.467 0 0 1-1.64 2.344l-9.913 3.604-3.603 9.911a2.5 2.5 0 0 1-4.688 0l-3.604-9.922-9.911-3.593a2.5 2.5 0 0 1 0-4.688l9.921-3.604 3.594-9.911a2.5 2.5 0 0 1 4.688 0l3.604 9.921 9.911 3.594A2.467 2.467 0 0 1 37.5 20.5Z")
        | {{props.faq}}
      div.accordion#accordionExample
        div.accordion-item
          h2.accordion-header
            button.accordion-button.collapsed(type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne")
              | {{props.acc1}}
          #collapseOne.accordion-collapse.collapse(data-bs-parent="#accordionExample")
            .accordion-body
              slot(name="accAns1")
        .accordion-item
          h2.accordion-header
            button.accordion-button.collapsed(type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo")
              | {{props.acc2}}
          #collapseTwo.accordion-collapse.collapse(data-bs-parent="#accordionExample")
            .accordion-body
              slot(name="accAns2")
        .accordion-item
          h2.accordion-header
            button.accordion-button.collapsed(type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree")
              | {{props.acc3}}
          #collapseThree.accordion-collapse.collapse(data-bs-parent="#accordionExample")
            .accordion-body
              slot(name="accAns3")
        .accordion-item
          h2.accordion-header
            button.accordion-button.collapsed(type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour")
              | {{props.acc4}}
          #collapseFour.accordion-collapse.collapse(data-bs-parent="#accordionExample")
            .accordion-body
              slot(name="accAns4")
</template>

<style lang="scss" scoped>
.parent {
  height: 100vh;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1440' height='320' fill='none' viewBox='0 0 1440 320'%3E%3Cg clip-path='url(%23a)'%3E%3Cpath fill='%23301534' d='M0 0h1440v320H0z'/%3E%3Cpath stroke='%23AD28EB' stroke-linecap='round' stroke-width='3' d='M-676-182C-454-10-396.863 71.888-197.5 143.5-99 178.882-36.919 170.726-4.751 170.108c104.487-2.01 204.609-43.237 298.633-85.495 38.354-17.238 75.882-36.189 112.063-57.63 23.903-14.165 58.87-33.913 64.721-64.42 2.32-12.102-16.369-12.24-23.771-9.789-13.511 4.474-25.95 16.544-36.056 25.669-19.131 17.273-37.062 35.948-53.235 56.031-33.728 41.883-68.034 100.247-34.158 152.014 17.287 26.415 43.94 45.693 72.112 59.127 56.182 26.791 119.205 38.742 180.778 44.146 164.438 14.432 328.964-3.461 483.004-63.622 79.76-31.148 158.55-70.539 224.23-126.245 48.56-41.186 102.8-96.548 110.66-162.9 10.93-92.187-94.04-136.062-169.29-148.418-61.41-10.084-123.75-4.164-184.07 9.588-78.262 17.84-149.006 47.67-214.241 94.384-130.002 93.093-234.95 228.413-272.466 385.827-15.64 65.625-16.648 138.21 5.493 202.551 21.452 62.338 69.196 110.576 124.048 144.923 65.117 40.774 137.161 62.14 212.839 73.21 100.474 14.696 202.817 12.233 303.027-2.997 176.17-26.772 352.73-88.431 505.18-181.077 103.22-62.725 199.3-134.15 280.06-224.425 17.7-19.793 31.81-40.875 43.74-64.521C2172.11-58.5 2095.5-145.528 2095.5-151'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath fill='%23fff' d='M0 0h1440v320H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-size: auto;
  background-color: hsl(275, 100%, 97%);
}
.card {
  transform: translate(-50%, -50%);
  border-radius: 15px;
  border: none;
  width:30rem;
  .card-body {
    padding: 15px;
    
    h4:has(svg) {
      font-size: 35px;
      font-weight: 900;
      color: hsl(292, 42%, 14%);
      padding: 30px 0;
      margin: 0;

      svg {
        vertical-align: middle;
        width: 30px;
        margin: 0px 15px 0 0;
        height: 100%;
      }
    }
    
    .accordion-item {
      border: none;
      color: hsl(292, 42%, 14%) !important;
      &:not(:last-child) {
        border-bottom: 1px solid #d5d5d5;
      }
    }
  }
}
@media (max-width:576px) {
  .card {
    width: 18rem;
  }
}
@media (min-width:576px) {
  .card {
    width: 30rem;
  }
}

.accordion-button:hover {
  color: hsl(292, 16%, 49%);
}

.accordion-button {
  &:not(.collapsed) {
    background-color: white;
    box-shadow: none;
  }

  &:focus {
    box-shadow: none;
  }

  &::after {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='31' fill='none' viewBox='0 0 30 31'%3E%3Cpath fill='%23AD28EB' d='M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z'/%3E%3C/svg%3E");
  }

  &:not(.collapsed)::after {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='31' fill='none' viewBox='0 0 30 31'%3E%3Cpath fill='%23301534' d='M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z'/%3E%3C/svg%3E");
  }
}
.accordion-body {
  color:hsl(292, 16%, 49%);
}
</style>
