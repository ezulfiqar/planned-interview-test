import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../constants";

export type UserType = {
  age: number;
  country: string;
  email: string;
  name: {
    firstName: string;
    lastName: string;
  };
};

export const useUsers = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    setIsLoading(true);
    setHasLoaded(false);
    setUsers([]);
  }, []);

  useEffect(() => {
    let isCancelled = false;

    (async () => {
      setIsLoading(true);

      try {
        const responseKids = axios.get(`${API_URL}/users/kids`);
        const responseAdults = axios.get(`${API_URL}/users/adults`);
        const responseSeniors = axios.get(`${API_URL}/users/seniors`);

        await Promise.all([responseKids, responseAdults, responseSeniors]).then(
          axios.spread(
            ({ data: kids }, { data: adults }, { data: seniors }) => {
              setUsers([...kids.data, ...adults.data, ...seniors]);
            }
          )
        );

        if (isCancelled) {
          return;
        }

        setHasLoaded(true);
        setIsLoading(false);
      } catch (e) {
        setIsLoading(false);
      }
    })();

    return () => {
      isCancelled = true;
    };
  }, []);

  return {
    hasLoaded,
    isLoading,
    users,
  };
};
