const Navbar = () => {
  return (
    <nav>
      <ul class="sidebar">
        <li onclick="hideSideBar()">
          <a href="index.html">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
              fill="white"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </a>
        </li>
        <li>
          <a href="index.html">Home</a>
        </li>
        <li>
          <a href="about.html">About</a>
        </li>
        <li>
          <a href="#">Quizes</a>
        </li>
        <li>
          <a href="login.html">Login</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="#">Lil Rob's Website</a>
        </li>
        <li class="hide">
          <a href="index.html">Home</a>
        </li>
        <li class="hide">
          <a href="about.html">About</a>
        </li>
        <li class="hide">
          <a href="#">Quizes</a>
        </li>
        <li class="hide">
          <a href="login.html">Login</a>
        </li>
        <li class="menu-button" onclick="showSideBar()">
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
              fill="white"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
