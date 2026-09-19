
import Header from './Header';
import Footer from './Footer';

function MainLayout(props) {
    return (
        <div>
            <header>
                <Header />
            </header>

            <main>
                Hello world!
            </main>

            <footer>
                <Footer />
            </footer>

        </div>
    );
}


export default MainLayout;