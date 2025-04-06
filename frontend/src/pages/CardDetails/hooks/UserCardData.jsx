import { useQuery } from "@tanstack/react-query";
import PropTypes from "prop-types";

const fetchCardData = async (id) => {
  const response = await fetch(
    `https://672a07666d5fa4901b6f7076.mockapi.io/card/?id=${id}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  if (!data || !data.length) {
    throw new Error("Данные не найдены");
  }
  return data[0];
};

const useCardData = (id) => {
  return useQuery({
    queryKey: ["cardData", id],
    queryFn: () => fetchCardData(id), 
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
  });
};

useCardData.propTypes = {
  id: PropTypes.string.isRequired,
};

export default useCardData;
