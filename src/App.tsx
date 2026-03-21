import {CustomSelect} from "@/components/common/custom-select.tsx";
import {useState} from "react";
import {CustomMultiSelect} from "@/components/common/custom-multi-select.tsx";
import {Button} from "@/components/ui/button.tsx";
import {CustomPasswordInput} from "@/components/common/custom-password-input.tsx";
import {CustomModal} from "@/components/common/custom-modal.tsx";
import {CustomProgress} from "@/components/common/custom-progress.tsx";

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
        description="some description"
      />
      <CustomMultiSelect options={[{ value: '123', label: 'FE' }, { value: '456', label: 'BE' }, { value: '789', label: 'QA' }]} label="asdasdas" placeholder="найти спек" values={values} setValues={setValues} />
      <Button>123</Button>
      <CustomPasswordInput type="text" id="login" placeholder="login" label="Ваш логин" value={inputVal} onChange={handleChangeInput} />
      <CustomModal trigger={<Button>Open modal</Button>} title="Создать задачу" description="создать новую задачу">
        <div>контент модалки</div>
      </CustomModal>
      <CustomProgress progress={60} label="some label" percents="44" color="bg-teal-600" />
    </div>
  )
}

export default App
