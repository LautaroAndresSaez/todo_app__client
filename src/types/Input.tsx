export interface InputProps {
    name: string,
    type: string,
    placeholder: string,
    onChange?: (e: React.ChangeEvent) => void,
    value: string,
    error?: string
}