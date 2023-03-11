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
          {PRICE_RANGE.map(price => {
            return (
              <li key={price.id} className="priceRangeList">
                <label>
                  <input type="checkbox" name="price" />₩ {price.range}
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
  { id: 1, range: '30000원 이하' },
  { id: 2, range: '30000원 초과 - 40000원 이하' },
  { id: 3, range: '40000원 초과 - 50000원 이하' },
  { id: 4, range: '50000원 초과' },
];
