import './Main.scss'
import Card from '../../components/Card/Card'
import { data } from '../../helper/data'
const Main = () => {

    return (
        <div className='card-container'>
            {data.map((item, index)=> <Card {...item} key={index}/> )}
        </div>
    )

}
export default Main