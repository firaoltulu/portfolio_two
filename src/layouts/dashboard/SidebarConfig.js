// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// components
import SvgIconStyle from '../../components/SvgIconStyle';

// ----------------------------------------------------------------------

const getIcon = (name) => (
  <SvgIconStyle src={`/static/icons/navbar/${name}.svg`} sx={{ width: '100%', height: '100%' }} />
);

const ICONS = {
  blog: getIcon('ic_blog'),
  cart: getIcon('ic_cart'),
  chat: getIcon('ic_chat'),
  // mail: getIcon('ic_mail'),
  user: getIcon('ic_user'),
  kanban: getIcon('ic_kanban'),
  banking: getIcon('ic_banking'),
  calendar: getIcon('ic_calendar'),
  ecommerce: getIcon('ic_ecommerce'),
  analytics: getIcon('ic_analytics'),
  dashboard: getIcon('ic_dashboard'),
  booking: getIcon('ic_booking')
};

const sidebarConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: 'general',
    items: [
      {
        title: 'app',
        path: PATH_DASHBOARD.general.app,
        icon: ICONS.dashboard,
        role: 1
      },
      { title: 'user', path: PATH_DASHBOARD.friend.root, icon: ICONS.user, role: 1 },
      {
        title: 'Pairs',
        path: PATH_DASHBOARD.currency.root,
        icon: ICONS.analytics,
        role: 1,
      },
      { title: 'calendar', path: PATH_DASHBOARD.calendar, icon: ICONS.calendar, role: 1 },
      { title: 'kanban', path: PATH_DASHBOARD.kanban, icon: ICONS.kanban, role: 1 }
      // { title: 'analytics', path: PATH_DASHBOARD.general.analytics, icon: ICONS.analytics, role: 1 },
      // { title: 'banking', path: PATH_DASHBOARD.general.banking, icon: ICONS.banking, role: 1 },
      // { title: 'booking', path: PATH_DASHBOARD.general.booking, icon: ICONS.booking, role: 1 },

    ]
  },

  // MANAGEMENT people
  // ----------------------------------------------------------------------
  // {
  //   subheader: 'management',
  //   items: [
  //     // MANAGEMENT : EMPLOYEE
  //     {
  //       title: 'employee',
  //       path: PATH_DASHBOARD.employee.root,
  //       icon: ICONS.user,
  //       role: 1,
  //       children: [

  //         { title: 'cards', path: PATH_DASHBOARD.employee.cards, role: 1 },
  //         { title: 'list', path: PATH_DASHBOARD.employee.list, role: 1 },
  //         { title: 'create', path: PATH_DASHBOARD.employee.newEmployee, role: 3 },

  //       ]
  //     },

  //     // MANAGEMENT : E-COMMERCE
  //     {
  //       title: 'Orders',
  //       path: PATH_DASHBOARD.eCommerce.root,
  //       icon: ICONS.cart,
  //       role: 1,
  //       children: [
  //         { title: 'shop', path: PATH_DASHBOARD.eCommerce.shop, role: 1 },
  //         { title: 'product', path: PATH_DASHBOARD.eCommerce.productById, role: 1 },
  //         { title: 'list', path: PATH_DASHBOARD.eCommerce.list, role: 1 },
  //         { title: 'create', path: PATH_DASHBOARD.eCommerce.newProduct, role: 1 },
  //         { title: 'edit', path: PATH_DASHBOARD.eCommerce.editById, role: 1 },
  //         { title: 'checkout', path: PATH_DASHBOARD.eCommerce.checkout, role: 1 },
  //         { title: 'invoice', path: PATH_DASHBOARD.eCommerce.invoice, role: 1 }
  //       ]
  //     },

  //     // MANAGEMENT : BLOG
  //     {
  //       title: 'blog',
  //       path: PATH_DASHBOARD.blog.root,
  //       icon: ICONS.blog,
  //       role: 1,
  //       children: [
  //         { title: 'posts', path: PATH_DASHBOARD.blog.posts, role: 1 },
  //         // { title: 'post', path: PATH_DASHBOARD.blog.postById },
  //         { title: 'new post', path: PATH_DASHBOARD.blog.newPost, role: 1 }
  //       ]
  //     },

  //   ]
  // },

  // MANAGEMENT product
  // ----------------------------------------------------------------------
  // {
  //   subheader: 'Product',
  //   items: [

  //     // MANAGEMENT : Symbols
  //     {
  //       title: 'list Binance Pairs',
  //       path: PATH_DASHBOARD.symbol.root,
  //       icon: ICONS.banking,
  //       role: 1,
  //       children: [
  //         { title: 'Symbols', path: PATH_DASHBOARD.symbol.list, role: 1 },
  //       ]
  //     },

  //     // MANAGEMENT : Currency
  //     {
  //       title: 'My Pairs',
  //       path: PATH_DASHBOARD.currency.root,
  //       icon: ICONS.analytics,
  //       role: 1,
  //       children: [
  //         { title: 'list', path: PATH_DASHBOARD.currency.list, role: 1 },
  //       ]
  //     },

  //     // MANAGEMENT : Product
  //     {
  //       title: 'Product',
  //       path: PATH_DASHBOARD.user.root,
  //       icon: ICONS.user,
  //       role: 1,
  //       children: [
  //         { title: 'profile', path: PATH_DASHBOARD.user.profile, role: 1 },
  //         { title: 'cards', path: PATH_DASHBOARD.user.cards, role: 1 },
  //         { title: 'list', path: PATH_DASHBOARD.user.list, role: 1 },
  //         { title: 'create', path: PATH_DASHBOARD.user.newUser, role: 1 },
  //         { title: 'edit', path: PATH_DASHBOARD.user.editById, role: 1 },
  //         { title: 'account', path: PATH_DASHBOARD.user.account, role: 1 }
  //       ]
  //     },

  //     // MANAGEMENT : Orders
  //     {
  //       title: 'Orders',
  //       path: PATH_DASHBOARD.eCommerce.root,
  //       icon: ICONS.cart,
  //       role: 1,
  //       children: [
  //         { title: 'shop', path: PATH_DASHBOARD.eCommerce.shop, role: 1 },
  //         { title: 'product', path: PATH_DASHBOARD.eCommerce.productById, role: 1 },
  //         { title: 'list', path: PATH_DASHBOARD.eCommerce.list, role: 1 },
  //         { title: 'create', path: PATH_DASHBOARD.eCommerce.newProduct, role: 1 },
  //         { title: 'edit', path: PATH_DASHBOARD.eCommerce.editById, role: 1 },
  //         { title: 'checkout', path: PATH_DASHBOARD.eCommerce.checkout, role: 1 },
  //         { title: 'invoice', path: PATH_DASHBOARD.eCommerce.invoice, role: 1 }
  //       ]
  //     },



  //   ]
  // },

  // APP
  // ----------------------------------------------------------------------
  // {
  //   // subheader: 'app',
  //   items: [

  //     // title: 'mail',
  //     // path: PATH_DASHBOARD.mail.root,
  //     // icon: ICONS.mail,
  //     // info: <Label color="error">2</Label>

  //     { title: 'chat', path: PATH_DASHBOARD.chat.root, icon: ICONS.chat, role: 1 },
  //     { title: 'calendar', path: PATH_DASHBOARD.calendar, icon: ICONS.calendar, role: 1 },
  //     { title: 'kanban', path: PATH_DASHBOARD.kanban, icon: ICONS.kanban, role: 1 }
  //   ]
  // }
];

export default sidebarConfig;
