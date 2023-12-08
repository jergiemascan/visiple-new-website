import React from "react"
import Select from "react-select"
import { getCodeList } from "country-list"

const CountrySelectorComponent = ({ value, onChange }) => {
  const countries = getCodeList()
  const options = Object.entries(countries).map(([code, name]) => ({
    value: code,
    label: name,
  }))

  return (
    <Select
      id="country"
      value={value}
      onChange={onChange}
      options={options}
      placeholder="Select Country"
    />
  )
}

export default CountrySelectorComponent
