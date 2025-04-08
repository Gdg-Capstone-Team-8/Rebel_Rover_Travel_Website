import React, { FC } from "react";

const CommentForm: FC = () => {
  return (
    <div className="mx-auto max-w-md bg-white p-4 text-black">
      <h2 className="my-32 mb-2 text-lg font-bold">Leave a Reply</h2>
      <p className="mb-3 text-xs text-gray-600">
        Your email address will not be published. Required fields are marked *
      </p>
      <form className="space-y-3">
        <div>
          <label className="mb-1 block text-sm font-semibold">Comment</label>
          <textarea
            className="w-full rounded-md border border-gray-300 bg-white p-2 text-sm text-black"
            rows={3}
          ></textarea>
        </div>
        <div>
          <label className="mb-1 block text-sm font-semibold">Name *</label>
          <input
            type="text"
            className="w-full rounded-md border border-gray-300 bg-white p-2 text-sm text-black"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-semibold">Email *</label>
          <input
            type="email"
            className="w-full rounded-md border border-gray-300 bg-white p-2 text-sm text-black"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-semibold">Website</label>
          <input
            type="url"
            className="w-full rounded-md border border-gray-300 bg-white p-2 text-sm text-black"
          />
        </div>
        <div className="flex items-center">
          <input type="checkbox" id="save-info" className="mr-1" />
          <label htmlFor="save-info" className="text-xs text-gray-600">
            Save my name, email, and website in this browser for the next time I
            comment.
          </label>
        </div>
        <button
          type="submit"
          className="rounded-full bg-black px-3 py-1.5 text-sm font-semibold text-white hover:bg-gray-800"
        >
          Post Comment
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
