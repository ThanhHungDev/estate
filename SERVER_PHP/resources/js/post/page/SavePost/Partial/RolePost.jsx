import React from "react"
import V from "max-validator"

const registerFormScheme = {
    name : "required|string|min:2|max:50"
}

function RolePost(props) {

    const [formState, setFormState] = React.useState({
        isValid: false,
        values : {
			name: ''
		},
        touched: {},
        errors : V.getEmpty(),
    })

    const handleChange = (event) => {
        event.persist()

        setFormState((formState) => ({
            ...formState,
            values: {
                ...formState.values,
                [event.target.name]:
                    event.target.type === "checkbox"
                        ? event.target.checked
                        : event.target.value,
            },
            touched: {
                ...formState.touched,
                [event.target.name]: true,
            },
        }))
    }

    React.useEffect(() => {
        const errors = V.validate(formState.values, registerFormScheme)
		const newState = {
            ...formState,
            isValid: errors.hasError,
            errors,
        }
        setFormState(newState)
    }, [formState.values])

    const hasErr = (name) => {
        return formState.touched[name] && formState.errors.isError(name)
    }

    return (
        <form>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                className={hasErr("name") ? "error" : ""}
                name="name"
                value={formState.values.name}
                onChange={handleChange}
            />

        </form>
    )
}
export default RolePost