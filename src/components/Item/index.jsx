import Button from "../button";





const Item = ({ car, onRemove }) => {
  return (
    <li className="flex justify-between items-center p-2 border-b border-red-200">
      {car.name} {car.price}<Button danger onClick={() => onRemove(car.id)}>  Xoa</Button>
    </li>
  );
};

export default Item;