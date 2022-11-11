import axios from "axios";
import { UserType } from "../types";
import { API_URL } from "../constants";

export const userApi = () => {
  return {
    fetchUsers,
  };
};

const fetchUsers = async (): Promise<UserType[]> => {
  let users: UserType[] = [];

  try {
    const responseKids = axios.get(`${API_URL}/users/kids`);
    const responseAdults = axios.get(`${API_URL}/users/adults`);
    const responseSeniors = axios.get(`${API_URL}/users/seniors`);

    await Promise.all([responseKids, responseAdults, responseSeniors]).then(
      axios.spread(({ data: kids }, { data: adults }, { data: seniors }) => {
        users = [...kids.data, ...adults.data, ...seniors];
      })
    );
  } catch (e) {
    console.error(e);
  }

  return users;
};
