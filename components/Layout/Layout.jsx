import { ThemeProvider } from "next-themes";
import Header from "../Header/Header";
import styles from './Layout.module.scss';

const Layout = ({ children }) => {
    return (
        <ThemeProvider>
            <div className={styles.layout}>
                <Header />
                {children}
            </div>
        </ThemeProvider>
    );
};

export default Layout;
