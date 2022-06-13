 import React from 'react'
import ItemCount from './itemCount';

 function ItemListConteiner(props) {
     return (
         <div className='contenedor'>
             <ItemCount stock={20} initial={1} />
         </div>
     )
 }

 export default ItemListConteiner;