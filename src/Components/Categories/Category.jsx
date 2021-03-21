import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getFilteredCategory } from '../../api';

import { MealList } from '../Meals/MealList';
import { Preloader } from '../Shared/Preloader';

export const Category = () => {
    const { name } = useParams();
    const [meals, setMeals] = useState([]);

    const { goBack } = useHistory();

    useEffect(() => {
        getFilteredCategory(name).then((data) => setMeals(data.meals));
    }, [name]);

    return (
        <>
            <button className='btn' onClick={goBack}>
                Go back
            </button>
            {!meals.length ? <Preloader /> : <MealList meals={meals} />}
        </>
    );
};
