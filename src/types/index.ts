export interface IRegistrationInfo {
  first_name?: string;
  last_name?: string;
  email?: string;
  gender?: 'female' | 'male';
  department?: string;
  job_title?: string;
  country?: string;
  city?: string;
}

export interface ISuggestions {
  id: string;
  first_name?: string;
  last_name?: string;
  order_number: number;
}

export interface IUser extends IRegistrationInfo {
  id: string;
  suggestions?: ISuggestions[];
}
