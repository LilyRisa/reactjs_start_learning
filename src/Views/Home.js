
import {Header} from '~/Components/header'
import {globalstyle} from '~/Services'

function Home() {
    console.log(Header);
    return (
        <>
        <Header/>
        <div className={globalstyle('container my-2')}>
            home
        </div>
        </>
    );
}

export default Home;