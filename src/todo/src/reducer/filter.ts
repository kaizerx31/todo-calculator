import { EActionTypes, EFilterTypes, IActionObject } from "../actions";

 const _filter = (state :string = EFilterTypes.SHOW_ALL , action : IActionObject) => {
        switch(action.type) {
            case EActionTypes.SET_FILTER:
                return action.filter;
            default:
                return state;
         }
}
export default _filter;