import { Button } from '@mui/material';
// Types 
import { CartItemType } from '../App';
// Styles
import { Wrapper } from './Item.styles';

type Props = {
    item: CartItemType;
    handleAdd: (clickedItem: CartItemType) => void;
}

const Item: React.FC<Props> = ({ item, handleAdd }) => (
    <Wrapper>
        <div className="img-wrap">
            <img src={item.image} alt={item.title} />
        </div>
        <div className='product-info'>
            <h3>{item.title}</h3>
            <div>
                <p>{item.description}</p>
                <h4>${item.price}</h4>
            </div>
        </div>
        <Button onClick={() => handleAdd(item)}>
            Add to cart
        </Button>
    </Wrapper>
);


export default Item;