import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/outline";
function Post({ id, username, userImg, img, caption }) {
  return (
    <div className="bg-white my-7 border rounded-sm">
      <div className="flex items-center p-5">
        <img
          src={userImg}
          className="rounded-full h-11 w-11 object-contain border p-1 mr-3"
        />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>

      <img src={img} className="object-cover w-full " />
      <div className="flex justify-between pt-5 px-4">
        <div className=" flex space-x-4 ">
          <HeartIcon className="btn" />
          <ChatIcon className="btn" />
          <PaperAirplaneIcon className="btn" />
        </div>
        <BookmarkIcon className="btn" />
      </div>
      <div>
        <p className="p-5 truncate">
          <span className="font-bold mr-2">{username}</span>
          {caption}
        </p>
      </div>
      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7" />
        <input
          type="text"
          className="border-none flex-1 focus:ring-0 outline-none"
          placeholder="Add a comment ..."
        />
        <button className="font-semibold text-blue-400">POST</button>
      </form>
    </div>
  );
}

export default Post;
