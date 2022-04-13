export interface IRegistrationInfo {
  first_name?: string;
  last_name?: string;
  email?: string;
  gender?: 'female' | 'male';
  department?: number;
  job_title?: string;
  country?: string;
  city?: string;
}