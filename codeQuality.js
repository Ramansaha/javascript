// level 2

async function getUsers() {
    let doc = await Promise.all(getUser(), getProfile(), getPosts());
  
    const userProfile = {
      user: doc[0],
      profile: doc[1],
      posts: doc[2]
    };
  
    return userProfile;
  }
