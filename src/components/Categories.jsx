import React, { useState } from 'react';

export default function Categories() {
    const [activeIndex, setActiveIndex] = useState(0);
    const categories = [
        { id: 0, name: "Все" },
        { id: 1, name: "Мясные" },
        { id: 2, name: "Вегетарианская" },
        { id: 3, name: "Гриль" },
        { id: 4, name: "Острые" },
        { id: 5, name: "Закрытые" },
    ];

    const activeHandle = (index) => {
        setActiveIndex(index)
    }

    return (
        <div className="categories">
            <ul>
                {
                    categories.map((value) => {
                        return <li onClick={() => activeHandle(value.id)} className={activeIndex === value.id ? "active" : ""} key={value.id}>{value.name}</li>
                    })
                }
            </ul>
        </div>
    )
}