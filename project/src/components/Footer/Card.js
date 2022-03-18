import './footer.scss';
import Button from '../Common/Button';

const Card = ({
  data
}) => {


  return (
    <div className='card-app'>
      <span>{data.title}</span>
      <p>{data.description}</p>
      <Button color="#fff" backgroundColor="#A5AFD4" text={data.button.text} link={data.button.link} />
    </div>
  );
}

export default Card;