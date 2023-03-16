import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './Filter.scss';

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const setQuery = (value, e) => {
    if (e.target.checked) {
      searchParams.append('tasting_notes', `"${value}"`);
      setSearchParams(searchParams);
    } else {
      const search = searchParams.getAll('tasting_notes');
      searchParams.delete('tasting_notes');

      search
        .filter(list => list !== `"${value}"`)
        .forEach(value => {
          searchParams.append('tasting_notes', value);
        });

      setSearchParams(searchParams);
    }
  };

  const setPrice = (value, e) => {
    if (e.target.checked) {
      searchParams.append('price', value);
      setSearchParams(searchParams);
    } else {
      const search = searchParams.getAll('price');
      searchParams.delete('price');

      search
        .filter(list => list !== value)
        .forEach(value => {
          searchParams.append('price', value);
        });

      setSearchParams(searchParams);
    }
  };

  return (
    <div className="filter">
      <div className="tastingNotes">
        <h4 className="tastingNotesTitle">Tasting Notes</h4>
        <ul className="tastingNotesListWrap">
          {TASTING_NOTES.map(taste => {
            return (
              <li key={taste.id} className="tastingNotesList">
                <label>
                  <input
                    type="checkbox"
                    name="taste"
                    onChange={e => setQuery(taste.taste, e)}
                  />
                  {taste.taste}
                </label>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="priceRange">
        <h4 className="priceRangeTitle">가격 범위</h4>
        <ul className="priceRangeListWrap">
          {PRICE_RANGE.map(price => {
            return (
              <li key={price.id} className="priceRangeList">
                <label>
                  <input
                    type="checkbox"
                    name="price"
                    onChange={e => setPrice(price.price, e)}
                  />
                  {price.range}
                </label>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Filter;

const TASTING_NOTES = [
  { id: 1, taste: '화려한' },
  { id: 2, taste: '그윽한' },
  { id: 3, taste: '은은한' },
  { id: 4, taste: '차분한' },
  { id: 5, taste: '우아한' },
  { id: 6, taste: '화사한' },
  { id: 7, taste: '싱그러운' },
  { id: 8, taste: '상큼한' },
  { id: 9, taste: '부드러운' },
  { id: 10, taste: '달콤한' },
];

const PRICE_RANGE = [
  { id: 1, range: '~ ₩ 30,000 ', price: '30000' },
  { id: 2, range: '₩ 30,000 ~ 40,000', price: '30000~40000' },
  { id: 3, range: '₩ 40,000 ~ 50,000', price: '40000~50000' },
  { id: 4, range: '₩ 50,000 ~', price: '50000' },
];
