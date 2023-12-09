const PageLayout = ({ sidebar, children }) =>
  <div className="flex">
    <div className="border-r border-[#ECEDF1] w-[377px] h-[calc(100vh-92px)] overflow-y-scroll overflow-x-hidden scrollbar-hide py-6 px-4">
      {sidebar}
    </div>
    <div className="w-[calc(100vw-377px)] h-[calc(100vh-92px)]  overflow-y-scroll overflow-x-hidden scrollbar-hide bg-[#f7f8fa] py-6 px-4">
      {children}
    </div>
  </div>;

export default PageLayout;
