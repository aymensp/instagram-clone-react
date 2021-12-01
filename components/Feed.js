import MinProfile from "./MinProfile";
import Posts from "./Posts";
import Stories from "./Stories";

function Feed() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto">
      <section className="col-span-2">
        <Stories />
        <Posts />
      </section>
      <section className="hidden xl:inline-grid  md:col-span-1">
        <div className='fixed top-29 w-300'>
          <MinProfile />
        </div>
      </section>
    </main>
  );
}

export default Feed;
