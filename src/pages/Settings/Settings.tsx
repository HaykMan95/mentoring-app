import Suggestions from 'components/Suggestions';
import { useStore } from 'store';
import { ActionTypesEnum } from 'store/types';
import { ISuggestions } from 'types';

const Settings = () => {
  const {
    state: { userInfo },
    dispatch,
  } = useStore();

  const updateSuggestions = (newSuggestions: ISuggestions[]) => {
    const newList = newSuggestions.map((item, index) => ({ ...item, order_number: ++index }));

    dispatch({
      type: ActionTypesEnum.UPDATE_SUGGESTIONS,
      payload: {
        newList,
      },
    });
  };

  return (
    <div>
      <Suggestions
        key={new Date().getTime()}
        list={userInfo?.suggestions}
        onChange={updateSuggestions}
      />
    </div>
  );
};

export default Settings;
