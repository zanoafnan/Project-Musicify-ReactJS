import React from 'react';

const Listbox = props => {

    const clicked = e => {
        e.preventDefault();
        props.clicked(e.target.id);
    }    

    return (
        <div className="col-sm-6 px-0  ">
            <div className="list-group flex flex-col lg:flex-row gap-5 justify-center mt-3 py-1 my-4 ">
                {
                    props.items.map((item, idx) => 
                    <button key={idx}
                        onClick={clicked}
                        className="list-group-item list-group-item-action list-group-item-light text-white bg-brightColor rounded-full px-3 py-2"
                        id={item.track.id}>
                            
                            {item.track.name}
                    </button>)
                }
            </div>
        </div>
        

    );
}

export default Listbox;