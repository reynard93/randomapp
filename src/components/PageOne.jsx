import React, {useState, useEffect, useRef} from "react";
import AbsoluteWrapper from "./AbsoluteWrapper";
import Navbah from './Navbah'
import Bookstable from './Bookstable'
import Spinner from './UI/Spinner'
import Tooltip from 'react-tooltip-lite'
import Pagination from './Pagination';

//better to separate out as a true container minus all the template
const PageOne = () => {
    const [ payloadBooks , setBooks ] = useState([]);
    const [ objOfAnD, setAscDsc ] = useState({id: true, title: false }) //true for asc, vv. default first press desc//tooltip shows
    const [loading, setload] = useState(true)
    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage] = useState(10);
    let bookInput = useRef();
    let BOOKLIST = useRef([]);
    //extracted out fetchbook use async await to prevent .then chaining / cleaner
    const fetchBooks = async () => {
      setload(true);
      let res = await fetch('https://api.myjson.com/bins/fsphn');
      let jsondata = await res.json()
      BOOKLIST.current = jsondata.data.map(book => {
        const {id, attributes: { created_at, content:title , display_properties: {image}}} = book
        return {id, created_at, title , image}
      });
      setBooks(BOOKLIST.current)
      setload(false)
    }
    useEffect(() => {
      fetchBooks();
      bookInput.current.focus() //improvement, immediately focus in on the text input on load
    },[])

    const sortBy = (key) => {
      if (key === 'id'){
        setBooks(
          [...payloadBooks].sort((a,b) => {
            return objOfAnD[key]? -(a[key] - b[key]) : (a[key] - b[key])
          })
        )
      } else {
        setBooks(
          [...payloadBooks].sort((a,b) => {
            if (a[key] > b[key]){
              return objOfAnD[key]? 1: -1;
            } 
            if (a[key] < b[key]) {
              return objOfAnD[key]? -1: 1;
            }
            return 0;
          })
        )
      }
      setAscDsc({...objOfAnD, [key]: !objOfAnD[key] }) //toggle
    }

    const handlefilter = (event) => {
      setBooks([...BOOKLIST.current].filter(book => new RegExp(event.target.value,'i').test(book.title)))
      console.log(payloadBooks)
    }
    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = payloadBooks.slice(indexOfFirstBook, indexOfLastBook);

    //i mean this can be its own component as a parent to Bookstable(two levels prop drilling, would use context api) bad naming too
    let table = (
      <table>
        <tbody>
          <tr >
            <th>
            <Tooltip content={objOfAnD.id ? "Descend" : "Ascend" }>
              <button onClick={()=> sortBy('id')} >
                  #
                </button>
            </Tooltip>
            </th>
            <th></th>
            <th>
              <Tooltip content={objOfAnD.title ? "Ascend" : "Descend"}>
                <button onClick={()=> sortBy('title')} >title</button>
              </Tooltip>
            </th>
            <th>created</th>
          </tr>
        </tbody>
        {payloadBooks ? <tbody className="card-title mt-4">{currentBooks.map(book =><Bookstable key={book.id} {...book} />) }</tbody> : null}
    </table>
    )

    const paginate = (event,pageNumber) => {
      event.preventDefault();
      setCurrentPage(pageNumber)
    }

    return (
    <AbsoluteWrapper>
      <Navbah/>
      <input aria-label="SearchBooks" ref={bookInput} className="mt-5"type="text" onKeyUp={(e) => handlefilter(e)}/>
      <section className="row justify-content-center text-center p-5">
        <article className="col-md-10">
          <div className="card p-1 m-1 shadow">
          <Pagination booksPerPage={booksPerPage} totalBooks={BOOKLIST.current.length} paginate={paginate}/>
          {loading ? <Spinner/> : table}
          </div>
        </article>
      </section>
    </AbsoluteWrapper>
  );
};

export default PageOne;
