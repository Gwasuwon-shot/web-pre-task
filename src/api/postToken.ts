import axios from "axios";

export async function postToken(token: string) {
  console.log(token);
  const data = await axios.post("/api", { deviceToken: token });

  console.log(data);
  return data;
}
