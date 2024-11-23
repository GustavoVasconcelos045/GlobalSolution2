"use client";

import React, { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

const CheckboxExample: React.FC = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow p-4">
                <label className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        className="w-5 h-5"
                        aria-checked={isChecked}
                    />

                    <span className="text-gray-800">Aceito os termos e condições</span>
                </label>

                {isChecked && <p className="text-green-600 mt-2">Checkbox marcado!</p>}
            </main>
            <Footer />
        </div>
    );
};

export default CheckboxExample;
