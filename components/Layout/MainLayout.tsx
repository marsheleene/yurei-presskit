import Header from '@/Layout/Header';
import Footer from '@/Layout/Footer';
import LeftColumn from '@/Layout/LeftColumn';
import MainColumn from '@/Layout/MainColumn';

function MainLayout(props:any) {
    
    let className = ""
    if (props.className) {
        className += " " + props.className;
    }

    return (
        <div className={className}>
            <header>
                <Header />
            </header>

            <main className="grid grid-cols-3 gap-10">
                <LeftColumn className="col-span-1" />
                <MainColumn className="col-span-2" />
            </main>

            <footer>
                <Footer />
            </footer>

        </div>
    );
}

export default MainLayout;