import { createSlice } from '@reduxjs/toolkit';
// utils
import axios from '../../utils/axios';
import { SERVER_URL } from "../../URL/index";
// ----------------------------------------------------------------------

const initialState = {
  isLoading: false,
  error: null,
  myProfile: null,


  user_post_index: 0,
  user_post_step: 5,
  user_post_hasMore: true,
  posts: [],

  post_comment_index: 0,
  post_comment_step: 5,
  post_comment_hasMore: true,
  comments: [],
  postID: "",
  post_comment_error: null,

  followers_index: 0,
  followers_step: 10,
  followers_hasMore: true,
  followers: [],
  followers_error: null,

  following_index: 0,
  following_step: 10,
  following_hasMore: true,
  following: [],
  following_error: null,


  gallery_index: 0,
  gallery_step: 10,
  gallery_hasMore: true,
  gallery: [],
  gallery_error: null,


};

const slice = createSlice({

  name: 'user',
  initialState,

  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // GET PROFILE
    getProfileSuccess(state, action) {
      state.isLoading = false;
      state.myProfile = action.payload;
    },

    // EDIT USER
    editUserSuccess(state, action) {
      state.isLoading = false;

      const { UserID, isadd } = action.payload;


      if (state.myProfile !== null) {
        const newobj = Object.assign({}, {
          ...state.myProfile,
          Following_Length: isadd ? state.myProfile.Following_Length + 1 : state.myProfile.Following_Length - 1,

        });
        state.myProfile = newobj;
      }

      // //////////////////////////////////////////////

      var old_arr = JSON.stringify(state.followers);
      old_arr = JSON.parse(old_arr);

      var newarr = old_arr.map((row, index) => {

        if (row.UserID === UserID) {

          const newobj = Object.assign({}, {
            ...row,
            Followers_Length: isadd ? row.Followers_Length + 1 : row.Followers_Length - 1,
            IsFollowing: !row.IsFollowing
          });

          return newobj;

        }
        else {
          return row;
        }

      });

      state.followers = newarr;

      // //////////////////////////////////////////////

      var old_arr = JSON.stringify(state.following);
      old_arr = JSON.parse(old_arr);

      var newarr = old_arr.filter((row, index) => {

        if (row.UserID === UserID) {

          return null;

        }
        else {
          return row;
        }

      });

      state.following = newarr;


    },

    // ////////////////////////////////////////////
    // POSTssssssssssssssssssssssssssssssssssssss

    // GET POSTS
    getPostsSuccess(state, action) {
      state.isLoading = false;

      if (state.posts.length <= 0) {
        state.posts = action.payload;
      }
      else {

        action.payload.map((row, index) => {

          try {

            const found = state.posts.find((inrow, inindex) => {

              if (row.PostID === inrow.PostID) {
                return inrow;
              }
              else {
                return null;
              }

            })
            if (found === void (0)) {
              state.posts.push(row);
            }

          } catch (error) {
            state.posts = action.payload;
          }

        });

      }

    },

    // EDIT POST
    editPostsSuccess(state, action) {
      state.isLoading = false;

      var old_arr = JSON.stringify(state.posts);
      old_arr = JSON.parse(old_arr);

      var newarr = old_arr.map((row, index) => {

        if (row.PostID === action.payload.PostID && row.UserID === action.payload.UserID) {

          const newobj = Object.assign({}, {
            ...row,
            Contents: {
              ...row.Contents,
              Comments_Length: action.payload.Contents.Comments.length
            },

          });

          return newobj;


        }
        else {
          return row;
        }

      });

      state.posts = newarr;

    },

    // GET MORE POSTS
    getMorePost(state, action) {
      if (action.payload === 0) {
        state.user_post_index = 0;
      }
      else {
        state.user_post_index = state.user_post_index + 1;
      }
    },

    // GET MORE POST COMMENT HAS MORE
    noHasMore_Post(state, action) {
      state.user_post_hasMore = action.payload;
    },

    // REMOVE POSTS
    removePostsSuccess(state, action) {
      state.isLoading = false;
      state.posts = action.payload;

    },

    // ////////////////////////////////////////////////////
    // COMMENTssssssssssssssssssssssssssssssssssssss

    // GET MORE POST COMMENT
    getMorePost_Comment(state, action) {
      const setIndex = action.payload;
      state.post_comment_index = setIndex;
    },

    // GET MORE POST COMMENT HAS MORE
    noHasMore_Post_Comment(state, action) {
      state.post_comment_hasMore = action.payload;
    },

    // GET COMMIT
    getPostCommentInitial(state, action) {
      state.comments = action.payload;
    },

    // GET COMMIT POST ID
    getPostCommentID(state, action) {
      state.postID = action.payload;
    },

    // GET COMMET HAS ERROR
    hasGetCommentError(state, action) {
      state.isLoading = false;
      state.post_comment_error = action.payload;
    },

    // ////////////////////////////////////////////////////
    // FOLLOWERSssssssssssssssssssssssssssssssssssssss

    // GET MORE FOLLOWERS
    getMoreFollowers(state, action) {
      const setIndex = action.payload;
      if (action.payload === 0) {
        state.followers_index = 0;
      }
      else {
        state.followers_index = state.followers_index + 1;
      }
    },

    // GET MORE FOLLOWERS HAS MORE
    noHasMore_Followers(state, action) {
      state.followers_hasMore = action.payload;
    },

    // GET FOLLOWERS
    getFollowersInitial(state, action) {

      if (state.followers.length <= 0) {
        state.followers = action.payload;
      }
      else {

        action.payload.map((row, index) => {

          try {

            const found = state.followers.find((inrow, inindex) => {

              if (row.ImageID === inrow.ImageID) {
                return inrow;
              }
              else {
                return null;
              }

            })
            if (found === void (0)) {
              state.followers.push(row);
            }

          } catch (error) {
            state.followers = action.payload;
          }

        });

      }

    },

    // GET FOLLOWERS HAS ERROR
    hasGetFollowersError(state, action) {
      state.followers_error = action.payload;
    },

    // REMOVE FOLLOWERS
    removeFollowersSuccess(state, action) {
      state.isLoading = false;
      state.followers = action.payload;

    },

    // FOLLOWINGssssssssssssssssssssssssssssssssssssss

    // GET MORE FOLLOWING
    getMoreFollowing(state, action) {
      if (action.payload === 0) {
        state.following_index = 0;
      }
      else {
        state.following_index = state.following_index + 1;
      }
    },

    // GET MORE FOLLOWING HAS MORE
    noHasMore_Following(state, action) {
      state.following_hasMore = action.payload;
    },

    // GET FOLLOWING
    getFollowingInitial(state, action) {

      if (state.following.length <= 0) {
        state.following = action.payload;
      }
      else {

        action.payload.map((row, index) => {

          try {

            const found = state.following.find((inrow, inindex) => {

              if (row.UserID === inrow.UserID) {
                return inrow;
              }
              else {
                return null;
              }

            })
            if (found === void (0)) {
              state.following.push(row);
            }

          } catch (error) {
            state.following = action.payload;
          }

        });

      }
    },


    // GET FOLLOWING HAS ERROR
    hasGetFollowingError(state, action) {
      state.following_error = action.payload;
    },

    // REMOVE FOLLOWING
    removeFollowersSuccess(state, action) {
      state.following = action.payload;

    },

    // GALLERYssssssssssssssssssssssssssssssssssssss

    // GET MORE GALLARY
    getMoreGallary(state, action) {
      if (action.payload === 0) {
        state.gallery_index = 0;
      }
      else {
        state.gallery_index = state.gallery_index + 1;
      }
    },

    // GET MORE GALLARY HAS MORE
    noHasMore_Gallary(state, action) {
      state.gallery_hasMore = action.payload;
    },

    // GET GALLARY
    getGallaryInitial(state, action) {

      if (state.gallery.length <= 0) {
        state.gallery = action.payload;
      }
      else {

        action.payload.map((row, index) => {

          try {

            const found = state.gallery.find((inrow, inindex) => {

              if (row.ImageID === inrow.ImageID) {
                return inrow;
              }
              else {
                return null;
              }

            })
            if (found === void (0)) {
              state.gallery.push(row);
            }

          } catch (error) {
            state.gallery = action.payload;
          }

        });

      }

    },

    // GET GALLARY HAS ERROR
    hasGetGallaryError(state, action) {
      state.gallery_error = action.payload;
    },

    // REMOVE GALLARY
    removeGallarySuccess(state, action) {
      state.isLoading = false;
      state.gallery = action.payload;
    },

    removeItemGallerySuccess(state, action) {


      var old_arr = JSON.stringify(state.gallery);
      old_arr = JSON.parse(old_arr);

      var newarr = old_arr.filter((row, index) => {

        if (row.ImageID === action.payload) {
          return null;
        }
        else {
          return row;
        }

      });

      state.gallery = newarr;


    },

  }


});

