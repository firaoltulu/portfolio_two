// ----------------------------------------------------------------------

function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = '/auth';
const ROOTS_DASHBOARD = '/dashboard';

// ----------------------------------------------------------------------


export const PATH_PAGE = {
  landing: '/',
  project_one: '/projects/post/one',
  project_two: '/projects/post/two',
  project_three: '/projects/post/three',

};

// //////////////////////////////////////////////////////////


export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, '/login'),
  loginUnprotected: path(ROOTS_AUTH, '/login-unprotected'),
  register: path(ROOTS_AUTH, '/register'),
  registerUnprotected: path(ROOTS_AUTH, '/register-unprotected'),
  resetPassword: path(ROOTS_AUTH, '/reset-password'),
  verify: path(ROOTS_AUTH, '/verify')
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  general: {
    app: path(ROOTS_DASHBOARD, '/app'),
  },

  user: {
    root: path(ROOTS_DASHBOARD, '/user'),
    profile: path(ROOTS_DASHBOARD, '/user/profile'),
    account: path(ROOTS_DASHBOARD, '/user/account')
  },

  friend: {
    root: path(ROOTS_DASHBOARD, '/friend'),
    profile: path(ROOTS_DASHBOARD, '/friend/profile'),
    cards: path(ROOTS_DASHBOARD, '/friend/cards'),
    list: path(ROOTS_DASHBOARD, '/friend/list'),
  },

  currency: {
    root: path(ROOTS_DASHBOARD, '/currency'),
    chart: path(ROOTS_DASHBOARD, '/currency/list/chart'),
    list: path(ROOTS_DASHBOARD, '/currency/list'),
    calendar: path(ROOTS_DASHBOARD, '/currency/list/calendar'),
  },

  contact: path(ROOTS_DASHBOARD, '/contact-us'),

  calendar: path(ROOTS_DASHBOARD, '/calendar'),
  kanban: path(ROOTS_DASHBOARD, '/kanban'),


  // /////////////////////////////////////////////////////////

  mail: {
    root: path(ROOTS_DASHBOARD, '/mail'),
    all: path(ROOTS_DASHBOARD, '/mail/all')
  },
  chat: {
    root: path(ROOTS_DASHBOARD, '/chat'),
    new: path(ROOTS_DASHBOARD, '/chat/new'),
    conversation: path(ROOTS_DASHBOARD, '/chat/:conversationKey')
  },

  blog: {
    root: path(ROOTS_DASHBOARD, '/blog'),
    posts: path(ROOTS_DASHBOARD, '/blog/posts'),
    post: path(ROOTS_DASHBOARD, '/blog/post/:title'),
    postById: path(ROOTS_DASHBOARD, '/blog/post/apply-these-7-secret-techniques-to-improve-event'),
    newPost: path(ROOTS_DASHBOARD, '/blog/new-post')
  },


};

export const PATH_DOCS = 'https://firaol-tulu-portfolio.vercel.app/';
