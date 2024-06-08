// components/CreditsBarChart.tsx
'use client'
import React, { FC } from 'react';
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Legend, Bar, LabelList, ReferenceLine } from 'recharts';
import { Kurssi } from '@/types/kurssi';

interface CreditsPerYear {
    year: number;
    credits: number;
}

interface CreditsBarChartProps {
    kurssit: Kurssi[];
}

const CreditsBarChart: FC<CreditsBarChartProps> = ({ kurssit }) => {
    // Calculate credits per academic year
    const allYears = kurssit.map(course => course.month >= 8 ? course.year : course.year - 1);
    const minYear = Math.min(...allYears);
    const maxYear = Math.max(...allYears);

    const creditsMap: { [key: number]: number } = {};

    kurssit.forEach(course => {
        const academicYear = course.month >= 8 ? course.year : course.year - 1;
        creditsMap[academicYear] = (creditsMap[academicYear] || 0) + course.credits;
    });

    const creditsPerYear: CreditsPerYear[] = [];
    for (let year = minYear; year <= maxYear; year++) {
        creditsPerYear.push({
            year,
            credits: creditsMap[year] || 0,
        });
    }

    return (
        <ResponsiveContainer width="100%" height={400}>
            <BarChart data={creditsPerYear} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Legend />
                <ReferenceLine y={60} stroke="red" strokeDasharray="3 3" />
                <Bar dataKey="credits" fill="#2f85da" name="opintopisteet">
                    <LabelList dataKey="credits" style={{fill:"#FFFFFF", fontSize: '0.8rem'}}/>
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
};

export default CreditsBarChart;