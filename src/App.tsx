import {CustomSelect} from "@/components/common/custom-select.tsx";
import {useState} from "react";
import {CustomMultiSelect} from "@/components/common/custom-multi-select.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Briefcase} from "lucide-react";
import {CustomPasswordInput} from "@/components/common/custom-password-input.tsx";

const App = () => {
  const [value, setValue] = useState('123');

  const [values, setValues] = useState<string[]>([])

  const [inputVal, setInputVal] = useState('');

  const handleSelectChange = (value: string) => {
    setValue(value);
  }

  const handleChangeInput = (e) => {
    setInputVal(e.target.value)
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
      <Button>123</Button>
      <CustomPasswordInput type="text" id="login" placeholder="login" label="Ваш логин" value={inputVal} onChange={handleChangeInput} />
    </div>
  )
}

export default App