// Reducer
export default slice.reducer;

// Actions
export const { getMorePost, getMorePost_Comment, getMoreFollowers, getMoreFollowing, getMoreGallary, removeItemGallerySuccess } = slice.actions;

// ----------------------------------------------------------------------

export function getProfile() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get(`${SERVER_URL}/user/profile`);
      dispatch(slice.actions.getProfileSuccess(response.data.profile));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function remove_data() {
  return async (dispatch) => {
    try {
      dispatch(slice.actions.removePostsSuccess([]));
      dispatch(slice.actions.noHasMore_Post(true));
      dispatch(slice.actions.getMorePost(0));

      // comment
      dispatch(slice.actions.getMorePost_Comment(0));
      dispatch(slice.actions.getPostCommentID(""));
      dispatch(slice.actions.hasError(null));


      // followers
      dispatch(slice.actions.removeFollowersSuccess([]));
      dispatch(slice.actions.noHasMore_Followers(true));
      dispatch(slice.actions.getMoreFollowers(0));
      dispatch(slice.actions.hasGetFollowersError(null));

      // following
      dispatch(slice.actions.removeFollowersSuccess([]));
      dispatch(slice.actions.noHasMore_Following(true));
      dispatch(slice.actions.getMoreFollowing(0));
      dispatch(slice.actions.hasGetFollowingError(null));

      // gallary
      dispatch(slice.actions.removeGallarySuccess([]));
      dispatch(slice.actions.noHasMore_Gallary(true));
      dispatch(slice.actions.getMoreGallary(0));
      dispatch(slice.actions.hasGetGallaryError(null));


    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function getPosts(page = 0, limit = 5, UserID, length) {

  return async (dispatch) => {
    dispatch(slice.actions.startLoading());

    try {
      const response = await axios.get(`${SERVER_URL}/post/get_Post`, { params: { page, limit, UserID } });

      const results = response.data.posts.length + length;
      const { maxlength } = response.data;

      dispatch(slice.actions.getPostsSuccess(response.data.posts));

      if (results >= maxlength) {
        dispatch(slice.actions.noHasMore_Post(false));
      }

    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };

}

// ----------------------------------------------------------------------

export function get_Post_Comment(page = 0, limit = 5, UserID, PostID) {

  return async (dispatch) => {
    dispatch(slice.actions.getPostCommentInitial([]));
    dispatch(slice.actions.getPostCommentID(PostID));
    try {
      const response = await axios.get(`${SERVER_URL}/post/get_Post_Comment`, {
        params: { page, limit, UserID, PostID }
      });
      const results = response.data.comments.length;
      const { maxlength } = response.data;

      dispatch(slice.actions.getPostCommentInitial(response.data.comments));

      if (results >= maxlength) {
        dispatch(slice.actions.noHasMore_Post_Comment());
      }


    } catch (error) {
      dispatch(slice.actions.hasGetCommentError(error));
    }
  };

};

// ----------------------------------------------------------------------

export function getFollowers(page = 0, limit = 5, length) {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get(`${SERVER_URL}/user/get_Followers`, { params: { page, limit } });
      const results = response.data.followers.length + length;
      const { maxlength } = response.data;

      dispatch(slice.actions.getFollowersInitial(response.data.followers));

      if (results >= maxlength) {
        dispatch(slice.actions.noHasMore_Followers(false));
      }
    } catch (error) {
      dispatch(slice.actions.hasGetFollowersError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function add_Following(UserID) {

  return async (dispatch) => {

    try {
      var formdata = new FormData();
      formdata.append("UserID", UserID);
      const response = await axios.post(`${SERVER_URL}/follows/add_Following`, formdata);
      dispatch(slice.actions.editUserSuccess({ UserID, isadd: true }));

    } catch (error) {


    }
  };

};

// ----------------------------------------------------------------------

export function remove_Following(UserID) {

  return async (dispatch) => {

    try {
      var formdata = new FormData();
      formdata.append("UserID", UserID);
      const response = await axios.post(`${SERVER_URL}/follows/remove_Following`, formdata);
      dispatch(slice.actions.editUserSuccess({ UserID, isadd: false }));

    } catch (error) {

    }
  };

};

// ----------------------------------------------------------------------

export function getFollowing(page = 0, limit = 5, length) {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get(`${SERVER_URL}/user/get_Following`, { params: { page, limit } });

      const results = response.data.following.length + length;
      const { maxlength } = response.data;

      dispatch(slice.actions.getFollowingInitial(response.data.following));

      if (results >= maxlength) {
        dispatch(slice.actions.noHasMore_Following(false));
      }
    } catch (error) {
      dispatch(slice.actions.hasGetFollowingError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function getGallery(page = 0, limit = 5, length) {
  return async (dispatch) => {

    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get(`${SERVER_URL}/user/get_gallery`, { params: { page, limit } });
      const results = response.data.gallary.length + length;
      const { maxlength } = response.data;

      dispatch(slice.actions.getGallaryInitial(response.data.gallary));

      if (results >= maxlength) {
        dispatch(slice.actions.noHasMore_Gallary(false));
      }
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }

  };

}
