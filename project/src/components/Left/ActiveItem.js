
const ActiveItem = ({
    title, content, border
}) => {
  return (
    <div className={'item-app ' + (border ? 'border' : '')}>
        <div className='item-title'> { title } </div>
        <div className='item-content'> { content } </div>
    </div>
  )
}

export default ActiveItem;