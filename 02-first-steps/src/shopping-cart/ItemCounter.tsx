import { useState } from "react";
import styles from './ItemCounter.module.css'

export const ItemCounter = ({ name, quantity = 1 }: Props) => {

    const [count, setCount] = useState(quantity);
    
    const handleAdd = () => {
        setCount(count + 1);
    }

    const handleSubstract = () => {
        if(count === 1) return;
        setCount( count - 1 );
    }

  return (
    <section 
        className={styles.itemRow}
    >
        <span 
        className={styles['item-text']}
         style={{
            color: count === 1 ? 'red' : 'white',
        }}
        >
            {name}
        </span>
        
        <button
        onMouseEnter={() => {console.log(`Mouse enter ${name}`)}}
        onClick={handleAdd}        
        >
            +1 </button>
        
        <span>
            {count}
        </span>
        
        <button
        onClick={handleSubstract}
        >-1</button>

    </section>
  )
}

interface Props {
    name: string;
    quantity?: number;
}