import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./views/Home/HomePage";
import ProductDetailPage from "./views/ProductDetail/ProductDetailPage";
import Layout from "./components/layout/Layout";
import Support from "./views/Support/Support";
import { LoadingBarContainer } from "react-top-loading-bar";

function App() {
  return (
    <LoadingBarContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/support" element={<Support />} />
            <Route path="product/:id" element={<ProductDetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LoadingBarContainer>
  );
}

export default App;
