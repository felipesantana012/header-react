import "./Header.css";

const Header = () => {
  return (
    <header className="cabecalho">
      <a href="/">
        <h2>
          Logo<span>Site</span>
        </h2>
      </a>

      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Sobre</a>
        </li>
        <li>
          <a href="#">Contato</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
