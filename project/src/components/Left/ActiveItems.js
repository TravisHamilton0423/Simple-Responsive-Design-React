import { GridRow, GridColumn } from "emotion-flex-grid";
import ActiveItem from './ActiveItem';

const ActiveItems = () => {
  return (
    <div className='active-item-app'>
      <GridRow wrap="wrap" justify="between" align="center">
        <GridColumn >
          <ActiveItem title="Active users" content="5000+" border={true}></ActiveItem>
        </GridColumn>
        <GridColumn>
          <ActiveItem title="Download" content="30.3K" border={true}></ActiveItem>
        </GridColumn>
        <GridColumn>
          <ActiveItem title="Reviews" content="1200+" border={false}></ActiveItem>
        </GridColumn>
      </GridRow>
    </div>
  )
}

export default ActiveItems;