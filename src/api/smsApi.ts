import type { SmsResponse } from '../types/sms.types';
import apiClient from './apiClient';


// This function sends an SMS message to the server and returns the response.
export const sendSms = (message: string) => {
  return apiClient.post<SmsResponse>('/sms', { message });
};
