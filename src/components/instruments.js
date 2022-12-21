import Instrument from './instrumentDisplay'
import {useFetch}from 'react'

const Instruments =()=>{
    /*const { data, loading, error } = useFetch(
        `/products?populate=*&[filters][categories][id]=${instrumentId}${subCats.map(
          (item) => `&[filters][sub_categories][id][$eq]=${item}`
        )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
      );
    
      return (
        <div className="instruments">
          {loading
            ? "loading"
            : data?.map((item) => <Instrument item={item} key={item.id} />)}
        </div>
        )*/
}
export default Instruments;