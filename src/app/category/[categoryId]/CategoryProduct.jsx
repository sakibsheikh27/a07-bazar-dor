
"use client";

import React, { useState } from "react";
import Link from "next/link";

const CategoryProducts = ({ categories }) => {
    const [sortBy, setSortBy] = useState("default");

    const sortedCategories = [...categories].sort((a, b) => {
        if (sortBy === "DtoI") {
            return a.today - b.today;
        }

        if (sortBy === "ItoD") {
            return b.today - a.today;
        }

        return a.nameBn.localeCompare(b.nameBn, "bn");
    });

    return (
        <div>
            {/* Sorting dropdown */}
            <div className="flex gap-3 items-center py-3 px-5 border-2 border-gray-200 rounded-2xl bg-white justify-end my-5">
                <label>সাজান</label>

                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="select select-bordered text-center border-2 border-gray-200 rounded-2xl"
                >
                    <option value="default">ডিফল্ট</option>
                    <option value="DtoI">দাম: কম থেকে বেশি</option>
                    <option value="ItoD">দাম: বেশি থেকে কম</option>
                </select>
            </div>

            {/* Product count */}
            <p className="text-gray-500 mb-4">
                মোট {sortedCategories.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে
            </p>

            {/* Product cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {sortedCategories.map((category) => (
                    <Link
                        href={`/product/${category.id}`}
                        className="border-2 border-gray-200 bg-white rounded-2xl p-3"
                        key={category.id}
                    >
                        <div className="flex gap-3">
                            <span className="text-5xl bg-gray-200 rounded-2xl">
                                {category.image}
                            </span>

                            <div>
                                <p className="font-bold text-xl">
                                    {category.nameBn}
                                </p>

                                <small>
                                    {category.unit === "kg"
                                        ? "প্রতি কেজি"
                                        : category.unit === "piece"
                                        ? "প্রতি পিস"
                                        : category.unit === "dozen"
                                        ? "প্রতি ডজন"
                                        : category.unit === "litre"
                                        ? "লিটার"
                                        : category.unit}
                                </small>
                            </div>
                        </div>

                        <h3 className="my-3">আজকের দাম</h3>

                        <div className="flex justify-between items-center">
                            <h3>
                                <span className="text-2xl font-bold">
                                    {category.today.toLocaleString("bn-BD")}
                                </span>{" "}
                                টাকা
                            </h3>

                            <div
                                className={
                                    Number(category.change?.pct) > 0
                                        ? "text-green-600"
                                        : Number(category.change?.pct) < 0
                                        ? "text-red-600"
                                        : "text-gray-500"
                                }
                            >
                                {Number(category.change?.pct) > 0
                                    ? "▲"
                                    : Number(category.change?.pct) < 0
                                    ? "▼"
                                    : "-"}

                                {Number(category.change?.pct).toLocaleString("bn-BD")}%
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CategoryProducts;

