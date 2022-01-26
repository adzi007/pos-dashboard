import React, {useEffect, useState, useRef} from 'react';
import {useNavigate} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function Dt_table(props) {

   
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {


    },[]);

    let page = props.datastate.page;

    const previousPage  = page.previousPage !== undefined ? page.previousPage : null;
    const nextPage      = page.nextPage !== undefined ? page.nextPage : null;

    
    const changePage = useRef(null);
    const changeSearch = useRef('');

    const { pageNavigation, setSearch } = props;

    const onChangePage = ( pagechange ) => {

        dispatch(pageNavigation(pagechange, changeSearch ));
    }

    // console.log('state', props.datastate);

    const onSearch = (keyword) => {
        // console.log("mencari : ", keyword);

        dispatch({
            type: setSearch,
            searchKeyword: keyword
        });

        dispatch(pageNavigation(1, keyword ));
    }

    return (
        <div className="card">
            <div className="card-body text-left">
                <div className="row">
                    <div className="col-4">
                        <div className="form-group row">
                            <label className="col-3 col-form-label px-2">Display</label>
                            <select className="form-select col-6 dt-select-display" id="exampleFormControlSelect1">
                                <option>10</option>
                                <option>15</option>
                                <option>20</option>
                                <option>25</option>
                                <option>50</option>
                                <option>100</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="form-group row justify-content-end">
                            <label  className="col-1 col-form-label px-0">Search</label>
                            <input type="text" className="form-control dt-input-search"  defaultValue={props.datastate.searchKeyword} ref={changeSearch} onChange={(e) => onSearch(e.target.value)}  />
                        </div>
                    </div>
                </div>
                    
            </div>
            <div className="table-responsive">
                <table className="table">
                    { props.children }
                </table>
            </div>
            <div className="row p-3">

                <div className="col-4"></div>
                <div className="col-3">
                </div>
                <div className="col-5 d-flex justify-content-end">

                    <button className="btn btn-light" type="button"><i className="icon-angle-double-left"></i></button>

                    <button className={'btn btn-light ' + (previousPage == null ? 'disabled':'') } onClick={() => onChangePage(previousPage) } type="button"><i className="icon-angle-left"></i></button>

                    <div className="from-dt-input-page">
                        <input className="form-control dt-input-page" type="number" min="1" max='' defaultValue={page.curentPage} ref={changePage} onChange={(e) => onChangePage(e.target.value)}  />
                        <span> of { page.lastPage }</span>
                    </div>

                    <button className={'btn btn-light ' + (nextPage == null ? 'disabled':'') } onClick={() => onChangePage(nextPage) } type="button"><i className="icon-angle-right"></i></button>

                    <button className="btn btn-light" type="button"><i className="icon-angle-double-right"></i></button>
                </div>
                
            </div>

        </div>
    )
}

export default Dt_table
