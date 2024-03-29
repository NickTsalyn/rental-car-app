import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Card } from '../Card/Card';
import { fetchCars, pageChange } from 'redux/cars/operations';
import { allCars } from 'redux/cars/selectors';
import { BtnLoadMore } from '../Button/Button.styled';
import { CardListWrapper, List } from './CardList.styled';
import { selectBrands } from 'redux/filters/selectors';
import { nanoid } from 'nanoid';

export const CardList = () => {
  const dispatch = useDispatch();
  const cars = useSelector(allCars);
  const selectBrand = useSelector(selectBrands)
  const [page, setPage] = useState(0);
  // const [allPages, setAllPages] = useState(true)
  const filteredCars = cars.filter(car => car.make === selectBrand)

  // const itemsPerPage = 12;
  // const totalItems = selectBrand ? filteredCars.length : cars.length
  // const totalPages = Math.ceil(totalItems / itemsPerPage);
  // setAllPages(totalPages)
  



  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  useEffect(() => {
    if (page === 0) {
      return;
    } else {
      dispatch(pageChange(page));
    }
  }, [dispatch, page]);

  const loadMore = () => {
    setPage(page + 1);
  };


  return (
    <CardListWrapper>
      <List>
        {selectBrand ? (filteredCars.map(car => (
          <li key={nanoid()}>
            <Card car={car} />
          </li>
        ))) : (cars.map(car => (
          <li key={nanoid()}>
            <Card car={car} />
          </li>
        )))}
      </List>
      { page < 3  && <BtnLoadMore onClick={loadMore}>Load More</BtnLoadMore>} 
    </CardListWrapper>
  );
};
