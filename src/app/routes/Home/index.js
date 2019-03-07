import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

class Home extends React.Component {


    componentWillMount(){
        
    }

    render() {
        const {authUser} = this.props;
        return (
            <div className="app-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-12  text-center card p-md-5 p-2">
                            <h1 className="my-5 font-weight-bold" style={{fontSize: '30px'}}>Bem-vindo ao JusProcesso - Sistema de Gestão de Processos</h1>
                            <h1 className="font-weight-bold" style={{fontSize: '25px'}}>Seja bem-vindo {authUser.nome}, o seu último acesso foi 19/04/2018</h1>
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({user}) => {
    const {authUser} = user;
    return {authUser};
};

export default connect (mapStateToProps, null)(Home);