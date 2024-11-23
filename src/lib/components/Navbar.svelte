<script>
  // You can add any reactive properties or functions here
  let activeLink = '/';
</script>

<nav>
  <ul class="navbar">
    <li class={activeLink === '/home' ? 'active' : ''}>
      <a href="/" on:click={() => activeLink = '/'}>
        Tote Bags
      </a>
    </li>
    <li class={activeLink === '/about' ? 'active' : ''}>
      <a href="/" on:click={() => activeLink = '/about'}>
        Bolsos
      </a>
    </li>
    <a href="/" class="logo">
      <img src="/src/static/hema-logo.png" alt="Logo" class="navbar-logo" />
    </a>
    <li class={activeLink === '/services' ? 'active' : ''}>
      <a href="/" on:click={() => activeLink = '/services'}>
        Lazos
      </a>
    </li>
    <li class={activeLink === '/contact' ? 'active' : ''}>
      <a href="/" on:click={() => activeLink = '/contact'}>
        Fundas libros
      </a>
    </li>
  </ul>
</nav>

<style>
  nav {
    background-color: #a87866;
    padding: 10px;
  }

  .navbar {
    display: flex;
    justify-content: space-around;
    list-style-type: none;
    margin: 0;
    padding: 0;
    align-items: center;
  }

  .navbar li {
    margin: 0 15px;
  }

  .navbar a {
    color: white;
    text-decoration: none;
    font-size: 18px;
    padding: 8px;
    border-radius: 4px;
  }

  .navbar .logo {
    max-width: 150px;
  }

  /* Responsive styling */
  @media (max-width: 768px) {
    .navbar {
      flex-direction: column;
      align-items: center;
    }
  }
</style>
