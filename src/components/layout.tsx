interface LayoutProps {
  children: React.ReactElement
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <div className="bg-slate-50">
        <div className="container mx-auto flex items-center justify-between p-3">
          <div className="hidden text-2xl font-bold italic md:block">
            Safemint
          </div>
          <div className="text-xl font-semibold md:hidden">Logo</div>
          <div className="ml-3 flex space-x-8 text-lg font-semibold md:space-x-12 lg:space-x-16">
            <div>Home</div>
            <div>Explore</div>
            <div>En</div>
          </div>
        </div>
      </div>

      {children}
    </div>
  )
}

export default Layout
