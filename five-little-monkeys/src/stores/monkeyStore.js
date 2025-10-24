import { atom } from 'nanostores';

export const MonkeyCount = atom(5);

export function removeMonkey() {
    if(MonkeyCount.get() > 0) {
        MonkeyCount.set(MonkeyCount.get() -1);
    }
}

export function resetMonkeys() {
    MonkeyCount.set(5);
}