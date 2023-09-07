import './Answer.scss';
import { dataObject } from '../../interfaces/interfaces'

const Answer = ({ loading, data, error }: dataObject) => {

  return (
    <p className='title title_yellow'>
      { error 
      ? error 
      : (!data?.ok && !loading) 
      ? data?.error_ui 
      : (loading) 
      ? ' Идет загрузка данных с сервера ' 
      : 'По версии сервера ' + data?.count + ' раз'}
    </p>
  );
}

export default Answer;
