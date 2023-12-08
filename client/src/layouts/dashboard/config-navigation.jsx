import SvgColor from '../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'dashboard',
    path: '/admin/dashboard',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Công ty',
    path: '/admin/company',
    icon: icon('ic_user'),
  },
  {
    title: 'product',
    path: '/admin/product',
    icon: icon('ic_cart'),
  },
  {
    title: 'Danh sách vụ trí thực tập',
    path: '/admin/post',
    icon: icon('ic_blog'),
  },
  {
    title: 'login',
    path: '/admin',
    icon: icon('ic_lock'),
  },
  {
    title: 'Not found',
    path: '/doanhnghiep',
    icon: icon('ic_disabled'),
  },
];

export default navConfig;
