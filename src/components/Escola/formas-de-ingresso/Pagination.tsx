import { Dispatch, SetStateAction } from 'react';

import { StyledPagination } from './styles';

type IconProps = {
    hover: boolean,
    size: number
}

type PaginationProps = {
    currentPage: number,
    pages: number[], 
    paginationFunction: Dispatch<SetStateAction<number>>
}

export function LineIcon({ size, hover }: IconProps) {
    return (
      <svg
        fill="none"
        height="2"
        viewBox="0 0 20 2"
        width={size}
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          stroke={hover ? '#E3598E' : '#958FA0'}
          strokeWidth="2"
          x2="20"
          y1="1"
          y2="1"
        />
      </svg>
    )
  }

export default function Pagination({currentPage, pages, paginationFunction} : PaginationProps) {

    function handlePagination (page: number) {
        if(page > 0 && page <= pages.length)
        paginationFunction(page);
      }

      function isLastPage () {
        return currentPage === pages.length;
      }
    
      function isFirstPage () {
        return currentPage === 1;
      }
    
      function setPaginationBtnClassName(direction: string) {
        if(direction === 'left') {
          return isFirstPage()
          ? 'pagination-btn' 
          : 'pagination-btn active'
        }
    
        return isLastPage()
          ? 'pagination-btn'
          : 'pagination-btn active'
      }
    
    return (
        <StyledPagination>
              <button className= {setPaginationBtnClassName('left')} 
                onClick={() => handlePagination(currentPage - 1)}> Anterior </button>
              
              <div className="pagination-container">
                {pages.map((page) => page === currentPage - 1 
                ? <LineIcon key={page} hover size={20} /> 
                : <LineIcon key={page} hover={false} size={20} />)}
              </div>
              
              <button className= {setPaginationBtnClassName('right')} 
                onClick={() => handlePagination(currentPage + 1)}> Próximo </button>
        </StyledPagination>
    )
}