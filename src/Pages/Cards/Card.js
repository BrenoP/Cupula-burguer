import React from 'react';
import { ChooseBox } from './ChooseBox';
import { Card, H3, Required } from './Card.styles';

export function Cards(props) {
    return(
        <Card>
            {(props.title !== "Ingredientes") ? <H3>{props.title}<Required>*</Required></H3> : <H3>{props.title}</H3>}
            <div className="container">
                <form>
                    <ChooseBox order={props.order} title="teste" />
                </form>
            </div>
        </Card>
    );
}