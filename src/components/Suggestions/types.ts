import { ISuggestions } from 'types';

export interface ISuggestionsProps {
  list?: ISuggestions[];
  onChange?: (newList: ISuggestions[]) => void;
}
