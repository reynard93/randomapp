import React, {useState, useEffect, useRef} from "react";
import AbsoluteWrapper from "./AbsoluteWrapper";
import Navbah from './Navbah'
import Bookstable from './Bookstable'

const PageOne = () => {

    const [ payloadBooks , setBooks ] = useState([]);
    const [ objOfAnD, setAscDsc ] = useState({id: true, title: false }) //true for asc, vv. default first press desc
    //initial state title ordered, first press order by desc
    //toggles btwn asc and dsc
    //for dates would need to parse first but apply same mtd
    let BOOKLIST = useRef([]);

    useEffect(() => {
      fetch('http://localhost:4000/data')
      .then(res =>res.json())
      .then(res=> {
        BOOKLIST.current = res.map(book => {
          const {id, attributes: { created_at, content:title , display_properties: {image}}} = book
          return {id, created_at, title , image}
        });
        setBooks(BOOKLIST.current)

      })
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

    return (
    <AbsoluteWrapper>
      <Navbah/>
      <input className="mt-5"type="text" onKeyUp={(e) => handlefilter(e)}/>
      <section className="row justify-content-center text-center p-5">
        <article className="col-md-10">
          <div className="card p-1 m-1 shadow">
            <table>
              <tbody>
                <tr>
                  <th>
                    <button onClick={()=> sortBy('id')}>
                      #
                    </button>
                  </th>
                  <th></th>
                  <th><button onClick={()=> sortBy('title')}>title</button></th>
                  <th>created</th>
                </tr>
              </tbody>
              <tbody className="card-title mt-4">{payloadBooks? payloadBooks.map(book =><Bookstable key={book.id} {...book} />) : null}</tbody>
            </table>
          </div>
        </article>
      </section>
    </AbsoluteWrapper>
  );
};

export default PageOne;
