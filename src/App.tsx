import {CustomSelect} from "@/components/common/custom-select.tsx";
import {useState} from "react";
import {CustomMultiSelect} from "@/components/common/custom-multi-select.tsx";

const App = () => {
  const [value, setValue] = useState('123');

  const [values, setValues] = useState<string[]>([])

  const handleSelectChange = (value: string) => {
    setValue(value);
  }

  return (
    <div className="p-10">
      <CustomSelect
        options={[{ value: '123', label: 'FE', description: 'Frontend разработчик', color: 'green' }, { value: '456', label: 'BE' }, { value: '789', label: 'QA' }]}
        placeholder="выберите значение"
        value={value}
        label="asdasd"
        onChange={handleSelectChange}
        isRequired
      />
      <CustomMultiSelect options={[{ value: '123', label: 'FE' }, { value: '456', label: 'BE' }, { value: '789', label: 'QA' }]} label="asdasdas" placeholder="найти спек" values={values} setValues={setValues} />
    </div>
  )
}

export default App
