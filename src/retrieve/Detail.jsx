import React from 'react';

const Detail = ({album, artists, name}) => {

    return (
        <div className="offset-md-1 col-sm-4 gap-5 mt-16 mb-9 " >
            <div className="row col-sm-12 px-0  ">
                <img 
                    className="mx-auto w-96 mt-7 "
                    src={album.images[0].url}
                    alt={name}>                    
                </img>
            </div>
            <div className="row col-sm-12 px-0 mt-4 text-center text-white">
                <label htmlFor={name} className="form-label col-sm-12">
                    {name}
                </label>
            </div>
            <div className="row col-sm-12 px-0 text-center text-white ">
                <label htmlFor={artists[0].name} className="form-label col-sm-12 ">
                    {artists[0].name}
                    
                </label>
                
            </div>
        </div>
    );
}

export default Detail;