import axios, { AxiosError } from "axios";
import Destination from "@/models/Destination";
import { useEffect, useState } from "react";

const useDestinations = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [destinations, setDestinations] = useState<Destination[]>();

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    axios
      .get<Destination[]>(
        "https://67eadc5834bcedd95f64c9f3.mockapi.io/RebelRover/Destinations",
        {
          signal: controller.signal,
        },
      )
      .then((res) => {
        setDestinations(res.data);
        setIsLoading(false);
      })
      .catch((err: AxiosError) => {
        if (err.name !== "CanceledError") {
          console.error(err);
          setIsLoading(false);
        }
      });

    return () => controller.abort();
  }, []);

  return { isLoading, destinations };
};

export default useDestinations;
