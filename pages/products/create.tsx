import axios from "axios";
import router from "next/router";
import { useEffect, useState } from "react";
import Button from "../../components/Button";

const Create = () => {

    type FormData = { title: String; imageUrl: string; price: number }

    const [inputValue, setInputValue] = useState({ title: '', imageUrl: '', price: 0 })
    const [error, setError] = useState('');
    const [isVisible, setVisible] = useState(true)
    const [message, setMessage] = useState("");

    const handleDataInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const id = event.target?.id
        if (id && Object.keys(inputValue).includes(id)) {
            setInputValue((prev) => ({ ...prev, [id]: event.target.value }))
        }

    }

    const isValidInput = ({ title, imageUrl, price }: FormData) => {
        return (title.length && imageUrl.length > 1);
    }

    useEffect(() => {
        if (!isValidInput(inputValue)) {
            setError('Title, imageUrl eller price is not valid')
            setVisible(true)
        }
        else {
            setError('')
            setVisible(false)
        }


    }, [inputValue])


    const handleFormSubmit = async (event: any) => {
        event.preventDefault()
        try {
            axios.post('http://localhost:3000/api/products', {
                title: inputValue.title,
                imageUrl: inputValue.imageUrl,
                price: inputValue.price,
            })
                .then((response) => {
                    console.log(response.data)
                    if (response.status === 201) {
                        setMessage("Product created successfully");
                        inputValue.title = ''
                        inputValue.imageUrl = ''
                        inputValue.price = 0
                    }
                    else {
                        setError("Some error occured");
                    }
                })
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <div className="form-wrapper">
                <form className="create-product-form" data-testid="create-product-form" onSubmit={handleFormSubmit}>
                    <label htmlFor="title">
                        <input
                            id="title"
                            data-testid="title"
                            type="text"
                            placeholder="Title"
                            onChange={handleDataInput}
                            value={inputValue.title}
                        />
                    </label>
                    <label htmlFor="imageUrl">
                        <input
                            id="imageUrl"
                            data-testid="imageUrl"
                            type="text"
                            placeholder="ImageUrl"
                            onChange={handleDataInput}
                            value={inputValue.imageUrl}
                        />
                    </label>
                    <label htmlFor="price">
                        <input
                            id="price"
                            data-testid="price"
                            type="number"
                            placeholder="Price"
                            onChange={handleDataInput}
                            value={inputValue.price}
                        />
                    </label>
                    {error ? (
                        <span className="error" data-testid="error">
                            {error}
                        </span>
                    ) : null}

                    {message ? (<>
                        <span className="success" data-testid="message">
                            {message}
                        </span>
                    </>
                    ) : null}
                    <Button text="Submit" disabled={isVisible} />
                </form>
            </div>

        </>
    )
}

export default Create;