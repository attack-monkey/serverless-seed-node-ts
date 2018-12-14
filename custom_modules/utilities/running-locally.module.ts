const runLocalOn = {
    dev: true
}

export function runningLocally(): boolean {
    try {
        return runLocalOn[process.env['ENVIRONMENT']] || false;
    } catch (e) { return false; }
}
