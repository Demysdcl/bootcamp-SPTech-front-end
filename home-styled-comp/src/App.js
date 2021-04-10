import Content from "./contexts/home/Content";
import Footer from "./contexts/home/Footer";
import Header from "./contexts/home/Header";
import Global from "./themes/global";

function App() {
  return (
    <>
      <Global />
      <Header />
      <Content />
      <Footer />
    </>
  );
}

export default App;
