"use client";

import SalaryCalculator from '../../components/calculator';

export default function CountryPage({ params }: { params: { country: string } }) {
  return <SalaryCalculator countryParam={params.country} />;
}
