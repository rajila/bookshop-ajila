import './Layout.css';

const Layout = (props) => {
      return (
            <div className="container layout-content">
                  {props.children}
            </div>
      );
}

export default Layout;