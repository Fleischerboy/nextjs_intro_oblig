import { ProductData, UserData } from "../types";

export const dummyUserData: UserData[] = [
    { email: 'philip.@hotmail.com', nickname: "phila", password: '123' },
    { email: 'testest@test.com', nickname: 'testeman', password: '123' }
]

export const dummyProductData: ProductData[] = [
    {
        title: 'lamp',
        imageUrl:
            'https://images.unsplash.com/photo-1517991104123-1d56a6e81ed9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzODI5NXwwfDF8c2VhcmNofDMwfHxMYW1wfGVufDB8fHx8MTY2NjA4ODg5MA&ixlib=rb-1.2.1&q=80&w=400',
        price: 200,
    },
    {
        title: 'nike',
        imageUrl:
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzODI5NXwwfDF8c2VhcmNofDJ8fG5pa2V8ZW58MHx8fHwxNjY2MDg4OTEy&ixlib=rb-1.2.1&q=80&w=400',
        price: 500,
    },
    {
        title: 'ball',
        imageUrl:
            'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzODI5NXwwfDF8c2VhcmNofDF8fGJhbGx8ZW58MHx8fHwxNjY2MDg4OTMx&ixlib=rb-1.2.1&q=80&w=400',
        price: 300,
    },
    {
        title: 'skateboard',
        imageUrl:
            'https://images.unsplash.com/photo-1547447134-cd3f5c716030?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzODI5NXwwfDF8c2VhcmNofDh8fHNrYXRlYm9hcmR8ZW58MHx8fHwxNjY2MDg4OTUx&ixlib=rb-1.2.1&q=80&w=400',
        price: 800,
    },

]