import "./App.css";
import Footer from "./componentes/Footer";
import Header from "./componentes/Header";
import Main from "./componentes/Main";

const App = () => {
  return (
    <div className="container-geral">
      <Header />
      <Main />
      <Footer nome={"Felipe"} />
    </div>
  );
};

export default App;
