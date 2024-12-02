<nav>
  <ul class="navbar">
    <li>
      <a href="/tote-bags">Tote Bags</a>
    </li>
    <li>
      <a href="/bolsos">
        Bolsos
      </a>
    </li>
    <a href="/" class="logo">
      <img src="https://hema-pro.vercel.app/hema-logo-2.png" alt="Logo" class="navbar-logo" />
    </a>
    <li>
      <a href="/lazos">
        Lazos
      </a>
    </li>
    <li>
      <a href="/fundas-libros">
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
  @media (max-width: 768px) {
    .navbar {
      flex-direction: column;
      align-items: center;
    }
  }
</style>
