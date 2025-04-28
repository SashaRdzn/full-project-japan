export const useCardData = async (id) => {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/api/catalog/cards/${id}/`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Ошибка при загрузке данных:", error);
    throw error;
  }
};
