import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import { ProductList } from './components/ProductList/ProductList';
import { Form } from './components/Form/Form';
import { SpeedDialButton } from './components/SpeedDialButton/SpeedDialButton';
import Practice from './components/Practice/Practice';


// import { useTelegram } from './hooks/useTelegram';

const products = [
  {id: '1', title: "Helicopter#1", price: 350000000, description: "Летает, не бит не крашен", image: "/src/assets/helicopter.jpg"},
  {id: '2', title: "Helicopter#2", price: 450000000, description: "Летала девушка, один хозяин", image: "/src/assets/helicopter.jpg"},
  {id: '3', title: "Helicopter#3", price: 550000000, description: "Летал только в выходные", image: "/src/assets/helicopter.jpg"},
  {id: '4', title: "Helicopter#4", price: 650000000, description: "Заливали только ракетное топливо", image: "/src/assets/helicopter.jpg"},
  {id: '5', title: "Helicopter#5", price: 750000000, description: "Обмен на квартиру", image: "../../assets/helicopter.jpg"},
  {id: '6', title: "Helicopter#6", price: 850000000, description: "Продам гараж, в подарок вертолет, торг, обмен, рассрочка, кредит, лизинг", image: "../../assets/helicopter.jpg"},

]

function App() {

  // const { tg } = useTelegram()

  useEffect(() => {
    const tg = window.Telegram.WebApp
    tg.ready()
  }, [])

  return (
    <div className="App">
      <Practice/>
      <Header>Заголовок</Header>
      <Routes>
        <Route index element={<ProductList products={products} />}></Route>
        <Route path={'form'} element={<Form />}></Route>
      </Routes>
      <Practice/>
      <SpeedDialButton products={products} />
    </div>
  );
}

export default App;
