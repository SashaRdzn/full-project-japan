import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import PropTypes from "prop-types";
import { useState } from "react";
const Comments = ({ cardId }) => {
  const queryClient = useQueryClient();
  const [name, setName] = useState("");
  const [commentText, setCommentText] = useState("");
  const {
    data: comments, 
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["comments", cardId],
    queryFn: async () => {
      const response = await fetch(
        "https://672a07666d5fa4901b6f7076.mockapi.io/comments"
      );
      if (!response.ok) {
        throw new Error("Ошябка загрузки");
      }
      const data = await response.json();
      return data.filter((comment) => comment.CardID === parseInt(cardId));
    },
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
  });

  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      await fetch(
        `https://672a07666d5fa4901b6f7076.mockapi.io/comments/${id}`,
        {
          method: "DELETE",
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", cardId] });
    },
  });
  const addMutation = useMutation({
    mutationFn: async (newComment) => {
      const response = await fetch(
        "https://672a07666d5fa4901b6f7076.mockapi.io/comments",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newComment),
        }
      );
      if (!response.ok) {
        throw new Error("Ошибка отправки");
      }
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", cardId] });
      setName("");
      setCommentText("");
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !commentText) {
      return;
    }
    addMutation.mutate({
      name,
      text: commentText,
      CardID: parseInt(cardId),
    });
  };

  if (isLoading) return <div>Загрузка комментов</div>;
  if (isError) return <div>Ошибка: {error.message}</div>;

  return (
    <>
      <div className="container__comments">
        <div className="comments-list">
          {comments.map((comment) => (
            <div key={comment.id} className="comment-item">
              <p>
                <strong>Имя:</strong> {comment.name}
              </p>
              <p>
                <strong>Комментарий:</strong> {comment.text}
              </p>
              <button
                className="delete__button"
                onClick={() => deleteMutation.mutate(comment.id)}
              >
                Удалить
              </button>
            </div>
          ))}
        </div>
        <div className="coments">
          <h1>Оставьте свой комментарий</h1>
        </div>
        <div className="modal__comments">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ваше имя"
              required
            />
            <input
              type="text"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Введите комментарий"
              required
            />
            <button className="btn__form" type="submit">
              Отправить
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

Comments.propTypes = {
  cardId: PropTypes.string.isRequired,
};

export default Comments;
