import type { FC } from "react";

export const PreviousSearches:FC<Props> = ({searches, onLabelClicked}) => {
  return (
     <div className="previous-searches">
        <h2>Búsquedas previas</h2>
        <ul className="previous-searches-list">
              {
                searches.map(term => (
                  <li key={term} onClick={() => onLabelClicked(term)}>
                    {term}
                  </li>
                ))
              }
        </ul>
    </div>
  )
}

interface Props{
  searches: string[];
  onLabelClicked: (term: string)=> void;
}