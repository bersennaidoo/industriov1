import React, { FC } from "react"

interface IButtonProps {
    label: string
    onCalculate: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: FC<IButtonProps> = (props: IButtonProps) => {

    const { label, onCalculate } = props

    return (
        <button data-cy="button" type="submit" className="btn btn-primary btn-xxl" onClick={onCalculate}>{label}</button>
    )
}

export default Button