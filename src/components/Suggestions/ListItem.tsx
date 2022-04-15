import { FC } from 'react';

interface IListItemProps {
  item: any;
  provided: any;
  snapshot: any;
}

const ListItem: FC<IListItemProps> = ({ item, provided, snapshot }) => {
  return (
    <div
      ref={provided.innerRef}
      snapshot={snapshot}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      <span>{item.id}</span>
    </div>
  );
};

export default ListItem;
