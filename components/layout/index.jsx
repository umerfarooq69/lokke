import Navbar from '@/components/elements/navbar';

const Layout = ({ children }) =>
  <>
    <Navbar />
    {children}
  </>;

export default Layout;
