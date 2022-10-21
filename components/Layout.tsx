type LayoutProps = {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return <main id="page-wrapper">
        {children}
        </main>




}

export default Layout