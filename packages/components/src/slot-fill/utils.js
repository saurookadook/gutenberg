/**
 * External dependencies
 */
import {
	isArray,
	isNumber,
} from 'lodash';

export const isEmptyElement = ( element ) => {
	if ( isNumber( element ) ) {
		return false;
	}

	if ( isArray( element ) ) {
		return ! element.length;
	}

	return ! element;
};
