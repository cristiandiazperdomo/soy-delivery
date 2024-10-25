import React, {useState} from "react";
import "./Faq.css";
import {categories} from "../../constants/faq";
const listOfCategories = ["General", "Servicios", "Pagos", "Tecnología"];

export const Faq = () => {
    const [selectedCategory, setSelectedCategory] = useState("Tecnología");
    return (
        <div className="space-y-4 pt-8 pb-12">
            <div className="flex flex-wrap sm:flex-no-wrap justify-center space-x-4">
                {listOfCategories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`transition-all duration-700 bg-opacity-0 p-3 rounded-xl ${
                            selectedCategory === category
                                ? "bg-gray-100 bg-opacity-100"
                                : ""
                        } `}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <ul className="">
                {categories[selectedCategory].map((cat: any) => (
                    <li
                        className="text-black space-y-2 border-b-2"
                        key={cat.title}
                    >
                        <details className="border-gray-100 p-4">
                            <summary className="flex justify-between text-md">
                                <span className="text-xl font-semibold">
                                    {cat.title}
                                </span>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down min-w-6 w-6 min-h-6 h-6"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                    />
                                    <path d="M6 9l6 6l6 -6" />
                                </svg>
                            </summary>
                            <p className="text-gray-500 mt-2 text-sm">
                                {cat.response}
                            </p>
                        </details>
                    </li>
                ))}
            </ul>
        </div>
    );
};
