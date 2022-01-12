import './App.css';
// import { Card } from './components/card/Card';
// import Logo from './components/Card/img/photo.jpg';
// import Photo from './components/Card/img/photo2.jpg';
import Expense from './components/expense/Expense';


function App() {
//  return (
//      <div className='App'>
//          <Card name='Aigerim' age='20' edu='PeakSoft' img={Photo}/>
//          <Card name='Takhmina' age='25' edu='PekSoft' img={Logo}/>
//     </div>
//  )
const expenses = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 1.5,
        date: new Date(2020, 7, 14)
    },
    {
        id: 'e2',
        title: 'Car Insuranse',
        amount: 200,
        date: new Date(2021, 3, 28)
    },
    {
        id: 'el3',
        title: 'Gift',
        amount: 1300,
        date: new Date(2021, 8, 16),
     },
     {
        id: 'el4',
        title: 'Income Tax',
        amount: 790,
        date: new Date(2021, 11, 20),
     },
]
return (
    <div className='App'>
      <Expense expenses = {expenses}/>
    </div>
  );
}
export default App;
