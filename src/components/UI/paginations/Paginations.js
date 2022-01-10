import React from 'react'
import {getPagesArray} from "../../utils/pages"

function Paginations({totalPages, page, changePage}) {
    let pagesArray = getPagesArray(totalPages)
    return (
        <div className="page__wrapper">
        {pagesArray.map(p => <span
          onClick={()=> changePage(p)}
          className={page === p ? 'page page__current' : 'page'}
          key={p}
        >
          {p}
        </span>)}
      </div>
    )
}

export default Paginations
