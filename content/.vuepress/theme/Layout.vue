<template>
  <div data-theme="dark">
    <section class="layout">
    <main class="container">
      <div class="card border-0 shadow rounded">
        <div class="headerBackground row">
          <div class="col">
            <h1 class="headLine">
              Winter <br>
              2022
            </h1>
            <p>
              Chaotischer Catalysator Stipendien - 2022.Winter
            </p>
          </div>
          <div class="col-auto d-flex flex-column justify-content-end">
            <a href="https://mailtrain.chaostreff-flensburg.de/subscription/SyNA43JZo" target="blank" class="btn btn-outline-light">Newsletter abonieren</a>
            <!--
            <div class="my-2 socialIcons">
              <a class="btn bi-instagram" />
              <a class="btn bi-facebook" />
              <a class="btn bi-twitter" />
              <a class="btn bi-envelope" />
            </div>
            -->
          </div>
        </div>
        <ccs-nav class="nav"/>
        <div class="card-body content">
          <Content class="p-md-4" />
        </div>
      </div>
    </main>
    <ccs-footer class="footer"></ccs-footer>
  </section>
</div>
</template>

<script>
import "../main.scss";
import "../fonts.css";
import "bootstrap-icons/font/bootstrap-icons.scss";

export default {
}
</script>

<style lang="scss">
.headerBackground {
  background-image: url("../../assets/img-header.png");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 4rem 2rem;
  opacity: .8;
  margin: 0;
  .headLine {
    font-size: 5rem;
    font-weight: 900;
    letter-spacing: .1em;
  }
  .socialIcons {
    a {
      padding: 0.5rem;
      font-size: 1.5rem;
    }
  }
}
p,ul {
  font-size: 1.2rem;
}
.content {
  a{
    color: #BF8FFF !important;
    &:hover{
      color:  #f1e6ff !important;
    }
  }
  p{
    margin-bottom: 30px;
  }
}
</style>
