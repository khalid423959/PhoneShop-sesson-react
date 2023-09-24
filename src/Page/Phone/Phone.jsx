import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import PhoneCard from "./PhoneCard";

const Phone = () => {
    const [phone, setPhone] = useState({})

    const { id } = useParams()


    const phones = useLoaderData()


    useEffect(() => {
        const findPhone = phones.find(Phone => Phone.id === id)

        setPhone(findPhone)
    }, [id, phone])

    console.log(phone)

    return (
        <div>
            <PhoneCard phone={phone}></PhoneCard>
        </div>
    );
};

export default Phone;