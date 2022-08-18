import Header from '../components/header'
import { useEffect } from 'react';

export default function Profile() {

    useEffect(() => {
        document.title = 'TG Social - Profile';
    }, []);

    return (
        <>
            <Header />
            social profile here
        </>
    )
}