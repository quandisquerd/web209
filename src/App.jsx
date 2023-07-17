// import { useState, useEffect } from "react";
// import "./App.css";
// import Form from "./components/form";
// import List from "./components/List";
// import Table from "./components/Table";
// // import { useEffect } from "react/cjs/react.production.min";
// import { instance } from "./axios/instance";
// import { pause } from "./util/pause"
// // import {ICar} from '../src/interface/car'

import Counter from "./components/Counter";
import List from "./components/Counter/product";
// import CounterProvider from "./context/CounterContext";
// import ProductProvider from "./context/PoductContext";


// const carsconfigData = [
//   {
//     laybal: 'Name',
//     key: 'name',
//     render: (item) => <span>{item.name}</span>,
//     header: (item) => <span>{item.laybal}</span>
//   },
//   {
//     laybal: 'Price',
//     key: 'price',
//     render: (item) => <span> {item.price}</span>,
//     // header: (item) => { item.laybal }
//   }
// ]
// const postsData = [
//   { id: 1, title: 'vu dinh quan 1', method: 'quan' },
//   { id: 2, title: 'vu dinh quan 2', method: 'nhung' },
//   { id: 3, title: 'vu dinh quan 3', method: 'haong' },
// ]
// const postsconfigData = [
//   {
//     laybal: 'Title',
//     key: 'title',
//     render: (item) => <span>{item.title}</span>,
//   },
//   {
//     laybal: 'Method',
//     key: 'method',
//     render: (item) => <span> {item.method}</span>,
//   },

// ]
// function App() {
//   const [cars, setCars] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState();
//   useEffect(() => {
//     (async () => {
//       setIsLoading(true);
//       try {
//         await pause(1000)
//         setCars(await instance.get('/cars'))
//         setIsLoading(false);
//       } catch (error) {
//         setError(error.message)
//         setIsLoading(false);
//       }
//     })()
//   }, [])
//   const addCar = async (car) => {
//     console.log(car)
//     const data = await instance.post('/cars',car)
//     setCars([...cars, car])
//   };
//   const removeCar = (car) => {
//     await instance.delete(`/cars/${car}`)
//     setCars(cars.filter(c => c.id !== car.id));
//   };
//   console.log(cars);
//   return (
//     <div>
//       <div className="w-96 mx-auto border">
//         <Form onAdd={addCar} />
//         <List cars={cars} onRemove={removeCar} loading={isLoading} />
//         <div><h1>table</h1></div>
//         <Table data={cars} config={carsconfigData} />
//         <div><h1>table 1</h1></div>
//         <Table data={postsData} config={postsconfigData} />
//       </div>
//     </div>
//   );
// }

// export default App;

function App() {
  return (
    <div>

      <Counter />

      {/* <List /> */}

    </div>
  );
}

export default App;