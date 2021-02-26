import { FormStatus } from "./FormStatus";

export abstract class FormData {
    abstract getStatus(): FormStatus;
    abstract verify(): void;
    abstract clean(): void;
    abstract getData(): {};
}


