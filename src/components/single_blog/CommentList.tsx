import React, { useEffect, useState } from "react";

interface Comment {
  id: number;
  name: string;
  email: string;
  comment: string;
  website?: string;
}

const CommentList: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    fetch("/comments.json") // Load mock data
      .then((res) => res.json())
      .then((data) => setComments(data))
      .catch((err) => console.error("Error loading comments:", err));
  }, []);

  return (
    <div className="mx-auto max-w-md bg-white p-4 text-black">
      <h2 className="mb-2 text-lg font-bold">Comments</h2>
      {comments.length === 0 ? (
        <p className="text-sm text-gray-500">No comments yet.</p>
      ) : (
        <ul className="space-y-3">
          {comments.map((comment) => (
            <li key={comment.id} className="rounded-md border p-3">
              <p className="font-semibold">{comment.name}</p>
              <p className="text-sm">{comment.comment}</p>
              {comment.website && (
                <a href={comment.website} className="text-xs text-blue-500">
                  {comment.website}
                </a>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CommentList;
