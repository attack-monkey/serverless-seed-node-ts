import { loadPolyfills } from "../polyfills/load-polyfills.function";
import { iu } from "./iu.functions";

loadPolyfills();

let state = {};

export function getState(node?) {
    return node ? getStateAtNode(node) : state;
}

export const setState = newState => state = newState;

export const updateState = (node, newState) => iu(state, node, newState);

function getStateAtNode(node) {
    const nodes = node.split('/');
    return nodes.reduce((ac, cv) => {
        try {
            return ac[cv];
        }
        catch (e) { return undefined; }
    }, getState());
}