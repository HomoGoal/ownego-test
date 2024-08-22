import SideBar from '../components/SideBar';

function MainLayout({children}) {
  return (
    <div className="main-layout">
      <SideBar />
      {children}
    </div>
  );
}

export default MainLayout;
