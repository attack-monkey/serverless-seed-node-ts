let debuggerx = false;

export const debug = {
    log: (...args) => debuggerx ? console.log(...args) : undefined,
    on: () => {
        console.log('Debugger activated...');
        debuggerx = true;
    },
    isOn: () => debuggerx,
    off: () => {
        console.log('Debugger activated...');
        debuggerx = false
    }
}