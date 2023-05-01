import { proxy } from 'valtio';
import {snapshot, subscribe} from 'valtio/vanilla';

export const headerState = proxy({ count: 0 })
if(typeof window !== 'undefined'){
    console.log('attached to window')
    window.__header__ = window.__header__ || {}
    window.__header__.snapshot = snapshot;
    window.__header__.subscribe = subscribe;
    window.__header__.headerState = headerState;
}
