import React, {Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {getAlbum} from '../redux/albumReducer';


class Album extends Component {
    constructor(){
        super();
        this.state = {
            title: '',
            url: ''
        }
    }

    componentDidMount(){
        axios.get('/api/photos').then( res => {
            this.props.getAlbum(res.data)
        })
    }

    render(){
        const photos = this.props.data.album.map( photo => {
            return <div key={`photoId_${photo.id}`}>
                <span className='photo-title'>{photo.title}</span>
                <img className='photo-img' alt={photo.title} src={photo.url}/>
            </div>
        })
        return (
            <div className='photo-album'>
                {photos}
            </div>
        )
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {getAlbum})(Album);