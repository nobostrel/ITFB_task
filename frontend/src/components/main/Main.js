import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { sendRequestAction } from '../../actions/index';
import './Main.scss';

const uuidv4 = require('uuid/v4');

class MainComponent extends Component {

    componentDidMount() {
        this.props.sendRequest('https://jsonplaceholder.typicode.com/photos');
    }

    render() {
        return (
            <main className='main'>
                <div className='container'>
                    <div className='contentBlock'>
                        <h1 className='title'> Вывод данных в цикле </h1>
                        <p className='description'> Всего записей: {this.props.photos.length} </p>
                        <div className='cards'>
                            { this.props.photos.map( item => {
                                return <div className='card' key={uuidv4()} >
                                    <img src={item.url} alt='not loaded' />
                                    <h3 className='card__title'> {item.title} </h3>
                                    <p className='card__id'> albumId: {item.albumId} </p>
                                </div>
                            }) }
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

const mapStateToProps = state => {
    return {
        photos: state.Data.photos
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sendRequest: bindActionCreators(sendRequestAction, dispatch)
    }
}

export const Main = connect(mapStateToProps, mapDispatchToProps)(MainComponent);
