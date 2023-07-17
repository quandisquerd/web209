

import React from 'react';
import Item from '../Item/index';

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";


const List = ({ cars, onRemove, loading }: any) => {

    return (
        <div>
            {loading ? (
                <span> loading...</span>
            ) : (
                <ul>
                    {cars?.map((car: any) => (
                        <Item key={car.id} car={car} onRemove={onRemove} />
                    ))}
                </ul>
            )}

        </div>
    );
};

export default List;