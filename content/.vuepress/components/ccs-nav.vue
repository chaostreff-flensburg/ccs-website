<template>
  <section class="shadow">
      <nav class="navbar">
        <router-link to="/#headline">#CCS</router-link>
        <router-link to="/#uber-den-beirat">Beirat</router-link>
        <router-link to="/#bewerben">Bewerben</router-link>
        <router-link to="/#faq">F.A.Q.</router-link>
      </nav>
  </section>
</template>

<script>
export default {
  name: 'HothNav'
}
</script>

// @ToDo: rainbow colors, responsive side margin

<style scoped>
section {
  position: sticky;
  top: 0;
  z-index: 20;
}
nav {
  min-height: 38px;
  max-width: 920px;

  padding: 8px 0;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;

  border-radius: var(--border-radius);
  background-color: var(--background);
  box-shadow: 0 4px 12px var(--shadow);
}
@media (max-width: 920px) {
  nav {
    border-radius: 0;
  }
}
a {
  padding: 6px 15px;
  color: var(--foreground);
  font-size: 26px;
  font-weight: 700;
  text-align: center;
  text-decoration: none;
}
</style>
