<template>
  <header>
    <nav class="navigation">
      <ul>
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/link-images">Link Images</RouterLink></li>
        <li><RouterLink to="/websites">Websites</RouterLink></li>
      </ul>
    </nav>
  </header>
  <p></p>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  padding-block: 16px;
}

.navigation ul {
  display: flex;
  gap: 2rem;
}

.navigation ul li {
  border-radius: 0.5rem;
  background-color: rebeccapurple;
  list-style: none;
}

.navigation ul li a {
  display: block;
  padding: 16px;
  color: white;
  text-decoration: none;
}
</style>
