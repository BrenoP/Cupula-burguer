import React from 'react';
import '../../Assets/css/style.css';
import RadioCheck from './Radio_Checkbox';

export function ChooseBox({ order }) {
    return (
        <div className="grid-radios">
            <div>
                { order.requests.map(element => {
                    return <RadioCheck order={element} />
                })}
            </div>
            <div className="align-image">
                <img src={order.img.icon} alt={order.img.alt} />
            </div>
        </div>
    )
}
