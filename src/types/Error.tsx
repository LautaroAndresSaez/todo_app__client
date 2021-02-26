export class Error {
    private name: string;
    private message?: string;

    constructor(name: string) {
        this.name = name;
    }

    clearMessage() {
        this.message = undefined;
    }

    isEmpty(){
        return this.message === undefined;
    }

    setMessage(message?: string) {
        this.message = message;
    }

    getName() {
        return this.name;
    }

    getError() {
        return {
            name: this.name,
            message: this.message
        }
    }
}