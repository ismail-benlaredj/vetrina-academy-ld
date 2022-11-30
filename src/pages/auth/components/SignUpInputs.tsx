import { StyledInput } from 'pages/components/StyledInput';

const inputs = [{
    name: "shope name",
    type: "text",
    placeholder: "Shop name",
},
{
    name: "Name",
    type: "text",
    placeholder: "First and last name",

},
{
    name: "email",
    type: "email",
    placeholder: "Email",
},
{
    name: "password",
    type: "password",
    placeholder: "Enter password",
}
]
export default function SignUpInputs() {
    return (
        <>
            {inputs.map((input, index) => (
                <StyledInput
                    name={input.name}
                    type={input.type}
                    placeholder={input.placeholder}
                    key={index}
                />

            ))}
        </>
    )
}
