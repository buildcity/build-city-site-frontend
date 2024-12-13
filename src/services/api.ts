import axios from 'axios';
import { Partner } from '../types/Partner';

const API_URL = 'https://tzglxksmmijfaytfigaz.supabase.co/rest/v1/partners';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR6Z2x4a3NtbWlqZmF5dGZpZ2F6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM3NjI0NjgsImV4cCI6MjA0OTMzODQ2OH0.ZWANzEdXp6xk4EA4DJn6GLnR-kx5tbAKYGajhMqCj7I';

export const fetchPartners = async (): Promise<Partner[]> => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        apikey: API_KEY,
        Authorization: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching partners:', error);
    return [];
  }
};