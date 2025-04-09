import { FC } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

const CommentForm: FC = () => {
  return (
    <div className="w-full bg-white text-black">
      <h2 className="my-32 mb-2 text-lg font-bold">Leave a Reply</h2>
      <p className="mb-3 text-xs text-gray-600">
        Your email address will not be published. Required fields are marked *
      </p>
      <form className="space-y-3">
        <div>
          <label className="mb-1 block text-sm font-semibold">Comment</label>
          <Textarea className="rounded-md border border-gray-300 bg-white p-2 text-sm text-black" />
        </div>
        <div>
          <label className="mb-1 block text-sm font-semibold">Name *</label>
          <Input
            type="text"
            className="rounded-md border border-gray-300 bg-white p-2 text-sm text-black"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-semibold">Email *</label>
          <Input
            type="email"
            className="rounded-md border border-gray-300 bg-white p-2 text-sm text-black"
          />
        </div>
        <div className="mb-6">
          <label className="mb-1 block text-sm font-semibold">Website</label>
          <Input
            type="url"
            className="rounded-md border border-gray-300 bg-white p-2 text-sm text-black"
          />
        </div>
        <div className="mb-14 flex items-center">
          <input type="checkbox" id="save-info" className="mr-3 size-5" />
          <label htmlFor="save-info" className="text-xs text-gray-600 cursor-pointer">
            Save my name, email, and website in this browser for the next time I
            comment.
          </label>
        </div>
        <Button
          type="submit"
          className="cursor-pointer rounded-full px-8 py-6 text-sm font-semibold text-white hover:opacity-65 md:text-xl"
        >
          Post Comment
        </Button>
      </form>
    </div>
  );
};

export default CommentForm;
