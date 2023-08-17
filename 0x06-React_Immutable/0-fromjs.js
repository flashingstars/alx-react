import { fromJS } from 'immutable';

function getImmutableObject(object) {
    if (typeof object !== 'object' || object === null) {
        throw new Error('object must be an object')
    };

    return fromJS(object);
}

export default getImmutableObject;