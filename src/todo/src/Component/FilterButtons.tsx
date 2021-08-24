import _ from "lodash";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { EFilterTypes, _setFilter } from "../actions";

   const FilterButtons = () => {
   const filter = useSelector((state ) => _.get(state,"filter"));
   const dispatch = useDispatch();
   return (
        <div className="Filter-btns">
            {
              filter !== EFilterTypes.SHOW_ALL && 
                  <div className="btn">
                      <input
                        id="all"
                        type="radio"
                        value="all"
                        name="filter"
                        //defaultChecked
                        onClick={() => dispatch(_setFilter(EFilterTypes.SHOW_ALL))}
                      />
                        <label htmlFor="all">All</label>
                  </div>
             }

            {
                filter === EFilterTypes.SHOW_COMPLETED? null: 
                <div className="btn">
                    <input
                      id="complete"
                      type="radio"
                      value="completed"
                      name="filter"
                      onClick={() => dispatch(_setFilter(EFilterTypes.SHOW_COMPLETED))}
                    />
                      <label htmlFor="complete">Completed</label>
                </div>
              }
            
            {
                filter === EFilterTypes.SHOW_INCOMPLETE? null: 
                <div className="btn">
                    <input
                      id="incomplete"
                      type="radio"
                      value="incomplete"
                      name="filter"
                      onClick={() => dispatch(_setFilter(EFilterTypes.SHOW_INCOMPLETE))}
                    />
                      <label htmlFor="incomplete">Incomplete</label>
                </div>
              }
        </div>
   );
};

export default FilterButtons;
