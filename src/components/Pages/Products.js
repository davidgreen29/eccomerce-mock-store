import instruments from '../instruments'
import { useParams } from 'react-router-dom';
import {useState} from 'react'
import Instruments from '../instrumentDisplay';
const Products =()=>{
    const instrumentId = parseInt(useParams().id)
    const [maxPrice, setMaxPrice] = useState(10000)
    const [sort, setSort] = useState(null)

    return(
        <div className="instruments">
            <div className="search-content">
                <div className="filter-by-instrument">
                    <h2>Instrument Types</h2>
                        <div className="input-strings">
                            <input type="checkbox" id={1}/>
                            <label htmlFor="1">Strings</label>
                        </div>

                        <div className="input-percussion">
                            <input type="checkbox" id={2}/>
                            <label htmlFor="2">Percussion</label>
                        </div>

                        <div className="input-keyboard">
                            <input type="checkbox" id={3}/>
                            <label htmlFor="3">Keyboard</label>
                        </div>
                </div>
                <div className="filter-by-price">
                    <h2>Filter by price</h2>
                    <div className="instrument-price-range">
                        <span>0</span>
                        <input type="range" min={0} max={10000} onChange={(event)=>setMaxPrice(event.target.value)}/>
                        <span>{maxPrice}</span>
                    </div>
                </div>
                <div className="filter-by-price-low-to-high">
                    <h2>Sort by</h2>
                    <div className="lowest-price">
                        <input type = "radio"id="asc" value="asc" name="price" onChange={()=>setSort("asc")}/>
                        <label htmlFor="asc">Price (Lowest) </label>
                    </div>

                    <div className="highest-price">
                        <input type = "radio"id="desc" value="desc" name="price" onChange={()=>setSort("desc")}/>
                        <label htmlFor="desc">Price (Highest) </label>
                    </div>
                </div>
            </div>
            <div className="instruments">
                <img className="category-img"
                src=""
                alt=""
                />
                <Instruments instrumentId={instrumentId} maxPrice ={maxPrice} sort={sort}/>
            </div>

        </div>
    )
}
export default Products;