import Post from "./Post";

const DUMMY_DATA = [
  {
    id: "123",
    username: "aymensmati",
    userImg:
      "https://lh3.googleusercontent.com/fife/AAWUweVgKetpyUMTuaYLfTlzPxzLU388zZ-KYOq8-giLZNhN2rJjM2qZnrORdyRIH7jjpm4JHJZ9UNLvRi1gh4Y9jfwG21WT80ZfKJoAyQh13xrUtXBL446Cy3KlDwzr7mMkxuuC3xr-QduBvUtzuVeu-kyXA3je9RFGDCTWoUcHwA9nHiISz7UVJq9qAXyKp-nn03Z8iYpglyoFd2YwW24e0EGofCBJNkcRNZUWbU0UR4Q39c-ZtMLaE7MJwZLdyrTfgKolBBQOrmtBwEkw_czWk5xB-Ed4J0ORV0MHwm53WALi126ehdH-vQ4HsDpl6e9j5kWCOVMv69ao4lNvLLGeGbHafzdPrInsrAd1ZJCXMqguJljWDLdKW_nuTuTUxa7Im2jzh3VcRPPG3YYPaxNVuKy6KTbP30dOL1tG5wlr1rAuIuHmQO8SDOvxzvIO_9wKS_gc3eUW6JwRwKAMmsJAvUU6OqpAvcwwcxIseS47lq_19k7J8uzXZuLPTlQFFGvBFDHqC2vxEMmVo_tZjNI5yn8aPocOtr1ek03dsFQQEzGrKQRC5Wi9MH0daXeiGzFBhcGJdoTa1D4P5XFHTGurkMSHDB7c9E8BRKXU9Yo9zUg3WY-bFG6_oqjMsWPzKImny5nucVYB05RPsCzH0W4Jb0gYzRBM2KgpXO4uqUPvYZH6zOappB8Opo___Mhf15P1O97cMoYhg91BoPJLb7wfVEzR7FXS4uUG4LIO8TjO--ddXw=s64-c",
    img: "https://lh3.googleusercontent.com/fife/AAWUweVgKetpyUMTuaYLfTlzPxzLU388zZ-KYOq8-giLZNhN2rJjM2qZnrORdyRIH7jjpm4JHJZ9UNLvRi1gh4Y9jfwG21WT80ZfKJoAyQh13xrUtXBL446Cy3KlDwzr7mMkxuuC3xr-QduBvUtzuVeu-kyXA3je9RFGDCTWoUcHwA9nHiISz7UVJq9qAXyKp-nn03Z8iYpglyoFd2YwW24e0EGofCBJNkcRNZUWbU0UR4Q39c-ZtMLaE7MJwZLdyrTfgKolBBQOrmtBwEkw_czWk5xB-Ed4J0ORV0MHwm53WALi126ehdH-vQ4HsDpl6e9j5kWCOVMv69ao4lNvLLGeGbHafzdPrInsrAd1ZJCXMqguJljWDLdKW_nuTuTUxa7Im2jzh3VcRPPG3YYPaxNVuKy6KTbP30dOL1tG5wlr1rAuIuHmQO8SDOvxzvIO_9wKS_gc3eUW6JwRwKAMmsJAvUU6OqpAvcwwcxIseS47lq_19k7J8uzXZuLPTlQFFGvBFDHqC2vxEMmVo_tZjNI5yn8aPocOtr1ek03dsFQQEzGrKQRC5Wi9MH0daXeiGzFBhcGJdoTa1D4P5XFHTGurkMSHDB7c9E8BRKXU9Yo9zUg3WY-bFG6_oqjMsWPzKImny5nucVYB05RPsCzH0W4Jb0gYzRBM2KgpXO4uqUPvYZH6zOappB8Opo___Mhf15P1O97cMoYhg91BoPJLb7wfVEzR7FXS4uUG4LIO8TjO--ddXw=s64-c",
    caption: "SUBSCRIBE AND DESTROY THE LIKE BUTTON",
  },
  {
    id: "13",
    username: "aymensmati",
    userImg:
      "https://lh3.googleusercontent.com/fife/AAWUweVgKetpyUMTuaYLfTlzPxzLU388zZ-KYOq8-giLZNhN2rJjM2qZnrORdyRIH7jjpm4JHJZ9UNLvRi1gh4Y9jfwG21WT80ZfKJoAyQh13xrUtXBL446Cy3KlDwzr7mMkxuuC3xr-QduBvUtzuVeu-kyXA3je9RFGDCTWoUcHwA9nHiISz7UVJq9qAXyKp-nn03Z8iYpglyoFd2YwW24e0EGofCBJNkcRNZUWbU0UR4Q39c-ZtMLaE7MJwZLdyrTfgKolBBQOrmtBwEkw_czWk5xB-Ed4J0ORV0MHwm53WALi126ehdH-vQ4HsDpl6e9j5kWCOVMv69ao4lNvLLGeGbHafzdPrInsrAd1ZJCXMqguJljWDLdKW_nuTuTUxa7Im2jzh3VcRPPG3YYPaxNVuKy6KTbP30dOL1tG5wlr1rAuIuHmQO8SDOvxzvIO_9wKS_gc3eUW6JwRwKAMmsJAvUU6OqpAvcwwcxIseS47lq_19k7J8uzXZuLPTlQFFGvBFDHqC2vxEMmVo_tZjNI5yn8aPocOtr1ek03dsFQQEzGrKQRC5Wi9MH0daXeiGzFBhcGJdoTa1D4P5XFHTGurkMSHDB7c9E8BRKXU9Yo9zUg3WY-bFG6_oqjMsWPzKImny5nucVYB05RPsCzH0W4Jb0gYzRBM2KgpXO4uqUPvYZH6zOappB8Opo___Mhf15P1O97cMoYhg91BoPJLb7wfVEzR7FXS4uUG4LIO8TjO--ddXw=s64-c",
    img: "https://instagram.ftun2-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/261571818_272414521485945_5760914100300450233_n.jpg?_nc_ht=instagram.ftun2-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=8fNkJQMDzdwAX9zPln6&tn=G1wj_GjSflFqtSAb&edm=AP_V10EBAAAA&ccb=7-4&oh=f404a027168d95379e60779d871f21e3&oe=61ACE88B&_nc_sid=4f375e",
    caption: "SUBSCRIBE AND DESTROY THE LIKE BUTTON",
  },
  {
    id: "1234",
    username: "aymensmati",
    userImg:
      "https://lh3.googleusercontent.com/fife/AAWUweVgKetpyUMTuaYLfTlzPxzLU388zZ-KYOq8-giLZNhN2rJjM2qZnrORdyRIH7jjpm4JHJZ9UNLvRi1gh4Y9jfwG21WT80ZfKJoAyQh13xrUtXBL446Cy3KlDwzr7mMkxuuC3xr-QduBvUtzuVeu-kyXA3je9RFGDCTWoUcHwA9nHiISz7UVJq9qAXyKp-nn03Z8iYpglyoFd2YwW24e0EGofCBJNkcRNZUWbU0UR4Q39c-ZtMLaE7MJwZLdyrTfgKolBBQOrmtBwEkw_czWk5xB-Ed4J0ORV0MHwm53WALi126ehdH-vQ4HsDpl6e9j5kWCOVMv69ao4lNvLLGeGbHafzdPrInsrAd1ZJCXMqguJljWDLdKW_nuTuTUxa7Im2jzh3VcRPPG3YYPaxNVuKy6KTbP30dOL1tG5wlr1rAuIuHmQO8SDOvxzvIO_9wKS_gc3eUW6JwRwKAMmsJAvUU6OqpAvcwwcxIseS47lq_19k7J8uzXZuLPTlQFFGvBFDHqC2vxEMmVo_tZjNI5yn8aPocOtr1ek03dsFQQEzGrKQRC5Wi9MH0daXeiGzFBhcGJdoTa1D4P5XFHTGurkMSHDB7c9E8BRKXU9Yo9zUg3WY-bFG6_oqjMsWPzKImny5nucVYB05RPsCzH0W4Jb0gYzRBM2KgpXO4uqUPvYZH6zOappB8Opo___Mhf15P1O97cMoYhg91BoPJLb7wfVEzR7FXS4uUG4LIO8TjO--ddXw=s64-c",
    img: "https://instagram.ftun2-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/261571818_272414521485945_5760914100300450233_n.jpg?_nc_ht=instagram.ftun2-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=8fNkJQMDzdwAX9zPln6&tn=G1wj_GjSflFqtSAb&edm=AP_V10EBAAAA&ccb=7-4&oh=f404a027168d95379e60779d871f21e3&oe=61ACE88B&_nc_sid=4f375e",
    caption: "SUBSCRIBE AND DESTROY THE LIKE BUTTON",
  },
];

function Posts() {
  return (
    <div>
      {DUMMY_DATA.map((post) => (
        <Post
          key={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
