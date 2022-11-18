const Pagination = ({ increment, decrement, usersPerPage, totalUsers, paginate }) => {
    const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }
    return (
        <>
        <style jsx>
            {`
                .pagination {
                    width: auto;
                    margin-top: 50px;
                    margin-buttom: 50px;
                    display: flex;
                    gap: 5px;
                    justify-content: center;
                  }
            `}
        </style>
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                <li className="page-item mx-1">
                    <a 
                    className="page-link rounded text-secondary" aria-label="Previous"
                    onClick={decrement}>
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>

                {pageNumbers.map((number) => (
                    <li key={number} className="page-item mx-1">
                        <a onClick={() => paginate(number)} className="page-link rounded text-secondary">
                            {number}
                        </a>
                    </li>
                ))}
                
                <li className="page-item mx-1">
                    <a 
                    className="page-link rounded text-secondary"
                    aria-label="Next"
                    onClick={increment}>
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
                {/* <li className="page-item mx-1">
                    <a className="page-link rounded text-secondary" href="#">
                        3
                    </a>
                </li>
                <li className="page-item mx-1">
                    <a className="page-link rounded text-secondary" href="#">
                        4
                    </a>
                </li>
                <li className="page-item mx-1">
                    <a className="page-link rounded text-secondary" href="#">
                        5
                    </a>
                </li>
                <li className="page-item mx-1">
                    <a className="page-link rounded text-secondary" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li> */}
            </ul>
        </nav>
        </>
    );
};

export default Pagination;