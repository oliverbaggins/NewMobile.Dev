import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://192.168.68.1:3000/reminders"

const getReminders = async () => {
  const headers = await authHeader()
  return axios.get(API_URL , { headers })
}

const addReminder = async (medicine, startDate, endDate, time, frequency) => {
  const headers = await authHeader();
  return axios.post(API_URL, {
    medicine,
    startDate,
    endDate,
    time,
    frequency
  }, {
    headers: headers
  })
}

const deleteReminder = async (reminderId) => {
  const headers = await authHeader();
  const deleteUrl = `${API_URL}/${reminderId}`;
  return axios.delete(deleteUrl, { headers });
};

const remindersService = {
  getReminders,
  addReminder,
  deleteReminder,
}

export default remindersService

