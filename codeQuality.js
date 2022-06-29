// level 2

async function getUsers() {
    let doc = await Promise.all(getUser(), getProfile(), getPosts());
  
    //directly assigning values to the object keys rather than storing them in a variable from the array and then 
    //assigning to the object from that,and creating unnccessary variables,so to overcome that extra usage of space 
    //assigning it directly from the array
    const userProfile = {
      user: doc[0],
      profile: doc[1],
      posts: doc[2]
    };
  
    return userProfile;
  }
