import { FC } from "react";

import { ISuggestionsProps } from './types';

const Suggestions: FC<ISuggestionsProps> = ({
  list,
  onChange,
}) => {
  return <div>
    {list && list.map(({id, first_name, last_name, order_number}) => <div key={id}>
      {order_number} - {first_name} {' '} {last_name}
    </div>)}
  </div>
}

export default Suggestions;