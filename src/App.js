import React from 'react';
import Navbar from './components/navbar'
import HomeBanner from "./components/home-banner";
import Services from "./components/services" ;
import Agent from "./components/agent" ;
import {Controller, Scene} from 'react-scrollmagic';
import Contact from "./components/contact";
import Footer from "./components/footer";

class App extends React.Component {
    state = {
        isTop: true,
    };

    componentDidMount() {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 100;
            if (isTop !== this.state.isTop) {
                this.setState({isTop})
            }
        });
    }



    render() {
        return (
            <React.Fragment>
                <div className="container-fluid rtl pr-0 pl-0">
                    <Navbar
                        colorInfo={{
                            bgColor: this.state.isTop ? 'dark' : 'dark',
                            color: this.state.isTop ? 'dark' : 'dark'
                        }}
                    />
                    <Controller globalSceneOptions={{triggerHook: 'onLeave'}}>

                        <Scene pin className="panel">
                            <Services/>
                        </Scene>
                    </Controller>
                    <Footer/>
                </div>
            </React.Fragment>
        );
    }
}

export default App;

