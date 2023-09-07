import './Answer.scss';
import {dataObject} from '../../interfaces/interfaces'

const Answer = ({loading, data}:dataObject ) => {

return (
  <p className='title title_yellow'>
    { (!data?.ok && !loading) ? data?.error_ui : (loading) ? ' Идет загрузка данных с сервера ' : 'По версии сервера '+  (!loading? data?.count: "*")  + ' раз'}
  </p>
);
}

export default Answer;
