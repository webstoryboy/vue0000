import React from 'react';
import Header from '../layout/Header';
import Contents from '../layout/Contents';
import Footer from '../layout/Footer';
import Loading from '../layout/Loading';
import WrapTitle from '../layout/WrapTitle';
import ContInfo from '../layout/ContInfo';
import ReferInfo from '../info/ReferInfo';
import axios from "axios";


class Reference extends React.Component {
    state = {
        isLoading: true,
        refers : [],
    };
    getRefer = async () => {
        const {
            data: {
                data: { htmlRefer },
            },
        } = await axios.get("https://webstoryboy.github.io/react5001/src/assets/json/refer.json");
        this.setState({ htmlRefer, isLoading: false });
    }
    componentDidMount(){
        setTimeout(() => {
            this.getRefer();
        }, 3000);
    }
    render(){
        const { isLoading, htmlRefer } = this.state;
        return (
            <>
                { isLoading ? 
                    (
                        <Loading />
                    ) : (
                        <div className="light">
                            <Header />
                            <Contents>
                                <section id="referCont">
                                    <div className="container">
                                        <WrapTitle text={["REFERENCE", "BOOK"]} />
                                        <div className="refer__cont">
                                            <div className="table">
                                                <h3>HTML</h3>
                                                <ul>
                                                    {htmlRefer.map((refer) => (
                                                        <ReferInfo
                                                            key={refer.id}
                                                            id={refer.id}
                                                            title={refer.title}
                                                            desc1={refer.desc1}
                                                            desc2={refer.desc2}
                                                            element={refer.element}
                                                            tag={refer.tag}
                                                            version={refer.version}
                                                            view={refer.view}
                                                            use={refer.use}
                                                            definition={refer.definition}
                                                        />
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <ContInfo />
                            </Contents>
                            <Footer />
                        </div>
                    )
                }
            </>
        )
    }
}

export default Reference;