import { combineReducers } from 'redux';
import Test from './Test';


const allReducers = combineReducers({
	test: Test
});

export default allReducers;
