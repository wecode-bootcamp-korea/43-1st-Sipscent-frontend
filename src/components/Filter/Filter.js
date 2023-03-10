import React from 'react';
import './Filter.scss';

const Filter = () => {
  return (
    <div className="filter">
      <div className="tastingNotes">
        <h4 className="tastingNotesTitle">Tasting Notes</h4>
        <ul className="tastingNotesListWrap">
          {TASTING_NOTES.map(taste => {
            return (
              <li key={taste.id} className="tastingNotesList">
                <label>
                  <input type="checkbox" name="taste" />
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
          {TEABAG_PRICE.map(price => {
            return (
              <li key={price.id} className="priceRangeList">
                <label>
                  <input type="checkbox" name="price" />₩ {price.price}
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

const TEABAG_PRICE = [
  { id: 1, price: 27000 },
  { id: 2, price: 28000 },
  { id: 3, price: 29000 },
  { id: 4, price: 30000 },
  { id: 5, price: 31000 },
  { id: 6, price: 33000 },
  { id: 7, price: 34000 },
  { id: 8, price: 35000 },
  { id: 9, price: 36000 },
  { id: 10, price: 37000 },
  { id: 11, price: 38000 },
];

const TEACUP_PRICE = [
  { id: 1, price: 43000 },
  { id: 2, price: 47000 },
  { id: 3, price: 48000 },
  { id: 4, price: 49000 },
  { id: 5, price: 51000 },
  { id: 6, price: 52000 },
  { id: 7, price: 53000 },
  { id: 8, price: 55000 },
  { id: 9, price: 59000 },
];
