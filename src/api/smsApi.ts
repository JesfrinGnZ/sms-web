import axios from 'axios';
import type { SmsResponse } from '../types/sms.types';

const api = axios.create({
  baseURL: 'http://localhost:8080',
});



// This function sends an SMS message to the server and returns the response.
export const sendSms = (message: string) => {
  return api.post<SmsResponse>('/sms', { message });
};
