import { FC } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { ISuggestionsProps } from './types';

const Suggestions: FC<ISuggestionsProps> = ({ list, onChange }) => {
  const onDragEnd = (result: any) => {
    if (list && onChange) {
      const newItems = Array.from(list);
      const [removed] = newItems.splice(result.source.index, 1);
      newItems.splice(result.destination.index, 0, removed);
      onChange(newItems);
    }
  };

  if (list && onChange) {
    return (
      <div>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {list.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        // snapshot={snapshot}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {item.order_number} - {item.first_name} {item.last_name}
                      </div>
                    )}
                  </Draggable>
                ))}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    );
  }

  return (
    <div>
      {list &&
        list.map(({ id, first_name, last_name, order_number }) => (
          <div key={id}>
            {order_number} - {first_name} {last_name}
          </div>
        ))}
    </div>
  );
};

export default Suggestions;
