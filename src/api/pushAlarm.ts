import axios from "axios";

export async function pushAlarm(devicToken: string) {
  try {
    const data = await axios.post(`43.201.69.115:8080/notifications`, devicToken);

    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}
