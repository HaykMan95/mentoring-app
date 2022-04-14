import Suggestions from "components/Suggestions";
import { useStore } from "store";
import { ISuggestions } from "types";

const Settings = () => {
  const {
    state: { userInfo },
    dispatch,
  } = useStore();

  const updateSuggestions = (newSuggestions: ISuggestions[]) => {
    console.log(newSuggestions);
  }

  return <div>
    <Suggestions list={userInfo?.suggestions} onChange={updateSuggestions} />
  </div>;
};

export default Settings;
