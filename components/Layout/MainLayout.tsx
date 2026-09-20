import Header from '@/Layout/Header';
import Footer from '@/Layout/Footer';
import LeftColumn from '@/Layout/LeftColumn';
import MainColumn from '@/Layout/MainColumn';

function MainLayout(props:any) {
    
    let className = "m-12"
    if (props.className) {
        className += " " + props.className;
    }

    return (
        <div className={className}>
            <header className="mb-12">
              <Header />
            </header>

            <main className="mx-32 flex flex-row justify-center gap-20">
              <LeftColumn className="flex-none w-50" />
              <MainColumn className="flex-1 max-w-200" />
            </main>

            <footer>
                <Footer />
            </footer>

        </div>
    );
}

export default MainLayout;