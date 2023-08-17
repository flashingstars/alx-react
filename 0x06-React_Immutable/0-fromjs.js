import { fromJS } from 'immutable';

function getImmutableObject(object) {
    if (typeof object !== 'object' || object === null) {
        throw new Error('object must be an object')
    };

    return fromJS(object);
}

const example = {
    fear: true,
    smell: -1033575916.9145899,
    wall: false,
    thing: -914767132,
};

const answer = getImmutableObject(example);

console.log(answer.toString());