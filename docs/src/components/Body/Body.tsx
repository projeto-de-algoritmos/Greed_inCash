import Card from '../Card/Card';
import { cardData } from './data';
import './style.css'

interface IItemValue {
  iphone: number;
  galaxy: number;
  headset: number;
  mouse: number;
  teclado: number;
  gpu: number;
}

interface IBody {
  setItemValue: (IItemValue:IItemValue) => void;
  itemValue: IItemValue;
}

const Body = ({setItemValue, itemValue}:IBody) => {
    return (
        <div className='body'>
          {cardData.map((card) => (
            <Card key={card.id} id={card.id} itemValue={itemValue} setItemValue={setItemValue} name={card.name} brand={card.brand} price={card.price} image={card.image}/>
          ))}
        </div>
    );
}

export default Body;